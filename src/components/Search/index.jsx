import axios from 'axios';
import { Input } from '@gympass/yoga';
import { Container } from './styles';
import { useUserDataContext } from '../../providers/userData';

const Search = () => {
  const {
    value, setValue, setUser, setRepos, setReposStar,
  } = useUserDataContext();

  const handleSearch = (event) => {
    event.preventDefault();

    // fetch(`https://api.github.com/users/${value}`)
    //   .then((response) => {
    //     if (response.status === 404) {
    //       return alert('User Not Found');
    //     }

    //     if (!response.ok) {
    //       return alert('Request Failed');
    //     }

    //     return response.json();
    //   })
    //   .then((data) => {
    //     if (data !== undefined) {
    //       setUser({
    //         name: data.name,
    //         bio: data.bio,
    //         avatar: data.avatar_url,
    //         url: data.html_url,
    //         repos: data.public_repos,
    //         location: data.location,
    //         followers: data.followers,
    //         following: data.following,
    //       });

    //       fetch(`https://api.github.com/users/${value}/repos`)
    //         .then((response) => response.json())
    //         .then((repos) => setRepos(repos));

    //       fetch(`https://api.github.com/users/${value}/starred`)
    //         .then((response) => response.json())
    //         .then((starred) => setReposStar(starred));
    //     }
    //   });

    axios.get(`https://api.github.com/users/${value}`)
      .then((response) => {
        if (response.status === 200) {
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
      .catch((error) => {
        alert(error);
      });
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
