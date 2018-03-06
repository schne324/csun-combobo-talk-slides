import React, { Component, Fragment } from 'react';
import Combobo from 'combobo';

export default class SingleSelect extends Component {
  componentDidMount() {
    new Combobo({ optionValue: 'match' });
  }

  render() {
    return (
      <Fragment>
        <div className='combobo-demo'>
          <label htmlFor='combobo'>Choose day</label>
          <input className='combobox' id='combobo' type='text' />
          <div className='listbox' role='listbox'>
            <div className='option'><span>Monday</span></div>
            <div className='option'><span>Tuesday</span></div>
            <div className='option'><span>Wednesday</span></div>
            <div className='option'><span>Thursday</span></div>
            <div className='option'><span>Friday</span></div>
            <div className='option'><span>Saturday</span></div>
            <div className='option'><span>Sunday</span></div>
          </div>
        </div>
        <button className='ok' type='button'>OK</button>
      </Fragment>
    );
  }
}
