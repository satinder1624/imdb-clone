import { db } from "../firebase";
import firebase from "firebase";

export function setDB(path, doc, value, merge = false) {
  return db.collection(path).doc(doc).set(value, { merge });
}

export function updateDB(path, doc, value) {
  return db.collection(path).doc(doc).update(value);
}

export function deleteDB(path, doc) {
  // console.log("Deleted");
  return db.collection(path).doc(doc).delete();
}

export const addDB = (path, value) => {
  return db.collection(path).add(value);
};

export const getRandomDocID = (path) => {
  return db.collection(path).doc().id;
};

export const getFireTimeStampFromDate = (date) => {
  return firebase.firestore.Timestamp.fromDate(date);
};
