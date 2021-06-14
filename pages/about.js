import Head from "next/head";
import { Row, Col, Card } from "reactstrap";

const About = () => {
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
      <div
        className="d-flex justify-content-center  align-items-center"
        style={{ height: "250px", backgroundImage: 'linear-gradient(#A68FE8, #5031A9)', color: "#fff" }}
      >
        <h1>
          CoderSavvy<br></br> #1 Blog flatform about coding
        </h1>
      </div>
      <h1 className="text-center my-5">About Us</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <Row className="m-3 text-center">
        <Col md="4" sm="6">
          <Card>
            <i style={{fontSize: '4rem'}} className="bx bx-calendar-star p-2"></i>
            <h2>
              <b>2021</b>
            </h2>
          </Card>
        </Col>
        <Col md="4" sm="6">
          <Card>
            <i style={{fontSize: '4rem'}} className="bx bxs-badge-dollar p-2"></i>
            <h2>
              <b>1.5M/YEAR</b>
            </h2>
          </Card>
        </Col>
        <Col md="4" sm="6">
          <Card>
            <i style={{fontSize: '4rem'}} className="bx bxs-book-alt p-2"></i>
            <h2>
              <b>200 Articles/DAY</b>
            </h2>
          </Card>
        </Col>
      </Row>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make
      </p>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

export default About;
