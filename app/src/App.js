import React from 'react';
import './scss/theme.scss';
// Provider is a react component to facilitate redux store like react native context.provider
import { Provider } from 'react-redux';
import store from './state';
import Form from './structure/components/form';
import CardGrid from './structure/components/CardGrid';

function App() {
  return (
    <div className="App global-spacing">
      <Provider store={store}>
        <div className='hero hero--no-img text-margin-reset'>
          <div className='hero__content'>
            <div className='hero__content__inner'>
              <h1>Character Filter, and React with Redux exercise</h1>
              <div class="global-spacing--xsmall"><p className='intro-text'>An exercise to leverage React, Redux, and data handling to filter and render card components</p></div>
            </div>
          </div>
        </div>
        <div className='grid-container text-margin-reset'>
          <h2>Enter in a string of characters</h2>
          <div className='global-spacing--xsmall'><p>Each character will be sorted, counted and rendered in a card grid below. The character sort function takes into account Big 0 notation. Since we are iterating using a for loop, the function itself is <code>O of n</code></p></div>
        </div>
        <Form/>
        <section className='global-spacing--xlarge'>
          <CardGrid/>
        </section>        
      </Provider>        
    </div>
  );
}

export default App;