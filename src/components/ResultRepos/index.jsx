import { useUserDataContext } from '../../providers/userData';

const ResultRepos = ({ stars }) => {
  const { repos, reposStar } = useUserDataContext();
  return (
    <>
      {stars
        ? (
          <>
            <h1>STARS</h1>
            {reposStar.map((item) => <p key={item.id}>{item.name}</p>)}
          </>
        ) : (
          <>
            <h1>REPOS</h1>
            {repos.map((item) => <p key={item.id}>{item.name}</p>)}
          </>
        )}
    </>
  );
};
export default ResultRepos;
