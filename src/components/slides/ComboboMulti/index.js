import React, { Component } from 'react';
import Combobo from 'combobo/dist/combobo.js';
import './styles.css';

function wrapNum(str, val) {
  if (!val || str.toLowerCase().indexOf(val.toLowerCase()) === -1) {
    return str;
  }
  var regex = new RegExp(val, 'i');
  return str.replace(regex, '<span class="underline">$&</span>');
}

export default class ComboboDemo extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.setState({
      combobo: new Combobo({
        input: '#combobox-multiselect',
        list: '.multiselect .listbox',
        activeClass: 'active',
        multiselect: true,
        selectionValue: function (selectedOptions) {
          return selectedOptions.length > 1 ?
            '{ ' + selectedOptions.length +  ' selected }' :
            selectedOptions[0].innerText.trim();
        },
        noResultsText: 'Hey code mash! Nothing to see here...',
        optionValue: opt => wrapNum(opt.innerText, this.input.value)
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
      <section className="multiselect">
        <div className="wrp">
          <h2>Multi select</h2>
          <label htmlFor="combobox-multiselect">Choose Favorite Foods</label>
          <div className="combo-wrap">
            <input
              type="text"
              className="combobox"
              id="combobox-multiselect"
              ref={el => this.input = el}
            />
            <i
              aria-hidden="true"
              className="fa trigger fa-caret-down"
              data-trigger="multiselect"
              ref={el => this.trigger = el}
            />
            <div className="listbox">
              <div className="option">Pizza</div>
              <div className="option">Sushi</div>
              <div className="option">Tacos</div>
              <div className="option">Beer</div>
              <div className="option">Salmon</div>
              <div className="option">Cheeseburger</div>
              <div className="option">Bacon Cheeseburger</div>
              <div className="option">Steak</div>
              <div className="option">Fried Chicken</div>
              <div className="option">Chicken Salad</div>
              <div className="option">Tatar Tots</div>
              <div className="option">French Fries</div>
            </div>
          </div>
        </div>
        <button type="button">Submit</button>
      </section>
    );
  }

  toggle(e) {
    e.stopPropagation();

    const { combobo } = this.state;
    combobo[combobo.isOpen ? 'closeList' : 'openList']();
  }
}
