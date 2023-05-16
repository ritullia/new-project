import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const BlogItem = ({ post }) => {
  const handleOnClick = () => {
    alert("You CLICKED on BUTTON");
  };

  const { title, description, image } = post;

  return (
    <>
      <Card
        style={{ width: "18rem", backgroundColor: "#aadfe6", padding: "8px" }}
      >
        <Card.Img
          style={{
            width: "16rem",
          }}
          variant="top"
          src={image}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{}}>{description}</Card.Text>
          <Button onClick={handleOnClick} variant="primary">
            Skaityti daugiau
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
