import './app.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage/HomePade';
import Products from './components/Products';
import RegistrationForm from './components/RegistrationForm';
import RefInput from './components/RefInput';

export const UsersContext = createContext();


const App = () => {
  const [usersCount, setUsersCount] = useState(0);

  return (
    <UsersContext.Provider value={{data: usersCount, changeFunction: setUsersCount}} >
      <div className="app">
        {/* <Header usersCount={usersCount} /> */}
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/registration' element={<RegistrationForm />}/>
          <Route path='/refInput' element={<RefInput />}/>
        </Routes>
        {/* <Main onChangeUsersCount={setUsersCount} /> */}
        <Main />
        <Footer />
      </div>
    </UsersContext.Provider>  
  );
};

export default App;
