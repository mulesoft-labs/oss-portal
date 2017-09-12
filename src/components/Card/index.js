import React, { PureComponent } from "react";
import Row from "@mulesoft/anypoint-components/lib/Row";
import Column from "@mulesoft/anypoint-components/lib/Column";

class Card extends PureComponent {
  render() {
    return (
      <Column className="wrapper">
        <Row
          className="header"
        >
          <div
            className="logo"
          />
        </Row>
        <Row className="body-wrapper">
          <div
            className="project-wrapper"
          >
            <div style={{ backgroundColor: "#ccc", width: '25%', height: 20, marginBottom: 15 }} />
            <div style={{ backgroundColor: "#ddd", width: '75%', height: 14, marginBottom: 5 }} />
            <div style={{ backgroundColor: "#ddd", width: '95%', height: 14, marginBottom: 5 }} />
            <div style={{ backgroundColor: "#ddd", width: '85%', height: 14, marginBottom: 5 }} />
            <div style={{ backgroundColor: "#ddd", width: '100%', height: 14, marginBottom: 5 }} />
            <div style={{ backgroundColor: "#ddd", width: '15%', height: 14 }} />
          </div>
        </Row>
      </Column>
    );
  }
}

export default Card;
