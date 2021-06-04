import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

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

  return (
    <Wrapper>
      <h1>Conóceme</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
