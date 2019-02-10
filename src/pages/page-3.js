import React  from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'

import Layout from "../components/layout"

const getImageData = graphql`
{
  allFile {
    edges{
      node{
        relativePath
        size
        extension
        birthTime
        childImageSharp {
          id
        }
      }
    }
  }
}
`

export default () => {
    return(
        <Layout>
            <div>
                <h1>Hello from page 3</h1>
                <h3>Image File data</h3>
                <StaticQuery 
                    query={getImageData}
                    render={data => (
                        <table>
                            <thead>
                                <tr>
                                    <th>Relative Path</th>
                                    <th>Size of the Image</th>
                                    <th>Extensions</th>
                                    <th>Birthtime</th>
                                </tr>
                                
                            </thead>
                            <tbody>
                                {data.allFile.edges.map(({ node }, index) =>(
                                    <tr key={index}>
                                        <td>{node.relativePath}</td>
                                        <td>{node.size}</td>
                                        <td>{node.extension}</td>
                                        <td>{node.birthTime}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                />
                <Link to="/page-2">Go to Page 2</Link>
            </div>
        </Layout>
    );
    
}

