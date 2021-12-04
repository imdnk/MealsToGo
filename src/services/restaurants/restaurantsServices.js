import { mocks } from "./mock";
import  camelize  from "camelize";

export const restaurantsRequest = (location = "zhuighkjbsx") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not_found");
    }
    resolve(mock);
  });
};
restaurantsRequest()
  .then((result) => {
    console.log(camelize(result));
  })
  .catch((err) => {
    console.log(camelize(err));
  });