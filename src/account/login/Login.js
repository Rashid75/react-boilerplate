import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      Login works
      <Button>
        <Link to="/admin">Login</Link>
      </Button>
    </div>
  );
};

export default Login;
