import React from "react";
import { Container, Segment, Grid } from "semantic-ui-react";
import { Route, Redirect, Switch } from "react-router-dom";
import SiderBar from "../common/Sidebar";
import HeaderPage from "../common/Header";
import Dashboard from "../dashboard/Dashboard";
import Category from "../category/CategoryContainer";
import Setting from "../setting/Setting";
import Product from "../product/ProductContainer";

const HomePage = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Container>
        <HeaderPage />
        <br />
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column only="computer" computer={4}>
              <SiderBar />
            </Grid.Column>
            <Grid.Column computer={12} tablet={16} widescreen={14}>
              <Segment color="green">
                <Switch>
                  <Route path="/admin/dashboard" exact component={Dashboard} />
                  <Route path="/admin/category" component={Category} />
                  <Route path="/admin/product" component={Product} />
                  <Route path="/admin/setting" component={Setting} />
                  <Redirect from="/admin" to="/admin/dashboard" />
                </Switch>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
