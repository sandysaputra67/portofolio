import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import { getListUser } from "../../store/actions/users";
import { validate } from "numeral";

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getListUser()),
    
  };
};

const AdminLoginWrap = styled.div`
  padding-top: 35px;
  margin-bottom: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FormLoginContainer = styled.div`
  width: 460px;
  padding: 30px 40px;
  border-radius: 8px;
  border: solid 1px #ddd;
  background-color: #ffffff;
`;

const AdminLogin = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [goto, setGoto] = useState("false")
  const { users,islogin } = props;

 // useEffect(() => {
    //props.getUser();
  //}, []);

  const onSubmitLogin = (e) => {
   // e.preventDefault();
    //props.login({
        //username,
        //password,
   // });
    if (username === "sandy" && password === "sandy") {
      alert("Berhasil login");
      document.getElementById("login").action = "/imcoolmaster/dashboard";
      window.localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsIm5hbWUiOiJuZCIsInJvbGVfaWQiOjcsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6IiQyYiQxMCQyNEYxQmltWDByVkJjSjNwZWxNSnZlbUFZYndrMEJqY3VpMlh4WEhuWExUdEtKRnNwLm4wYSIsImNyZWF0ZWRfYXQiOiIyMDIwLTA3LTI3VDEzOjM1OjIxLjAwMFoiLCJ1cGRhdGVkX2F0IjoiMjAyMC0wNy0yOVQxNTo0MTowNy4wMDBaIiwiZGVsZXRlZF9hdCI6bnVsbCwiaWF0IjoxNTk3MjA2MjkyLCJleHAiOjE1OTcyOTI2OTIsImF1ZCI6Imh0dHA6Ly9jb250b2guY29tIiwiaXNzIjoiY29udG9oLmNvbSIsInN1YiI6ImNvbnRvaC5jb20ifQ.a69E7Rb7vQCKEUjCFjtwQsuvtVn7DEk5HGZfD-uGfk4");
    } else {
      alert("anda gagal login");
    }
  };

  return (
    <>
        {(islogin && users.role === "admin")
    }
      <AdminLoginWrap>
        <FormLoginContainer>
          <Form id="login" onSubmit={(e) => onSubmitLogin(e)}>
            <Form.Group>
              <Form.Control
                type="username"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Button type="submit" variant="primary" block>
                Sign Up
              </Button>
            </Form.Group>
          </Form>
        </FormLoginContainer>
      </AdminLoginWrap>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);