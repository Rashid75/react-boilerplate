import React from "react";
import { Grid, Placeholder } from "semantic-ui-react";

const Product = () => {
  return (
    <Grid divided columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Placeholder>
            <Placeholder.Image rectangular />
          </Placeholder>
        </Grid.Column>
        <Grid.Column>
          <Placeholder>
            <Placeholder.Header>
              <Placeholder.Line length="very short" />
              <Placeholder.Line length="very long" />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line length="long" />
              <Placeholder.Line length="long" />
              <Placeholder.Line length="long" />
              <Placeholder.Line length="long" />
              <Placeholder.Line length="long" />
            </Placeholder.Paragraph>
          </Placeholder>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Product;
