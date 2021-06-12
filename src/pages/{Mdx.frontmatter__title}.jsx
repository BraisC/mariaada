import { graphql } from 'gatsby';

const PortfolioPageTemplate = ({ data }) => (
  <div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);

export default PortfolioPageTemplate;

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      id
      fileAbsolutePath
      frontmatter {
        title
        image {
          absolutePath
        }
      }
    }
  }
`;
