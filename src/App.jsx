
import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

const ReactDecsriptions = ['Fundamental','Crucial','Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description =ReactDecsriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
} 

function CoreConcepts(props) {
  return( <li>
    <img src={props.image} alt={props.title}/>
    <h3>{props.title}</h3>
    <P>{props.description}</P>
  </li>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id='core-concepts'></section>
        <h2>Core Consepts</h2>
        <ul>
          <CoreConcepts
            title="Components"
            description="The core UI building block."
            image={componentsImg}/>
          <CoreConcepts title="props"/>
          <CoreConcepts/>
          <CoreConcepts/>
        </ul>
      </main>
    </div>
  );
}

export default App;