import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import styled from "styled-components";
import Layout from "../templates/layout";
import numeral from "numeral";

import { connect } from "react-redux";
import { getBukuById } from "../store/actions/buku";


const mapStateToProps = (state) => {
  return {
    buku: state.bukuReducer.buku,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getbukuId: (id) => dispatch(getBukuById(id)),
  };
};

const SectionContent = styled.section`
  padding-top: 50px;
  padding-bottom: 90px;
`;

const Detailbuku = (props) => {
  const { buku, match } = props;

  useEffect(() => {
    props.getbukuId(match.params.id);
  }, []);
  console.log(buku, "Detail buku");
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
        </Container>
      </SectionContent>
    </Layout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Detailbuku);
