import React from 'react'
import Layout from '../components/layout'
import Title from '../components/title'
import {graphql} from 'gatsby'

const Info = ({data}) => {
  const title = data.markdownRemark.frontmatter.title
  const html = data.markdownRemark.html
  return (
    <Layout>
    <Title title={title} />
    <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const query = graphql`
query infoPage($id: String!) {
	markdownRemark(id: {eq: $id}) {
    html
    frontmatter{
      title
    }
  }
}
`

export default Info
