### UNIX

> Pour le multi tache ps permet de lister les processus en affichant le PID (id en gros), le TTY indique le port utilisé, TIME qui affiche le temps utilisé par le processus et CMD qui affiche le nom de la commande utilisé par le processus. On peut utiliser -aux pour le détailler. top permet de faire comme le gestionnaire de tache windows avec un affichage dynamique, 
on peut aussi lui donner en paramètre -d Secondes pour lui donner un taux de rafraichissemment. et kill permet de communiquer avec un processus, l'arrêter voir le tuer en cas de soucis et ce, graçe à son ID (PID).

### GIT

>Pour les tags de git, ça sert, si j'ai bien compris, à mettre une étiquette de "version" sur un état de publication avec git tag -a v1.0.3 -m 'ma version v1.0.3'. On peut les listers avec git tag et affiner la rechercher avec une commande du style : git tag -l 'v1.0.3*' pour ne lister que les versions 1.0.3.X.

>Pour la PR à relire par les autres, lors d'une pull request on ajoute les personnes depuis github à qui on veux que la pr fasse une notif pour qu'ils viennent voir et donner leurs avis/suggesstions/correction.

>Pour les commits atomiques et les pr taille humaine : Des commits atomiques c'est faire git commit -m "#NumdeLus et décrire l'ajout fait" et le faire au mieux quand l'appli est fonctionnel, et non face à une erreur ou un bug pour revenir en arrière à tout moment. Les PR à taille humaine c'est une PR pas comme celle qu'on ta fait la première semaine sur notre P2, donc séparé les PR par US pour que le code reviewer et le client/po puissent valider des petites partie à merge, plutôt qu'un énorme ajout qui risque de tout cassé.

### Integration

>Pour les frameworks CSS on en avait pas utiliser à l'époque mais avec react bootsrap je comprend mieux.
>1. On cherche sur le net ce qu'on veux exactement
>2. On importe ou créer un projet Bootsrap
>3. On colle le code donner (en oubliant pas de faire import from ... depuis react ou la balise meta correspondante dans le html
>4. Pour "personaliser" on doit souvent passer par des class et faire une "surcharge" du CSS déjà implanté de base.
    
 >Pour les pré-processeurs css (sass par ex) ça permet de géré dynamiquement le css, de façon à en faire casiment un langage de programation pure avec des fonctions, des boucles, des variables et j'en passe... Bref, même si avec CSS3 y'a plein de nouvelles choses comme des variables en natif, ça permet toujours plus de liberté ~et de faignantise pour le dev web moderne...~ oups ! ^^ en bref, le CSS plus structuré et plus puissant qu'en natif.
    
 >Pour les bonnes pratiques SEO (Search engine optimization) c'est pour mieux référencer le site ou l'appli graces aux petits robots/~esclaves de googles pour mieux surveiller le net~ et référencer le site le plus haut possible lors d'une recherche sur les différens moteurs de recherches. Pour cela on peu déjà utiliser le validateur W3C et ensuite faire des balises meta courtes, avec description/auteurs/langues, utilisation des bonnes balises sémantiques, les alts sur les images....
 
 >Pour les métiers web :
 
>ESN : C'est une Entreprise de Service du Numérique. Le principe est de réaliser une prestation directement auprès d'un client. C'est un métier avec beaucoup de déplacement sur des missions plus ou moins longue.

>Agence Web : C'est une entreprise spécialisée dans les différentes formes de communication et de promotion sur le web.

>Freelance : C'est un développeur travaillant pour son propre compte.

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

>Les requêtes AJAX ( ~La lessive...~ pardon, l'asynchronous JavaScript and XML) permet de faire des requêtes aux api de façon asynchrone, donc sans recharger toute la page, pour juste mettre à jour une partie de celle ci (comme google drive, spotify...) et de façon native graçe à fetch inclut nativement dans javascript.

>Les bibliothèques externes comme axios sont un peu comme fetch, mais en plus puissant avec de meilleurs gestions des erreurs, il faut juste l'installer avec npm install et l'importé dans son code.

>Les .catch permettent, en cas d'erreurs par exemple, un temps de chargement trop long, de stoper la recherche de l'api et de renvoyer le code écrit dans la fonction (une alert(), un console.log, une redirection....)

>Le schéma JSON, c'est une façon clair de lire des données d'une API. Par exemple : 

	0:
	   name: chuk,
	   lastname: norris,
	   job: divinité
	1:
	   screen: url

Ect. En gros c'est un tableau d'objet, ou il faut jouer/chercher LA bonne info à récupérer pour son code.


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

>Faire un map permet de faire un nouveau tableau avec un "calcule" dessus, ou de "répété" plusieurs fois un élément. Par exemple, faire un filteredGame.map(g => <Game key={g.id} {...g} handleClick={this.deletItem} />) appellera le composant Game autant de fois que filteredGame le permettra en lui passant les props de "g" (qui est l'indice du tableau en cours, donc le jeu actuelle).

>Déployer une application est plutôt simple grace à netlify. On s'inscrit dessus avec son github, on lui donne le lien du repo ou de la branch, et on optiens un lien pour avoir le site "héberger" en ligne. Pour notre P2 on à heberger chaqu'un nos US ce qui permet de voir chaqu'un notre travail sans devoir faire des partages d'écran ou des pull à chaque fois.

>Consomer un API c'est un peu comme écris plus haut pour récupéré les donners d'une API avec axios ou fetch, puis parcourir le JSON de l'api pour voir comment lui passer les bonnes données, et les faires s'afficher.

>Faire un formulaire react n'est pas très complexe, seulement, il faut penser qu'on peut faire des composants controler grace au state et à la valeur value des différents inputs. Pour cela, on lie l'attribue value={this.state.Value} pour lui faire afficher une valeur de base, ou envoyer la valeur ou on veux, ou l'utiliser pour autre chose. Le reste du JSX se met dans le render et la value se gère avec le state.

>Les props servent à modifier dynamiquement, lors de l'appel du composant, les différentes clés du composant. Ainsi, en ayant créé une fois le composant, on peut l'appeler autant de fois que nécessaire en modifiant les valeurs des clés manuellement.

>Les events c'est des attributs à mettre sur les formulaires, les boutons ou les liens le plus souvent pour lier au state ou une méthode à une action. Par exemple lier le onChange à la méthode handleChange qui permet de changer un état lors d'une mise à jours des props, un autre onClick quand on clique sur un bouton pour par exemple changer l'état d'un bouton filter comme lors du checkpoint 2 avec les best games : all games ect.

>Pour le context, cela permet de passer disons... un état dans un composant très profond dans la hiérachie, sans devoir passer des props "inutiles" à tout les composant au dessus de lui. La syntaxte ressemble un peu à ça : 

	<ThemeContext.provider value={theme}>
		div, code qui permet l'affichage ect
	</ThemeContext.provider>
	
>Cela permet de géré la d'ou viendra le context voulut et le code qui en sera affecter (bien sur, TheContext est un composant dans un autre fichier qui contiendra l'objet, le theme, les variables ect les fonctions dont on veux passer plus loin, et qui sera créer et exporter via React.createContext();) et ensuite, on utilise le hooks useContext(ThemeContext) pour l'affecter à une variable ou même le destructuré pour, par exemple, récupéré la fonction voulut ainsi que la couleur du theme ect.

 ### Wild
 
>Mon niveau d'anglais disons que si je prend le temps je peut lire des textes, l'écrire un peu moins, et le parler j'ai pas du tout l'accent anglais... je peut donc au mieux lire les forums comme stacksoverflow.

>Pour les groupes de communautés j'avais participer avec certains de mon groupe P1 a un meetup sur l'agilité avant le confinement, et donc je suis sur meetup sur l'appli. Le hack-à-thon bah... c'est le fameux moment ou personnes n'a le droit de dormir pendant 24H pour hiberner un week end complet? :p

>Pour la présence sur internet ainsi que la partie de la veille, j'ai mon linkdin avec la quête de l'expé précedente, mon cv sur le drive, mon github bah... il sous vos yeux :p, j'avais déjà un compte twitter pour suivre les actus de jeux, je rajoute petit à petit des actus du monde technologiques, et la veille j'ai les flux rss.....................................................................................................................

>Pour se former à une techno, ça compte si je dit que mes bases pré wild s'étendaient jusqu'au niveau de la manipulation du DOM en JS graçe à openclassroom? sinon je connais aussi quelques youtubers comme lior chalma, des sites comme développez.net, codcademy ou encore stackoverflow, alsacréation, csstricks....
 
 >Pitcher son idée c'est ce qu'on faisait pour les rétros/sprint planing/et lors du wireframes nan?
 
 >Synthétiser des informations? c'est aussi un peu la démo qu'on faisait le vendredi nan?
 
 ### Scrum

>Les rituels scrum sont d'abord le sprint planning chaque vendredi matin qui permet de faire les US à venir, le backlog, les points de complexité à attribuer graçe au planetit. Il y a aussi le daily scrum (genre de checkin/stand up) qui nous permet de voir qui est bloquer, sur quoi, ce qui à été fait la veille ect... Le sprint review lui, permet de montré ce qui à été fait la semaine passée, sous forme de démo, pour montré les fonctionnalité implémenté au PO pour savoir son ressentie, si ça respecte ses envies, si y'a des choses à changer ect. Et la sprint rétro qui permet de faire un point sur l'équipe, comment s'est passer la semaine, si y'a eu des soucis, des ressenties, de l'entente de l'équipe...
  
>Le backlog c'est un genre de trello qu'on fait sur un tableaux excel ou google doc et dedans on y met la méthodologie Mscow et on décrit les US, quelles critères de validation, si c'est must should could... ce qu'il faudrait faire ect...
  
>L'estimation on la faisait à chaque sprint planing avec le pokerit chaqu'un disais pourquoi il à choisi telle niveau de complexité et on faisait une synthèse ensuite du temps pour l'ajouté au zehub.
  
>La démo projet on en à fait toutes les semaines c'était un peu long ^^'
