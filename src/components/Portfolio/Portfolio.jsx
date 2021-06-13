import Section from 'components/Section/Section';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import * as Styled from './styles';

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
        <Styled.PortfolioItem
          rotationMultiplier={Math.random() * 1.5 + 0}
          key={node.id}
          to={node.portfolioPath}
        >
          <Styled.CraftBack
            rotationMultiplier={Math.round(Math.random())}
            zoomMultiplier={Math.random() * 20.5 + 0}
          />
          <Styled.Image image={getImage(node.frontmatter.Cover)} />
          <Styled.Title rotationMultiplier={Math.random() * (3 - -3 + 1) + -3}>
            {node.frontmatter.title}
          </Styled.Title>
        </Styled.PortfolioItem>
      ))}
    </Section>
  );
};
