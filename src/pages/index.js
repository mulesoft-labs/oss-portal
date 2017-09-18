import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Row from '@mulesoft/anypoint-components/lib/Row';
const projects = require('../commons/projects.json')


const IndexPage = () => (
  <div className="cards-container">
    {projects.map((project) => (<Card />))}
    {/* <Row style={{justifyContent: 'space-between', marginBottom: 55}}>
      <Card />
      <Card />
      <Card />
    </Row>
    <Row style={{justifyContent: 'space-between', marginBottom: 55}}>
      <Card />
      <Card />
      <Card />
    </Row> */}
  </div>
)

export default IndexPage
