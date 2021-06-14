import Filter from "../components/Blog/Filter";
import BlogItem from "../components/Blog/BlogItem";
import Meta from "../components/Meta";
import { Row } from "reactstrap";
import blogs from "../utils/DB";
import { getAllBlogs } from "../store/blog/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData } from "../utils/api-client";

const index = (props) => {
  const data = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);
  return (
    <div>
      <div>
        <Meta
          title={data.blogs[0] && data.blogs[0].title}
          body={data.blogs[0] && data.blogs[0].body}
        />
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
