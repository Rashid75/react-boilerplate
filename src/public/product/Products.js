import React from "react";
import { Transition, Card, Button, Placeholder, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <Transition.Group
      duration={2000}
      divided
      size="huge"
      verticalAlign="middle"
    >
      <Grid relaxed stackable columns={4}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((m, i) => {
          const x = i;
          return (
            <Grid.Column key={x}>
              <Card>
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>
                {/* <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" /> */}
                <Card.Content>
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length="very short" />
                      <Placeholder.Line length="very long" />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length="long" />
                    </Placeholder.Paragraph>
                  </Placeholder>
                  {/* <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className="date">
                  Battery For Nokia C2-01 Bl-5C 970-1020Mah
                </span>
              </Card.Meta>
              <Card.Description>RS. 1500</Card.Description> */}
                </Card.Content>
                <Card.Content extra>
                  <Button basic color="green">
                    <Link to="/product/1">View</Link>
                  </Button>
                  <Button basic color="red">
                    Add
                  </Button>
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </Transition.Group>
  );
};

export default Products;
