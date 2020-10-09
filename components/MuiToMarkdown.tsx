import React from "react";
import Link from "@material-ui/core/Link";
import { withStyles, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import ReactMarkdown from "markdown-to-jsx";

const styles = ({ spacing }: Theme) =>
  createStyles({
    body1: {
      fontWeight: 300,
      lineHeight:"1.8125rem"
      //textAlign: "justify",
      //textJustify: "inter-word",
    },
    caption:{
      fontWeight:300,
      fontSize: ".75rem"
    },
    footnote:{
      
    },
    listItem: {
      marginTop: spacing(1),
    },
    header1: {
      fontFamily: "Bebas Neue",
    },
    hr:{
      border:"none",
      borderTop:"1px solid rgb(200,200,200)",
      marginBottom:".5rem",
    }
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
            <Typography
              classes={{ root: classes.body1 }}
              component="p"
              {...props}
            />
          </li>
        )
      ),
    },
    sup:{
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
    hr:{
      component: withStyles(
        styles
      )(({ classes, ...props }: { classes: any }) => (
<hr className={classes.hr}/>
      )),
    }
  },
};

export default function MuiMarkdown(props) {
  return <ReactMarkdown options={options} {...props} />;
}
