import axios from "axios";
import { RootObject } from "./Interfaces/IRedit";

export function printReditDataToConsole() {
  const url = "https://www.reddit.com/r/typescript.json";

  axios
    .get(url)
    .then((res) => {
      const root: RootObject = res.data;
      root.data.children.forEach((child) => {
        console.log(child.data.title);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}
