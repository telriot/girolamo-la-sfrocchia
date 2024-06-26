import React from "react";
import Link from "@material-ui/core/Link";
import { withStyles, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import ReactMarkdown from "markdown-to-jsx";
const styles = ({ breakpoints, spacing }: Theme) =>
	createStyles({
		body1: {
			fontWeight: 300,
			lineHeight: "1.875rem",
			fontSize: "1.25rem",
			[breakpoints.down("md")]: {
				fontSize: "1.125rem",
				lineHeight: "1.6875rem",
			},
			[breakpoints.down("sm")]: {
				fontSize: "1rem",
				lineHeight: "1.625rem",
			},
			[breakpoints.down("xs")]: {
				fontSize: ".9375rem",
				lineHeight: "1.4375rem",
			},
		},

		heading5: {
			margin: "1.5em 0 .5em",
		},
		caption: {
			fontWeight: 300,
			fontSize: ".75rem",
			verticalAlign: "20%",
			marginLeft: "3px",
			[breakpoints.down("sm")]: {
				fontSize: ".6875rem",
			},
			[breakpoints.down("xs")]: {
				fontSize: ".625rem",
			},
		},
		footnote: {},
		listItem: {
			marginTop: spacing(1),
			listStylePosition: "outside",
		},
		heading1: {
			fontFamily: "Bebas Neue",
			margin: "1.5em 0 .5em",
		},
		hr: {
			border: "none",
			borderTop: "1px solid rgb(200,200,200)",
			margin: "1.875em 0 1.25em",
			[breakpoints.down("md")]: {
				marginTop: "1.6875em",
			},
			[breakpoints.down("sm")]: {
				marginTop: "1.625em",
			},
			[breakpoints.down("xs")]: {
				marginTop: "1.4375em",
			},
		},
	});

const options = {
	overrides: {
		div: {
			component: withStyles(
				styles
			)(({ classes, ...props }: { classes: any }) => (
				<Typography
					classes={{ root: classes.footnote }}
					variant="caption"
					component="div"
					gutterBottom={true}
					{...props}
				/>
			)),
		},
		h1: {
			component: withStyles(
				styles
			)(({ classes, ...props }: { classes: any }) => (
				<Typography
					classes={{ root: classes.heading1 }}
					variant="h3"
					component="h2"
					gutterBottom={true}
					{...props}
				/>
			)),
		},
		h2: {
			component: withStyles(
				styles
			)(({ classes, ...props }: { classes: any }) => (
				<Typography
					classes={{ root: classes.heading5 }}
					variant="h3"
					component="h3"
					{...props}
				/>
			)),
		},
		h3: {
			component: Typography,
			props: { gutterBottom: true, variant: "h4", component: "h4" },
		},
		h4: {
			component: withStyles(
				styles
			)(({ classes, ...props }: { classes: any }) => (
				<Typography
					classes={{ root: classes.heading5 }}
					variant="h5"
					component="h5"
					{...props}
				/>
			)),
		},
		p: {
			component: withStyles(
				styles
			)(({ classes, ...props }: { classes: any }) => (
				<Typography
					classes={{ root: classes.body1 }}
					variant="body1"
					component="p"
					{...props}
				/>
			)),
		},
		a: { component: Link },
		ul: {
			component: withStyles(
				styles
			)(({ classes, ...props }: { classes: any }) => (
				<ul style={{ paddingLeft: "1.5em" }} {...props}></ul>
			)),
		},
		li: {
			component: withStyles(styles)(
				({ classes, ...props }: { classes: any }) => (
					<li className={classes.listItem}>
						<Typography
							classes={{ root: classes.body1 }}
							component="p"
							{...props}
						/>
					</li>
				)
			),
		},
		sup: {
			component: withStyles(
				styles
			)(({ classes, ...props }: { classes: any }) => (
				<Typography
					classes={{ root: classes.caption }}
					variant="caption"
					component="sup"
					{...props}
				/>
			)),
		},
		hr: {
			component: withStyles(
				styles
			)(({ classes, ...props }: { classes: any }) => (
				<hr className={classes.hr} />
			)),
		},
	},
};

export default function MuiMarkdown(props) {
	return <ReactMarkdown options={options} {...props} />;
}
