import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import SubmitForm from './components/SubmitForm';
import Widgets from './components/Widgets';
import HomeScreen from './screens/HomeScreen';
import ActivityScreen from './screens/ActivityScreen';
import MemberCenterScreen from './screens/memberCenter/MemberCenterScreen';
import FishingGamesScreen from './screens/FishingGamesScreen';
import CardGamesScreen from './screens/CardGamesScreen';

const App = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [submitshow, setSubmitshow] = useState(false);
  const handleSubmitClose = () => setSubmitshow(false);
  const handleSubmitShow = () => setSubmitshow(true);
  return (
    <div>
      <Router>
        <Header handleShow={handleShow} handleSubmitShow={handleSubmitShow} />
        <Widgets />
        <LoginForm
          handleShow={handleShow}
          handleClose={handleClose}
          handleSubmitShow={handleSubmitShow}
          show={show}
        />
        <SubmitForm
          handleSubmitShow={handleSubmitShow}
          handleSubmitClose={handleSubmitClose}
          submitshow={submitshow}
        />
        <Switch>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/carding' component={CardGamesScreen} />
          <Route path='/fishing' component={FishingGamesScreen} />
          <Route path='/activities' component={ActivityScreen} />
          <Route path='/member/' component={MemberCenterScreen} />
          {/*  <Route path='/member/centerpage' component={Centerpage} /> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
