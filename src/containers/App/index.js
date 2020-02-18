import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Main from 'components/Main';
import Game from 'containers/Game';

const App = () => (
  <>
    <Header />
    <Main>
      <Game />
    </Main>
    <Footer />
  </>
);

export default App;
