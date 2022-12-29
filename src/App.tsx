import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from './firebase/firebaseConfig';
import { initializeApp } from 'firebase/app';


const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

function App() {
  const email = 'YumilwcTest2@gmail.com';
  const passwd = 'yumil22';

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, passwd);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={login} > Log in </button>
      </header>
    </div>
  );
}

export default App;
