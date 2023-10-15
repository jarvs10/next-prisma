'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '@/firebase/config';

export const ContextBarber = createContext();

export const ContextUse = () => {

  const context = useContext(ContextBarber);

  return context;
}

const ContextProvider = ({ children }) => {

  const [user, setUser] = useState('');

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    return signOut(auth)
  }

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    })
  }, [])

  const loginGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider);
  }

  return (
    <ContextBarber.Provider value={{ login, register, loginGoogle, user, logout }}>
      {children}
    </ContextBarber.Provider>
  )
}

export default ContextProvider