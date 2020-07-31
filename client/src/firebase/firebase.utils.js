import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import { config } from './firebase.config';
import SHOP_DATA from '../redux/shop/shop.data';

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const storage = firebase.storage();

export const updateImagesUrls = async () => {
  const urlCategories = ['bathroom', 'bedroom', 'kitchen', 'living', 'study'];
  const storageRef = storage.ref();

  let imageUrls = {};

  const getCategoryStorage = async (category) => {
    return await storageRef.child(`plants/${category}`).listAll();
  };

  async function getImageUrls() {
    await Promise.all(
      urlCategories.map(async (category) => {
        const categoryArray = [];
        const categoryStorage = await getCategoryStorage(category);
        await Promise.all(
          categoryStorage.items.map(async (image) => {
            const url = await image.getDownloadURL();
            return categoryArray.push(url);
          })
        );
        imageUrls = { ...imageUrls, [category]: categoryArray };
      })
    );
    return updateUrls();
  }

  function updateUrls() {
    urlCategories.map((category) => {
      return SHOP_DATA[category].items.map((item, index) => {
        const namePart = item.name.split(' ')[0].toLowerCase();
        const newUrl = imageUrls[category].filter((item) =>
          item.includes(namePart)
        );
        return (item.imageUrl = newUrl[0]);
      });
    });
    return SHOP_DATA;
  }

  const newData = await getImageUrls();
  console.log(newData);
  return newData;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
