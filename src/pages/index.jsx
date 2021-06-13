import { About } from 'components/About/About';
import { Home } from 'components/Home/Home';
import { Portfolio } from 'components/Portfolio/Portfolio';
import { Sketchbook } from 'components/Sketchbook/Sketchbook';
import { Contact } from 'components/Contact/Contact';

const IndexPage = () => (
  <>
    <Home />
    <About />
    <Portfolio />
    <Sketchbook />
    <Contact />
  </>
);
export default IndexPage;
