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
import framing from './img/frame.png';
import timeline from './img/timeline.png';
import designbg from './img/design-bg.png';
import prototypebg from './img/prototype-bg-final.png';
import testingbg from './img/testing-bg.png';
import implementationbg from './img/implementation-bg.png';
import patternlibbg from './img/patternlib-bg.png';
import freddy from './img/freddy.png';
// import question from './img/question-mark-background.jpg';
import focus from './img/focus-styles.png';
import github from './img/combobo-github-screenshot.png';
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
              <img className='large-profile' src={caitlin} width="150px" style={{marginTop : 0}} alt="Caitlin Geier" />
            </div>
            <div>
              <h3 className='text-centered'>Developer</h3>
              <img className='large-profile' src={harris} width="150px" style={{marginTop : 0}} alt="Harris Schneiderman" />
            </div>
          </div>
          <p>
            We design and build <strong>web applications </strong>
            which help <strong>development teams </strong>
            perform <strong>accessibility testing</strong>.
          </p>
        </Slide>
        <Slide>
          <h2 className='text-centered title large'>{'Today we\'re talking about:'}</h2>
          <img src={freddy} width="250px" style={{position:"absolute", top:"80px"}} alt="Freddy Kreuger likes comboboxes" />
          <ul className='list-right'>
            <li>Comboboxes</li>
            <li>Collaboration</li>
            <li>Prototyping</li>
            <li>ARIA</li>
          </ul>
        </Slide>
        <Slide>
          <h2 className='rest-centered'>A Note on Using ARIA:</h2>
          <blockquote>"If you can use a native HTML element or attribute with the semantics and behavior you require <strong>already built in</strong>, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, <strong>then do so</strong>."</blockquote>
          <a href="https://w3c.github.io/using-aria/#rule1" className='rest-centered'>ARIA Specifications: Rule #1</a>
        </Slide>
        <ChapterSlide>
          <div className='row'>
            <h1 className='rest-centered framing-title'>Framing the Problem</h1>
            <img src={framing} alt='' className='standalone-image framing' />
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
            <h2 className='title large' style={{paddingTop :'65px'}}>Accessibility === difficult</h2>
            <h3 className='title small'>Collaboration === less difficult</h3>
          </div>
          <img src={teamwork} className='bottom-aligned-image' alt='' />
        </Slide>
        <Slide>
          <Offscreen tag='h2'>Timeline for designing and building a complex widget</Offscreen>
          <img src={timeline} width="100%" alt='The process starts with designer working alone. The prototype is started before the design is finished. Once the prototype is working, it can be tested with users. The prototype, testing and implementation phases all overlap. The designer is involved throughout the whole process.' />
        </Slide>
        <ChapterSlide>
          <h2 className='title large chapter-heading'>Phase 1: Design</h2>
          <img className='chapter-image' src={designbg} alt=""/>
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
          <h2 className='title medium'>Selected Filters: With Annotations</h2>
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
          <h2 className='chapter-heading title large'>Phase 2: Prototypes</h2>
          <img src={prototypebg} className='chapter-image' alt="" />
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
            <h2 className='title large'>Coded prototype value</h2>
            <ul>
              <li>Screen reader testing early in process</li>
              <li>{'Brings up new questions'}</li>
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
            <img src={focus} width='450px' alt='active and selected styles in the prototype and the final implementation' />
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
          <div className='rest-centered'>
          <h2 className='text-centered title medium'>BTW: Combobo is open source!</h2>
          <img className='text-centered' src={github} width="430px" style={{marginTop:'10px'}} alt=''/>
          <p className='text-centered'>
            <span>{'Try it out: '}</span>
            <a
              href='https://dequelabs.github.io/combobo/demo/'
              target='_blank'
              rel='noopener noreferrer'
            >
              {'interactive demo'}
            </a>  |  <a
              href='https://github.com/dequelabs/combobo'
              target='_blank'
              rel='noopener noreferrer'
            >
              Combobo on GitHub
            </a>
          </p>
          </div>
        </Slide>
        <ChapterSlide>
          <h2 className='chapter-heading title large'>Phase 3: Usability Testing</h2>
          <img src={testingbg} className="chapter-image" alt="" />
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
          <div className='rest-centered'>
            <h3 className='title small text-centered'>Want to test with screen reader users?</h3>
            <h4 className='title large text-centered'>Code your prototype.</h4>
          </div>
        </Slide>
        <Slide className='central'>
          <h3 className='title large'>Combobo usability testing</h3>
          <ul>
            <li>4 internal users</li>
            <li>2 screen reader users</li>
            <li>Collaborative!</li>
          </ul>
        </Slide>
        <ChapterSlide>
          <h2 className='chapter-heading title large'>Phase 4: Implementation</h2>
          <img src={implementationbg} className='chapter-image' alt="" />
        </ChapterSlide>
        <Slide>
          <h3 className='title large'>Two flavors of combobox</h3>
          <h4 className='title small'>needed for WorldSpace Assure</h4>
          <ol>
            <li><strong>Single Select:</strong> checkpoint selection when adding issues</li>
            <li><strong>Multi Select:</strong> filters on issue list view</li>
          </ol>
        </Slide>
        <Slide className='central'>
          <h3 className='title large'>WorldSpace Assure Demo</h3>
          <a
            href="https://youtu.be/DlC4MtVefSE"
            target="_blank"
            rel='noopener noreferrer'
          >
            Demo video
          </a>
        </Slide>
        <Slide>
          <Offscreen tag='h2'>Revisiting the timeline for designing and building our complex widget</Offscreen>
          <img src={timeline} width="100%" alt='The process starts with designer working alone. The prototype is started before the design is finished. Once the prototype is working, it can be tested with users. The prototype, testing and implementation phases all overlap. The designer is involved throughout the whole process.' />
        </Slide>
        <ChapterSlide>
          <h2 className='chapter-heading title large'>Phase 4.5: Pattern Library</h2>
          <img src={patternlibbg} className='chapter-image' alt='' />
        </ChapterSlide>
        <Slide className='central'>
          <div>
            <h3 className='title large'>{'We\'ve built something solid'}</h3>
            <h4 className='title small'>...how can we preserve this?</h4>
          </div>
        </Slide>
        <Slide className='central'>
          <h3 className='title large'>Benefits of pattern libraries</h3>
          <ul>
            <li>DRY</li>
            <li>Great for accessibility</li>
            <li>Consistent look/feel</li>
            <li>Write less CSS and focus on functionality of app</li>
          </ul>
        </Slide>
        <Slide className='central rest-centered'>
          <h3 className='title large'>{'"The Apple Rule"'}</h3>
          <ul>
            <li>First team builds it.</li>
            <li>Second team improves it.</li>
            <li>Third team adds it to the pattern library.</li>
          </ul>
        </Slide>
        <Slide>
          <Offscreen tag='h3'>Pattern library combobox wireframes</Offscreen>
          <div className='rest-centered'>
            <img width='510px' src={dqplCombobox} alt='' />
          </div>
        </Slide>
        <Slide>
          <h3 className='title large text-centered'>Cauldron</h3>
          <h4 className='title small text-centered'>The Deque Pattern Library</h4>
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
        <Slide>
          <div className='rest-centered'>
            <h2 className='rest-centered medium'>Sign up to receive presentation slides:</h2>
            <p className='title medium'><a href="http://www.deque.com/csun18">{'http://www.deque.com/csun18'}</a></p>
          </div>
        </Slide>
      </DequeDeck>
    );
  }
}

export default App;
