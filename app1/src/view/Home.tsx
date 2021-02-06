import React, { FunctionComponent } from "react";
import { Col, Row } from "react-bootstrap";
import AlertComponent from "../Components/Alerts/AlertComponent";

interface IProps {}

const Home: FunctionComponent<IProps> = (props) => {
  return (
    <div className="d-flex">
      <div className="mx-auto my-4">
        <Row>
          <Col>
            <AlertComponent />
          </Col>
          <Col>
            <div className="text-center">Home</div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
