import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../../../components/header";

const title = "title";
const description = "desctiption";
const image =
  "https://dachverband-werder.de/wp-content/uploads/2021/12/public-awareness.jpg";

const Comment = () => {
  const router = useRouter();
  const { id, comment } = router.query;

  return (
    <>
      <Header />

      <Head>
        <title>{title} | goodbuy</title>

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <h1>Post: {id}</h1>
      <h1>Comment: {comment}</h1>
    </>
  );
};

export default Comment;
