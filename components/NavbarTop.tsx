import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import blue from "@material-ui/core/colors/blue";
import Link from "@components/Link";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  navDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
    [theme.breakpoints.down(480)]: {
      alignItems: "center",
    },
  },
  navDivSm: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  randomDiv: {
    cursor: "pointer",
    "&:focus": { outline: "none", "& >*": { color: blue[700] } },
  },
  navLink: {
    fontFamily: "Bebas Neue",
    fontSize: theme.typography.h4.fontSize,
    color: theme.palette.text.primary,
    padding: theme.spacing(0.5, 0),
    "&:hover": {
      color: blue[700],
    },
    "&:focus": {
      outline: "none",
      color: blue[700],
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
  navLinkSm: {
    fontFamily: "Bebas Neue",
    fontSize: theme.typography.h5.fontSize,
    padding: theme.spacing(0, 0.75),
    color: theme.palette.text.primary,
    "&:hover": {
      color: blue[700],
    },
    "&:focus": {
      outline: "none",
      color: blue[700],
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  activeLink: {
    color: blue[700],
  },
  linkDiv: {},
}));

export default function NavbarTop({
  small,
  className,
  handleRandomClick,
}: {
  small?: boolean;
  className?: string | object;
  handleRandomClick: Function;
}) {
  const classes = useStyles();

  return (
    <div
      className={clsx([small ? classes.navDivSm : classes.navDiv, className])}
    >
      <Link
        underline="none"
        activeClassName={clsx([
          small ? classes.navLinkSm : classes.navLink,
          classes.activeLink,
        ])}
        className={small ? classes.navLinkSm : classes.navLink}
        href="/capolavori"
      >
        Capolavori
      </Link>
      <Link
        underline="none"
        activeClassName={clsx([
          small ? classes.navLinkSm : classes.navLink,
          classes.activeLink,
        ])}
        className={small ? classes.navLinkSm : classes.navLink}
        href="/telefoni"
      >
        Telefoni
      </Link>
      <div
        className={classes.randomDiv}
        tabIndex={0}
        onClick={() => handleRandomClick()}
      >
        <Typography className={small ? classes.navLinkSm : classes.navLink}>
          Madonne A Caso
        </Typography>
      </div>
    </div>
  );
}
