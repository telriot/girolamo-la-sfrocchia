import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData, getPostData } from "../lib/posts";
import { GetStaticProps } from "next";
import { makeStyles } from "@material-ui/core/styles";
import MuiMarkdown from "../components/MuiToMarkdown";
import Container from "@material-ui/core/Container";
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  const lastPost =
    allPostsData.length && (await getPostData(allPostsData[0].id));
  return {
    props: {
      lastPost,
    },
  };
};

const useStyles = makeStyles((theme) => ({
  container: {},
}));

export default function Home({
  lastPost,
}: {
  lastPost: {
    date: string;
    title: string;
    id: string;
    //contentHtml: string;
    unprocessedContent: string;
  };
}) {
  const classes = useStyles();
  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Container className={classes.container}>
        <MuiMarkdown>{lastPost.unprocessedContent}</MuiMarkdown>
      </Container>
    </Layout>
  );
}
