import Header from "../components/header";

const Home = () => (
  <>
    <Header />

    <h1>Hello! </h1>
    <h2>
      On this project we used SSR, static and CSR technologies for testing
      OG/Twitter/SEO meta tags
    </h2>

    <h3>For checking use routes like:</h3>
    <ul>
      <li>SSR: /ssr/post/{"{post_id_here}"}</li>
      <li>CSR: /csr/post/{"{post_id_here}"}</li>
      <li>SSR: /static/post/{"{post_id_here}"}</li>
    </ul>

    <p>
      Hint: for static routes only available ids are: range between 1533-1556
    </p>
  </>
);

export default Home;
