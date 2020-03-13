import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// import { withAuthenticator } from 'aws-amplify-react';
// import Amplify, { Auth } from 'aws-amplify';
// import awsconfig from './aws-exports';

import Form from './Form';

import './App.css';

// Amplify.configure(awsconfig);

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

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/form" component={Form} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

Topic.propTypes = {
  match: PropTypes.string,
};

Topics.propTypes = {
  match: PropTypes.string,
};

// export default withAuthenticator(App, true);
export default App;
