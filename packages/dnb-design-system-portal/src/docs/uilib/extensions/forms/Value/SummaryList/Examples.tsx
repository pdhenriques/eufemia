import ComponentBox from '../../../../../../shared/tags/ComponentBox'
import { Card } from '@dnb/eufemia/src'
import { Form, Value } from '@dnb/eufemia/src/extensions/forms'
import SummaryList from '@dnb/eufemia/src/extensions/forms/Value/SummaryList'

export const DefaultLayout = () => {
  return (
    <ComponentBox
      scope={{ Value, SummaryList }}
      data-visual-test="forms-value-summary-list-default"
    >
      <Form.Handler
        data={{
          firstName: 'John',
          lastName: 'Doe',
        }}
      >
        <Card stack>
          <Form.SubHeading>Subheading</Form.SubHeading>

          <Value.SummaryList>
            <Value.String label="First name" path="/firstName" />
            <Value.String label="Last name" path="/lastName" />
          </Value.SummaryList>
        </Card>
      </Form.Handler>
    </ComponentBox>
  )
}

export const GridLayout = () => {
  return (
    <ComponentBox
      scope={{ Value, SummaryList }}
      data-visual-test="forms-value-summary-list-grid"
    >
      <Form.Handler
        data={{
          firstName: 'John',
          lastName: 'Doe',
        }}
      >
        <Card stack>
          <Form.SubHeading>Subheading</Form.SubHeading>

          <Value.SummaryList layout="grid">
            <Value.String label="First name" path="/firstName" />
            <Value.String label="Last name" path="/lastName" />
          </Value.SummaryList>
        </Card>
      </Form.Handler>
    </ComponentBox>
  )
}

export const CombinedLayout = () => {
  return (
    <ComponentBox
      scope={{ Value, SummaryList }}
      data-visual-test="forms-value-summary-list-combined"
    >
      <Form.Handler
        data={{
          firstName: 'John',
          lastName: 'Doe',
          streetName: 'Osloveien',
          streetNr: 12,
          postalCode: '1234',
          city: 'Oslo',
        }}
      >
        <Card stack>
          <Form.SubHeading>Subheading</Form.SubHeading>

          <Value.SummaryList>
            <Value.String label="First name" path="/firstName" />
            <Value.String label="Last name" path="/lastName" />

            <Value.SummaryList layout="grid">
              <Value.String label="Street" path="/streetName" />
              <Value.Number label="Nr." path="/streetNr" />

              <Value.String label="Postalc." path="/postalCode" />
              <Value.String label="City" path="/city" />
            </Value.SummaryList>
          </Value.SummaryList>
        </Card>
      </Form.Handler>
    </ComponentBox>
  )
}
