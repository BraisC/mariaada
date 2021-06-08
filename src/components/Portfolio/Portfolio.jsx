import Section from 'components/Section/Section';
import { graphql, useStaticQuery } from 'gatsby';

export const Portfolio = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx(filter: { fileAbsolutePath: { regex: "/content/portfolio/" } }) {
          edges {
            node {
              fileAbsolutePath
            }
          }
        }
      }
    `
  );

  console.log(data);

  return (
    <Section title="Portfolio">
      <p>hola</p>
    </Section>
  );
};
