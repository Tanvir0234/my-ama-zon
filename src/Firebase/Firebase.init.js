import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";

const initializeAutenthication= ()=>{

    initializeApp(firebaseConfig);

}

export default initializeAutenthication;