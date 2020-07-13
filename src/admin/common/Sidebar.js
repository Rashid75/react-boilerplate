import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const SiderBar = ({ match, location }) => {
  return (
    <Menu pointing vertical>
      <Menu.Item>
        <Menu.Header>Shopping App</Menu.Header>
      </Menu.Item>
      <Menu.Item
        active={location.pathname === `${match.url}/dashboard`}
        as={NavLink}
        name="Home"
        to={`${match.url}/dashboard`}
      />
      <Menu.Item
        active={location.pathname === `${match.url}/category`}
        as={NavLink}
        name="Category"
        to={`${match.url}/category`}
      />
      <Menu.Item
        active={location.pathname === `${match.url}/product`}
        as={NavLink}
        name="Product"
        to={`${match.url}/product`}
      />
      <Menu.Item
        active={location.pathname === `${match.url}/setting`}
        as={NavLink}
        name="Setting"
        to={`${match.url}/setting`}
      />
    </Menu>
  );
};

SiderBar.propTypes = {
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  location: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};
export default withRouter(SiderBar);
