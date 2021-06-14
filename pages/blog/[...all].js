import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


const BlogDetails = (props) => {
  const { title, body } = props.blog;
  return (
    <div id="width" className="my-5">
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={body}
        />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={body}
        />
      </Head>
      <div className="text-center p-5">
        <Image
          src={`/download.jpeg`}
          alt="blogImg"
          height={250}
          width={1000}
          priority
        />
      </div>
      <h1>{title}</h1>
      <div className="d-flex justify-content-between p-2">
        <h6>
          by
          <Link href="/author">
            <a>
              <u> author</u>
            </a>
          </Link>
        </h6>
        <h6>
          <i className="bx bx-calendar"></i> createdAt
        </h6>
      </div>
      {body && body.split("\n").map((text) => (
        <p>{text}</p>
      ))}
    </div>
  );
};

export async function getServerSideProps (context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.query.all[0]}`)
  const data = await res.json()
  return {
    props: {
      blog: data,
    }, // will be passed to the page component as props
  };
}

export default BlogDetails;
