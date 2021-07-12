import { ThemeProvider } from '@gympass/yoga';
import { GlobalStyle } from '../styles/global';
import { useUserDataContext } from '../providers/userData';
import Header from '../components/Header';
import ResultSearch from '../components/ResultSearch';
import Welcome from '../components/Welcome';

const Home = () => {
  const { user } = useUserDataContext();
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Header />
      {user !== undefined ? <ResultSearch /> : <Welcome />}
    </ThemeProvider>
  );
};
export default Home;
