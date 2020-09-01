import { makeStyles } from "@material-ui/core/styles";
import Link from "./Link";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import blue from "@material-ui/core/colors/blue";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  navDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  navDivSm: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },

  navLink: {
    fontFamily: "Bebas Neue",
    fontSize: theme.typography.h4.fontSize,
    color: theme.palette.text.primary,
    padding: theme.spacing(0.5, 0),
    "&:hover": {
      color: blue[700],
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
}: {
  small?: boolean;
  className?: string | object;
}) {
  const classes = useStyles();

  return (
    <Container
      className={clsx([small ? classes.navDivSm : classes.navDiv, className])}
      maxWidth="md"
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

      <Link
        underline="none"
        activeClassName={clsx([
          small ? classes.navLinkSm : classes.navLink,
          classes.activeLink,
        ])}
        className={small ? classes.navLinkSm : classes.navLink}
        href="/acaso"
      >
        Madonne A Caso
      </Link>
    </Container>
  );
}
