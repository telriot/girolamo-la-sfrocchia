import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "@components/layout";
import Button from "@material-ui/core/Button";
import { isProduction, websiteAddress, localAddress } from "public/config";

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
  const handleTestApi = async () => {
    let randomPost = {};
    try {
      const res = await fetch(
        `${isProduction ? websiteAddress : localAddress}/api/acaso`
      );
      randomPost = await res.json();
    } catch (error) {
      console.log(error);
    }
    console.log({
      props: {
        randomPost,
      },
    });
    return {
      props: {
        randomPost,
      },
    };
  };
  const classes = useStyles();
  return (
    <Layout navBottom={true}>
      <Head>
        <title>test</title>
      </Head>
      <Button onClick={handleTestApi}>Test API</Button>
    </Layout>
  );
}
