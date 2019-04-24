import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import {
  FormattedMessage
} from 'react-intl';
import {
  Col,
  Row,
  TextField
} from '@folio/stripes/components';
import {
  required
} from '../../../util/Validate';

class SushiCredentialsForm extends React.Component {
  static propTypes = {
    selectedHarvestVia: PropTypes.string
  };

  getCustomerIdDependingOnSelection = (selectedHarvestVia) => {
    if (selectedHarvestVia === 'aggregator') {
      return (
        <React.Fragment>
          <Field
            label={
              <FormattedMessage id="ui-erm-usage.sushiCreds.customerId">
                {(msg) => msg}
              </FormattedMessage>
            }
            name="sushiCredentials.customerId"
            id="addudp_customerid"
            placeholder="Enter the SUSHI customer ID"
            component={TextField}
            fullWidth
          />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Field
            label={
              <FormattedMessage id="ui-erm-usage.sushiCreds.customerId">
                {(msg) => msg + ' *'}
              </FormattedMessage>
            }
            name="sushiCredentials.customerId"
            id="addudp_customerid"
            placeholder="Enter the SUSHI customer ID"
            component={TextField}
            validate={[required]}
            fullWidth
          />
        </React.Fragment>
      );
    }
  };

  render() {
    const selectedHarvestVia = this.props.selectedHarvestVia;

    return (
      <React.Fragment>
        <Row>
          <Col xs={4}>
            {this.getCustomerIdDependingOnSelection(selectedHarvestVia)}
            {/* <Field
              label={
                <FormattedMessage id="ui-erm-usage.sushiCreds.customerId">
                  {(msg) => msg + ' *'}
                </FormattedMessage>
              }
              name="sushiCredentials.customerId"
              id="addudp_customerid"
              placeholder="Enter the SUSHI customer ID"
              component={TextField}
              validate={[required]}
              fullWidth
            /> */}
          </Col>
          <Col xs={4}>
            <Field
              label={
                <FormattedMessage id="ui-erm-usage.sushiCreds.requestorId">
                  {(msg) => msg + ' *'}
                </FormattedMessage>
              }
              name="sushiCredentials.requestorId"
              id="addudp_requestorid"
              placeholder="Enter the SUSHI requestor ID"
              component={TextField}
              validate={[required]}
              fullWidth
            />
          </Col>
          <Col xs={4}>
            <Field
              label={<FormattedMessage id="ui-erm-usage.sushiCreds.apiKey" />}
              name="sushiCredentials.apiKey"
              id="addudp_apikey"
              placeholder="Enter the SUSHI API key"
              component={TextField}
              fullWidth
            />
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Field
              label={<FormattedMessage id="ui-erm-usage.sushiCreds.requestorName" />}
              name="sushiCredentials.requestorName"
              id="addudp_reqname"
              placeholder="Enter the SUSHI requestor name"
              component={TextField}
              fullWidth
            />
          </Col>
          <Col xs={8}>
            <Field
              label={<FormattedMessage id="ui-erm-usage.sushiCreds.requestorMail" />}
              name="sushiCredentials.requestorMail"
              id="addudp_requestormail"
              placeholder="Enter the SUSHI requestor mail"
              component={TextField}
              fullWidth
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default SushiCredentialsForm;
