import React from "react";
import Menu from "./../menus/Menu";
import { Container } from "react-bootstrap";

class Layout extends React.Component {
  render() {
    return (
      <Container fluid>
        <Menu />
        {this.props.children}
      </Container>
    );
  }
}
export default Layout;
