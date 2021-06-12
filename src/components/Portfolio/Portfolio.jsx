import Section from 'components/Section/Section';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const Portfolio = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx(filter: { fileAbsolutePath: { regex: "/content/portfolio/" } }) {
          nodes {
            # Esto sirve para generar la URL en base al slug que crea gatsby para cada pagina generada por la template
            id
            portfolioPath: gatsbyPath(filePath: "/{Mdx.frontmatter__title}")
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
        <Link key={node.id} to={node.portfolioPath}>
          <GatsbyImage image={getImage(node.frontmatter.Cover)} />
        </Link>
      ))}
    </Section>
  );
};
