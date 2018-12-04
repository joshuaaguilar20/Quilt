import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import DashButton from "../components/Dashboard/DashButton";
import  FaceButton from "../components/Dashboard/FaceButton";

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  height: 100px;

  h1 {
    font-size: 3.5rem;
    font-weight: 600;
    background: -webkit-linear-gradient(30deg, #4600ff, #ff0000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: ${props => props.theme.display.tablet}) {
    grid-template-columns: 1fr;
  }
`;

class NavBar extends React.Component {
  render() {
    return (
      <Nav>
        <h1 children='QUILT' />
        <DashButton auth={this.props.auth} />
        <FaceButton  auth= {this.props.auth}/>
      </Nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(NavBar);
