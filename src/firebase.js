import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyA3WMVCSmE33UxKyY3WaRm-RJ0kPgZUtfk",
  authDomain: "data-visualization-dashb-3ec50.firebaseapp.com",
  projectId: "data-visualization-dashb-3ec50",
  storageBucket: "data-visualization-dashb-3ec50.appspot.com",
  messagingSenderId: "715455674780",
  appId: "1:715455674780:web:d02e0c6101788c79473059",
  measurementId: "G-7B7NWE5HYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getDatabase(app);
export const analytics = getAnalytics(app);
