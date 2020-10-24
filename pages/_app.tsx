import { useEffect } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../styles/theme";
import Router from "next/router";
import * as gtag from "@lib/gtag";
import { isProduction } from "public/config";
import fontTheme from "@styles/font";

isProduction &&
	Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<>
			<style jsx global>
				{fontTheme}
			</style>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default App;
