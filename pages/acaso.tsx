import Head from "next/head";
import { GetServerSideProps } from "next";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Layout from "@components/layout";
import MuiMarkdown from "@components/MuiToMarkdown";
import { isProduction, websiteAddress, localAddress } from "public/config";

export const getServerSideProps: GetServerSideProps = async () => {
  let randomPost = {};
  try {
    const res = await fetch(
      `${isProduction ? websiteAddress : localAddress}/api/acaso`
    );
    randomPost = await res.json();
  } catch (error) {
    console.log(error);
  }
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
        <title>{`Roba a caso: ${randomPost.title}`}</title>
      </Head>
      <Container className={classes.container}>
        <MuiMarkdown>{randomPost.unprocessedContent}</MuiMarkdown>
      </Container>
    </Layout>
  );
}
