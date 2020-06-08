# SCRUM 

cf projet 2

# GIT

### Faire des commits atomiques correctement commentés et des PR de taille humaine :

cf projet 2

# Intégration

### Connaître les règles de base d'ergonomie et de design (UX/UI) :

* Utile (useful)

* Utilisable (usable)

* Désirable (desirable)

* Accessible (accessible)

* Localisable (findable)

* Crédible (credible)

* Profitable (valuable)

### Structurer une page en HTML5

cf P1, P2, P3, hackathon...

### Respecter les bonnes pratiques SEO :

* Vérifiez que toutes vos pages ont une balise META title qui ne dépasse pas 65 caractères idéalement.

* Rédigez des balises META description entre 70 et 320 caractères qui donnent envie aux internautes de cliquer.

* Vos URLs doivent être compréhensibles par un humain, et idéalement ne dépassent pas 115 caractères.

* Utilisez des images dans vos contenus, en prenant soin de renseigner les balises alt et title de vos visuels.

* Prenez soins de garder la taille de vos images la plus légère possible pour ne pas impacter défavorablement votre temps de chargement.

* Assurez-vous que votre site est compatible avec les appareils mobiles et évitez les erreurs UX basiques d’un site mobile

* Ajoutez une Favicon à votre site, qui apparaisse sur tous les navigateurs

# Wild

### S'autoformer à une nouvelle technologie en utilisant les ressources appropriées telles que tutoriel, vidéos, docs, évaluer les avantages et les inconvénients de la technologie :

php, sass

### Pitcher son idée / son projet en un temps limité :

cf P2

# BDD

### Créer et modifier une base de données grâce au langage SQL	:

CREATE TABLE student 
(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	firstname VARCHAR(100),
	lastname VARCHAR(150),
	birthday DATE,
	address TEXT
);

INSERT INTO student (firstname, lastname, birthday)
	VALUES ('Arthur', 'Pendragon', '1984-01-22');

UPDATE school SET capacity=30 WHERE city='Orléans';

DELETE FROM student
WHERE firstname='Perceval';

### Modéliser une base de données :

cf P3

### Maîtrise de XmlHttpRequest(AJAX) / Fetch API :

cf checkpoint 2, hackathon, P2

### Exploiter un schema JSON et exploiter une API :

cf checkpoint 2, hackathon, P2

### Travailler avec des bibliothèques externes (Axios, Moment, Lodash ...) :

cf P2 (Axios et Lodash)

### ESLint avec un StyleGuide :

cd P2

# React

### Consommer une API :

cf checkpoint 2, hackathon, P2

### Déployer mon application :

cf P2, hackathon

### Créer un formulaire :
 ```jsx

 const Contact = () => {
  const [form, setForm] = useState({
    firstname:'',
    lastname:'',
    phone: '',
    email: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post Axios
  }

  return (
    <div>
      <h1>Contact</h1>
      <form className='contact-form' noValidate autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
        <TextField
        className='input-contact'
        id="outlined-basic"
        label="Prénom"
        variant="outlined"
        value={form.firstname}
        onChange={(e) => handleChange(e)}
        name='firstname'/>
        <TextField
        className='input-contact'
        id="outlined-basic"
        label="Nom"
        variant="outlined"
        value={form.lastname}
        onChange={(e) => handleChange(e)}
        name='lastname'
        />
        <TextField
        className='input-contact'
        id="outlined-basic"
        label="Téléphone"
        variant="outlined"
        value={form.phone}
        onChange={(e) => handleChange(e)}
        name='phone'
        required
        />
        <TextField
        className='input-contact'
        id="outlined-basic"
        label="E-mail"
        variant="outlined"
        value={form.email}
        onChange={(e) => handleChange(e)}
        name='email'
        type='mail'
        required
        />
        <input
        className='input-contact input-submit'
        type='submit'
        value='valider' />
      </form>
    </div>
  );
};
```

### Connaître le cycle de vie d'un composant :

cf P2, hackathon

### Mettre en place Redux :
installation des modules
```
npm i --save redux react-redux
```
dans index.js : 
```jsx
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './counterReducer';

const store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  document.getElementById('root')
);

```
dans counterReducer.js
```jsx
const counterReducer = (state = 0, action) => {
  switch (action.type) {
      case 'ADD1':
          return state + 1;
      case 'ADD10':
          return state + 10;
      case 'REMOVE1':
          return state - 1;
      case 'REMOVE10':
          return state - 10;
      case 'RESET':
          return 0
      default:
          return state;
  }
}

export default counterReducer;
```
dans CounterContainer
```jsx
import React from 'react'
import { connect } from 'react-redux'

const Counter = ({ counter, dispatch }) => {
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => dispatch({ type: 'ADD1' })}>Add 1</button>
      <button onClick={() => dispatch({ type: 'REMOVE1' })}>Remove 1</button>
      <button onClick={() => dispatch({ type: 'ADD10' })}>Add 10</button>
      <button onClick={() => dispatch({ type: 'REMOVE10' })}>Remove 10</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  counter : state
})


export default connect(mapStateToProps)(Counter)
```
### Utiliser les hooks :

cf Créer un formulaire ci-dessus





