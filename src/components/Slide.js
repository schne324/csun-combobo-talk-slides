import React, { Component } from 'react';
import logo from '../img/deque-logo-white.png';
import queryAll from '../utils/query-all';

export default class Slide extends Component {
  componentDidMount() {
    this.handleTitle();
  }

  componentDidUpdate() {
    this.handleTitle();
  }

  handleTitle() {
    const { slideIndex, activeIndex, title } = this.props;

    if (slideIndex === activeIndex && this.el) {
      document.title = title || queryAll('h1, h2, h3', this.el).map(el => el.innerText).join(' ');
    }
  }

  render() {
    const isActive = this.props.slideIndex === this.props.activeIndex;
    const dirClass = this.props.slideIndex < this.props.activeIndex ? 'bob-prev' : 'bob-next';
    const c = `bob ${isActive ? 'bob-active' : ''} ${this.props.dir}`;

    return (
      <section
        style={this.props.style}
        className={c}
        data-slide-index={this.props.slideIndex}
        ref={el => this.el = el}
      >
        <div className={`bob-content ${isActive ? '' : dirClass}`}>
          {this.props.children}
        </div>
        <div className='bob-foot'>
          <img src={logo} alt='Deque' width={'52'} />
          <p className='notice'>&copy; 2018 - All Rights Reserved</p>
          <div className='slide-number'>
            <span className='offscreen'>Slide number: </span>
            <span>{this.props.slideIndex + 1}</span>
          </div>
        </div>
      </section>
    )
  }
}
