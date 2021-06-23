import Section from 'components/Section/Section';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Element } from 'react-scroll';
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

  return (
    <Element name="portfolio">
      <Section title="Portfolio">
        {data.allMdx.nodes.map((node) => (
          <Styled.PortfolioItem
            rotationMultiplier={Math.random() * 1.5 + 0}
            key={node.id}
            to={'/portfolio/' + node.frontmatter.title.toLowerCase().replace(' ', '-')}
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
    </Element>
  );
};
