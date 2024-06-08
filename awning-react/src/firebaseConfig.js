import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import  process  from "process";
//require('dotenv').config();



const firebaseConfig = {


      apiKey: "AIzaSyAke8huO5lGLLfjIljkc_CxsbI32V29_Io",
    
    
      authDomain: "projekt-cd888.firebaseapp.com",
    
    
      projectId: "projekt-cd888",
    
    
      storageBucket: "projekt-cd888.appspot.com",
    
    
      messagingSenderId: "230682105297",
    
    
      appId: "1:230682105297:web:324e6ee70c1e60878d7cf0",
    
    
      measurementId: "G-E6RXPKD3VR"
    
    
    }

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//bmluYTpuaW5h