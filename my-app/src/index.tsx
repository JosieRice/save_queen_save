import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlqW7fVlGESpJ8wx5-HUMqBtA8-5IXm5E",
  authDomain: "save-queen-save.firebaseapp.com",
  databaseURL: "https://save-queen-save-default-rtdb.firebaseio.com",
  projectId: "save-queen-save",
  storageBucket: "save-queen-save.appspot.com",
  messagingSenderId: "390088656346",
  appId: "1:390088656346:web:9dbfefa111977da8e2ace3",
  measurementId: "G-EQ86K4GH45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("after app init: ", app);
const analytics = getAnalytics(app);
console.log(analytics.app.name);

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log({ uid });
    console.log({ user });
    // ...
  } else {
    console.log("user is signed out");
    // User is signed out
    // ...
  }
});

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
