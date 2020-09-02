import Head from "next/head";
import { useRouter } from "next/router";

import { GetStaticProps, GetStaticPaths } from "next";
import { getPagesNumber, getPaginatedPosts } from "@lib/capolavori";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import PostCard from "@components/PostCard";
import Layout from "@components/layout";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPagesNumber();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const paginatedPostsData = getPaginatedPosts(params.page);
  3;
  const pages = await getPagesNumber();
  return {
    props: {
      paginatedPostsData,
      page: params.page,
      pages: pages.length,
    },
  };
};

const useStyles = makeStyles((theme) => ({
  container: {},
  header: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: { textAlign: "center" },
  },
  postCardsDiv: {
    marginBottom: theme.spacing(4),
  },
}));

export default function Post({
  paginatedPostsData,
  page,
  pages,
}: {
  paginatedPostsData: Array<{
    title: string;
    date?: string;
  }>;
  page: string;
  pages: number;
}) {
  const classes = useStyles();
  const router = useRouter();
  const handlePageChange = (_, value) => {
    value === 1
      ? router.push(`/capolavori`)
      : router.push(`/capolavori/readmore/${value}`);
  };
  return (
    <Layout>
      <Head>
        <title>{`Robivecchi ${page}`}</title>
      </Head>
      <div className={classes.postCardsDiv}>
        {paginatedPostsData.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
      </div>
      <Pagination
        onChange={handlePageChange}
        defaultPage={~~page}
        count={pages}
      />
    </Layout>
  );
}
