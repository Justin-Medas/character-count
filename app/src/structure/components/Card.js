/**
 * @file
 * Generate a Card.
 */

import React from 'react';

 /**
  * @param {string} cardClasses
  * @param {string} cardEyebrow
  * @param {string} cardHeading 
  * @param {string} cardHeadingLevel
  * @param {string} cardDescription
  * @param {array} cardList
  * @param {object} cardImage
  */
const Card = (props) => {

  return(
    <div  id={props._id} className={props.cardClasses}>
      <div className='card__content'>
        <div className='card__content__inner'>
          <div className='grid-x grid-margin-x'>
            <div className='initial-6 small-4 cell'>
              {/* {props.cardEyebrow !== undefined && <span className='eyebrow'>{props.cardEyebrow}</span>}  */}
              {props.cardHeading !== undefined && <h4 class="h2">{props.cardHeading}</h4>} 
            </div>
            <div className='initial-6 small-8 cell'>
              {props.cardNumber !== undefined && <span>This appears <h5>{props.cardNumber}</h5> times</span>} 
            </div>            
          </div>
        </div>
      </div>
    </div>      
  );
}
 
 export default Card;