import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export const NewBlog = () => {
  return (
    <>
      <Form
        style={{
          width: "600px",
          margin: "50px",
          backgroundColor: "#b9e7ed",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Img Url</Form.Label>
            <Form.Control type="url" placeholder="Enter image url" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="email" placeholder="Enter title" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Text here</Form.Label>
        </Form.Group>

        <FloatingLabel controlId="floatingTextarea2" label="Insert yor text...">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            maxLength={1000}
            style={{ height: "100px" }}
          />
        </FloatingLabel>

        <Button variant="primary" type="submit" style={{ marginTop: "20px" }}>
          Pateikti
        </Button>
      </Form>
    </>
  );
};
