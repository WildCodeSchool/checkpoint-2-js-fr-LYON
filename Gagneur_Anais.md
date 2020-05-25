#### Unix ####

**Gérer les processus et le multi-tâche (ps, top, kill …)**

`PS`

La commande ps retourne un "cliché" de vos processus en cours sur la machine, ainsi que les ressources consommées par ceux-ci. Vous pouvez la rendre plus détaillée :

[ps aux]

a : Montre les processus de tout les utilisateurs
u : Montre le propriétaire de chaque processus
x : Montre les processus non attachés à un terminal
A noter que s'il y a trop de processus et que cela vous paraît donc peu clair, vous pouvez filtrer avec la commande grep. Par exemple, si je cherche "eclipse" :

[ps aux | grep eclipse]

`top`
    Cette commande permet de donner les mêmes informations que ps mais en temps réel. On peut lui préciser le délai de rafraîchissement :

[top -d 10] rafraîchira les informations toutes les 10 secondes.

`kill`
Comme on peut facilement le devine, elle permet de terminer un processus manuellement, par exemple une application qui a planté. Tout d'abord, lance la commande :

[ps aux] et relevez le PID (Process ID) du processus à "tuer".

Ensuite, faites [kill xxxx] ou xxx est le PID du processus.

#### SCRUM ####

**L'équipe scrum**

Dans l'équipe Scrum on a :

- le product owner qui est responsable de la maximisation de la valeur du produit, il s'occupe notamment de la gestion du backlog.

- l'équipe de développement qui organisent et gèrent leur propre travail.

- le scrum master qui l'un des leader de l'équipe scrum, il veille a ce que tout le monde à comprenne la théorie,les pratiques, les règles et les valeurs de Scrum.

**Savoir organiser les différents rituels scrum**

`le sprint`

Chaque sprint a une durée pré définie. Au début de celui-ci on défini les objectifs à atteindre, pendant toute la durée du sprint on organise des réunions quotidienne au sein de l'équipe (Daily stand up) et à la fin de celui-ci on fait une sprint review et une sprint retrospective permettant de faire un bilan des aspect positif et négatifs du sprint afin de mieux organiser le sprint suivant.

`Daily Stand up`

Ces réunions quotidiennes d'environ 15 min permettent à chaque membre de l'équipe de partager ce qu'il ressent, les avancés dans son travail ou les problématiques qu'il rencontre. cela contribue à la cohésion du groupe et permet de changer l'organisation au besoin pour répondre aux objectif du sprint. C'est le scrum master qui s'assure qu'elle a lieu.

`Sprint review`

Tenue à la fin du sprint permet d'analyser ce qui a été produit durant le sprint et d'adapter le product backlog si nécessaire.

`Sprint retrospective`

Tenue également à la fin du sprint et après la review elle permet à l'équipe de s’auto-inspecter et de créer un plan d'améliorations à adopter au cours du prochain Sprint.

**Savoir rédiger un backlog**

Le Backlog liste toutes les fonctionnalités, les fonctions, les exigences, les améliorations et les corrections qui constituent des modifications à apporter au produit dans les versions futures. Les éléments du backlog se composent d'une description, d'un ordre, d'une estimation et d'une valeur. Il constitue l’unique source d'exigences pour tout changement à apporter au produit. Le Product Owner est responsable du Backlog, y compris son contenu, sa disponibilité et son ordonnancement. Le Backlog est dynamique ; il change constamment pour identifier ce que le produit requiert pour être approprié, compétitif et utile.

**Etre en mesure de donner une estimation du temps de développement d'une histoire utilisateur**

Afin d'estimer la réalisation de chaque user storie du backlog, l'équipe réalise un planit poker ou chaque membre donne son estimation du temps dédié à la user storie et ou il est choisi une estimation finale.

**Savoir faire une démonstration de son projet**

Pour faire une démonstration efficace de son projet lors du premier rdv client il est bien de rappeler les besoins exprimés par le client, de présenter les différentes fonctionnalités réfléchies en fonction de ces besoins et d'en justifier les choix, de montrer les maquettes/wireframe afin que le client puisse se faire une idée visuelle du produit (utilisation de figma ou tout autre support).
en cours de projet quand on montre l'avancé de chauqe sprint au client il est bien de ne montrer que les fonctionnalités qui ont abouties durant le sprint et de rester à l'écoute des remarques du client afin de pouvoir adapter au besoin les fonctionnalités créés.

#### Wild ####

**Organiser sa veille technologique en s'abonnant et suivant régulièrement les ressources clés du développeur (newsletters, blogs, agrégation de flux RSS via Feedly, twitter, forums, magazines...) pour connaître les technologies émergentes et leurs applications, les besoins du marché**

Pour organiser ma veille technologique je me suis créé des alertes google via lesquelles je reçoit des emails plusieurs fois par semaine avec des actualités technologique à consulter? j'écoute également tout les matins les actualités technologiques présentées sur rmc par Anthony Morel et je consulte régulièrement les sites suivants:
- https://react.statuscode.com/
- https://javascriptweekly.com/
- https://www.presse-citron.net/
- https://www.journaldugeek.com/

**S'autoformer à une nouvelle technologie en utilisant les ressources appropriées telles que tutoriel, vidéos, docs, évaluer les avantages et les inconvénients de la technologie**

Quand j'ai besoin de me former ou de me renseigner plus en profondeur sur une technologie je consulte très régulièrement les sites suivants:
- openclassroom
- stackoverflow
- grafikart
- Pierre Giraud
- l'incontournable youtube

**Synthétiser des informations et les présenter aux autres**

Petites astuces : 
- prendre le temps de la réflexion
- faire au plus court
- filtrer les informations pour ne garder que les informations nécessaires
- réaliser une carte mentale avant de commencer à la rédiger.
- la relire pour vérifier qu'elle contient toute les informations importantes.

**Pitcher son idée / son projet en un temps limité**

`préparer son discours`

simple et structuré

`les éléments essentiels`

- une accroche qui suscite l'envie.
- le corps du discours: il doit vous permettre de présenter succinctement votre entreprise, votre activité, votre axe de différenciation et la réponse aux besoins de vos prospects.
- une offre: elle doit comporter les moyens de communiquer plus longuement avec vous.
- un support: présentation visuelle.

`faire attention à son langage corporel`

Avoir une position ouverte, rester calme, ne pas être hésitant...

`s'entrainer`

s'enregistrer, demander leur avis à d'autres personnes.

**Maintenir une présence à jour et de qualité en ligne (CV en ligne ex. sur linkedin, réseaux sociaux, Github, portfolio, billets de blog)**

Mon profil linkedin est à jour (je viens de finir la quête..) et j'ai aussi mis un cv à jour sur le site du pôle emploi.

**Concevoir et rédiger un CV et un email d'accompagnement personnalisé**

En effet il faut faire un CV qui prends en compte les intitulés des postes recherchés (j'en ai 3 différents personnellement et il m'arrive d'adapter selon les annonces) et faire une lettre de motivation prenant en compte les compétences recherchées par l'entreprise mais aussi ses valeurs, avant cela un petit tour sur leur site web s'impose....


**Utiliser l'anglais dans son activité professionnelle**

Je l'utilisais déjà tous les jours avant la wild dans le cadre du travail et maintenant la majorité des ressources que l'on trouve son en Anglais donc ça ne me pose pas de problème non plus.


#### JS ####

**Maîtrise de XmlHttpRequest(AJAX) / Fetch API**
Ajax est une architecture informatique qui permet de construire des applications Web et des sites web dynamiques interactifs sur le poste client en se servant de différentes technologies ajoutées aux navigateurs web entre 1995 et 2005. Ajax est l'acronyme d'asynchronous JavaScript and XML : JavaScript et XML asynchrones.

Ajax combine JavaScript et DOM, qui permettent de modifier l'information présentée dans le navigateur en respectant sa structure, les API Fetch et XMLHttpRequest, qui servent au dialogue asynchrone avec le serveur Web ; ainsi qu'un format de données (XML ou JSON), afin d'améliorer maniabilité et confort d'utilisation des applications internet riches.

Exemple de requête Axios (similaire Fetch):

componentDidMount () {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      .then((response) => {
        this.setState({ drinks: response.data.drinks });
      }, (error) => {
        console.log(error);
      });
  }

**Maîtriser les Regex**

Les expresisons régulières: permettent de vérifier la présence de certains caractères ou enchainement de caractère dans une expression.
On stock les expressions régulières dans des variables avec des caractères d'encadrement (comme le /).
Ensuite on utilise les méthodes de l'objet regex ou de l'objet string (match, search, replace, split, exec, test ...).
petit cours simple : [https://www.pierre-giraud.com/javascript-apprendre-coder-cours/regex-recherche-remplacement/]


**Maîtrise de Promise + Découverte Async/Await**

Une fonction asynchrone est une fonction qui s'exécute de façon asynchrone grâce à la boucle d'évènement en utilisant une promesse (Promise) comme valeur de retour.
Une fonction async peut contenir une expression await qui interrompt l'exécution de la fonction asynchrone et attend la résolution de la promesse passée Promise. La fonction asynchrone reprend ensuite puis renvoie la valeur de résolution.

`Promise`

L'objet Promise (pour « promesse ») est utilisé pour réaliser des traitements de façon asynchrone. Une promesse représente une valeur qui peut être disponible maintenant, dans le futur voire jamais.
Grâce aux promesses on peut attendre le résultat de la fonction. il y a une partie déclaration et une partie utilisation (qui utilisera des methodes then et catch qui prennent des fonctions callback).
l'objet promise prend en paramètre une fonction callback qui prend en paramètre 2 fonction (résolve et reject).

[https://www.youtube.com/watch?v=SSYt7C4sCbw]

`Async/Await`

async s'utilise à la définition de fonction. quand on met ce mot clé la fonction est une promesse.
await s'utilise dans une fonction ou async a été utilisé. on utilise le mot clé await sur une fonction qui sera réellement un promise. il permet d'attendre le résultat d'une promesse.

[https://www.youtube.com/watch?v=WNFNEe4bc5A]

**Maîtrise des Exceptions (try/catch/finally)**

L'instruction try...catch regroupe des instructions à exécuter et définit une réponse si l'une de ces instructions provoque une exception.
L'instruction try est composée d'un bloc try contenant une ou plusieurs instructions, d'au moins une clause catch ou d'une clause finally ou des deux. On peut donc avoir les trois formes suivantes pour cette instruction :

try...catch
try...finally
try...catch...finally

Une clause catch contient les instructions à exécuter si une exception est levée par une instruction du bloc try. On souhaite généralement que le bloc try se déroule sans problème. Si toutefois une erreur se produit, on veut pouvoir contrôler ce qui se passe et on transmet donc le contrôle au bloc catch. Si une instruction contenue dans le bloc try (ou une fonction appelée depuis le bloc try) renvoie une exception, le contrôle sera immédiatement passé à la clause catch. Si aucune exception n'est levée, la clause catch ne sera pas utilisée.

La clause finally s'exécute après le bloc try et après le bloc catch (si celui-ci a été déclenché) mais avant les instructions qui suivent. Les instructions de cette clause sont toujours exécutées, qu'il y ait eu ou non une exception de déclenchée et/ou d'interceptée.

**Exploiter un schema JSON et exploiter une API**

`JSON`

on importe le fichier json en haut du composant et ensuite on utilise les props pour l'exploiter.

`API`

pour exploiter une API on forme une classe avec un contructeur dans lequel on établit un state et ensuite on utilise axios ou fecth pour récupérer les données de l'api.


**Travailler avec des bibliothèques externes (Axios, Moment, Lodash …)**

Exemple de requête Axios (similaire Fetch):

componentDidMount () {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      .then((response) => {
        this.setState({ drinks: response.data.drinks });
      }, (error) => {
        console.log(error);
      });
  }

!!! ne pas oublié l'import de la bibliothèque en haut du composant.

**Orienté Objet en ES6(Classe, Inheritance, Interface, Staticité)**

`class`

En réalité, les classes sont juste des fonctions spéciales qu'on utilise lorsqu'on a besoin d'un état. Ainsi, les classes sont définies de la même façon que les fonctions : par déclaration, ou par expression. Elle contiennent un constructor qui permet de créer et d'initialiser les objet créés avec une classe. elle contient également une méthode render.

`inheritance`

on peut créer une nouvelle classe à partir d'une classe existante (super props). La classe enfant contiendra tous les attributs et les méthodes de la Classe parente et on peut définir de nouveaux attributs / de nouvelles méthodes.

`Interface`

`Staticité`

**Maîtrise d'un outil de transpiling (Babel, traceur…)**


#### React ####

**Consommer une API**

pour consommer une API on forme une classe avec un contructeur dans lequel on établit un state et ensuite on utilise axios ou fecth pour récupérer les données de l'api.


**Déployer mon application**

On peut utiliser une platforme comme Netlify.

**Savoir implémenter un routing**

on importe les éléments du routeur en haut du composant.

dans le router on définit les url grâce à la balise link to.

dans le switch on défini les routes vers les composants en définissant un path.


**Connaître le cycle de vie d'un composant**

Dans des applications avec de nombreux composants, il est très important de libérer les ressources utilisées par les composants quand ils sont détruits.

Nous pouvons déclarer des méthodes spéciales sur un composant à base de classe pour exécuter du code quand un composant est monté et démonté : On les appelle des « méthodes de cycle de vie ».

La méthode componentDidMount() est exécutée après que la sortie du composant a été injectée dans le DOM. 

On peut changer l'état du composant via la méthode [componentDidUpdate] qui mettra le state à jour.

Enfin au moment de la 'mort' du composant on utilise la méthode [componentWillUnmount] toujours en mettant à jour le state.

**Communiquer entre les Composants (props, event emits …)**

`props`

Les props permettent le passage d’informations d’un composant “parent” à un composant “enfant”, et uniquement dans ce sens. On utilise this.props pour une classe et props pour une fonction.

`Event`

on peut communiquer entre les composants grâce à des évènements comme le Onclick, onChange, handelChange etc...

**Utiliser la Context API**

Le Contexte offre un moyen de partager des valeurs entre des composants sans avoir à explicitement passer une prop à chaque niveau de l’arborescence.

[https://fr.reactjs.org/docs/context.html]
[https://www.youtube.com/watch?v=AhnPjl5rovQ]

**Utiliser les hooks**

gérer un état non pas dans une class component mais dans un functionnal component.
penser à importer UseState qui viens de react en haut du composant.

[https://www.youtube.com/watch?v=LuxYWWB3_Qc]

exemple:

const Counter = props => {

  const [compteur, setCompteur] = useState(1);

  const handleChange = () => {
    setCompteur(compteur + 1);
  }

  return (
    <div>
      {compteur} <button onClick={handelChange}>Incrément</button>
    </div>
  );

};

**Utiliser l'affichage conditionnel en JSX**

On utilise if ou l'opérateur ternaire.

exemple d'utilisation avec if:

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

exemple d'utilisation avec l'opérateur ternaire:

render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn
        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />
      }
    </div>
  );
}

**Afficher une liste de composants avec map**

La méthode map permet de parcourir un tableau en créant un nouveau tableau. Elle utilise 3 arguments: la valeur courante, l'index et le tableau.

exemple d'utilisation de la fonction map:

function getFoodCategories(foods) {
  return foods.map(categorie => {
    if(categorie.isVegetarian === true){
      return `${categorie.food} is suitable for vegetarians`;
    } else {
      return `${categorie.food} is not suitable for vegetarians`;
    }});
  }





