import React from 'react';
import classes from './Burger.module.css';

export default ({ type }) => {
  const burgerClasses = [classes.burger];

  switch (type) {
    case 'steak':
      burgerClasses.push(classes.steak);
      break;

case 'cucumber':
    burgerClasses.push(classes.cucumber);
      break;

 case 'tamato':
      burgerClasses.push(classes.tamato);
      break;

case 'lettuce':
      burgerClasses.push(classes.lettuce);
        break;

        case 'ketchup':
          burgerClasses.push(classes.ketchup);
            break;
            
            case 'chees':
              burgerClasses.push(classes.chees);
                break;
      }

  return (
    <div className={burgerClasses.join(' ')}>
    </div>
  );
};