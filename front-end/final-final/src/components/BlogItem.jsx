import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const BlogItem = () => {
  const handleOnClick = () => {
    alert("You CLICKED on BUTTON");
  };

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
          src="https://thumbs.dreamstime.com/b/ready-summer-vacation-travel-background-d-rendering-114574299.jpg"
        />
        <Card.Body>
          <Card.Title>Kaip pasiruošti atostogoms?</Card.Title>
          <Card.Text style={{}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content...
          </Card.Text>
          <Button onClick={handleOnClick} variant="primary">
            Skaityti daugiau
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
