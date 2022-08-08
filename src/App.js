import React, {useState, Suspense} from "react";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
import CartProvider from "./sort/CartProvider";

//lazy loading
// const Meals = React.lazy(() => import('./component/Meals/Meals'));
// const Cart = React.lazy(() => import('./component/Cart/Cart'))

function App() {
const [cartIsShown, setCartIsShown] = useState(false);

const showCartHandler = () => {
  setCartIsShown(true)
}

const hideCartHandler = () => {
  setCartIsShown(false)
}
  return (
    
      <CartProvider>
        {/* <Suspense fallback={<p>loading...</p>}> */}
     {cartIsShown && <Cart onHideCart={hideCartHandler}/>} 
       <Header onShowCart={showCartHandler} />
       <main>
        <Meals/>
       </main>
       {/* </Suspense> */}
       </CartProvider>
    
  );
}

export default App;
