import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box>
        <Typography variant="h1">Girolamo La Sfrocchia</Typography>
      </Box>
    </Layout>
  );
}
