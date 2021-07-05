import { ThemeProvider, Button, FontLoader } from '@gympass/yoga';
import { GlobalStyle } from '../styles/global';

const Home = () => (
  <ThemeProvider>
    <GlobalStyle />
    <FontLoader />
    <Button>Find an activity</Button>
  </ThemeProvider>
);

export default Home;
