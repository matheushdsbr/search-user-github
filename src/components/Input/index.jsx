import { useState } from 'react';
import { Input as InputGympass } from '@gympass/yoga';
import { Container } from './styles';

const Input = () => {
  const [value, setValue] = useState('');

  return (
    <Container>
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
