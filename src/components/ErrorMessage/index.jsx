import { Icon } from '@gympass/yoga';
import { AlertCircle } from '@gympass/yoga-icons';
import { Container } from './styles';

const ErrorMessage = () => (
  <Container>
    <Icon as={AlertCircle} width="small" height="small" stroke="#FF874C" />
    <p>
      Request Failed! Try again.
    </p>
  </Container>
);

export default ErrorMessage;
