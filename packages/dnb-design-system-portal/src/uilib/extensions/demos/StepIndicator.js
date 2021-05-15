/**
 * ATTENTION: This file is auto generated by using "makeDemosFactory".
 * Do not change the content!
 *
 * "Patterns" Demo setup
 * Ready for importing in page
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import ItemWrapper from '../../../shared/parts/uilib/ItemWrapper'
import DemoComponent, {
  Example as CodeComponent,
} from '@dnb/eufemia/src/extensions/step-indicator/Example'
import Description from '@dnb/eufemia/src/extensions/step-indicator/description.md'
import Details from '@dnb/eufemia/src/extensions/step-indicator/details.md'
import ExampleCode from 'raw-loader!../examples/StepIndicator.txt'

export default class StepIndicatorDemo extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    Description: PropTypes.func,
    Details: PropTypes.func,
    DemoComponent: PropTypes.func,
    CodeComponent: PropTypes.func,
    hideTabs: PropTypes.bool,
  }
  static defaultProps = {
    title: 'StepIndicator',
    id: 'step-indicator',
    ExampleCode,
    Description,
    Details,
    DemoComponent,
    CodeComponent,
    callback: CodeComponent.AdditionalCallback || null,
    hideTabs: false,
  }
  render() {
    return (
      <ItemWrapper {...StepIndicatorDemo.defaultProps} {...this.props} />
    )
  }
}
