import Head from "next/head";
import Filter from "../components/Blog/Filter";
import BlogItem from "../components/Blog/BlogItem";
import { Row } from "reactstrap";
import blogs from "../utils/DB";
import { getAllBlogs } from "../store/blog/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const index = () => {
  const data = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);
  return (
    <div>
      <Head>
        <title>{data.blogs[0] && data.blogs[0].title}</title>
        <meta
          name="description"
          content={data.blogs[0] && data.blogs[0].body}
        />
        <meta property="og:title" content={data.blogs[0] && data.blogs[0].title} />
        <meta
          property="og:description"
          content={data.blogs[0] && data.blogs[0].body}
        />
      </Head>
      <div>
        <Filter />
        <Row>
          {data.blogs.map((item) => (
            <BlogItem item={item} key={item.id} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default index;
