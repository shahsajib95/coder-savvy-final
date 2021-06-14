import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import blogs from "../../utils/DB";

const BlogDetails = (props) => {
  const { title, img, description, author, createdAt } = props.blog;
  return (
    <div id="width" className="my-5">
      <Head>
        <title>{title}</title>
      </Head>
      <div className="text-center p-5">
        <Image
          src={`/${img}`}
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
              <u> {author}</u>
            </a>
          </Link>
        </h6>
        <h6>
          <i className="bx bx-calendar"></i> {createdAt}
        </h6>
      </div>
      {description.split("\n").map((text) => (
        <p>{text}</p>
      ))}
    </div>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const res = blogs.find((item) => item.id === id);
  return {
    props: {
      blog: res,
    }, // will be passed to the page component as props
  };
}

export default BlogDetails;
