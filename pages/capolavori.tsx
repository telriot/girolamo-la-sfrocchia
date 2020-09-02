import Head from "next/head";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import Date from "../components/date";
import Link from "../components/Link";
import blue from "@material-ui/core/colors/blue";
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};

const useStyles = makeStyles((theme) => ({
  container: {},
  capolavori: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  title: { fontFamily: "Bebas Neue" },
  link: {
    color: theme.palette.text.primary,
    "&:hover": {
      "& $title": { color: blue[700] },
    },
  },
  card: {
    padding: theme.spacing(1, 0),
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  date: {},
}));

export default function Home({
  allPostsData,
}: {
  allPostsData: Array<{ id: string; title: string; date: string }>;
}) {
  const classes = useStyles();
  return (
    <Layout>
      <Head>
        <title>Capolavori</title>
      </Head>

      <Container className={classes.container} maxWidth="md">
        <div className={classes.capolavori}>
          {allPostsData.map((el, i) => (
            <Link
              className={classes.link}
              underline="none"
              href={`/posts/${el.id}`}
              key={`capolavoro-${i}`}
            >
              <div className={classes.card}>
                <Typography
                  className={classes.title}
                  align="center"
                  variant="h5"
                >
                  {el.title}
                </Typography>
                <Date className={classes.date} dateString={el.date} />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
