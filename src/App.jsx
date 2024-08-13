import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux"; 
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user";
import ColorForm from "./components/ColorForm";
import themeReducer from "./features/theme";
const store = configureStore({
  reducer:{
    user:userReducer,
    theme: themeReducer
  }
})
export default function App() {
  return (
    <Provider store ={store}>
    <div className="text-center text-xl">
      <Profile />
      <Login />
      <ColorForm />
    </div>
    </Provider>
  );
}
