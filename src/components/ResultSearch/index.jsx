import { UserImage } from './styles';

const ResultSearch = ({ user }) => (
  <div>
    {user !== undefined && (
    <>
      <h1>{user.name}</h1>
      <h1>{user.bio}</h1>
      <UserImage src={user.avatar} alt="user" />
      <p>
        <a href={user.url} target="_blank" rel="noreferrer">Link Repo</a>
      </p>
    </>
    )}
  </div>
);

export default ResultSearch;