import App from 'next/app';
import { Fragment } from 'react';

import { createGlobalStyle } from 'styled-components';

const GlabalStyle = createGlobalStyle`

* {
  padding:0;
  margin:0;

}

html  {
  @media (min-width: 2000px) {
    display:flex;
    flex-direction:column;
    align-items:center;
  }
}

`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        {' '}
        <GlabalStyle /> <Component {...pageProps} />{' '}
      </Fragment>
    );
  }
}

export default MyApp;
