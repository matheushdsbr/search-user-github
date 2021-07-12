import { useState } from 'react';
import {
  Container as ContainerGympass, Row, Col, Card, Text, Icon,
} from '@gympass/yoga';
import { MapPin, NetworkOn, FamilyMember } from '@gympass/yoga-icons';
import { useUserDataContext } from '../../providers/userData';
import ResultRepos from '../ResultRepos';
import {
  ContentUser, UserImage, Container, UserHeader, UserInfo, LinkProfile,
} from './styles';

const ResultSearch = () => {
  const { user } = useUserDataContext();
  const [change, setChange] = useState(true);

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
            <div>
              <button onClick={() => setChange(true)} type="button">Repos</button>
              <button onClick={() => setChange(false)} type="button">Stars</button>
            </div>

            {change ? <ResultRepos /> : <ResultRepos stars />}
          </Col>
        </Row>
      </ContainerGympass>
      )}
    </>
  );
};

export default ResultSearch;
