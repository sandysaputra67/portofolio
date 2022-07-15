import React, { Component,useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import {
  LoginRegisterFormWrap,
  LoginRegisterFormTitle,
  FormContainer,
} from "./register";
import MainButton from "../components/button/mainButton";
import { connect } from "react-redux";
import { addlogin } from "../store/actions/users";
import login from "../admin/pages/login";
const mapStateToProps = (state) =>{
  return {
    users:state.userReducer.users,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(addlogin(data)),
  };
};

const Login = (props) => {
 const {login,history} = props
  const [data, setData] = useState({});
  console.log(data);
  const onSubmitlogin = (e) => {
    e.preventDefault();
    props.login(data);
  };
  const handlelogin = (e, formName) => {
    setData({ ...data, [formName]: e.target.value });
  };


 useEffect(() => {
  if ( login ){
   history.push('/semua-buku')
  }
}, [login,history]);

  return (
    <>
      <h1>Sign in</h1>
      <span>
        {" "}
        belum punya akun silahkan register dulu
        <Link to="/register">register</Link>
      </span>
      <LoginRegisterFormTitle>
        <div>
          <p> toko buku online </p>
        </div>
      </LoginRegisterFormTitle>
      <LoginRegisterFormWrap>
        <FormContainer>
          <h1>login </h1>
          <span>
            belum punya akun silahkan register dulu{" "}
            <Link to="/login">login</Link>
          </span>
          <Form onSubmit={(e) => onSubmitlogin(e)}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Nama"
                onChange={(e) => handlelogin(e, "name")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="username"
                onChange={(e) => handlelogin(e, "username")}
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => handlelogin(e, "password")}
              />
            </Form.Group>
            <Form.Group>
              <Button type="submit" variant="primary" block>
                Sign Up
              </Button>
            </Form.Group>
            <Form.Group>
              <MainButton title="Sign in" style={{ width: "100%" }} />
            </Form.Group>
          </Form>
        </FormContainer>
      </LoginRegisterFormWrap>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);