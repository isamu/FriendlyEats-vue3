import { db } from "@/firebase/utils";
import { doc, collection, query, orderBy, limit, onSnapshot, getDoc, getDocs, addDoc, where, runTransaction } from "firebase/firestore";

// eslint-disable-next-line
export const addRestaurant = (data) => {
  /*
    TODO: Implement adding a document
  */
};

export const getAllRestaurants = () => {
  /*
    TODO: Retrieve list of restaurants
  */
};

// eslint-disable-next-line
export const getDocumentsInQuery = (query, renderer) => {
  /*
    TODO: Render all documents in the provided query
  */
};

// eslint-disable-next-line
export const getRestaurant = (id) => {
  /*
    TODO: Retrieve a single restaurant
  */
};

// eslint-disable-next-line
export const getFilteredRestaurants = (filters) => {
  /*
    TODO: Retrieve filtered list of restaurants
  */
};

// eslint-disable-next-line
export const addRating = (restaurantID, rating) => {
  /*
    TODO: Retrieve add a rating to a restaurant
  */
};

// eslint-disable-next-line
export const getRating = (id) => {
  return query(collection(db, `restaurants/${id}/ratings`), orderBy("timestamp", "desc"));
};
