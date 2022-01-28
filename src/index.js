import reactDom from "react-dom";
import App from "./App";
import "./App.css";
import { Provider } from "react-redux";
import store from './store/store';
import './index.css';

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
