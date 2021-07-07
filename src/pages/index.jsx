import { ThemeProvider } from '@gympass/yoga';
import { useState } from 'react';
import { GlobalStyle } from '../styles/global';
import Search from '../components/Search';
import ResultSearch from '../components/ResultSearch';

const Home = () => {
  const [user, setUser] = useState(undefined);

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Search setUser={setUser} />
      <ResultSearch user={user} />
    </ThemeProvider>
  );
};

export default Home;
