import React, { useContext, useMemo } from 'react'
import StringField, { Props as StringFieldProps } from '../String'

import SharedContext from '../../../../shared/Context'

export type Props = StringFieldProps & {
  omitMask?: boolean
  validate?: boolean
}

function NationalIdentityNumber(props: Props) {
  const sharedContext = useContext(SharedContext)
  const tr = sharedContext?.translation.Forms
  const errorMessage = tr.nationalIdentityNumberErrorRequired

  const { validate = true, omitMask } = props

  const errorMessages = useMemo(
    () => ({
      required: errorMessage,
      pattern: errorMessage,
      ...props.errorMessages,
    }),
    [errorMessage, props.errorMessages]
  )
  const mask = useMemo(
    () =>
      omitMask
        ? Array(11).fill(/\d/)
        : [
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ],
    [omitMask]
  )

  const StringFieldProps: Props = {
    ...props,
    pattern:
      props.pattern ??
      (validate && !props.validator ? '^[0-9]{11}$' : undefined),
    label:
      props.label ??
      sharedContext?.translation.Forms.nationalIdentityNumberLabel,
    errorMessages,
    mask,
    width: props.width ?? 'medium',
    inputMode: 'numeric',
  }

  return <StringField {...StringFieldProps} />
}

NationalIdentityNumber._supportsSpacingProps = true
export default NationalIdentityNumber
