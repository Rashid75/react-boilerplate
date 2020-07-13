import React from "react";
import { Menu, Segment, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

const HeaderPage = () => {
  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Menu.Item name="Home" active />
        <Menu.Item name="Cricket" />
        <Menu.Item name="Footbal" />
        <Menu.Menu position="right">
          <Menu.Item name="Rashid Aslam" />
          <Dropdown item text="More">
            <Dropdown.Menu>
              <Dropdown.Item icon="edit" text="Edit Profile" />
              <Dropdown.Item icon="settings" text="Account Settings" />
              <Dropdown.Item icon="sign-in alternate" text="Logout">
                {" "}
                <Link to="/login">Logout</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    </Segment>
  );
};

export default HeaderPage;
