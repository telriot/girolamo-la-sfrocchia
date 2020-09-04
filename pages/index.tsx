import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { getSortedPostsData, getPostData, getAllPostIds } from "@lib/posts";
import MuiMarkdown from "@components/MuiToMarkdown";
import Layout, { siteTitle } from "@components/layout";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  const ids = getAllPostIds();
  const idsArr = ids.map((id) => id.params.id);
  const lastPost =
    allPostsData.length && (await getPostData(allPostsData[0].id));
  return {
    props: {
      lastPost,
      idsArr,
    },
  };
};

const useStyles = makeStyles((theme) => ({
  container: {},
}));

export default function Home({
  lastPost,
  idsArr,
}: {
  lastPost: {
    date: string;
    title: string;
    id: string;
    unprocessedContent: string;
  };
  idsArr: string[];
}) {
  const classes = useStyles();

  return (
    <Layout postIds={idsArr} home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container className={classes.container}>
        <MuiMarkdown>{lastPost.unprocessedContent}</MuiMarkdown>
      </Container>
    </Layout>
  );
}
