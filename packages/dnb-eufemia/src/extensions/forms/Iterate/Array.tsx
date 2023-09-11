import React, { useMemo, useCallback } from 'react'
import FlexContainer, {
  Props as FlexContainerProps,
} from '../Layout/FlexContainer'
import classnames from 'classnames'
import pointer from 'json-pointer'
import { forwardSpaceProps } from '../utils'
import IterateElementContext from './IterateElementContext'
import FieldBlock from '../FieldBlock'
import { useDataValue } from '../hooks'
import type { FieldProps, FieldHelpProps } from '../types'

interface ErrorMessages {
  required?: string
  schema?: string
}

export type Props = FieldHelpProps &
  FieldProps<unknown[], undefined, ErrorMessages> & {
    width?: false | 'small' | 'medium' | 'large' | 'stretch'
    spacing?: FlexContainerProps['spacing']
    children:
      | React.ReactNode
      | ((value: unknown, index: number) => React.ReactNode)
      | Array<
          | React.ReactNode
          | ((value: unknown, index: number) => React.ReactNode)
        >
  }

function ArrayComponent(props: Props) {
  const {
    id,
    className,
    layout = 'vertical',
    placeholder,
    label,
    labelDescription,
    labelSecondary,
    path,
    value: arrayValue,
    info,
    warning,
    error,
    emptyValue,
    width,
    spacing = 'small',
    handleChange,
    children,
  } = useDataValue(props)

  const elementData: {
    elementValue: unknown
    handleElementChange: (path: string, value: unknown) => void
    handleRemoveElement: () => void
  }[] = useMemo(() => {
    return (arrayValue ?? []).map((elementValue, elementIndex) => ({
      elementValue,
      handleElementChange: (path, value) => {
        const newArrayValue = structuredClone(arrayValue)
        pointer.set(newArrayValue, path, value)
        handleChange?.(newArrayValue)
      },
      handleRemoveElement: () => {
        const newArrayValue = structuredClone(arrayValue)
        newArrayValue.splice(elementIndex, 1)
        handleChange?.(newArrayValue)
      },
    }))
  }, [arrayValue, handleChange])

  const handlePush = useCallback(
    (element: unknown) => {
      handleChange([...(arrayValue ?? []), element])
    },
    [arrayValue, handleChange],
  )

  return (
    <FieldBlock
      className={classnames('dnb-forms-field-number', className)}
      forId={id}
      layout={layout}
      label={label}
      labelDescription={labelDescription}
      labelSecondary={labelSecondary}
      info={info}
      warning={warning}
      error={error}
      contentsWidth={width !== false ? width : undefined}
      {...forwardSpaceProps(props)}
    >
      <FlexContainer
        direction={layout === 'horizontal' ? 'row' : 'column'}
        spacing={spacing}
      >
        {arrayValue === emptyValue ? (
          <em>{placeholder}</em>
        ) : (
          elementData.map(
            (
              { elementValue, handleElementChange, handleRemoveElement },
              elementIndex,
            ) => {
              return (
                <IterateElementContext.Provider
                  key={`element-${elementIndex}`}
                  value={{
                    index: elementIndex,
                    value: elementValue,
                    path,
                    handleChange: handleElementChange,
                    handleRemove: handleRemoveElement,
                    handlePush,
                  }}
                >
                  {Array.isArray(children)
                    ? children.map((childElement) =>
                        typeof childElement === 'function'
                          ? childElement(elementValue, elementIndex)
                          : childElement,
                      )
                    : typeof children === 'function'
                    ? children(elementValue, elementIndex)
                    : children}
                </IterateElementContext.Provider>
              )
            },
          )
        )}
      </FlexContainer>
    </FieldBlock>
  )
}

ArrayComponent._supportsEufemiaSpacingProps = true
export default ArrayComponent
