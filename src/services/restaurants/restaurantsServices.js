import { mocks, mockImages } from "./mock";
import  camelize  from "camelize";

export const restaurantsRequest = (location = "51.219448,4.402464") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not_found");
    }
    resolve(mock);
  });
};
export const restaurantsTransfrom = ({results = []}) => {

  const MappedData = results.map((restaurants) => {
    restaurants.photos = restaurants.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurants,
      isTemperiryClosed : restaurants.business_status === "CLOSED_TEMPERIRY",
      isOpenNow : restaurants.opening_hours && restaurants.opening_hours.open_now,
    };
  });
  return camelize(MappedData);
};
/*
restaurantsRequest()
  .then(RequestResponse)
  .then((TransfromData) => {
    console.log(TransfromData);
  })
  .catch((err) => {
    console.log(camelize(err));
  });
  */