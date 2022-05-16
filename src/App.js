import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { articles } from "./articles";

export default function App() {
  let [firstArticle, article2, article3] = articles;
  let next4articles = articles.slice(3, 7);
  console.log(next4articles);
  return (
    <Container>
      <div className="wrapper py-2">
        <h2>Latest News</h2>
        <Row className="content">
          <Col className="mb-3" md={8}>
            <Row>
              <Col className="mb-3" lg={6}>
                <div
                  className="first-article h-100"
                  style={{ backgroundImage: `url(${firstArticle.urlToImage})` }}
                >
                  <h2 className="title">{firstArticle.title}</h2>
                  <div className="source">- {firstArticle.source.name}</div>
                </div>
              </Col>
              <Col className="mb-3" lg={6}>
                <div className="h-100 d-flex flex-column">
                  <Card className="mb-3">
                    <img
                      src={article2.urlToImage}
                      className="img-fluid"
                      alt=""
                    />
                    <CardBody>
                      <p className="title">{article2.title}</p>
                      <div className="source">- {article2.source.name}</div>
                    </CardBody>
                  </Card>
                  <Card style={{ flex: 1 }}>
                    <CardBody className="d-flex justify-content-center flex-column">
                      <p className="title">{article3.title}</p>
                      <div className="source">- {article3.source.name}</div>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            {next4articles.map((item, inx) => {
              return (
                <div className="border-bottom mb-3 py-1" key={inx}>
                  <h4>{item.title}</h4>
                  <div className="source">- {article3.source.name}</div>
                </div>
              );
            })}
          </Col>
        </Row>
      </div>
    </Container>
  );
}
