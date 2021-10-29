import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ActivityScreen from './screens/ActivityScreen';
import MemberCenterScreen from './screens/memberCenter/MemberCenterScreen';
import FishingGamesScreen from './screens/FishingGamesScreen';
import CardGamesScreen from './screens/CardGamesScreen';
import Centerpage from './screens/memberCenter/Centerpage';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
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
