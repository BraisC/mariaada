import Section from 'components/Section/Section';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import washi from 'assets/images/washi.png';
import { Bio } from './components/Bio';
import * as Styled from './styles';

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
                  width: 500
                  quality: 100
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
      <Styled.ImageWrapper>
        <GatsbyImage image={getImage(data.mdx.frontmatter.Avatar)} />
        <Styled.WashiTape src={washi} />
      </Styled.ImageWrapper>
      <MDXProvider
        components={{
          Bio,
        }}
      >
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
    </Section>
  );
};
