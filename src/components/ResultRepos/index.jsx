import { Text } from '@gympass/yoga';
import { useUserDataContext } from '../../providers/userData';
import { Container } from './styles';

const ResultRepos = ({ stars }) => {
  const { repos, reposStar } = useUserDataContext();
  return (
    <>
      {stars
        ? (
          <>
            {reposStar.map((item) => (
              <Container key={item.id}>
                <Text.H3><a href={item.html_url} target="_blank" rel="noreferrer">{item.name}</a></Text.H3>
                {item.description && <Text>{item.description}</Text>}

                {item.language && (
                <span>
                  Language:
                  {' '}
                  {item.language}
                </span>
                )}
              </Container>
            ))}
          </>
        ) : (
          <>
            {repos.map((item) => (
              <Container key={item.id}>
                <Text.H3><a href={item.html_url} target="_blank" rel="noreferrer">{item.name}</a></Text.H3>
                {item.description && <Text>{item.description}</Text>}

                {item.language && (
                <span>
                  Language:
                  {' '}
                  {item.language}
                </span>
                )}
              </Container>
            ))}
          </>
        )}
    </>
  );
};
export default ResultRepos;
