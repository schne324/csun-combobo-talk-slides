import React from 'react';
import Highlight from 'react-highlight';
import ComboboDemo from './ComboboDemo';
import ComboboMulti from './ComboboMulti';
// images
import logo from '../../img/deque-logo-white.png';
import caitlin from '../../img/caitlin.jpg';
import harris from '../../img/harris.jpg';
import oldFilters from '../../img/old-assure-filters.png';
import multiExample1 from '../../img/multiselect-combobox-example-1.png';
import multiExample2 from '../../img/multiselect-combobox-example-2.png';
import singleExample1 from '../../img/single-select-combobox-example-1.png';
import singleExample2 from '../../img/single-select-combobox-example-2.png';
import teamwork from '../../img/teamwork.png';
import codevdesign from '../../img/code-vs-design.png';
import question from '../../img/question-mark-background.jpg';
import filters1 from '../../img/filters-review-1.png';
import filters2 from '../../img/filters-review-2.png';
import filters2annot from '../../img/filters-review-2-annotated.png';
import complexity from '../../img/complexity-and-usability-testing.png';
import cauldronLogo from '../../img/cauldron.png';
import dqplCombobox from '../../img/dqpl-combo.png';
import comboboLogo from '../../img/combobo-logo.png';
import focus from '../../img/focus-styles.png';

const slides = [
  // title slide
  (
    <div>
      <div className='logo'>
        <img src={logo} alt='Deque' width={'110'} />
      </div>
      <h1 className="title-slide">Designers and Developers Working Together - Mass Hysteria!</h1>
      <h2>(And Accessible Websites!)</h2>
      <div className='by-who'>
        <br/>
        <p>Caitlin Geier and Harris Schneiderman</p>
        <p className="offscreen">Use arrow keys to navigate through slides</p>
      </div>
    </div>
  ),
  (
    <div>
      <h2 className="title-offscreen">Who we are</h2>
      <div className="two-col profile">
        <img src={harris} alt="" role='presentation' />
        <h3>Harris Schneiderman</h3>
        <p>Developer</p>
      </div>
      <div className="two-col profile">
        <img src={caitlin} alt="" role='presentation' />
        <h3>Caitlin Geier</h3>
        <p>UX Designer</p>
      </div>
    </div>
  ),
  (
    <div>
      <h2 className="large">What We Do</h2>
      <h3>We work for <strong>Deque Systems</strong>.</h3>
      <br/>
      <p>We design and build <strong>web applications</strong> to help <strong>development teams</strong> perform <strong>accessibility testing</strong>.</p>
    </div>
  ),
  (
    <div>
      <h2>{'Today, we\'re talking about:'}</h2>
      <ul>
        <li>Collaboration</li>
        <li>Comboboxes</li>
        <li>Being Awesomely Accessible</li>
      </ul>
    </div>
  ),
  (
    <div>
      <h2 className="title-centered">Framing the Problem</h2>
      <div className="full-image">
        <img src={oldFilters} width="400px" alt="multi-select filters in WorldSpace Assure prior to version 1.4" />
      </div>
    </div>
  ),
  (
    <div>
      <h2 className="title-offscreen">Framing the Problem: Existing Comboboxes</h2>
      <div className="two-col">
        <img src={singleExample1} alt="single select combobox example 1"/>
        <img src={multiExample2} alt="multi select combobox example 1"/>
      </div>
      <div className="two-col">
        <img src={multiExample1} alt="multi select combobox example 2"/>
        <img src={singleExample2} alt="single select combobox example 2"/>
      </div>
    </div>
  ),
  (
    <div>
      <h2 className="title-centered large">Accessibility === difficult</h2>
      <h3 className="title-centered image-space">Working with teammates === less difficult</h3>
      <div className="full-image">
        <img className="bottom-aligned-image" src={teamwork} width="500px" alt="" role='presentation' />
      </div>
    </div>
  ),
  (
    <div>
      <h1 className="title-centered">Design Reviews</h1>
    </div>
  ),
  (
    <div>
      <div className="background-image">
        <img src={codevdesign} alt="" role='presentation' width="600px"/>
      </div>
      <div className="two-col">
        <h2 className="align-right">Designer</h2>
      </div>
      <div className="two-col">
        <h2 className="align-left white-text">Developer</h2>
      </div>
    </div>
  ),
  (
    <div>
      <div className="background-image img-opacity">
        <img src={question} alt="" role='presentation' width="600px"/>
      </div>
      <h2 className="title-centered">What</h2>
      <h2 className="title-centered">Who</h2>
      <h2 className="title-centered">Why</h2>
      <h2 className="title-centered">Where</h2>
      <h2 className="title-centered">When</h2>
    </div>
  ),
  (
    <div>
      <h2 className="title-centered">Design Responsibilities</h2>
      <ul>
        <li>Color contrast</li>
        <li>Visible focus</li>
        <li>Visual page structure</li>
        <li>Images and alternative text</li>
        <li>Navigation and consistency</li>
        <li>Etc.</li>
      </ul>
    </div>
  ),
  (
    <div>
      <h2 className="title-centered">Development Responsibilities</h2>
      <ul>
        <li>Semantic code</li>
        <li>Keyboard operability</li>
        <li>ARIA (if applicable)</li>
        <li>Screen reader compatability</li>
        <li>Etc.</li>
      </ul>
    </div>
  ),
  (
    <div>
      <h2 className="title-centered">Showing Selected Filters: Before</h2>
      <div className="full-image">
        <img src={oldFilters} width="400px" alt="multi-select filters in WorldSpace Assure prior to version 1.4" />
      </div>
    </div>
  ),
  (
    <div>
      <h2 className="title-centered">Showing Selected Filters: First Review</h2>
      <div className="full-image">
        <img src={filters1} width="400px" alt="new multi-select filters showing selected items in a side panel in the widget" />
      </div>
    </div>
  ),
  (
    <div>
      <h2 className="title-centered">Showing Selected Filters: Second Review</h2>
      <div className="full-image">
        <img src={filters2} width="530px" alt="after second review, selected items show beneath filters as separate section" />
      </div>
    </div>
  ),
  (
    <div>
      <h1 className="title-centered">Design Annotations</h1>
    </div>
  ),
  (
    <div>
      <h2>Annotations allow designers to communicate design details to other team members.</h2>
    </div>
  ),
  (
    <div>
      <h3 className="title-offscreen">Design example without annotations</h3>
      <div className="full-image">
        <img src={filters2} width="530px" alt="flat design of multi-select filters and pills without annotations" />
      </div>
    </div>
  ),
  (
    <div>
      <h3 className="title-offscreen">Design example with annotations</h3>
      <div className="full-image">
        <img src={filters2annot} width="530px" alt="same wireframes as previous slide with annotations" />
      </div>
    </div>
  ),
  (
    <div>
      <h2 className="title-centered">Annotations === Documentation</h2>
    </div>
  ),
  (
    <div>
      <h2 className="title-centered">Annotation Locations</h2>
      <ul>
        <li>Part of design comps</li>
        <li>Requirements documents</li>
        <li>Stories (i.e. Jira tickets)</li>
        <li>Whiteboards</li>
        <li>Email / Slack</li>
      </ul>
    </div>
  ),
  (
    <div>
      <h2>Annotating Accessibility Features</h2>
      <strong>Questions to ask:</strong>
      <ul>
        <li>Heading level?</li>
        <li>Which HTML element to use?</li>
        <li>What&#39;s the alt text?</li>
        <li>Reading order?</li>
        <li>Focus order?</li>
        <li>What happens when...?</li>
      </ul>
    </div>
  ),
  (
    <h1>Prototyping</h1>
  ),
  (
    <div>
      <h2>Types of prototypes</h2>
      <ul>
        <li><strong>Low fidelity</strong> for testing layout, content, etc.</li>
        <li><strong>Higher fidelity</strong> for testing interactions</li>
        <li><strong>Coded</strong> for testing with keyboard / AT users</li>
      </ul>
    </div>
  ),
  (
    <h2>Interactive Prototype Case Study: Combobo</h2>
  ),
  (
    <div>
      <h3>Combobo</h3>
      <p>An open source modular / accessible combobox plugin written by yours truly</p>
      <img className='combobo-logo' src={comboboLogo} width='150px' alt='' role='presentation' />
    </div>
  ),
  (
    <div>
      <h3 className='title-offscreen'>Example combobo instantiation</h3>
      <Highlight className='js'>
        {
          `
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
          `
        }
      </Highlight>
    </div>
  ),
  (
    <div>
      <h3><Highlight className='js'>{'{ useLiveRegion: true }'}</Highlight></h3>
    </div>
  ),
  (
    <div>
      <h3>
        <Highlight className='js'>{'{ activeClass: "active", selectedClass: "selected" }'}</Highlight>
      </h3>
      <img src={focus} width="450px" alt="focus styles for active, selected, and active and selected for both combobo and worldspace assure" />
    </div>
  ),
  (
    <div>
      <h3 className='title-offscreen'>Combobo events / methods (code sample)</h3>
      <Highlight className='js'>
        {
          `
combobo
  .on('change', function () {
    console.log('stuff has changed and stuff');
  })
  .on('selection', function () {
    console.log('selection made!');
  })
  .goTo(combobo.getOptIndex() + 5) // move 5 options forward
  .select(); // select that option
          `
        }
      </Highlight>
    </div>
  ),
  (
    <div>
      <h3>The value in the interactive prototype Combobo</h3>
      <ul>
        <li>Allow for screen reader testing very early in the process</li>
        <li>{'Made us ask questions we hadn\'t asked before'}</li>
        <li>{'Allowed for enhancements to be made without changing our app\'s code'}</li>
      </ul>
    </div>
  ),
  (
    <ComboboDemo />
  ),
  (
    <ComboboMulti />
  ),
  (
    <div>
      <h1>Usability Testing</h1>
    </div>
  ),
  (
    <div>
      <h2 className="title-offscreen">More complex interactions === more important to do usability testing</h2>
      <div className="full-image">
        <img src={complexity} width="430px" alt="" role='presentation' />
      </div>
    </div>
  ),
  (
    <div>
      <h2>Targeted Usability Testing</h2>
      <p>{'(for when you don\'t have time to test All The Things)'}</p>
      <ul>
        <li>Complex interactions</li>
        <li>Unique interactions and new patterns</li>
        <li>{'Use cases you aren\'t sure about'}</li>
      </ul>
    </div>
  ),
  (
    <div>
      <h2 className="title-centered">Want to test with screen reader users?<br/><br/>
      Code your prototype.</h2>
    </div>
  ),
  (
    <div>
      <h2>How we tested Combobo</h2>
      <ul>
        <li>4 internal users</li>
        <li>2 screen reader users</li>
        <li>Collaboratively!</li>
      </ul>
    </div>
  ),
  (
    <div>
      <h2>Did we mention Combobo is open source?</h2>
      <p>
        <span>{'Try it out: '}</span>
        <a href='https://schne324.github.io/combobo/demo/' target='_blank'>
          {'interactive demo'}
        </a>
      </p>
      <p><a href='https://github.com/schne324/combobo' target='_blank'>Combobo on GitHub</a></p>
    </div>
  ),
  (
    <div>
      <h1>{'We\'ve built something solid'}</h1>
      <h2>...how can we preserve this?</h2>
    </div>
  ),
  (
    <h2>Pattern libraries FTW!</h2>
  ),
  (
    <div>
      <h2>Benefits of pattern libraries</h2>
      <ul>
        <li>DRY</li>
        <li>Great for accessibility</li>
        <li>Consistent look/feel</li>
        <li>Write less CSS and focus on functionality of app</li>
      </ul>
    </div>
  ),
  (
    <div>
      <h2>{'Why isn\'t Combobo in the pattern library?'}</h2>
      <p>The apple rule...</p>
    </div>
  ),
  (
    <div>
      <h2>Will it be hard to add to it to the pattern library?</h2>
      <p>Thanks to Combobo and existing designs, this will be easy!</p>
    </div>
  ),
  (
    <div>
      <h2 className='title-offscreen'>Pattern library combobox wireframes</h2>
      <img width='550px' src={dqplCombobox} alt='' role='presentation' />
    </div>
  ),
  (
    <div>
      <h2>Deque Pattern Library: Cauldron</h2>
      <img src={cauldronLogo} alt='' width='150px' role='presentation' className='dqpl' />
      <div>
        <a href='https://pattern-library.dequelabs.com/' target='_blank'>
          {'https://pattern-library.dequelabs.com/'}
        </a>
      </div>
      <p>{'It\'s open source and accessible!'}</p>
    </div>
  ),
  (
    <div>
      <h2 className="title-centered">Design Reviews</h2>
      <h2 className="title-centered">Design Annotations</h2>
      <h2 className="title-centered">Prototyping</h2>
      <h2 className="title-centered">Usability Testing</h2>
      <h2 className="title-centered">Pattern Libraries</h2>
    </div>
  ),
  (
    <div>
      <h1 className="title-centered">"Agile Accessibility" - Dylan Barrell</h1>
      <p className="title-centered">Deque Systems sponsor talk</p>
      <br />
      <p className="title-centered"><strong>2:15 PM Thursday</strong> (today!) in <strong>Room: Nile</strong></p>
    </div>
  ),
  (
    <div>
      <h1 className="title-centered">Thanks!</h1>
      <div className="contact-cards">
        <img src={caitlin} width="100px" alt="" role='presentation'/>
        <div className="contact-text">
          <strong>Caitlin Geier</strong>
          <p>caitlin.geier@deque.com</p>
          <a href="https://twitter.com/CaitlinGeier">@CaitlinGeier</a>
        </div>
      </div>
      <div className="contact-cards">
        <img src={harris} width="100px" alt="" role='presentation'/>
        <div className="contact-text">
          <strong>Harris Schneiderman</strong>
          <p>harris.schneiderman@deque.com</p>
          <a href="https://twitter.com/theHarrisius">@theHarrisius</a>
        </div>
      </div>
    </div>
  )
];

export default slides;
export const length = slides.length;
