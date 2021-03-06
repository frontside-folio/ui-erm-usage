import _ from 'lodash';
import React from 'react';
import {
  injectIntl,
  FormattedMessage
} from 'react-intl';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import {
  Button
} from '@folio/stripes/components';

class FileUploader extends React.Component {
  static propTypes = {
    onSelectFile: PropTypes.func.isRequired,
    onClickUpload: PropTypes.func.isRequired,
    selectedFile: PropTypes.object,
    intl: PropTypes.object,
  }

  onDrop = (acceptedFiles) => {
    this.props.onSelectFile(acceptedFiles);
  }

  renderDownloadButton = () => {
    if (_.isEmpty(this.props.selectedFile)) {
      return null;
    } else {
      const upload = this.props.intl.formatMessage({ id: 'ui-erm-usage.report.upload.upload' });
      return (
        <Button
          aria-label={`Upload counter report file ${this.props.selectedFile.name}`}
          buttonStyle="primary"
          onClick={() => this.props.onClickUpload()}
        >
          {`${upload} ${this.props.selectedFile.name}`}
        </Button>
      );
    }
  }

  render() {
    const baseStyle = {
      'display': 'flex',
      'alignItems': 'center',
      'flexDirection': 'column',
      'justifyContent': 'center',
      'height': '100%',
      'borderWidth': '2',
      'borderColor': '#666',
      'borderStyle': 'dashed',
      'borderRadius': '5'
    };

    const style = { ...baseStyle };
    return (
      <Dropzone
        onDrop={this.onDrop}
        multiple={false}
      >
        {({ getRootProps, getInputProps, open }) => (
          <div {...getRootProps({ onClick: evt => evt.preventDefault() })}>
            <div style={style}>
              <input {...getInputProps()} />
              <FormattedMessage aria-label="Drop file for counter report upload" id="ui-erm-usage.report.upload.dropFile" />
              <Button
                aria-label="Or select file for counter report upload"
                buttonStyle="primary"
                onClick={() => open()}
              >
                <FormattedMessage id="ui-erm-usage.report.upload.selectFile" />
              </Button>
              {this.renderDownloadButton()}
            </div>
          </div>
        )}
      </Dropzone>
    );
  }
}

export default injectIntl(FileUploader);
