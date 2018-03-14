import React, { Component } from 'react';
import { DequeDeck, TitleSlide, Slide, ChapterSlide } from 'deque-slide-deck';
import { Highlight } from 'react-fast-highlight';
import Offscreen from 'react-offscreen';
import SingleSelect from './SingleSelect';
import MultiSelect from './MultiSelect';
// slide images
import caitlin from './img/caitlin.jpg';
import harris from './img/harris.jpg';
import oldFilters from './img/old-assure-filters.png';
import multiExample1 from './img/multiselect-combobox-example-1.png';
import multiExample2 from './img/multiselect-combobox-example-2.png';
import singleExample1 from './img/single-select-combobox-example-1.png';
import singleExample2 from './img/single-select-combobox-example-2.png';
import teamwork from './img/teamwork.png';
import codevdesign from './img/code-vs-design.png';
import filters1 from './img/filters-review-1.png';
import filters2 from './img/filters-review-2.png';
import filters2annot from './img/filters-review-2-annotated.png';
import complexity from './img/complexity-and-usability-testing.png';
import cauldronLogo from './img/cauldron.png';
import dqplCombobox from './img/dqpl-combo.png';
import comboboLogo from './img/combobo-logo.png';
import framing from './img/framing-the-problem.jpeg';
import timeline from './img/timeline.png';
// import question from './img/question-mark-background.jpg';
// import focus from './img/focus-styles.png';
// styles
import './App.css';

class App extends Component {
  render() {
    return (
      <DequeDeck animation='fade'>
        <TitleSlide
          profiles={[
            { name: 'Caitlin Geier', image: caitlin },
            { name: 'Harris Schneiderman', image: harris }
          ]}
        >
          <h1 className='title medium'>A Nightmare on HTML Street</h1>
          <h2 className='title small'>Building Accessible Complex Widgets</h2>
        </TitleSlide>
        <Slide>
          <h2 className='title large text-centered'>Who We Are</h2>
          <div className='row space-evenly'>
            <div>
              <h3 className='text-centered'>Designer</h3>
              <img className='large-profile' src={caitlin} width="150px" alt="Caitlin Geier" />
            </div>
            <div>
              <h3 className='text-centered'>Developer</h3>
              <img className='large-profile' src={harris} width="150px" alt="Harris Schneiderman" />
            </div>
          </div>
          <p>
            We design and build <strong>web applications </strong>
            which help <strong>development teams </strong>
            perform <strong>accessibility testing</strong>.
          </p>
        </Slide>
        <Slide>
          <h2 className='title large'>{'Today we\'re talking about:'}</h2>
          <ul>
            <li>Comboboxes</li>
            <li>Collaboration</li>
            <li>Prototyping</li>
            <li>How much we love ARIA ({'when it\'s necessary!'})</li>
          </ul>
        </Slide>
        <Slide>
          <h2 className='rest-centered'>A Note on Using ARIA:</h2>
          <blockquote>"If you can use a native HTML element or attribute with the semantics and behavior you require <strong>already built in</strong>, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, <strong>then do so</strong>."</blockquote>
          <a href="https://w3c.github.io/using-aria/#rule1" className='rest-centered'>ARIA Specifications: Rule #1</a>
        </Slide>
        <ChapterSlide>
          <div className='row'>
            <h1>Framing the Problem</h1>
            <img src={framing} alt='' width='125px' className='standalone-image framing' />
          </div>
        </ChapterSlide>
        <Slide>
          <Offscreen tag='h2'>Example of the problem</Offscreen>
          <img
            className='rest-centered'
            src={oldFilters}
            width='475px'
            alt='multi-select filters in WorldSpace Assure prior to version 1.4'
          />
        </Slide>
        <Slide>
          <Offscreen tag='h2'>Framing the Problem: Existing Comboboxes</Offscreen>
          <div className='row img-row rest-centered'>
            <img src={singleExample1} width='45%' alt="single select combobox example 1"/>
            <img src={multiExample1} width='45%' alt="multi select combobox example 2"/>
            <img src={multiExample2} width='45%' alt="multi select combobox example 1"/>
            <img src={singleExample2} width='45%' alt="single select combobox example 2"/>
          </div>
        </Slide>
        <Slide>
          <div className='text-centered'>
            <h2 className='title large'>Accessibility === difficult</h2>
            <h3 className='title medium'>Collaboration === less difficult</h3>
          </div>
          <img src={teamwork} className='bottom-aligned-image' alt='' />
        </Slide>
        <Slide>
          <img src={timeline} width="100%" alt='' />
        </Slide>
        <ChapterSlide>
          <h2 className='title large'>Phase 1: Design</h2>
        </ChapterSlide>
        <Slide>
          <div className='background-image'>
            <img src={codevdesign} alt='' width='600px' />
          </div>
          <div className='row space-evenly vertical-center'>
            <h2>Designer</h2>
            <h2 className='white'>Developer</h2>
          </div>
        </Slide>
        <Slide>
          <h2 className='title medium'>Responsibilities in the Design Phase</h2>
          <div className='row space-evenly'>
            <div>
              <h3>Designers</h3>
              <ul>
                <li>Create artifacts</li>
                <li>Annotate features</li>
                <li>Help define requirements</li>
                <li>Show designs to team!</li>
              </ul>
            </div>
            <div>
              <h3>Developers</h3>
              <ul>
                <li>Review designs</li>
                <li>Research technologies</li>
                <li>Understand requirements</li>
                <li>Ask questions!</li>
              </ul>
            </div>
          </div>
        </Slide>
        <Slide>
          <h2 className='title medium'>Selected Filters: Before</h2>
          <img
            className='rest-centered'
            width='400px'
            src={oldFilters}
            alt='multi-select filters in WorldSpace Assure prior to version 1.4'
          />
        </Slide>
        <Slide>
          <h2 className='title medium'>Selected Filters: First Review</h2>
          <img
            className='rest-centered'
            width='400px'
            src={filters1}
            alt='new multi-select filters showing selected items in a side panel in the widget'
          />
        </Slide>
        <Slide>
          <h2 className='title medium'>Selected Filters: Second Review</h2>
          <img
            className='rest-centered'
            width='500px'
            src={filters2}
            alt='after second review, selected items show beneath filters as separate section'
          />
        </Slide>
        <Slide>
          <h2 className='title medium'>With Annotations</h2>
          <img
            width='500px'
            src={filters2annot}
            alt='same wireframes as previous slide with annotations'
          />
        </Slide>
        <Slide className='central'>
          <div>
            <h2 className='title large'>Get developers involved!</h2>
            <p>Being involved earlier means starting development sooner.</p>
          </div>
        </Slide>
        <ChapterSlide>
          <h2 className='title large'>Phase 2: Prototypes</h2>
        </ChapterSlide>
        <Slide className='central'>
          <div>
            <h2 className='title large'>Types of prototypes</h2>
            <ul>
              <li><strong>Low fidelity</strong> for testing layout, content, etc.</li>
              <li><strong>Higher fidelity</strong> for testing interactions</li>
              <li><strong>Coded</strong> for testing with keyboard / AT users</li>
            </ul>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h2 className='title large'>The value of coded prototypes</h2>
            <ul>
              <li>Screen reader testing early in process</li>
              <li>{'Brought up new questions'}</li>
              <li>{'Make enhancements without changing application code'}</li>
            </ul>
          </div>
        </Slide>
        <ChapterSlide>
          <h2 className='title large'>
            Interactive Prototype Case Study: Combobo
          </h2>
        </ChapterSlide>
        <Slide>
          <h3 className='title medium'>Combobo</h3>
          <p>A modular / accessible combobox plugin written by Harris</p>
          <img className='rest-centered' src={comboboLogo} width='200px' alt='' />
        </Slide>
        <Slide>
          <Offscreen tag='h3'>Example combobo instantiation</Offscreen>
          <Highlight languages={['js']}>
          {`
const combobo = new Combobo({
  input: '.combobox',
  list: '.listbox',
  options: '.option', // qualified within list
  groups: null, // qualified within list
  openClass: 'open',
  activeClass: 'active',
  selectedClass: 'selected',
  useLiveRegion: true,
  multiselect: false,
  noResultsText: null,
  selectionValue: (selecteds) => selecteds.map((s) => s.innerText.trim()).join(' - '),
  optionValue: 'underline', // wrap the matched portion of the option (if applicable) in a span with class "underline"
  announcement: {
    count: (n) => n + ' options available',
    selected: 'Selected.'
  },
  filter: 'contains' // 'starts-with', 'equals', or funk
});
          `}
          </Highlight>
        </Slide>
        <Slide className='central'>
          <div>
            <h3 className='centered'>
              <Highlight languages={['js']}>
                {'{ useLiveRegion: true }'}
              </Highlight>
            </h3>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h3>
              <Highlight languages={['js']}>
                {`
{
  activeClass: 'active',
  selectedClass: 'selected'
}
                `}
              </Highlight>
            </h3>
          </div>
        </Slide>
        <Slide>
          <h3 className='title medium'>Combobo events / methods</h3>
          <div className='rest-centered'>
            <Highlight languages={['js']}>
              {`
combobo
  .on('change', function () {
    console.log('stuff has changed and stuff');
  })
  .on('selection', function () {
    console.log('selection made!');
  })
  .goTo(combobo.getOptIndex() + 5) // move 5 options forward
  .select(); // select that option
              `}
            </Highlight>
          </div>
        </Slide>
        <Slide className='interactive'>
          <h2 className='title medium'>Single-select demo</h2>
          <SingleSelect />
          <div className='row'>
            <Highlight languages={['html']}>
            {`
<label for="combobo">Choose day</label>
<input class="combobox" id="combobo" type="text" />
<div class="listbox" role="listbox">
  <div class="option" role="option">Monday</div>
  <div class="option" role="option">Tuesday</div>
  <div class="option" role="option">Wednesday</div>
  <div class="option" role="option">Thursday</div>
  <div class="option" role="option">Friday</div>
  <div class="option" role="option">Saturday</div>
  <div class="option" role="option">Sunday</div>
</div>
            `}
            </Highlight>
            <Highlight languages={['js']}>
            {`
const Combobo = require('combobo');

new Combobo({
  optionValue: 'match'
});
            `}
            </Highlight>
          </div>
        </Slide>
        <Slide className='interactive'>
          <h2 className='title medium'>Multi-select demo</h2>
          <MultiSelect />
          <div className='row'>
            <Highlight languages={['html']}>
              {`
<label for="combobo-multi">Choose favorite foods</label>
<input class="combobox-multi" id="combobo-multi" type="text" />
<div class="listbox-multi" role="listbox">
  <div class="opt" role="option">Sushi</div>
  <div class="opt" role="option">Tacos</div>
  <div class="opt" role="option">Pasta</div>
  <div class="opt" role="option">Artichoke</div>
  <div class="opt" role="option">Peanut butter and jelly</div>
</div>
              `}
            </Highlight>
            <Highlight languages={['js']}>
              {`
const Combobo = require('combobo');

new Combobo({
  input: '.combobox-multi',
  list: '.listbox-multi',
  options: '.opt',
  optionValue: 'match',
  multiselect: true
});
              `}
            </Highlight>
          </div>
        </Slide>
        <Slide>
          <h2 className='title medium'>Did we mention Combobo is open source?</h2>
          <p>
            <span>{'Try it out: '}</span>
            <a
              href='https://schne324.github.io/combobo/demo/'
              target='_blank'
              rel='noopener noreferrer'
            >
              {'interactive demo'}
            </a>
          </p>
          <p>
            <a
              href='https://github.com/schne324/combobo'
              target='_blank'
              rel='noopener noreferrer'
            >
              Combobo on GitHub
            </a>
          </p>
        </Slide>
        <ChapterSlide>
          <h2 className='title large'>Phase 3: Usability Testing</h2>
        </ChapterSlide>
        <Slide>
          <Offscreen tag='h3'>
            More complex interactions === more important to do usability testing
          </Offscreen>
          <img
            className='complexity-image'
            src={complexity}
            width='430px'
            alt=''
          />
        </Slide>
        <Slide>
          <h3 className='title large'>Want to test with screen reader users?</h3>
          <h4 className='title small'>Code your prototype.</h4>
          <p>(TODO: image of code in background, white text on top?)</p>
        </Slide>
        <Slide>
          <h3 className='title large'>How we tested Combobo</h3>
          <ul>
            <li>4 internal users</li>
            <li>2 screen reader users</li>
            <li>Collaboratively!</li>
          </ul>
        </Slide>
        <ChapterSlide>
          <h2 className='title large'>Phase 4: Implementation</h2>
        </ChapterSlide>
        <Slide>
          <h3 className='title large'>Comboboxes in WorldSpace Assure</h3>
          <h4 className='title small'>Assure needed two flavors of combobox:</h4>
          <ul>
            <li>Single Select (checkpoint selection)</li>
            <li>Multi Select (issue filters)</li>
          </ul>
        </Slide>
        <Slide>
          <h3 className='title large'>(TODO: screenshots of single select - before)</h3>
          <p>Note: previous single select was just a standard select element. New single select {'doesn\'t'} look much different, just acts different</p>
        </Slide>
        <Slide>
          <h3 className='title large'>Old Multiselect Filters</h3>
          <img
            className='rest-centered'
            src={oldFilters}
            width='400px'
            alt='multiselect filters in WorldSpace Assure circa 2016'
          />
        </Slide>
        <Slide>
          <h3 className='title large'>(TODO: link to assure demo and stuff)</h3>
          <a
            href='https://assuredev.dequelabs.com/test-run/e9357634-20d1-11e8-a712-87456f647383/issues'
            target='_blank'
            rel='noopener noreferrer'
          >
            Assure demo
          </a>
          <p>TODO: make a quick video demo as backup for if live demo {'doesn\'t work'}</p>
        </Slide>
        <ChapterSlide>
          <h2 className='title large'>Phase 4.5: Pattern Library</h2>
        </ChapterSlide>
        <Slide className='central'>
          <div>
            <h3 className='title large'>{'We\'ve built something solid'}</h3>
            <h4 className='title small'>...how can we preserve this?</h4>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h3 className='title large'>Pattern libraries FTW!</h3>
          </div>
        </Slide>
        <Slide>
          <h3 className='title large'>Benefits of pattern libraries</h3>
          <ul>
            <li>DRY</li>
            <li>Great for accessibility</li>
            <li>Consistent look/feel</li>
            <li>Write less CSS and focus on functionality of app</li>
          </ul>
        </Slide>
        <Slide>
          <h3 className='title large'>{'Why isn\'t Combobo in the pattern library?'}</h3>
          <p>The apple rule...</p>
        </Slide>
        <Slide>
          <Offscreen tag='h3'>Pattern library combobox wireframes</Offscreen>
          <div className='rest-centered'>
            <img width='510px' src={dqplCombobox} alt='' />
          </div>
        </Slide>
        <Slide>
          <h3 className='title large'>Deque Pattern Library: Cauldron</h3>
          <div className='text-centered'>
            <img src={cauldronLogo} alt='' width='150px' />
            <div>
              <a
                href='https://pattern-library.dequelabs.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                {'https://pattern-library.dequelabs.com/'}
              </a>
            </div>
            <p>{'It\'s open source and accessible!'}</p>
          </div>
        </Slide>
        <Slide>
          <div className='text-centered'>
            <h2 className='title large'>Questions?</h2>
            <div className='row space-evenly'>
              <div>
                <img className='large-profile' src={caitlin} width="150px" alt="Caitlin Geier" />
                <h3 className='profile-text text-centered'>Caitlin Geier</h3>
                <p className='profile-text text-centered'>caitlin.geier@deque.com</p>
                <p className='profile-text text-centered'><a href="https://twitter.com/CaitlinGeier">@CaitlinGeier</a></p>
              </div>
              <div>
                <img className='large-profile' src={harris} width="150px" alt="Harris Schneiderman" />
                <h3 className='profile-text text-centered'>Harris Schneiderman</h3>
                <p className='profile-text text-centered'>harris@deque.com</p>
                <p className='profile-text text-centered'><a href="https://twitter.com/theHarrisius">@theHarrisius</a></p>
              </div>
            </div>
          </div>
        </Slide>
      </DequeDeck>
    );
  }
}

export default App;
