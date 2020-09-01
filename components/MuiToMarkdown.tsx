import React from "react";
import Link from "@material-ui/core/Link";
import ReactMarkdown from "markdown-to-jsx";
import { withStyles, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const styles = ({ spacing }: Theme) =>
  createStyles({
    body1: {
      fontWeight: 300,
      textAlign: "justify",
      textJustify: "inter-word",
    },
    listItem: {
      marginTop: spacing(1),
    },
    header1: {
      fontFamily: "Bebas Neue",
    },
  });

const options = {
  overrides: {
    div: {
      component: withStyles(
        styles
      )(({ classes, ...props }: { classes: any }) => (
        <Typography
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
          classes={{ root: classes.header1 }}
          variant="h3"
          component="p"
          gutterBottom={true}
          {...props}
        />
      )),
    },
    h2: { component: Typography, props: { gutterBottom: true, variant: "h4" } },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: "h5" },
    },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: "h6", paragraph: true },
    },
    p: {
      component: withStyles(
        styles
      )(({ classes, ...props }: { classes: any }) => (
        <Typography
          classes={{ root: classes.body1 }}
          variant="body1"
          component="p"
          paragraph
          {...props}
        />
      )),
    },
    a: { component: Link },
    li: {
      component: withStyles(styles)(
        ({ classes, ...props }: { classes: any }) => (
          <li className={classes.listItem}>
            <Typography component="p" {...props} />
          </li>
        )
      ),
    },
  },
};

export default function MuiMarkdown(props) {
  return <ReactMarkdown options={options} {...props} />;
}

MuiMarkdown.propTypes = {
  children: PropTypes.string,
};
