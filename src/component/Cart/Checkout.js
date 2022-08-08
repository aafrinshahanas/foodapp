import React from "react";
import classes from './Checkout.module.css';
import { useRef, useState } from "react";

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 6;

const CheckOut = (props) => {
const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true
})

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityeInputRef = useRef();
    const confrimHandler = (event) => {
        event.preventDefault(); 
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityeInputRef.current.value;
        
        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

        const formIsValid = 
        enteredNameIsValid && 
        enteredStreetIsValid &&
        enteredCityIsValid &&
        enteredPostalCodeIsValid

      setFormInputsValidity({
        name: enteredNameIsValid,
        street: enteredStreetIsValid,
        city: enteredCityIsValid,
        postalCode: enteredPostalCodeIsValid
      })

        if (!formIsValid) {
        return
        }
    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        city: enteredCity,
        postalCode: enteredPostalCode
    })

    }
    const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`;
    const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`;
    const postalCodeControlClasses = `${classes.control} ${formInputsValidity.postalCode ? '' : classes.invalid}`;
    const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`;
    return(<form onSubmit={confrimHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef}/>
        {!formInputsValidity.name && <p>please enter a valid name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="Street">Street</label>
        <input type="text" id="Street" ref={streetInputRef}/>
        {!formInputsValidity.street && <p>please enter a valid street name</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal code</label>
        <input type="text" id="postal" ref={postalCodeInputRef}/>
        {!formInputsValidity.postalCode && <p>please enter a valid postal code</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityeInputRef}/>
        {!formInputsValidity.city && <p>please enter a valid city name</p>}
      </div>
      <div className={classes.actions}>
      <button type="button" onClick={props.onCancel}>Cancel</button>
      <button className={classes.submit} type="submit">Confirm</button>
      </div>
    </form>);
}

export default CheckOut;  