import { ThemeProvider } from '@gympass/yoga';
import { GlobalStyle } from '../styles/global';
import { UserDataProvider } from '../providers/userData';
import Search from '../components/Search';
import ResultSearch from '../components/ResultSearch';

const Home = () => (
  <ThemeProvider>
    <GlobalStyle />
    <UserDataProvider>
      <Search />
      <ResultSearch />
    </UserDataProvider>
  </ThemeProvider>
);

export default Home;
