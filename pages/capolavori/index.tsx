import Head from "next/head";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "@lib/posts";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Layout from "@components/layout";
import PostCard from "@components/PostCard";
import { getTagsList } from "@lib/capolavori";
import Categories from "@components/Categories";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  const tagsList = getTagsList();
  return {
    props: {
      allPostsData,
      tagsList,
    },
  };
};

const useStyles = makeStyles((theme) => ({
  container: {},
  capolavori: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
}));

export default function Home({
  allPostsData,
  tagsList,
}: {
  allPostsData: Array<{ id: string; title: string; date: string }>;
  tagsList: any;
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
            <PostCard post={el} key={`capolavoro-${i}`} />
          ))}
        </div>
        <Categories tagsList={tagsList} />
      </Container>
    </Layout>
  );
}