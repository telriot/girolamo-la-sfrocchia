import Head from "next/head";
import { GetStaticProps } from "next";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { getSortedPostsData, getPostData, getAllPostIds } from "../lib/posts";
import Layout from "@components/layout";
import MuiMarkdown from "@components/MuiToMarkdown";

export const getStaticProps: GetStaticProps = async () => {
  const ids = await getAllPostIds();
  const idsArr = ids.map((id) => id.params.id);
  const allPostsData = await getSortedPostsData();
  const randomPost =
    allPostsData.length &&
    (await getPostData(
      allPostsData[Math.floor(Math.random() * allPostsData.length)].id
    ));
  return {
    props: {
      randomPost,
      idsArr,
    },
  };
};

const useStyles = makeStyles((theme) => ({
  container: {},
}));

export default function Home({
  randomPost,
  idsArr,
}: {
  randomPost: {
    date: string;
    title: string;
    id: string;
    unprocessedContent: string;
  };
  idsArr: string[];
}) {
  const classes = useStyles();
  return (
    <Layout postIds={idsArr}>
      <Head>
        <title>{`Roba a caso: ${randomPost.title}`}</title>
      </Head>
      <Container className={classes.container}>
        <MuiMarkdown>{randomPost.unprocessedContent}</MuiMarkdown>
      </Container>
    </Layout>
  );
}
