import { db } from "@/firebase/utils";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";

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
  const getAllRestaurantsQuery = query(
    collection(db, "restaurants"),
    orderBy("avgRating", "desc"),
    limit(50)
  );

  return getAllRestaurantsQuery;
};

// eslint-disable-next-line
export const getDocumentsInQuery = (query, renderer) => {
  /*
    TODO: Render all documents in the provided query
  */
  return onSnapshot(query, (snapshot) => {
    if (!snapshot.size) return renderer.empty();
    snapshot.docChanges().forEach((change) => {
      if (change.type === "removed") {
        renderer.remove(change.doc);
      } else {
        renderer.display(change.doc);
      }
    });
  });
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

export const getRating = (id) => {
  return collection(db, `restaurants/${id}/ratings`).orderBy(
    "timestamp",
    "desc"
  );
};
