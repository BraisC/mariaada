import Section from 'components/Section/Section';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const About = () => {
  const data = useStaticQuery(
    graphql`
      query {
        mdx(fileAbsolutePath: { regex: "/content/about.mdx/" }) {
          body
        }
      }
    `
  );

  console.log(data);

  return (
    <Section title="Conóceme">
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Section>
  );
};
