import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyApXuV_F1lZlkOkhahD5irsKdVf3XBWTYM",
    authDomain: "e-commerce-8f99d.firebaseapp.com",
    databaseURL: "https://e-commerce-8f99d.firebaseio.com",
    projectId: "e-commerce-8f99d",
    storageBucket: "e-commerce-8f99d.appspot.com",
    messagingSenderId: "900103334720",
    appId: "1:900103334720:web:db9b83dfb7e5c4f144e8a5",
    measurementId: "G-6XVMFF2GEQ"
  };

        export const createUserProfile = async ( userAuth , additionalData) =>{
            if(!userAuth) return;

            const userRef = firestore.doc(`users/${userAuth.uid}`);

            const snapShot = await userRef.get()
            if(!snapShot.exists){
                const {displayName , email} = userAuth;
                const createdAt = new Date();

                try{
                    await userRef.set({
                        displayName,
                        email,
                        createdAt,
                        ...additionalData
                    })
                }catch(e){
                    console.log('error creating user : ', e);
                }
            }
            // console.log(snapShot);
            return userRef;
        }

  firebase.initializeApp(config);

  export const auth  = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({
      prompt: 'select_account'
  });
  export const signInWithGoogle =()=>{
     return auth.signInWithPopup(provider);
  };

  export default firebase;