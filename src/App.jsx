import { useState } from 'react';
import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import {CORE_CONCEPTS, EXAMPLES} from './data';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConsept.jsx';
import TabButton from './components/TabButton.jsx';
import { i, s } from 'framer-motion/client';

import React from 'react';
import Greeting from './components/Greeting.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import LoginMessage from './components/LoginMessage.jsx';
import TodoList from './components/TodoList.jsx';


//function CoreConcepts({title, description, image}){
//  return(
//    <li>
//      <img src={image} alt={title}/>
//      <h3>{title}</h3>
//      <p>{description}</p>
//    </li>
//  );
//}



function App() {
  const  [selectedTopic, setSelectedTopic] = useState();


  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }
  console.log('App component rendered');

  const tasks = ["Study", "Eat", "Sleep", "Walk", "Read", "Relax"];
  const isUserLoggedIn = true;

  return (
    <div>
      {/* <header><h1> Hello Word! </h1> </header> */}
      <Header></Header>
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (<CoreConcepts key={concept.title} {...concept} />))}
            {/* <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            /> */}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton 
              isSelected={selectedTopic === 'components'} 
              onSelect={() => handleSelect('components')}
              >Components
              </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          
            {!selectedTopic ? <p>Please select a topic.</p> : null}
            {selectedTopic ?(
            <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
            </div>
            ): null}
        </section>

        <div>
          <Greeting name="Yevhenii e2205685" />
          <ThemeToggle />
          <LoginMessage isLoggedIn={isUserLoggedIn} />
          <h2>To-Do List</h2>
          <TodoList todos={tasks} />
        </div>

      </main>
    </div>
  );
} export default App;