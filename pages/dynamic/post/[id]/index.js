import Header from "../../../../components/header";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const image =
  "https://dachverband-werder.de/wp-content/uploads/2021/12/public-awareness.jpg";

const Post = () => {
  const [post, setPost] = useState();

  const { query } = useRouter();

  useEffect(() => {
    if (!post) {
      fetch(`https://gorest.co.in/public/v2/posts/${query?.id}`)
        .then((resp) => resp.json())
        .then((p) => {
          setPost({ ...p });
        });
    }
  }, [query, post]);

  if (!post) return <></>;
  return (
    <>
      <Header />

      <Head>
        <title>{post?.title} | SEO-Test</title>

        <meta property="og:title" content={post?.title} />
        <meta property="og:description" content={post?.body} />
        <meta property="og:image" content={image} />

        <meta name="twitter:title" content={post?.title} />
        <meta name="twitter:description" content={post?.body} />
        <meta name="twitter:image" content={image} />
      </Head>

      <h1>Post: {query?.id}</h1>
      <h2>Title: {post?.title}</h2>
      <p>Body: {post?.body}</p>
    </>
  );
};

export default Post;
