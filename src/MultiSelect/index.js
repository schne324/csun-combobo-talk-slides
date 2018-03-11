import React, { Component, Fragment } from 'react';
import Combobo from 'combobo';

export default class SingleSelect extends Component {
  componentDidMount() {
    new Combobo({
      input: '.combobox-multi',
      list: '.listbox-multi',
      options: '.opt',
      optionValue: 'match',
      multiselect: true
    });
  }

  render() {
    return (
      <Fragment>
        <div className='combobo-demo'>
          <label htmlFor='combobo-multi'>Choose favorite foods</label>
          <input className='combobox-multi' id='combobo-multi' type='text' />
          <div className='listbox-multi' role='listbox'>
            <div className='opt'>Sushi</div>
            <div className='opt'>Tacos</div>
            <div className='opt'>Pasta</div>
            <div className='opt'>Artichoke</div>
            <div className='opt'>Peanut butter and jelly</div>
          </div>
        </div>
        <button className='ok' type='button'>OK</button>
      </Fragment>
    );
  }
}
