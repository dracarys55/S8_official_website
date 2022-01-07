import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
  const location = useLocation();
  return (
    <div>
      <Header handleShow={handleShow} handleSignupShow={handleSignupShow} />
      <Widgets />
      <LoginForm handleClose={handleClose} show={show} />
      <SignupForm
        handleSignupClose={handleSignupClose}
        signupshow={signupshow}
      />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames='fade' timeout={1000}>
          <Switch location={location}>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/carding' component={CardGamesScreen} />
            <Route path='/fishing' component={FishingGamesScreen} />
            <Route path='/activities' component={ActivityScreen} />
            {/*  <Route path='/member/centerpage' component={Centerpage} /> */}
            <Route component={HandleError} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Route path='/member/' component={MemberCenterScreen} />
      <Footer />
    </div>
  );
};

export default App;
