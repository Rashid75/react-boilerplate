import React from "react";
import {
  Divider,
  Container,
  Grid,
  Segment,
  Pagination,
  Search
} from "semantic-ui-react";
import { Route, Redirect } from "react-router-dom";
import Products from "../product/Products";
import Categories from "../common/Categories";
import MyCart from "../cart/cart";
import Product from "../product/Product";
import HeaderPage from "../common/Header";

const HomePage = () => {
  return (
    <Container fluid>
      <HeaderPage />
      <Grid container>
        <Grid.Row>
          <Grid.Column>
            <Segment color="green">
              <Grid padded="vertically" textAlign="center" columns="equal">
                <Grid.Row>
                  <Grid.Column mobile={16} floated="left" computer={4}>
                    <Search />
                  </Grid.Column>
                  <Grid.Column only="computer">
                    <h3>New Arrival</h3>
                  </Grid.Column>
                  <Grid.Column only="computer" floated="right" computer={4}>
                    <Pagination
                      defaultActivePage={1}
                      firstItem={null}
                      lastItem={null}
                      pointing
                      secondary
                      totalPages={3}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid container columns="equal" centered>
        <Grid.Column only="computer" computer={4}>
          <Categories />
        </Grid.Column>
        <Grid.Column computer={12} mobile={16} tablet={16}>
          <Redirect from="/" to="products" />
          <Route path="/products" component={Products} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart" component={MyCart} />
        </Grid.Column>
        <Divider />
      </Grid>
    </Container>
  );
};

export default HomePage;
