import React, { Component, Fragment } from 'react';
import Combobo from 'combobo';

export default class SingleSelect extends Component {
  componentDidMount() {
    new Combobo({ optionValue: 'match', multiselect: true })
  }

  render() {
    return (
      <Fragment>
        <div className='combobo-demo'>
          <label htmlFor='combobo'>Choose favorite foods</label>
          <input className='combobox' id='combobo' type='text' />
          <div className='listbox' role='listbox'>
            <div className='option'>Sushi</div>
            <div className='option'>Tacos</div>
            <div className='option'>Artichoke</div>
            <div className='option'>Peanut butter and jelly</div>
            <div className='option'>Pizza</div>
            <div className='option'>Pasta</div>
          </div>
        </div>
        <button className='ok' type='button'>OK</button>
      </Fragment>
    );
  }
}
