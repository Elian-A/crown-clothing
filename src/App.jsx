import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import Shop from "./routes/shop/Shop";
import Authentication from "./routes/authentication/Authentication";
import Checkout from "./routes/checkout/Checkout";
import { setUser } from "./store/user/userActions";
import { useEffect } from "react";
import { addUserDoc, updateAuthState } from "./utils/firebase";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = updateAuthState((auth) => {
      if (auth) {
        addUserDoc(auth);
      }
      dispatch(setUser(auth));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="sign-in" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
