import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export const NewBlog = () => {
  const [postsData, setPostsData] = useState({
    title: " ",
    description: " ",
    image: " ",
  });

  const navigate = useNavigate();
  console.log("SUBMIT'INAU", postsData);

  const onHandleSubmitForm = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/posts", postsData)
      .then((response) => {
        console.log("successful response", response.data);
        navigate("/posts");
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (event) => {
    setPostsData({
      ...postsData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Form
        onSubmit={onHandleSubmitForm}
        style={{
          maxWidth: "50%",
          margin: "140px auto",
          backgroundColor: "#b9e7ed",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <Row className="mb-3">
          <Form.Group>
            <Form.Label>Img Url</Form.Label>
            <Form.Control
              type="url"
              name="image"
              placeholder="Enter image url"
              onChange={handleOnChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Enter title"
              onChange={handleOnChange}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Text here</Form.Label>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Insert your text..."
          >
            <Form.Control
              as="textarea"
              name="description"
              placeholder="Leave a comment here"
              maxLength={1000}
              style={{ height: "100px" }}
              onChange={handleOnChange}
            />
          </FloatingLabel>
        </Form.Group>

        <Button variant="warning" type="submit" style={{ marginTop: "20px" }}>
          Add Post
        </Button>
      </Form>
    </>
  );
};
