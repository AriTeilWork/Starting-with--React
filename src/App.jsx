
import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import {CORE_CONCEPTS} from './data';
import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConsept.jsx';

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
  return (
    <div>
      <Header></Header>
      <main>
        <section id='core-concepts'>
        <h2>Core Consepts</h2>
          <ul>
            <CoreConcepts
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
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;