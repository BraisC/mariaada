import 'typeface-montserrat';
import SimpleReactLightbox from 'simple-react-lightbox';
import Layout from './src/components/Layout/Layout';

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;

export const wrapRootElement = ({ element }) => (
  <SimpleReactLightbox>{element}</SimpleReactLightbox>
);
