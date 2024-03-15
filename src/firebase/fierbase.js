import { initializeApp } from "firebase/app";
import { get, getDatabase } from "firebase/database";
import { ref } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);
export async function PsichologData() {
  try {
    const database = getDatabase(app);
    const dbRef = ref(database, "/psixhologis");
    let data;

    const snapshot = await get(dbRef);
    data = snapshot.val();
    return data;
  } catch (error) {
    console.error(error);
    console.log(error);
  }
}
