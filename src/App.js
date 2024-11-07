import React from 'react';
import './App.scss';
import Routes from './Pages/Routes';
import 'bootstrap/dist/js/bootstrap.bundle'
import ConfigProvider, { ConfigConsumer } from 'antd/es/config-provider';

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#C1DCDC' } }}>
      <Routes />
    </ConfigProvider>
  )
}

export default App;
