import 'typeface-montserrat';
import Layout from './src/components/Layout/Layout';

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([<div key="modal" id="modal" />]);
};
