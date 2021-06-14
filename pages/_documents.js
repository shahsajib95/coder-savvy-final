import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="shahsajib eCommerce next js project"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://kit.fontawesome.com/a076d05399.js"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
            crossorigin="anonymous"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
