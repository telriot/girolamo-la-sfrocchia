import Head from "next/head";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import NavbarTop from "../components/NavbarTop";
const useStyles = makeStyles((theme) => ({
  container: { padding: theme.spacing(4, 2) },
  headerDiv: { marginBottom: theme.spacing(12) },
  headerDivSm: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  header: { fontFamily: "Bebas Neue", cursor: "pointer" },
  subHeader: { padding: theme.spacing(0, 4, 6), fontWeight: 300 },
  main: { marginBottom: theme.spacing(4) },
}));

export const siteTitle = "Girolamo La Sfrocchia";

export default function Layout({
  children,
  home,
  navBottom,
}: {
  children: React.ReactNode;
  home?: boolean;
  navBottom?: boolean;
}) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Girolamo la Sfrocchia"
          content="Gli scritti di Girolamo la Sfrocchia, autore grandissimo e migliore di tutti"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Container maxWidth="md" className={classes.container}>
        {home ? (
          <>
            <header className={classes.headerDiv}>
              <Link href="/">
                <Typography
                  variant="h1"
                  align="center"
                  className={classes.header}
                >
                  Girolamo La Sfrocchia{" "}
                </Typography>
              </Link>

              <Typography
                variant="h6"
                align="center"
                className={classes.subHeader}
              >
                Autore grandissimo e migliore di tutti
              </Typography>
              <NavbarTop />
            </header>
            <div className={classes.main}>{children}</div>
            <NavbarTop small={true} />
          </>
        ) : (
          <>
            <header className={classes.headerDivSm}>
              <Link href="/">
                <Typography
                  variant="h1"
                  align="center"
                  className={classes.header}
                >
                  GRLMLSFRCCH
                </Typography>
              </Link>
              <NavbarTop small={true} />
            </header>
            <div className={classes.main}>{children}</div>
            {navBottom && <NavbarTop small={true} />}
          </>
        )}
      </Container>
    </div>
  );
}
