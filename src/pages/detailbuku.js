import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import styled from "styled-components";
import Layout from "../templates/layout";
import numeral from "numeral";
import { connect } from "react-redux";
import { getBukuById} from "../store/actions/buku";
import {addOrder} from "../store/actions/order"
import users from "../store/reducers/user";
import Axios from "axios";
import orders from "../store/reducers/orders";


const mapStateToProps = (state) => {
  return {
    buku: state.bukuReducer.buku,
    order: state.users,
  }};
const mapDispatchToProps = (dispatch) => {
  return {
    getbukuId: (id) => dispatch(getBukuById(id)),
    addOrder:(data) => dispatch(addOrder(data)),
  };
};

const SectionContent = styled.section`
  padding-top: 50px;
  padding-bottom: 90px;
`;

const Detailbuku = (props) => {
  const { buku, match,getbukuId } = props;
  useEffect(() => {
    props.getbukuId(match.params.id);
  }, []);
  console.log(buku, "Detail buku");
  const handleOrder = () =>{
    console.log(orders,"order")
    addOrder(orders)
    const data ={
      user_id:users.user_id,
      total:buku.harga* 2,
      orders_detail: [ 
         {
        buku_id:buku.id,
        title:buku.title,
        quantity:2,
        harga:buku.harga,
        total:buku.harga *2,
      },
    ],
    }
  };
  return (
    <Layout>
      <SectionContent>
        <Container>
          <div className="row">

            <div className="col-md-4">
              <h4
                className="my-2 font-weight-bold"
                style={{ color: "#8052ff" }}
              >
                {`Rp ${numeral(buku.harga).format("0,0")}`}
              </h4>
              <h5 className="my-3 text-dark text-left">
                Author: {buku.authorName}
              </h5>
              <h6 className="text-left">buku sinopsis :</h6>
              <p className="text-black-50 text-justify">{buku.sinopsis}</p>
            </div>
          </div>
          <div className="col-md-6">
       
          <p className="book-title">{buku.title}</p>
          <div className="book-value-wrapper">
            <p>{buku.harga}</p>
        </div>
        </div>
        <div>
        <Button variant ="success" onClick={() => handleOrder()}>
        order disini
        </Button>
        </div>
        </Container>
      </SectionContent>
    </Layout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Detailbuku);
