import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { initializeApp } from "firebase/app";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const key = process.env.REACT_APP_FIREBASE_KEY;

const firebaseConfig = {
  apiKey: key,
  authDomain: "nebula-shop.firebaseapp.com",
  projectId: "nebula-shop",
  storageBucket: "nebula-shop.appspot.com",
  messagingSenderId: "1007928044602",
  appId: "1:1007928044602:web:00d4ef7eb10861324b9903",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
