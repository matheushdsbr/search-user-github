import { ThemeProvider } from '@gympass/yoga';
import { GlobalStyle } from '../styles/global';
import { UserDataProvider } from '../providers/userData';
import Header from '../components/Header';
import ResultSearch from '../components/ResultSearch';
import Welcome from '../components/Welcome';

const Home = () => (
  <ThemeProvider>
    <GlobalStyle />
    <UserDataProvider>
      <Header />
      <ResultSearch />
      <Welcome />
    </UserDataProvider>
  </ThemeProvider>
);
export default Home;
