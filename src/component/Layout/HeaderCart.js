import React from "react";
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCart.module.css';
import { useContext, useEffect, useState } from "react";
import CartContext from "../../sort/CartContext";

const HeaderCart = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
   

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
    useEffect(() => {
        if(items.length === 0){
            return;
        }
       setBtnIsHighlighted(true)
     const timer = setTimeout(() => {
        setBtnIsHighlighted(false)
       }, 300);
       return() => {
        clearTimeout(timer)
       }
    }, [items]);
    return(
        <React.Fragment>
           <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span >
                your cart
            </span>
            <span className={classes.badge}>{numberOfCartItems}</span>
            
           </button>
        </React.Fragment>
    )
}

export default HeaderCart;