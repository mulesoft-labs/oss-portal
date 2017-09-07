import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Row from '@mulesoft/anypoint-components/lib/Row';


const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Row style={{justifyContent: 'space-between'}}>
      <Card />
      <Card />
      <Card />
    </Row>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
