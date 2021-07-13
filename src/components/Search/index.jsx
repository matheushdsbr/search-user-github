import { useState } from 'react';
import axios from 'axios';
import { Input } from '@gympass/yoga';
import ErrorMessage from '../ErrorMessage';
import { Container } from './styles';
import { useUserDataContext } from '../../providers/userData';

const Search = () => {
  const {
    value, setValue, setUser, setRepos, setReposStar,
  } = useUserDataContext();
  const [message, setMessage] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();

    axios.get(`https://api.github.com/users/${value}`)
      .then((response) => {
        if (response.status === 200) {
          setMessage(false);

          const { data } = response;
          setUser({
            name: data.name,
            bio: data.bio,
            avatar: data.avatar_url,
            url: data.html_url,
            repos: data.public_repos,
            location: data.location,
            followers: data.followers,
            following: data.following,
          });

          axios.get(`https://api.github.com/users/${value}/repos`)
            .then((responseRepos) => setRepos(responseRepos.data));

          axios.get(`https://api.github.com/users/${value}/starred`)
            .then((responseStarred) => setReposStar(responseStarred.data));
        }
      })
      .catch(() => {
        setMessage(true);
      });
  };

  return (
    <Container onSubmit={handleSearch}>
      <Input
        label="Search GitHub user..."
        value={value}
        full
        error={message}
        onChange={(e) => setValue(e.target.value)}
        onClean={(cleaned) => setValue(cleaned)}
      />

      {message && <ErrorMessage />}
    </Container>
  );
};

export default Search;
