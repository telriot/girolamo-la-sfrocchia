import Head from "next/head";
import { GetServerSideProps } from "next";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { getSortedPostsData, getPostData } from "../lib/posts";
import Layout from "@components/layout";
import MuiMarkdown from "@components/MuiToMarkdown";

export const getServerSideProps: GetServerSideProps = async () => {
  const allPostsData = await getSortedPostsData();
  const randomPost =
    allPostsData.length &&
    (await getPostData(
      allPostsData[Math.floor(Math.random() * allPostsData.length)].id
    ));
  return {
    props: {
      randomPost,
    },
  };
};

const useStyles = makeStyles((theme) => ({
  container: {},
}));

export default function Home({
  randomPost,
}: {
  randomPost: {
    date: string;
    title: string;
    id: string;
    unprocessedContent: string;
  };
}) {
  const classes = useStyles();
  return (
    <Layout navBottom={true}>
      <Head>
        <title>Roba a caso</title>
      </Head>
      <Container className={classes.container}>
        <MuiMarkdown>{randomPost.unprocessedContent}</MuiMarkdown>
      </Container>
    </Layout>
  );
}
