import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Widgets from './components/Widgets';
import HomeScreen from './screens/HomeScreen';
import ActivityScreen from './screens/ActivityScreen';
import MemberCenterScreen from './screens/memberCenter/MemberCenterScreen';
import FishingGamesScreen from './screens/FishingGamesScreen';
import CardGamesScreen from './screens/CardGamesScreen';
import HandleError from './components/HandleError';

const App = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [signupshow, setSignupshow] = useState(false);
  const handleSignupClose = () => setSignupshow(false);
  const handleSignupShow = () => setSignupshow(true);
  return (
    <div>
      <Router>
        <Header handleShow={handleShow} handleSignupShow={handleSignupShow} />
        <Widgets />
        <LoginForm
          handleShow={handleShow}
          handleClose={handleClose}
          handleSignupShow={handleSignupShow}
          show={show}
        />
        <SignupForm
          handleSignupClose={handleSignupClose}
          handleSignupShow={handleSignupShow}
          signupshow={signupshow}
        />
        <Switch>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/carding' component={CardGamesScreen} />
          <Route path='/fishing' component={FishingGamesScreen} />
          <Route path='/activities' component={ActivityScreen} />
          <Route path='/member/' component={MemberCenterScreen} />
          {/*  <Route path='/member/centerpage' component={Centerpage} /> */}
          <Route component={HandleError} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
