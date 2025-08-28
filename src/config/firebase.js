// Importamos los módulos que vamos a usar
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAiF9KwjweTAmQyOHAkOS1oy-ns2nWIuOY",
  authDomain: "locusstoregremio.firebaseapp.com",
  projectId: "locusstoregremio",
  storageBucket: "locusstoregremio.firebasestorage.app",
  messagingSenderId: "714478847095",
  appId: "1:714478847095:web:fc3cc07331d6858b477272",
  measurementId: "G-W505WCJF14"
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);

// Exportamos los servicios que vamos a usar
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Provider de Google para autenticación
export const provider = new GoogleAuthProvider();
