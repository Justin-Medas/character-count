/**
 * @file
 * Modular data Formatter.
 */
import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import { charCount, SpecialCharCount} from '../../helpers/characterCount';

const CardGrid = () => {

  // state, inputCharacters, and characters comes from store
  const characters = useSelector(state => state.inputCharacters.characters);

  // create an object from charCount to map an render Cards
  let charObj = charCount(characters);
  let specialCharObj = SpecialCharCount(characters);

  return(
    <div className='grid-container'>     
      <h3 class="character-numbers"><span>{Object.keys(charObj).length}</span>  Unique Characters Found, and <span>{Object.keys(specialCharObj).length}</span> Special Characters Filtered Out</h3>

      <div className='grid-x grid-margin-x'>
        {characters.length > 0 ? (
          Object.keys(charObj).map((key) => (
            <div key={key} className='initial-12 medium-4 cell global-spacing--medium'>
              <Card 
                cardClasses='card--character-count card card--small card--bordered card--rounded text-margin-reset'
                cardEyebrow='Character'
                cardHeading={key}
                cardNumberEyebrow={`Number of times this character appears`}
                cardNumber={charObj[key]}
              />
            </div>
          ))
        
        ) : (
          <div className='initial-12 cell'>
            <em className='h4'>Enter some characters in the field above</em>
          </div>
        )}
      </div>
    </div>
  );
 }
 
 export default CardGrid;