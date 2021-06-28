import Section from 'components/Section/Section';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import washi from 'assets/images/washi.png';
import { Element } from 'react-scroll';
import { Button } from 'components/Button/Button';
import { Bio } from './components/Bio';
import * as Styled from './styles';
import curriculum from '../../../static/ada-vazquez-maria-cv.pdf';

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
    <Element name="about">
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
        <Button href={curriculum} target="_blank" rel="noreferrer">
          Mira mi CV
        </Button>
      </Section>
    </Element>
  );
};
