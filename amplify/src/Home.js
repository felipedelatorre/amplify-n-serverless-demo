import React, { useEffect, useState } from 'react';
// import { Auth } from 'aws-amplify';

function Home() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   getUserFromCognito();

  //   async function getUserFromCognito() {
  //     const cognitoUser = await Auth.currentAuthenticatedUser();

  //     setUser(cognitoUser.username);
  //   }
  // }, []);

  return (
    <div>
      <h2>Welcome {user}</h2>
    </div>
  );
}

export default Home;

// for othercases
// async function logout() {
//   return Auth.signOut();
// }

// async function getUser() {
//   try {
//     const user = await Auth.currentAuthenticatedUser();

//     console.log(user);

//     return user;
//   } catch (err) {
//     logout();

//     return { user: null };
//   }
// }
