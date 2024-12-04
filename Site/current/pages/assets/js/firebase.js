    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/firebase-app.js";
    import { getAnalytics } from "firebase/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // Initialize the FirebaseUI Widget using Firebase.

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDdnzw-59ce5c-DqVzw_f9YvpDEs8kRsTY",
      authDomain: "oscario-1782a.firebaseapp.com",
      projectId: "oscario-1782a",
      storageBucket: "oscario-1782a.firebasestorage.app",
      messagingSenderId: "428260482711",
      appId: "1:428260482711:web:35cb225bfb0672f715d3d2",
      measurementId: "G-4F669K9P5Y"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
