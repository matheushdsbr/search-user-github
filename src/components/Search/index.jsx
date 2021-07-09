import { Input } from '@gympass/yoga';
import { Container } from './styles';
import { useUserDataContext } from '../../providers/userData';

const Search = () => {
  const {
    value, setValue, setUser, setRepos, setReposStar,
  } = useUserDataContext();

  const handleSearch = (event) => {
    event.preventDefault();

    fetch(`https://api.github.com/users/${value}`)
      .then((response) => response.json())
      .then((data) => setUser({
        name: data.name,
        bio: data.bio,
        avatar: data.avatar_url,
        url: data.html_url,
      }));

    fetch(`https://api.github.com/users/${value}/repos`)
      .then((response) => response.json())
      .then((data) => setRepos(data));

    fetch(`https://api.github.com/users/${value}/starred`)
      .then((response) => response.json())
      .then((data) => setReposStar(data));
  };

  return (
    <Container onSubmit={handleSearch}>
      <Input
        label="Search GitHub user..."
        value={value}
        full
        onChange={(e) => setValue(e.target.value)}
        onClean={(cleaned) => setValue(cleaned)}
      />
    </Container>
  );
};

export default Search;
