import React, { Component } from 'react';
import Combobo from 'combobo/dist/combobo.js';
import './styles.css';

export default class ComboboDemo extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.setState({
      combobo: new Combobo({
        input: '#combobox-single',
        list: '.bands .listbox',
        activeClass: 'active',
        noResultsText: 'No results found.',
        optionValue: 'boxer'
      })
    });
    // for whatver reason, this didn't work with a simple `onClick` prop??
    this.trigger.addEventListener('click', this.toggle);
  }

  componentWillUnmount() {
    this.trigger.removeEventListener('click', this.toggle);
  }

  render() {
    return (
      <div className='bands'>
        <div className='wrp'>
          <h2>Combobo Demo</h2>
          <label htmlFor='combobox-single'>Choose Band</label>
          <div className='combo-wrap'>
            <input type='text' className='combobox' id='combobox-single' />
            <i
              aria-hidden='true'
              className='fa trigger fa-caret-down'
              ref={el => this.trigger = el}
            />
            <div className='listbox'>
              <div className='option'>Ween</div>
              <div className='option'>Frank Zappa</div>
              <div className='option'>Snarky Puppy</div>
              <div className='option'>{'Umphrey\'s McGee'}</div>
              <div className='option'>Keller Williams</div>
              <div className='option'>Greensky Bluegrass</div>
              <div className='option'>Leftover Salmon</div>
              <div className='option'>Moe.</div>
              <div className='option'>Family Groove Company</div>
              <div className='option'>Mac Demarco</div>
              <div className='option'>Lettuce</div>
            </div>
          </div>
        </div>
        <button type='button'>Submit</button>
      </div>
    );
  }

  toggle(e) {
    e.stopPropagation();

    const { combobo } = this.state;
    combobo[combobo.isOpen ? 'closeList' : 'openList']();
  }
}
