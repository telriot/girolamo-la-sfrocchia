import Head from "next/head";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import NavbarTop from "@components/NavbarTop";
import Footer from "@components/Footer";
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4, 2),
    minHeight: "100vh",
    position: "relative",
  },
  headerDiv: {
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(6),
    },
  },
  headerDivSm: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  header: { fontFamily: "Bebas Neue", cursor: "pointer" },
  subHeader: {
    padding: theme.spacing(0, 4, 6),
    fontWeight: 300,
    fontStyle:"italic",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 4, 4),
    },
    [theme.breakpoints.down(420)]: {
      padding: theme.spacing(0, 8, 4),
    },
        [theme.breakpoints.down(340)]: {
      padding: theme.spacing(0, 6, 4),
    },
  },
  main: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(6),
    },
  },
}));

export const siteTitle = "Girolamo La Sfrocchia";

export default function Layout({
  children,
  home,
  postIds,
}: {
  children: React.ReactNode;
  home?: boolean;
  postIds?: string[];
}) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Tutti gli scritti di Girolamo la Sfrocchia, autore grandissimo e migliore di tutti"
        />
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
                variant="subtitle1"
                component="h2"
                align="center"
                className={classes.subHeader}
              >
                Autore grandissimo e migliore di tutti
              </Typography>
              <NavbarTop postIds={postIds} />
            </header>
            <div className={classes.main}>{children}</div>
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
              <NavbarTop postIds={postIds} small={true} />
            </header>
            <div className={classes.main}>{children}</div>
          </>
        )}
        <Footer postIds={postIds} />
      </Container>
    </div>
  );
}
