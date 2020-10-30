import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
let theme = createMuiTheme({
	typography: {
		fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
		h5: {
			fontWeight: 500,
		},
	},
	palette: {
		primary: {
			main: "#556cd6",
		},
		secondary: {
			main: "#19857b",
		},
		error: {
			main: red.A400,
		},
		background: {
			default: "#fff",
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 840,
			lg: 1280,
			xl: 1920,
		},
	},
});
theme = responsiveFontSizes(theme);

export default theme;
