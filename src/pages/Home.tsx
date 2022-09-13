import React from "react";
import { getAuth, signOut } from "firebase/auth";

export interface IHomePageProps {}

const Home: React.FunctionComponent<IHomePageProps> = (props) => {
  const auth = getAuth();

  return (
    <>
      <div>Home Protected by Firebase</div>
      <button onClick={() => signOut(auth)}>Sign out of Firebase</button>
    </>
  );
};

export default Home;
