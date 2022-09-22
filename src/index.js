import { View, Text } from "react-native";
import React from "react";
import { store } from "./app/store";
import { Provider } from "react-redux";
import App from "../App";

const index = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default index;
