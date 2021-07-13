import { UserDataProvider } from '../providers/userData';

function MyApp({ Component, pageProps }) {
  return (
    <UserDataProvider>
      <Component {...pageProps} />
    </UserDataProvider>
  );
}

export default MyApp;
