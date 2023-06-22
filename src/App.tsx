import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header';
import { LoginPage } from './Components/LoginPage';
import { SignupPage } from './Components/SignupPage';
import { ForgotPasswordPage } from './Components/ForgotPasswordPage';
import { ResetPasswordPage } from './Components/ResetPasswordPage';
import { HomePage } from './Components/HomePage';
import { PageContextProvider } from './PageContext';

function App() {

  return (
    <PageContextProvider>
      <React.Fragment>
        <BrowserRouter>

          <Header/>

          <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='/forgotPassword' element={<ForgotPasswordPage/>}/>
            <Route path='/resetPassword' element={<ResetPasswordPage/>}/>
            <Route path='/home' element={<HomePage/>}/>

            <Route path='/*' element={<LoginPage/>}/>
          </Routes> 

        </BrowserRouter>
      </React.Fragment>
    </PageContextProvider>
  )
}

export default App
