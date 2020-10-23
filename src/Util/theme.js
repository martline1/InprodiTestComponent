import {
	createMuiTheme,
	responsiveFontSizes,
} from "@material-ui/core/styles";

import { esES } from "@material-ui/core/locale";

// Create a theme instance.
const theme = createMuiTheme({
	palette : {
		primary : {
			main : "#f50057",
		},
	},
	typography : {
		fontFamily : [
			"Roboto",
			"Montserrat",
			"-apple-system",
			"BlinkMacSystemFont",
			"'Segoe UI'",
			"'Helvetica Neue'",
			"Arial",
			"sans-serif",
			"'Apple Color Emoji'",
			"'Segoe UI Emoji'",
			"'Segoe UI Symbol'",
			"'Open Sans'",
		].join(","),
	},
}, esES);

export default responsiveFontSizes(theme);
