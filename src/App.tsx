import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { InfinitySpin } from 'react-loader-spinner';
import { Provider } from 'react-redux';
import Login from './Screens/Login/Login';
import './Translations/i18n';
import { store, persistor } from './Rematch/Store';

const loading = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
    }}
  >
    <InfinitySpin width="180" color="black" />
  </div>
);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={loading()} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
