import Link from "next/link";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Col,
} from "reactstrap";

const BlogItem = ({ item }) => {
  return (
    <>
      <Col md="4" sm="6">
        <Card className="m-2 text-center">
          <div className="blog_card"></div>
          <CardImg
            top
            width="100%"
            src={"download.jpeg"}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5" className="card_title">
              {item.title.substring(0, 60)}...
            </CardTitle>
            <CardText className="card_description">
              {item.body.substring(0, 100)}
            </CardText>
            <div className="text-center">
              <Link href={"/blog/" + item.id + '/' + item.title}>
                <a>
                  <Button className="btn-show">See More</Button>
                </a>
              </Link>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default BlogItem;
