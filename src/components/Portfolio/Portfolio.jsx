import Section from 'components/Section/Section';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import craft from 'assets/images/bg-craft.png';

export const Portfolio = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/content/portfolio/" } }
          sort: { fields: frontmatter___order, order: ASC }
        ) {
          nodes {
            id
            # Esto sirve para generar la URL en base al slug que crea gatsby para cada pagina generada por la template
            portfolioPath: gatsbyPath(filePath: "/portfolio/{Mdx.frontmatter__title}")
            frontmatter {
              title
              Cover: image {
                childImageSharp {
                  gatsbyImageData(
                    width: 1000
                    height: 500
                    quality: 100
                    placeholder: TRACED_SVG
                    tracedSVGOptions: { background: "#93d9de", color: "#fccd0f" }
                  )
                }
              }
            }
          }
        }
      }
    `
  );

  console.log(data);

  return (
    <Section title="Portfolio">
      {data.allMdx.nodes.map((node) => (
        <PortFolioItem key={node.id} to={node.portfolioPath}>
          <GatsbyImage style={{ margin: 30 }} image={getImage(node.frontmatter.Cover)} />
        </PortFolioItem>
      ))}
    </Section>
  );
};

const PortFolioItem = styled(Link)`
  background-image: url(${craft});
`;
