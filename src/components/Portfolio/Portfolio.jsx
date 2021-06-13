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
        <PortfolioItem
          rotationMultiplier={Math.random() * 1.5 + 0}
          key={node.id}
          to={node.portfolioPath}
        >
          <CraftBack rotationMultiplier={Math.round(Math.random())} />
          <Image image={getImage(node.frontmatter.Cover)} />
        </PortfolioItem>
      ))}
    </Section>
  );
};

const PortfolioItem = styled(Link)`
  position: relative;
  transform: ${({ rotationMultiplier }) => `rotate(${rotationMultiplier}deg)`};
  transition: all 0.2s ease;
  width: 80%;

  &:nth-child(odd) {
    transform: ${({ rotationMultiplier }) => `rotate(${rotationMultiplier}deg)`};
    &:hover {
      transform: rotate(0deg) scale(1.05);
    }
  }
  &:nth-child(even) {
    transform: ${({ rotationMultiplier }) => `rotate(-${rotationMultiplier}deg)`};
    &:hover {
      transform: rotate(0deg) scale(1.05);
    }
  }

  &:not(:last-child) {
    margin-bottom: 4rem;
  }
`;

const CraftBack = styled.div`
  background-image: url(${craft});
  height: 100%;
  position: absolute;
  transform: ${({ rotationMultiplier }) => `rotate(${rotationMultiplier * 180}deg)`};
  width: 100%;
`;

const Image = styled(GatsbyImage)`
  margin: 3rem;
`;
