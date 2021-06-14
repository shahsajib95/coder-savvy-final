import Head from "next/head";
import Filter from "../components/Blog/Filter";
import BlogItem from "../components/Blog/BlogItem";
import Preloader from "../components/Preloader/Preloader";
import { Row } from "reactstrap";
import { getAllBlogs } from "../store/blog/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const index = () => {
  const { blogs, loading, error } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);
  return (
    <div>
      <Head>
        <title>CoderSavvy</title>
        <meta name="description" content="#1 Blog flatform about coding" />
        <meta property="og:title" content="CoderSavvy" />
        <meta
          property="og:description"
          content="#1 Blog flatform about coding"
        />
      </Head>

      <div>
        <Filter />
        {error && <h1 className="p-5">{error}</h1>}
        {!blogs && <h1 className="p-5 text-center">No Blogs Found</h1>}
        {loading ? (
          <Preloader />
        ) : (
          <Row>
            {blogs.map((item) => (
              <BlogItem item={item} key={item.id} />
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default index;
