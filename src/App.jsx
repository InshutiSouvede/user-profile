import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux"; 
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user";
const store = configureStore({
  reducer:{
    user:userReducer
  }
})
export default function App() {
  return (
    <Provider store ={store}>
    <div className="text-center">
      <Profile />
      <Login />
    </div>
    </Provider>
  );
}
