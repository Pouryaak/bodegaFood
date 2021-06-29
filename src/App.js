import React, { useEffect } from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import { auth, db } from "./firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";
import Order from "./pages/Order";
import Porduct from "./components/Porduct";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import { setProducts } from "./features/productsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("products")
      .get()
      .then((snp) => {
        let prods = [];
        snp.forEach((doc) => {
          prods.push({
            prodId: doc.id,
            ...doc.data(),
          });
        });
        dispatch(setProducts(prods));
      });
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        db.collection("users")
          .where("uid", "==", userAuth.uid)
          .get()
          .then((snp) => {
            // for (const key in snp) {
            //   console.log(snp[key]);
            // }
            snp.forEach((doc) => {
              dispatch(
                login({
                  docId: doc.id,
                  email: userAuth.email,
                  uid: userAuth.uid,
                  displayName: userAuth.displayName,
                  addresses: doc.data().addresses,
                  role: doc.data().role,
                })
              );
            });
          });
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/orders/:orderId">
              <Order />
            </Route>
            <Route path="/product/:prodId">
              <Porduct />
            </Route>
            <Route path="/admin-dash">
              <AdminDashboard />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
