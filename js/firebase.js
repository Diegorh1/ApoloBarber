import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAFbN4EukMbQRCPSmCnWN_yLm9a0m4vlVc",
    authDomain: "apolo-barber.firebaseapp.com",
    projectId: "apolo-barber",
    storageBucket: "apolo-barber.firebasestorage.app",
    messagingSenderId: "401117168340",
    appId: "1:401117168340:web:de6cc7c4b150ad9278b141"
};

const app = initializeApp(firebaseConfig);

// Exportamos Base de Datos y Autenticación
export const db = getFirestore(app);
export const auth = getAuth(app);

// --- FUNCIONES DE SEGURIDAD ---

export function verificarSesion() {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            if (!window.location.href.includes('intAdministrador.html')) {
                window.location.href = "../html/intAdministrador.html";
            }
        } else {
            console.log("Usuario activo:", user.email);
        }
    });
}

export function cerrarSesion() {
    signOut(auth).then(() => {
        alert("Sesión cerrada");
        window.location.href = "intAdministrador.html";
    }).catch((error) => {
        console.error("Error al salir:", error);
    });
}