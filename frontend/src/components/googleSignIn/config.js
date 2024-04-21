// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCvPn9lWf_CkUHqUvJJ2jXLk1z3uhAriq0',
  authDomain: 'tech-blog-e3937.firebaseapp.com',
  projectId: 'tech-blog-e3937',
  storageBucket: 'tech-blog-e3937.appspot.com',
  messagingSenderId: '821160100052',
  appId: '1:821160100052:web:22fe46e85b50a598edfb41',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
