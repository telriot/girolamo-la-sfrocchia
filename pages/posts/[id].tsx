import Head from "next/head";
import { getAllPostIds, getPostData } from "@lib/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "@components/layout";
import MuiMarkdown from "@components/MuiToMarkdown";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date?: string;
    unprocessedContent?: string;
  };
}) {
  return (
    <Layout navBottom={true}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <MuiMarkdown>{postData.unprocessedContent}</MuiMarkdown>
    </Layout>
  );
}
