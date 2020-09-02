import Head from "next/head";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "@lib/posts";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Layout from "@components/layout";
import PostCard from "@components/PostCard";
import { getTagsList, getPagesNumber } from "@lib/capolavori";
import Categories from "@components/Categories";
import Pagination from "@material-ui/lab/Pagination";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  const tagsList = getTagsList();
  const pages = getPagesNumber();
  return {
    props: {
      allPostsData,
      tagsList,
      pages: pages.length,
    },
  };
};

const useStyles = makeStyles((theme) => ({
  container: { display: "flex", flexDirection: "column" },
  capolavori: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  pagination: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      alignSelf: "center",
    },
  },
}));

export default function Home({
  allPostsData,
  tagsList,
  pages,
}: {
  allPostsData: Array<{ id: string; title: string; date: string }>;
  tagsList: any;
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
        <title>Capolavori</title>
      </Head>

      <Container className={classes.container} maxWidth="md">
        <div className={classes.capolavori}>
          {allPostsData.map((el, i) => (
            <PostCard post={el} key={`capolavoro-${i}`} />
          ))}
        </div>
        <Categories tagsList={tagsList} />
        {pages > 1 && (
          <Pagination
            className={classes.pagination}
            onChange={handlePageChange}
            defaultPage={1}
            count={pages}
          />
        )}
      </Container>
    </Layout>
  );
}
