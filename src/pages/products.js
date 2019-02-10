import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const Products = ({ data : { allContentfulProduct }}) => {
    return(
    <Layout>
        <div>
            {/* Products list*/}
            {allContentfulProduct.edges.map(({ node: product }) => (
                <div>
                        <h2>Garb Products</h2>
                        <Link to={`/products/${product.slug}`}
                            style={{textDecoration: 'none', color: 'darkPurple' }}
                        >
                            <h3>{product.name} . {' '} <span style={{ fontSize: '1.2rem', fontWeight: '300', color: '#551A8B'}}>{product.price}</span></h3>
                            <div key={product.id}>
                                <Img
                                    style={{ maxWidth: 400 }}
                                    fluid={product.image.fluid}
                                />
                            </div>
                        </Link>
                </div>
                
            ))}
        </div>
    </Layout>
    )
}
        

export const query = graphql`
{
    allContentfulProduct {
        edges {
            node {
                id
                slug
                name
                price
                image {
                    fluid(maxWidth: 400){
                        ...GatsbyContentfulFluid_tracedSVG
                    }
                }
            }
        }
    }
}
`

export default Products;

