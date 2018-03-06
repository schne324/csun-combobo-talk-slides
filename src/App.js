import React, { Component } from 'react';
import { DequeDeck, TitleSlide, Slide, ChapterSlide } from 'deque-slide-deck';
import { Highlight } from 'react-fast-highlight';
import Offscreen from 'react-offscreen';
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
      <DequeDeck>
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
          <h2 className='title large'>What We Do</h2>
          <p>We are a UX Designer and a Web Developer</p>
          <p>
            Which basically means we design and build <strong>web applications </strong>
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
        <ChapterSlide>
          <div className='row'>
            <h1>Framing the Problem</h1>
            <img src={framing} alt='' width='125px' className='standalone-image framing' />
          </div>
        </ChapterSlide>
        <Slide>
          <Offscreen tag='h2'>Example of the problem</Offscreen>
          <img
            className='standalone-image'
            src={oldFilters}
            width='475px'
            alt='multi-select filters in WorldSpace Assure prior to version 1.4'
          />
        </Slide>
        <Slide>
          <Offscreen tag='h2'>Framing the Problem: Existing Comboboxes</Offscreen>
          <div className='row img-row'>
            <img src={singleExample1} width='40%' alt="single select combobox example 1"/>
            <img src={multiExample2} width='40%' alt="multi select combobox example 1"/>
            <img src={multiExample1} width='40%' alt="multi select combobox example 2"/>
            <img src={singleExample2} width='40%' alt="single select combobox example 2"/>
          </div>
        </Slide>
        <Slide>
          <div className='text-centered space-top'>
            <h2 className='title large'>Accessibility === difficult</h2>
            <h3 className='title medium'>Collaboration === less difficult</h3>
          </div>
          <img src={teamwork} className='standalone-image bottom-aligned-image' alt='' />
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
          <h2 className='title medium'>Showing Selected Filters: Before</h2>
          <img
            className='standalone-image main-image'
            width='400px'
            src={oldFilters}
            alt='multi-select filters in WorldSpace Assure prior to version 1.4'
          />
        </Slide>
        <Slide>
          <h2 className='title medium'>Showing Selected Filters: First Review</h2>
          <img
            className='standalone-image main-image'
            width='400px'
            src={filters1}
            alt='new multi-select filters showing selected items in a side panel in the widget'
          />
        </Slide>
        <Slide>
          <h2 className='title medium'>Showing Selected Filters: Second Review</h2>
          <img
            className='standalone-image main-image'
            width='500px'
            src={filters2}
            alt='after second review, selected items show beneath filters as separate section'
          />
        </Slide>
        <Slide>
          <Offscreen tag='h3'>Annotations added after second review</Offscreen>
          <img
            className='standalone-image main-image'
            width='500px'
            src={filters2annot}
            alt='same wireframes as previous slide with annotations'
          />
        </Slide>
        <Slide>
          <div className='center-center'>
            <h2 className='title large'>Get developers involved!</h2>
            <p>being involved earlier means starting development sooner.</p>
          </div>
        </Slide>
        <ChapterSlide>
          <h2 className='title large'>Phase 2: Prototypes</h2>
        </ChapterSlide>
        <Slide>
          <h2 className='title large'>Types of prototypes</h2>
          <ul>
            <li><strong>Low fidelity</strong> for testing layout, content, etc.</li>
            <li><strong>Higher fidelity</strong> for testing interactions</li>
            <li><strong>Coded</strong> for testing with keyboard / AT users</li>
          </ul>
        </Slide>
        <Slide>
          <h2 className='title large'>The value of prototyping</h2>
          <ul>
            <li>Screen reader testing early in process</li>
            <li>{'Brought up new questions'}</li>
            <li>{'Make enhancements without changing application code'}</li>
          </ul>
        </Slide>
        <ChapterSlide>
          <h2 className='title large'>
            Interactive Prototype Case Study: Combobo
          </h2>
        </ChapterSlide>
        <Slide>
          <h3 className='title medium'>Combobo</h3>
          <p>A modular / accessible combobox plugin written by Harris</p>
          <img className='standalone-image' src={comboboLogo} width='200px' alt='' />
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
        <Slide>
          <div className='center-center code-slide'>
            <h3 className='centered'>
              <Highlight languages={['js']}>
                {'{ useLiveRegion: true }'}
              </Highlight>
            </h3>
          </div>
        </Slide>
        <Slide>
          <div className='code-slide active-selected'>
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
          <Highlight languages={['js']} className='events-methods'>
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
        </Slide>
        <Slide>
          <h2 className='title'>TODO: Combobo demo slides</h2>
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
        </Slide>
        <Slide>
          <h3 className='title large'>(TODO: screenshots of filters - before)</h3>
        </Slide>
        <Slide>
          <h3 className='title large'>(TODO: link to assure demo and stuff)</h3>
        </Slide>
        <ChapterSlide>
          <h2 className='title large'>Phase 4.5: Pattern Library</h2>
          <p>TODO: Only do this if we have time!</p>
        </ChapterSlide>
        <Slide>
          <div className='center-center'>
            <h3 className='title large'>{'We\'ve built something solid'}</h3>
            <h4 className='title small'>...how can we preserve this?</h4>
          </div>
        </Slide>
        <Slide>
          <div className='center-center'>
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
          <h3 className='title large'>Will it be hard to add to it to the pattern library?</h3>
          <p>Thanks to Combobo and existing designs, this will be easy!</p>
        </Slide>
        <Slide>
          <Offscreen tag='h3'>Pattern library combobox wireframes</Offscreen>
          <div className='standalone-image space-top'>
            <img width='550px' src={dqplCombobox} alt='' />
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
            <h2 className='title large'>Thanks!</h2>
            <div className='row contact-cards'>
              <div className='card'>
                <img src={caitlin} width='100px' alt='' />
                <div className='contact-text'>
                  <strong>Caitlin Geier</strong>
                  <p>caitlin.geier@deque.com</p>
                  <a href='https://twitter.com/CaitlinGeier'>@CaitlinGeier</a>
                </div>
              </div>
              <div className='card'>
                <img src={harris} width='100px' alt='' />
                <div className='contact-text'>
                  <strong>Harris Schneiderman</strong>
                  <p>harris@deque.com</p>
                  <a href="https://twitter.com/theHarrisius">@theHarrisius</a>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </DequeDeck>
    );
  }
}

export default App;
