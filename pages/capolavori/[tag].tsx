import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { getPostsByTag, getTagsList } from "@lib/capolavori";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PostCard from "@components/PostCard";
import Layout from "@components/layout";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getTagsList();
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allPostsData = getPostsByTag(params.tag);
  return {
    props: {
      allPostsData,
      tag: params.tag,
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
  allPostsData,
  tag,
}: {
  allPostsData: Array<{
    title: string;
    date?: string;
  }>;
  tag: string;
}) {
  const classes = useStyles();

  return (
    <Layout>
      <Head>
        <title>{`#${tag}`}</title>
      </Head>
      <Typography className={classes.header} variant="h4">
        #{tag}
      </Typography>
      <div className={classes.postCardsDiv}>
        {allPostsData.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
      </div>
    </Layout>
  );
}
