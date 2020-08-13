import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { Container } from "reactstrap";

import AppNavBar from "./components/AppNavBar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
