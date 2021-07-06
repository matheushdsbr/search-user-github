import { useState } from 'react';
import { Input as InputGympass } from '@gympass/yoga';
import { Container } from './styles';

const Input = () => {
  const [value, setValue] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();

    fetch(`https://api.github.com/users/${value}`)
      .then((response) => response.json())
      .then((data) => console.log(data));

    setValue('');
  };

  return (
    <Container onSubmit={handleSearch}>
      <InputGympass
        label="Search user github"
        value={value}
        full
        onChange={(e) => setValue(e.target.value)}
        onClean={(cleaned) => setValue(cleaned)}
      />
    </Container>
  );
};

export default Input;
