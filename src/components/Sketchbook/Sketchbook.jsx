import Section from 'components/Section/Section';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Carousel } from './components/Carousel';

export const Sketchbook = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: { sourceInstanceName: { eq: "sketchbook" } }
          sort: { fields: relativePath, order: ASC }
        ) {
          nodes {
            absolutePath
            relativePath
            image: childImageSharp {
              gatsbyImageData(
                quality: 70
                width: 580
                placeholder: TRACED_SVG
                tracedSVGOptions: { color: "#fccd0f" }
              )
            }
          }
        }
      }
    `
  );

  console.log(data);

  return (
    <Section title="Sketchbook">
      <Carousel>
        {data.allFile.nodes.map((image) => (
          <GatsbyImage key={image.relativePath} image={getImage(image.image)} />
        ))}
      </Carousel>
    </Section>
  );
};
