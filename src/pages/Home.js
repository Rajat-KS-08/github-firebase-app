import React, { useContext, useState } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup
} from "reactstrap";

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const Home = () => {
  const context = useContext(UserContext);
  const [query, setQuery] = useState('');
  const [user, setUser] = useState(null);
  const url = `https://api.github.com/users/${query}`;

  const fetchDetails = async () => {
    try {
        const {data} = await Axios.get(url)
        setUser(data);
        console.log({data});
    } catch (error) {
        console.log(error);
    }
  }

  //PUt Anypage behind login

  if (!context.user?.uid) {
    return <Navigate to="/signin" />;
  }

  return (
    <Container>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Please provide the username"
            />
            <div className="input-group-append">
              <Button onClick={fetchDetails} color="primary">
                Fetch User
              </Button>
            </div>
          </InputGroup>
          {user ? <UserCard user={user} /> : null}
        </Col>
        <Col md="7">{user ? <Repos repos_url={user.repos_url} /> : null}</Col>
      </Row>
    </Container>
  );
};

export default Home;
