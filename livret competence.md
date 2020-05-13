### UNIX

> Pour le multi tache ps permet de lister les processus en affichant le PID (id en gros), le TTY indique le port utilisé, TIME qui affiche le temps utilisé par le processus et CMD qui affiche le nom de la commande utilisé par le processus. On peut utiliser -aux pour le détailler. top permet de faire comme le gestionnaire de tache windows avec un affichage dynamique, 
on peut aussi lui donner en paramètre -d Secondes pour lui donner un taux de rafraichissemment. et kill permet de communiquer avec un processus, l'arrêter voir le tuer en cas de soucis et ce, graçe à son ID (PID).

### GIT

>Pour les tags de git, ça sert, si j'ai bien compris, à mettre une étiquette de "version" sur un état de publication avec git tag -a v1.0.3 -m 'ma version v1.0.3'. On peut les listers avec git tag et affiner la rechercher avec une commande du style : git tag -l 'v1.0.3*' pour ne lister que les versions 1.0.3.X.

### Integration

>Pour les frameworks CSS on en avait pas utiliser à l'époque mais avec react bootsrap je comprend mieux.
>1. On cherche sur le net ce qu'on veux exactement
>2. On importe ou créer un projet Bootsrap
>3. On colle le code donner (en oubliant pas de faire import from ... depuis react ou la balise meta correspondante dans le html
>4. Pour "personaliser" on doit souvent passer par des class et faire une "surcharge" du CSS déjà implanté de base.
    
 >Pour les pré-processeurs css (sass par ex) ça permet de géré dynamiquement le css, de façon à en faire casiment un langage de programation pure avec des fonctions, des boucles, des variables et j'en passe... Bref, même si avec CSS3 y'a plein de nouvelles choses comme des variables en natif, ça permet toujours plus de liberté ~et de faignantise pour le dev web moderne...~ oups ! ^^ en bref, le CSS plus structuré et plus puissant qu'en natif.
    
 >Pour les bonnes pratiques SEO (Search engine optimization) c'est pour mieux référencer le site ou l'appli graces aux petits robots/~esclaves de googles pour mieux surveiller le net~ et référencer le site le plus haut possible lors d'une recherche sur les différens moteurs de recherches. Pour cela on peu déjà utiliser le validateur W3C et ensuite faire des balises meta courtes, avec description/auteurs/langues, utilisation des bonnes balises sémantiques, les alts sur les images....
 
 >Pour les ESN y'a les ESN ou la c'est une entreprise qui t'engage et t'envoie chez le cliens pour bosser directement chez eux. Pour les freelances c'est les personnes qui éxecute leurs métiers souvent seuls, sans boites ou patron, directement avec leurs clients. Pour cela il faut avoir de solides bases à mon sens pour évoluer et se faire une place dans ces eaux la.

### ES6+

>Pour les class : 

    class Person {
	constructor(lastName, firstName) {
		this.lastName = lastName;
		this.firstName = firstName;
	}
	HelloWorld() {
		console.log(`My Name is &{this.firstName}`);
	    }
    }

>L'instanciation qui permet de déclaré un objet dans une class et de lui passer les méthodes, manipuler ses données ect... (le mot clé this se réfère à l'objet lui même à l'intérieur d'une class ('instance courante') ).

    const chuk = new Person ('chuk', 'Norris');
    chuk.HelloWorld();

>L'héritage : 

>*Permet de créer une nouvelle class a partir d'une autre déjà en place
>*Permet de contenir tout ses attributs et méthodes
>*Permet de surcharger cette même class et lui changer ses attributs

>Les regex sont très utiles, ça permet de, on va dire grossièrement, "comparé" des mots que l'utilisateur utilise, on peut par exemple vérifier que son adresse mail soit bien yyy@xxx.fr avec la suite 
	
	/.+@.+\..+/
	(Commence par un ou plusieurs caractères => .+
	 Contient ensuite le caractère @ => @
	 Puis contient ensuite encore un ou plusieurs caractères => .+
	 Prend ensuite le caractère . => \.
	 Et finit par un ou plusieurs caractères => .+)
	 
>On peut aussi vérifier les mots de passe contenant bien un @ ou autre caractère spécial ect...

>Babel et autres langages de transpilling permettent, entre autre, de convertir le langage ES6+ dans une version plus "ancienne" pour les navigateur ne le supportant pas encore par exemple. React l'inclut de base si je ne me trompe pas.


 ### React

  >Pour les hooks ça permet de rendre les composants fonctionnel dynamique, ce qui permet de gagner beaucoup de temps et un code plus concis graces aux useState qui se désctruture en 2 variable, une pour gérer une fonction ressemblant au setState, et l'autre étant un tableau contenant le contenu mis entre les useState() et ce qui est mis à jour via setCount(count + 1). Il y a aussi useContext, useRef, on peut en faire nous même...
  
 >Les cycles de vie y'a déjà le componentDidMount qui permet de lancer une requête ou un composant lors du "montage" du composant, DidUpdate qui s'active lorsque le state ou les props se mettent à jour, et DidUnmount lorsque le composant est enlever. (Par exemple le compteur qu'on à fait pour l'atelier avec didMount pour le lancer, et un clearintervalle lorsqu'on l'enlève pour gagner des perfs sur l'appli).

>Un composant class se créer comme ceci :

	class NameClass extends React.Component {
		constructor(props) {
		super(props)
		this.state = {
			name: value
		}
		}
		}
>Le constructor est obligatoire SAUF si on utilise la récente syntaxe avec juste "state = { name: value } de plus si on met un constructor, super(props) deviens obligatoire. Il permet de récupéré les props de la class parent de react.

 ### Wild
 
 ### Scrum


