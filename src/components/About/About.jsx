import Section from 'components/Section/Section';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const About = () => {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(fileAbsolutePath: { regex: "/content/about/about.mdx/" }) {
          body
          frontmatter {
            Avatar: image {
              childImageSharp {
                gatsbyImageData(
                  width: 200
                  placeholder: TRACED_SVG
                  tracedSVGOptions: { background: "#93d9de", color: "#fccd0f" }
                )
              }
            }
          }
        }
      }
    `
  );

  return (
    <Section title="Conóceme">
      <GatsbyImage image={getImage(data.mdx.frontmatter.Avatar)} />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Section>
  );
};
