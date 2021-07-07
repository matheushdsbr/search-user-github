import { useState } from 'react';
import { Input } from '@gympass/yoga';
import { Container } from './styles';

const Search = ({ setUser }) => {
  const [value, setValue] = useState('');

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

    setValue('');
  };

  return (
    <Container onSubmit={handleSearch}>
      <Input
        label="Search user github"
        value={value}
        full
        onChange={(e) => setValue(e.target.value)}
        onClean={(cleaned) => setValue(cleaned)}
      />
    </Container>
  );
};

export default Search;
