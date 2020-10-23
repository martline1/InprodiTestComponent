/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import { useEffect }      from "react";
import Head               from "next/head";
import { ThemeProvider  } from "@material-ui/styles";
import { CssBaseline }    from "@material-ui/core";

// Import Own Components
import theme from "~/Util/theme";
import "~/global_styles.css";

const CustomApp = ({ Component, pageProps }) => {
	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");

		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	});

	return (
		<>
			<Head>
				<title>InprodiTest</title>
			</Head>

			<ThemeProvider theme={theme}>
				<CssBaseline />

				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default CustomApp;
