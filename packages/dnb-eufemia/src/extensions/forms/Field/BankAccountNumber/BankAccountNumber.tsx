import React, { useContext, useMemo } from 'react'
import StringField, { Props as StringFieldProps } from '../String'
import SharedContext from '../../../../shared/Context'

export type Props = StringFieldProps & {
  validate?: boolean
  omitMask?: boolean
}

function BankAccountNumber(props: Props) {
  const sharedContext = useContext(SharedContext)
  const tr = sharedContext?.translation.Forms
  const { validate = true, omitMask } = props

  const errorMessages = useMemo(
    () => ({
      required: tr.bankAccountNumberErrorRequired,
      pattern: tr.bankAccountNumberErrorPattern,
      ...props.errorMessages,
    }),
    [tr, props.errorMessages]
  )
  const mask = useMemo(
    () =>
      omitMask
        ? [
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ]
        : [
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            ' ',
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
    className: 'dnb-forms-field-bank-account-number',
    pattern: props.pattern ?? (validate ? '^[0-9]{11}$' : undefined),
    label:
      props.label ??
      sharedContext?.translation.Forms.bankAccountNumberLabel,
    errorMessages,
    mask,
    width: props.width ?? 'medium',
    inputMode: 'numeric',
  }

  return <StringField {...StringFieldProps} />
}

BankAccountNumber._supportsSpacingProps = true
export default BankAccountNumber
