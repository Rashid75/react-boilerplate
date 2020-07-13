import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const HeaderPage = () => {
  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Menu.Item name="Home" active />
        <Menu.Item name="About" />
        <Menu.Menu position="right">
          <Menu.Item name="Logout">
            <Link to="/login">Logout</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Segment>
  );
};

export default HeaderPage;
