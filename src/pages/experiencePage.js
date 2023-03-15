import React from "react";
import '../assets/css/portfolio.css';
import {Container, Row, Col} from 'react-bootstrap';
import data from "../data/experienceData"

const getJobs = (jobList) => {
  let jobs = []

  jobList.forEach((job, index) => {
    jobs.push(
    <Col key={index}> 
      <Container className="experience-card">
          <h5>{job.company}</h5>
          <h6>{job.role}</h6>
          <h6>{job.start} - {job.end}</h6>
          <hr></hr>
      </Container>
    </Col>)
  });
  
  return jobs;
}

const experience = () => {
  return (
    <Row className="experience-row"> {getJobs(data.jobs)} </Row>
  );
}

export default experience
