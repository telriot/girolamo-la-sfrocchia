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
  const ids = getAllPostIds();
  const idsArr = ids.map((id) => id.params.id);
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
      idsArr,
    },
  };
};

export default function Post({
  postData,
  idsArr,
}: {
  postData: {
    title: string;
    date?: string;
    unprocessedContent?: string;
  };
  idsArr: string[];
}) {
  return (
    <Layout postIds={idsArr}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <MuiMarkdown>{postData.unprocessedContent}</MuiMarkdown>
    </Layout>
  );
}
