import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiBootstrap,
  DiWordpress,
  DiPhp,
  DiNpm,
  DiHtml5,
  DiGithub,
  DiCss3,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,

} from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";
import '../CSS/techstack.css'
function Techstack() {
  return (
    <Row className="row">
      <Col className="colo">
        <CgCPlusPlus />
      </Col>
      <Col className="colo">
        <DiJavascript1 />
      </Col>
      <Col className="colo">
        <DiNodejs />
      </Col>
      <Col className="colo">
        <DiReact />
      </Col>
      <Col className="colo">
        <DiMongodb />
      </Col>
      <Col className="colo">
        <SiNextdotjs />
      </Col>
      <Col className="colo">
        <DiGit />
      </Col>
      <Col className="colo">
        <SiPostgresql />
      </Col>
      <Col className="colo">
        <DiPython />
      </Col>
      <Col className="colo">
        <DiBootstrap />
      </Col>
      <Col className="colo">
        <DiWordpress />
      </Col>
      <Col className="colo">
        <DiPhp />
      </Col>
      <Col className="colo">
        <DiNpm />
      </Col>
      <Col className="colo">
        <DiHtml5 />
      </Col>
      <Col className="colo">
        <DiGithub />
      </Col>
      <Col className="colo">
        <DiCss3 />
      </Col>
    </Row>
  );
}

export default Techstack;