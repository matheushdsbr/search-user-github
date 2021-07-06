import { ThemeProvider } from '@gympass/yoga';
import { GlobalStyle } from '../styles/global';
import Search from '../components/Search';

const Home = () => (
  <ThemeProvider>
    <GlobalStyle />
    <Search />
  </ThemeProvider>
);

export default Home;
