import { makeStyles } from "@material-ui/core/styles";
import NavbarTop from "@components/NavbarTop";
import Copyright from "./Copyright";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
}));
export default function Footer({ postIds }: { postIds: string[] }) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Copyright />
      <NavbarTop postIds={postIds} small={true} />
    </footer>
  );
}
