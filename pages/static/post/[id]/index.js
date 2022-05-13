import Head from "next/head";

import Header from "../../../../components/header";

const image =
  "https://dachverband-werder.de/wp-content/uploads/2021/12/public-awareness.jpg";

export async function getStaticPaths() {
  let posts = await fetch("https://gorest.co.in/public/v2/posts").then((resp) =>
    resp.json()
  );

  posts = posts.map(({ id }) => {
    return { params: { id: String(id) } };
  });

  return {
    paths: posts,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  let post = await fetch(`https://gorest.co.in/public/v2/posts/${id}`)
    .then((resp) => resp.json())
    .catch((e) => e);

  return { props: { ...post } };
}

const Post = ({ id, title, body }) => {
  return (
    <>
      <Header />

      <Head>
        <title>{title} | SEO-Test</title>

        <meta property="og:title" content={title} />
        <meta property="og:description" content={body} />
        <meta property="og:image" content={image} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={body} />
        <meta name="twitter:image" content={image} />
      </Head>

      <h1>Post: {id}</h1>
      <h2>Title: {title}</h2>
      <p>Body: {body}</p>
    </>
  );
};

export default Post;
