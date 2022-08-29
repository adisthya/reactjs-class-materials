import { Col, Row, Card } from "react-bootstrap";

const images = [
  'https://picsum.photos/id/1059/480/320',
  'https://picsum.photos/id/0/480/320',
  'https://picsum.photos/id/163/480/320',
  'https://picsum.photos/id/180/480/320'
];

export function BlogCard() {
  return (
    <Row as="section" className="mx-5 my-3">
      <Col xs="12">
        <h2 className="pb-2 mb-4 border-bottom border-5 border-danger d-inline-block">Blogs</h2>
      </Col>
      { images.map((image, index) => {
        const key = index + 1;
        return (
          <Col key={key} md="3" className="my-3">
            <Card>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>Blog Title {key}</Card.Title>
                <Card.Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod animi neque, atque iste natus repudiandae.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      }) }
    </Row>
  );
}
