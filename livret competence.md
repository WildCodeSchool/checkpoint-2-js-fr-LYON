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
    
 >Pour les bonnes pratiques SEO (Search engine optimization) c'est pour mieux référencer le site ou l'appli graces aux petits robots~-esclaves de googles pour mieux surveiller le net~ et référencer le site le plus haut possible lors d'une recherche sur les différens moteurs de recherches. Pour cela on peu déjà utiliser le validateur W3C et ensuite faire des balises meta courtes, avec description/auteurs/langues, utilisation des bonnes balises sémantiques, les alts sur les images....
 
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


 ### React

>Pour le JSX c'est un mélange de xml et de react ce qui ressemble à envoyer des balises HTML avec des variables de react pour généré une page plus facilement

>Pour le déboggeur c'est installé et utile, me faut juste la prise en main mais je sais l'utiliser

>Pour le composant fonctionnel en fait c'est une fonctions qui reçois les props d'un évenement ou autre et qui permet de rendre react dynamique, même si les class sont encore plus dynamique et pour les fonctions il faut plutôt des hooks 

>Pour l'affichage conditionel il y a surtout l'opérateur ternaire comme {favorite ? 'favorite' : '' } pour par exemple l'étoile de la quête simpson quotes

>Pour les composants avec map cela s'utilise surtout avec un tableau ou un objet et avec map on le parse pour lui effectuer un "calcule" et ensuite créer un nouveau tableau (tableau.map(paramètre => code)

>Pour finir, pour le routing on la mis dans notre P2 ! C'est avec react router, à installer séparément, on peut même mettre des variables pour l'URL avec /:VariableName c'est top !
