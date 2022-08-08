import React from "react";
import mealImage from '../../assests/meals.jpg';
import classes from './Header.module.css';
import HeaderCart from "./HeaderCart";

const Header = (props) => {
    return (
        <React.Fragment>
           <header className={classes.header}>
              <h1>reactmeal</h1>
             <HeaderCart onClick={props.onShowCart}/>
              
           </header>
           <div className={classes['main-image']}>
            <img src={mealImage} alt="meal"/>
           </div>
        </React.Fragment>
    )
}

export default Header;