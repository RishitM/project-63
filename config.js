import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyAUB7jNXE6QR7hLGSAeLhnwN57nhNPufZ8",
  authDomain: "hw-60-7940c.firebaseapp.com",
  databaseURL: "https://hw-60-7940c-default-rtdb.firebaseio.com",
  projectId: "hw-60-7940c",
  storageBucket: "hw-60-7940c.appspot.com",
  messagingSenderId: "740935869632",
  appId: "1:740935869632:web:6c65fc654a78c534887925"
};

let app=firebase.initializeApp(firebaseConfig);
export default app.database();

 

  