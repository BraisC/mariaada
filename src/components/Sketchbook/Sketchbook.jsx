import Section from 'components/Section/Section';
import { graphql, useStaticQuery } from 'gatsby';

export const Sketchbook = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "sketchbook" } }) {
          edges {
            node {
              extension
              dir
              modifiedTime
            }
          }
        }
      }
    `
  );

  console.log(data);

  return (
    <Section title="Sketchbook">
      <div>hola</div>
    </Section>
  );
};
