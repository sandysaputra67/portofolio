import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import styled from "styled-components";
import Layout from "../templates/layout";
import CardBuku from "../components/card/cardBuku";
import { connect } from "react-redux";
import { getListkategori } from "../store/actions/kategori";
import Kategori from "../store/reducers/kategori";

const mapStateToProps = (state) => {
  console.log(state, "getlist");
  return {
    kategori: state.kategoriReducer.kategori,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    kategori: () => dispatch(getListkategori()),
  };
};
const SectionContent = styled.section`
  padding-top: 50px;
  padding-bottom: 90px;
`;

const SectionTitle = styled.div`
  margin-bottom: 40px;
  color: #000;
  > h4 {
    display: block;
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
  }
  > span {
    color: #898989;
  }
`;

const Index = (props) => {
  const { kategori } = props;

  useEffect(() => {
    console.log(props ,"kategori")
    props.kategori();
  }, []);

    console.log("From component");
    return (
      <Layout>
      <SectionContent>
        <Container>
          <SectionTitle>
            <h4>Semua buku</h4>
            <span>semua buku</span>
          </SectionTitle>
          <Row>
            {kategori && kategori.length === 0 ? (
              <Col>
                <Alert variant="warning">
                  <Alert.Heading>There is no data</Alert.Heading>
                  <p style={{ lineHeight: "1.5" }}>
                   semua buku.
                  </p>
                </Alert>
              </Col>
            ) : (
              kategori &&
              kategori.map((val,index) => {
                console.log("val")
                return (
                  <Col key={index} lg={3} className="mb-4">
                    <CardBuku dataCard={val} />
                  </Col>
                );
              })
            )}
          </Row>
        </Container>
      </SectionContent>
    </Layout>
  );
};

  export default connect(mapStateToProps, mapDispatchToProps)(Index);
