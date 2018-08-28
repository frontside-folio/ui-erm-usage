import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '@folio/stripes-components/lib/LayoutGrid';
import KeyValue from '@folio/stripes-components/lib/KeyValue';

const VendorInfo = ({ usageDataProvider }) => {
  return (
    <Row>
      <Col xs={3}>
        <KeyValue
          label="Aggregator"
          value="No"
        />
      </Col>
      <Col xs={3}>
        <KeyValue
          label="Service Type"
          value={_.get(usageDataProvider, 'serviceType', '')}
        />
      </Col>
      <Col xs={3}>
        <KeyValue
          label="Service Url"
          value={_.get(usageDataProvider, 'serviceUrl', '')}
        />
      </Col>
    </Row>);
};

VendorInfo.propTypes = {
  usageDataProvider: PropTypes.object.isRequired,
}

export default VendorInfo;
