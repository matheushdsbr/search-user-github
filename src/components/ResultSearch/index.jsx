import { useState } from 'react';
import { useUserDataContext } from '../../providers/userData';
import ResultRepos from '../ResultRepos';
import { UserImage } from './styles';

const ResultSearch = () => {
  const { user } = useUserDataContext();
  const [change, setChange] = useState(true);

  return (
    <div>
      {user !== undefined && (
      <>
        <h1>{user.name}</h1>
        <h1>{user.bio}</h1>
        <UserImage src={user.avatar} alt="user" />
        <p>
          <a href={user.url} target="_blank" rel="noreferrer">Link Repo</a>
        </p>

        <div>
          <button onClick={() => setChange(true)} type="button">Repos</button>
          <button onClick={() => setChange(false)} type="button">Stars</button>
        </div>

        {change ? <ResultRepos /> : <ResultRepos stars />}
      </>
      )}
    </div>
  );
};

export default ResultSearch;
