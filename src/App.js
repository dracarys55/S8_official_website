import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ActivityScreen from './screens/ActivityScreen';
import MemberCenterScreen from './screens/MemberCenterScreen';
import FishingGamesScreen from './screens/FishingGamesScreen';
import CardGamesScreen from './screens/CardGamesScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/carding' component={CardGamesScreen} />
        <Route path='/fishing' component={FishingGamesScreen} />
        <Route path='/activities' component={ActivityScreen} />
        <Route path='/member/center' component={MemberCenterScreen} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
