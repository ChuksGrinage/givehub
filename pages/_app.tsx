import React from 'react'
import { AppProps } from 'next/app';
import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';
import theme from 'Theme';

import './index.css'

function App({ Component, pageProps }: AppProps) {
	React.useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

  return (
		<>
    <Head>
        <title>.issashade</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
		</>
	)
}

export default App