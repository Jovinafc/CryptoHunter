import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
//import Homepage from './Pages/Homepage';
//import Coinpage from './Pages/Coinpage';
import { makeStyles } from '@material-ui/core';
import { lazy, Suspense } from 'react';

const Homepage = lazy(() => import('./Pages/Homepage'));
const Coinpage = lazy(() => import('./Pages/Coinpage'));

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: '#14161a',
      color: 'white',
      minHeight: '100vh',
    },
  }));

  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Suspense fallback={<div>Loading..</div>}>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/coins/:id' element={<Coinpage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
