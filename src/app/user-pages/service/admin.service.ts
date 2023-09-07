import { Injectable } from '@angular/core';
import {
  getAuth, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut, updateEmail,
  updatePassword, updateProfile, sendPasswordResetEmail, deleteUser, reauthenticateWithCredential } from "firebase/auth";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import {doc, Firestore, updateDoc} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private firestore: Firestore) { }

  getNewEmailCode() {
    let combination = '';
    for (let i = 0; i < 4; i++) {
      const randomDigit = Math.floor(Math.random() * 10); // Génère un chiffre aléatoire de 0 à 9
      combination += randomDigit.toString(); // Ajoute le chiffre à la combinaison en tant que chaîne de caractères
    }
    return combination+='_';
  }
  signUpAdmin(fullName: string, email:string, numTel:string, password:string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async(userCredential) => {
        // Signed in
        const admin = userCredential.user;
        const db = getFirestore();

        // Génération de code unique pour l'email et la password du nouveau administrateur
        const emailCode = this.getNewEmailCode();
        const passwordCode = this.getNewEmailCode();

        //Création d'un nouveau document pour le nouveau administrateur
        const adminAdd = await addDoc(collection(db, 'admins'),{
          id:admin.uid,
          fullName:fullName,
          numTel:numTel,
          email:email,
          emailCode:emailCode,
          passwordCode:passwordCode
        })
        console.log('Administrateur enregistré avec succès avec l\'ID du document Firestore : ', adminAdd.id);
      })
      .catch((error) => {

        const errorMessage = error.message;
        console.error('Erreur lors de la création de l\'admin :', errorMessage);
      });
  }

  signInAdmin(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Connexion reussi !");
        console.log("Bienvenue " + user.email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          console.log('Erreur : Mot de passe incorrect.');
        } else {
          console.error('Erreur inattendue :', errorMessage);
        }
      });
  }

  signOutAdmin() {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("Deconnexion reussie !");
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Erreur: impossible de se deconnecté.",errorCode, errorMessage );
    });
  }

  updateAdmin(fullName: string, numTel: string, email: string, password: string, id: string) {
    const adminDocRef = doc(this.firestore, `admins/${id}`);
    this.updateEmail(email);
    this.updatePassword(password);
    this.updateBasicInfo(fullName);
    return updateDoc(
      adminDocRef,
      {
        fullName: fullName,
        numTel: numTel
      });
  }

  updateEmail(newEmail: string) {
    const auth = getAuth();
    if (auth.currentUser) {
      updateEmail(auth.currentUser, newEmail).then(() => {
        // Email updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
    }
  }

  updatePassword(newPassword: string) {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      updatePassword(user, newPassword).then(() => {
        console.log("Mot de passe mis à jour !");
      }).catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log("Erreur: impossible de mettre à jour le mot de passe.", errorCode, errorMessage);
      });
    }

  }

  updateBasicInfo(displayName: string) {
    const auth = getAuth();
    if (auth.currentUser) {
      updateProfile(auth.currentUser, {
        displayName: displayName
      }).then(() => {
      }).catch((error) => {
        console.log("Erreur: impossible de mettre à jour le nom.", error);
      });
    }
  }

  sendPasswordResetEmail(email: string) {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Email de reinitialisation du mot de passe envoyé !");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Erreur: impossible d'envoyer l'email de reinitialisation du mot de passe.", errorCode, errorMessage);
      });

  }

  deleteAdmin() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      deleteUser(user).then(() => {
        // User deleted.
      }).catch((error) => {
        // An error ocurred
        // ...
      });
    }
  }

  /*reauthenticateAdmin(email: string, password: string) {
    const auth = getAuth();
    const user = auth.currentUser;

    const credential = {email: email, password: password};

    if (user) {
      reauthenticateWithCredential(user, credential).then(() => {
        // User re-authenticated.
      }).catch((error) => {
        // An error ocurred
        // ...
      });
    }

  }*/
}