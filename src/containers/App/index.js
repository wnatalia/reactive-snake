import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Main from 'components/Main';
import routes from '../../routes';
import { NotFound } from '../../pages/NotFound';

const App = () => {
  return (
    <>
      <Router>
        <Route path="*">
          <AnimatedRoutes />
        </Route>
      </Router>
    </>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <Header location={location} />
      <Main>
        <TransitionGroup className="transition-wrapper">
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Switch location={location}>
              {routes.map(route => (
                <Route
                  key={route.id}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                />
              ))}
              <Route component={NotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Main>
      <Footer />
    </>
  );
};

export default App;
