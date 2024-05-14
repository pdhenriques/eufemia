/**
 * Web Logo Component
 */

import React, { useContext } from 'react'
import classnames from 'classnames'
import Context from '../../shared/Context'
import {
  validateDOMAttributes,
  extendPropsWithContext,
} from '../../shared/component-helper'
import { createSpacingClasses } from '../space/SpacingHelper'

import type { IconColor } from '../Icon'
import type { SpacingProps } from '../space/types'
import { convertSnakeCaseProps } from '../../shared/helpers/withSnakeCaseProps'
import { LogoType } from './utiils'
import LogoSvg from './LogoSvg'

export type LogoSize = number | string
export type LogoRatio = number | string
export type LogoWidth = number | string
export type LogoHeight = number | string
export type LogoVariant = 'default' | 'compact' | 'compactHorizontal'

export type LogoProps = {
  /**
   * Define the size of the logo. Sets the height. The width will be calculated by the ratio. Also, `inherit` will use the inherited height. Defaults to `auto`.
   */
  size?: LogoSize
  // Q: Remove from component props? only used internaly and is overwritten when sbanken theme
  ratio?: LogoRatio
  /**
   * Define either the width of the logo.
   */
  width?: LogoWidth
  /**
   * Or define the height of the logo.
   */
  height?: LogoHeight
  // Q: Remove from component props? only used internaly and is overwritten when sbanken theme
  alt?: string
  /**
   * Define the color of the logo.
   */
  color?: IconColor
  /**
   * Define which brands logo to show. `ui` (DNB) or `sbanken`. Defaults to `ui`.
   */
  brand?: string
  /**
   * Define the logo variant, if there is more than one variant of a brands logo. Currently the only option other than default is a `compact` variant of the Sbanken logo. Defaults to `default`.
   */
  variant?: LogoVariant
  /**
   * Set to `true` if you do not want to inherit the color by `currentColor`. Defaults to `false`.
   */
  inheritColor?: boolean
  class?: string
  className?: string
} & SpacingProps &
  Omit<React.HTMLProps<HTMLElement>, 'ref' | 'size'> &
  DeprecatedLogoProps

// Changes for v11:
// - remove string support for the following props: ratio, width, height
// - remove the following props: alt, ratio. These props should not be overwritten
// - replace inherit_color with inheritColor
type DeprecatedLogoProps = {
  /** @deprecated Will be removed in eufemia v11 */
  alt?: string
  /** @deprecated Will be removed in eufemia v11 */
  ratio?: LogoRatio
  /** @deprecated Use 'inheritColor' */
  inherit_color?: boolean
}

const defaultProps: LogoProps = {
  size: 'auto',
  ratio: 1.453690625,
  variant: 'default',
}

const defaultRatio = {
  [LogoType.Dnb]: 1.453690625,
  [LogoType.SbankenDefault]: 2.72027972027972,
  [LogoType.SbankenCompact]: 0.70074812967581,
  [LogoType.SbankenHorizontal]: 1.715277777777778,
}

/**
 * TODO:
 * optimize svgs
 */
function Logo(localProps: LogoProps) {
  const context = useContext(Context)

  // Two diffrent translations for sbanken and dnb
  const translations = context.getTranslation(localProps).Logo

  const props = extendPropsWithContext(
    convertSnakeCaseProps(localProps),
    defaultProps,
    context.Logo
  )

  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    alt,
    size,
    width,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ratio: _ratio,
    height,
    brand: _brand,
    variant,
    color,
    inheritColor,
    className,
    class: _className,
    ...rest
  } = convertDimentionalPropsToString(props)

  let brand = _brand

  if (brand == null && context.theme) {
    // Attempt to get theme from context
    brand = context.theme.name
  }

  let logoType = LogoType.Dnb

  if (brand === 'sbanken') {
    if (variant === 'compact') {
      logoType = LogoType.SbankenCompact
    } else if (variant === 'compactHorizontal') {
      logoType = LogoType.SbankenHorizontal
    } else {
      logoType = LogoType.SbankenDefault
    }
  }

  const ratio = defaultRatio[logoType]

  // const { width, height } =
  //   getCalculatedDimentions(_width, _height, String(ratio), size)

  const rootParams = {
    role: 'img',
    ['data-ratio']: ratio,
    ['aria-hidden']: true,
    className:
      logoType === LogoType.Dnb
        ? classnames(
            'dnb-logo',
            className,
            _className,
            createSpacingClasses(props),
            (parseFloat(width) > 0 || parseFloat(height) > 0) &&
              'dnb-logo--has-size',
            size == 'inherit' && 'dnb-logo--inherit-size',
            inheritColor && 'dnb-logo--inherit-color'
          )
        : classnames(
            'sbanken-logo',
            className,
            _className,
            createSpacingClasses(props),
            (parseFloat(width) > 0 || parseFloat(height) > 0) &&
              'sbanken-logo--has-size',
            size == 'inherit' && 'sbanken-logo--inherit-size',
            inheritColor && 'sbanken-logo--inherit-color'
          ),

    alt: getAlt(),
    ...rest,
  }

  const svgParams = {
    width,
    height,
    color,
    alt: getAlt(),
  }

  validateDOMAttributes(props, rootParams)

  return (
    <span {...rootParams}>
      <LogoSvg logoType={logoType} svgParams={svgParams} />
    </span>
  )

  /**
   * Return dnb or sBanken alt based on the current theme
   */
  function getAlt() {
    return logoType === LogoType.Dnb
      ? translations.alt
      : translations.sbankenAlt
  }
}

function convertDimentionalPropsToString(allProps: LogoProps) {
  return {
    ...allProps,
    size: handleTypeToString(allProps.size),
    ratio: handleTypeToString(allProps.ratio),
    width: handleTypeToString(allProps.width),
    height: handleTypeToString(allProps.height),
  }
}

function handleTypeToString(val: number | string) {
  return val ? String(val) : undefined
}

// function handleTypeToNumber(val: string) {
//   return isNaN(parseFloat(val)) ? undefined : parseFloat(val)
// }

/**
 * Calculates height and width based on the
 */
// function getCalculatedDimentions(
//   _width: string,
//   _height: string,
//   _ratio: string,
//   size: string
// ): { width?: string; height?: string } {
//   console.log(
//     '_width',
//     _width,
//     '_height',
//     _height,
//     '_ratio',
//     _ratio,
//     'size',
//     size
//   )

//   let width = handleTypeToNumber(_width)
//   let height = handleTypeToNumber(_height)
//   const ratio = parseFloat(_ratio)

//   if (parseFloat(size) > -1 && !_width && !_height) {
//     width = parseFloat(size) * ratio
//     height = width / ratio
//   } else if (parseFloat(_width) > -1 && height === null) {
//     height = width / ratio
//   } else if (parseFloat(_height) > -1 && width === null) {
//     width = height * ratio
//   }

//   return { width: String(width), height: String(height) }
// }

export default Logo
