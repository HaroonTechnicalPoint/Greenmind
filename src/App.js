import React from 'react';
import './App.scss';
import Routes from './Pages/Routes';
import 'bootstrap/dist/js/bootstrap.bundle'
import ConfigProvider from 'antd/es/config-provider';
import './Config/Global'

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#C1DCDC' } }}>
      <Routes />
    </ConfigProvider>
  )
}

export default App;
