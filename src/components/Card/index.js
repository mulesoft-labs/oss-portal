import React, { PureComponent } from "react";

import Row from "@mulesoft/anypoint-components/lib/Row";
import Column from "@mulesoft/anypoint-components/lib/Column";

class Card extends PureComponent {
  render() {
    return (
      <Column style={{ width: 300, flex: "none" }}>
        <Row
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexFlow: "row nowrap",
            placeContent: "center center",
            alignItems: "center",
            overflow: "visible",
            backgroundColor: "#eee",
            width: "100%",
            height: "80px"
          }}
        >
          <div
            style={{
              backgroundColor: "rgb(221, 221, 221)",
              width: "70px",
              height: "70px",
              marginTop: "75px",
              borderRadius: "100%",
              zIndex: 10
            }}
          />
        </Row>
        <Row style={{ width: "100%" }}>
          <div
            style={{ backgroundColor: "#fafafa", width: "100%", height: 200, padding: 20, paddingTop: 35 }}
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
