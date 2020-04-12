import React, { useState } from "react";
import BurgerKit from "../components/BurgerBuilder/BurgerKit/BurgerKit";
import classes from "./BurgerBuilder.module.css";
import BurgerControls from "../components/BurgerBuilder/BurgerControls/BurgerControls";

const PRICES = {
 
};

export default () => {
  const [ingredients, setIngredients] = useState({
    steak: 0,
    cucumber: 0,
    tamato: 0,
    lettuce: 0,
    chees: 0,
    
  });
  const [price, setPrice] = useState(100);

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredients(newIngredients);

    const newPrice = price + PRICES[type];
    setPrice(newPrice);
  }

  function removeIngredient(type) {
    if (ingredients[type] >= 1) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setIngredients(newIngredients);

      const newPrice = price - PRICES[type];
      setPrice(newPrice);
    }
  }

  return (
    <div className={classes.BurgerBuilder}>
      <BurgerKit price={price} ingredients={ingredients} />
      <BurgerControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    </div>
  );
};