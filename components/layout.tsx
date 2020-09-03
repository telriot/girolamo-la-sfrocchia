import Head from "next/head";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import NavbarTop from "@components/NavbarTop";
import Copyright from "./Copyright";
import { useRouter } from "next/router";

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
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 4, 3),
    },
  },
  main: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(6),
    },
  },
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

export const siteTitle = "Girolamo La Sfrocchia";

export default function Layout({
  children,
  home,
  navBottom,
  postIds,
}: {
  children: React.ReactNode;
  home?: boolean;
  navBottom?: boolean;
  postIds?: string[];
}) {
  const classes = useStyles();
  const router = useRouter();
  const handleRandomClick = () => {
    const randomRoute = postIds.length
      ? `/posts/${postIds[Math.floor(Math.random() * postIds.length)]}`
      : "/";
    router.push(randomRoute);
  };

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
                variant="h6"
                component="h2"
                align="center"
                className={classes.subHeader}
              >
                <em>Autore grandissimo e migliore di tutti</em>
              </Typography>
              <NavbarTop handleRandomClick={handleRandomClick} />
            </header>
            <div className={classes.main}>{children}</div>
            <footer className={classes.footer}>
              <Copyright />
              <NavbarTop handleRandomClick={handleRandomClick} small={true} />
            </footer>
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
              <NavbarTop handleRandomClick={handleRandomClick} small={true} />
            </header>
            <div className={classes.main}>{children}</div>

            <footer className={classes.footer}>
              <Copyright />
              <NavbarTop handleRandomClick={handleRandomClick} small={true} />
            </footer>
          </>
        )}
      </Container>
    </div>
  );
}
