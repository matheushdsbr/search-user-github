import {
  Container, Row, Col, Text, Icon,
} from '@gympass/yoga';
import { Search } from '@gympass/yoga-icons';
import { Card } from './styles';

const Welcome = () => (
  <Container fluid>
    <Row>
      <Col xxs={12}>
        <Card>
          <Icon as={Search} stroke="#24292e" width={56} height={56} />
          <Text.H3>Find developers and their repositories</Text.H3>
          <p>Search the user to view their projects, including their favorite projects</p>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Welcome;
