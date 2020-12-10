import { Route } from 'react-router-dom';
import { GlobalContainer } from './style/theme';
import Header from './style/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <GlobalContainer>
      <Header />
      {/* <Route path='/' exact component={HomePage} /> */}
      <HomePage />
    </GlobalContainer>
  );
}

export default App;
