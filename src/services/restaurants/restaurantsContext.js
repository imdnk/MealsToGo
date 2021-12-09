import React, { useState, createContext,  useEffect, useMemo } from "react";
import {restaurantsRequest, restaurantsTransfrom} from "./restaurantsServices";



export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {

    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const retrieveRestaurants = () => {
      setIsLoading(true);
      setTimeout(() => {
        restaurantsRequest()
          .then(restaurantsTransfrom)
          .then((results) => {
            setIsLoading(false);
            setRestaurants(results);
          })
          .catch((err) => {
            setIsLoading(false);
            setError(err);
          });
      }, 3000);
    };

    useEffect(() => {
      retrieveRestaurants();
    }, []);

    return(
        <RestaurantsContext.Provider
    value = {{ 
        restaurants,  
        isLoading,
        error,
    }}
    >
        {children}
    </RestaurantsContext.Provider>
    );
};


