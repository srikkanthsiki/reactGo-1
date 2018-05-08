import React, { Component } from 'react';
import Page from '../pages/Page';
import LogsContainer from '../containers/Logs';

class Logs extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Logs | Rundecklogs';
  };

  pageMeta = () => {
    return [
      { name: 'description', content: 'A reactGo example of a log page' }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <LogsContainer {...this.props} />
      </Page>
    );
  }
}

export default Logs;

