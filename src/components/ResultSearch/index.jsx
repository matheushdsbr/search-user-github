import { useState } from 'react';
import {
  Container as ContainerGympass, Row, Col, Card, Text, Icon,
} from '@gympass/yoga';
import {
  MapPin, NetworkOn, FamilyMember, Star,
} from '@gympass/yoga-icons';
import { useUserDataContext } from '../../providers/userData';
import ResultRepos from '../ResultRepos';
import {
  ContentUser, UserImage, Container, UserHeader, UserInfo, LinkProfile, Result, Button,
} from './styles';

const ResultSearch = () => {
  const { user } = useUserDataContext();
  const [change, setChange] = useState(true);
  const [active, setActive] = useState(true);

  const handleActive = (state) => {
    setActive(state);
    setChange(state);
  };

  return (
    <>
      {user !== undefined && (
      <ContainerGympass>
        <Row>
          <Col xxs={12}>
            <Card>
              <ContentUser>
                <div>
                  <UserImage src={user.avatar} alt="user" />
                </div>

                <Container>
                  <UserHeader>
                    <Text.Medium>{user.name}</Text.Medium>
                    {user.bio && <span>{user.bio}</span>}
                  </UserHeader>

                  <UserInfo>
                    <ul>
                      {user.location && (
                      <li>
                        <Icon as={MapPin} width="small" height="small" fill="#0366d6" />
                        <span>{user.location}</span>
                      </li>
                      )}
                      <li>
                        <Icon as={NetworkOn} width="small" height="small" fill="#0366d6" />
                        <span>
                          {user.repos}
                          {' '}
                          repositores
                        </span>
                      </li>
                      <li>
                        <Icon as={FamilyMember} width="small" height="small" fill="#0366d6" />
                        <span>
                          {user.followers}
                          {' '}
                          followers
                          {' · '}
                          {user.following}
                          {' '}
                          following
                        </span>
                      </li>
                    </ul>
                  </UserInfo>
                </Container>
              </ContentUser>

              <LinkProfile>
                <Text>
                  <a href={user.url} target="_blank" rel="noreferrer">Link Profile</a>
                </Text>
              </LinkProfile>
            </Card>
          </Col>

          <Col xxs={12}>
            <Result>
              <Button onClick={() => handleActive(true)} type="button" active={active}>
                <Icon as={NetworkOn} width="small" height="small" fill="#0366d6" />
                <span>Repos</span>
              </Button>
              <Button onClick={() => handleActive(false)} type="button" active={!active}>
                <Icon as={Star} width="small" height="small" fill="" stroke="#0366d6" />
                <span>Stars</span>
              </Button>

            </Result>

            {change ? <ResultRepos /> : <ResultRepos stars />}
          </Col>
        </Row>
      </ContainerGympass>
      )}
    </>
  );
};

export default ResultSearch;
