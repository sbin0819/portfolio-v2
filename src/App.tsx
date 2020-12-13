import { Route } from 'react-router-dom';
import { GlobalContainer } from './style/theme';
import Header from './style/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <GlobalContainer>
      <Header />
      <Route path='/' exact component={HomePage} />
      <Route path='/about' exact component={AboutPage} />
    </GlobalContainer>
  );
}

export default App;
