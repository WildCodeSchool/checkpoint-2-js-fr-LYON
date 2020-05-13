### UNIX

> Pour l'architecture il y à une commande (path je crois) qui permet de voir ou nous nous situons (home/wilder/document/monDossier) ect

> Pour les commandes de bases il y à ls pour lister le contenu du dossier, mkdir pour créer un dossier, touch pour en créer, mv pour déplacer/renomé, cp pour copier ect...

> Pour les droits le chmod et le chown permettent ~(d'invoquer un gobelin euh...)~ de gérer les droits (chmod permet de gérer les r (read) x (execute) d (dossier) w (write) ) et chown de changer le propriétaire d'un dossier ou le groupe. Sudo permet d'exécuté de force n'importe quel commande en tant qu'admin système.

    > Pour le multi tache ps permet de lister les processus en affichant le PID (id en gros),
    le TTY indique le port utilisé, 
    TIME qui affiche le temps utilisé par le processus 
    et CMD qui affiche le nom de la commande utilisé par le processus. 
    On peut utiliser -aux pour le détailler. 
    top permet de faire comme le gestionnaire de tache windows avec un affichage dynamique, 
    on peut aussi lui donner en paramètre -d Secondes pour lui donner un taux de rafraichissemment.
    et kill permet de communiquer avec un processus, l'arrêter voir le tuer en cas de soucis et ce, graçe à son ID (PID).

> Pour la mise en place si je me trompe pas les commandes à connaitres sont sudo get-apt install et sudo get-apt update ou upgrade (y'a aussi des commandes curl et wget mais ça fonctionne avec des url)

### GIT

>Pour les commandes principale, git add fichier (ou .) permet d'ajouter un ou tout les fichiers pour les commit avec -m "message description", puis pusher ensuite sur notre repo pour qu'un collègue puisse ~poule~ pull notre projet ou le clone pour l'avoir en local sans faire git init

>Pour héberger un projet la ou est ce repo c'est une preuve nan? :package: 

>Pour les branches c'est en cours avec les features/usNOMBRE du P2 ! sinon une commande pratique est git checkout -b branchname

>Pour les merges et conflits on est dessus avec le p2 aussi avec les pull request ect !

>Pour merge il faut faire git merge origine branche ou on veux finir

    >Pour les tags de git, ça sert, si j'ai bien compris, à mettre une étiquette de "version" 
    sur un état de publication avec git tag -a v1.0.3 -m 'ma version v1.0.3'. 
    On peut les listers avec git tag et affiner la rechercher avec une commande du style : 
    git tag -l 'v1.0.3*' pour ne lister que les versions 1.0.3.X.

### Integration

>Pour l'UI/UX un des exemples que j'aime c'est par exemple de pouvoir annuler sa commande, ou une aide quand on entre un mot de passe/adresse mail qui possède bien des caractères comme @ ou 123 ect

>Pour les wireframes c'est bon, on en à fait 3 depuis le début de la wild ^^

>Pour la structure, ne pas oublier de mettre les headers, footer, aside, main ect pour que les robots d'analyses puissent bien orienté la page et que les lécteurs d'écran savent ou ils en sont

>Pour l'inspecteur yep ça va je switch beaucoup avec l'onglet console/inspecteur et les outils react donc je connais bien

>Pour le CSS le mieux déjà est de le mettre dans une balise link pour avoir un fichier externe, ensuite je sais importé, fait des medias queries (@media queries screen and (taille en pixel), il y a aussi les classes les selecteurs et les id qu'on peut récup, ainsi que les varibles et j'en passe

>Pour le responsive j'ai mis en haut le css avec @media queries screen and (taille en pixel)

>Pour les pratiques suffit par ex de mettre un alt sur les images pour les lecteurs d'écran, de faire attention sur certaines syntaxe dans les forms, bien mettre les labels ect

>Pour les règles, je connais le validateur W3C et suffit de lui donner son code et de corriger les erreurs, et de bien indenté le code que ça soit lisible

    >Pour les frameworks CSS on en avait pas utiliser à l'époque mais avec react bootsrap je comprend mieux.
    1. On cherche sur le net ce qu'on veux exactement
    2. On importe ou créer un projet Bootsrap
    3. On colle le code donner (en oubliant pas de faire import from ... depuis react ou la balise meta correspondante dans le html
    4. Pour "personaliser" on doit souvent passer par des class et faire une "surcharge" du CSS déjà implanté de base.
    
    >Pour les pré-processeurs css (sass par ex) ça permet de géré dynamiquement le css,
    de façon à en faire casiment un langage de programation pure avec des fonctions,
    des boucles, des variables et j'en passe... Bref, 
    même si avec CSS3 y'a plein de nouvelles choses comme des variables en natif, 
    ça permet toujours plus de liberté ~et de faignantise pour le dev web moderne...~ oups ! ^^
    en bref, le CSS plus structuré et plus puissant qu'en natif.
    
    >Pour les bonnes pratiques SEO (Search engine optimization) 
    c'est pour mieux référencer le site ou l'appli graces 
    aux petits robots~-esclaves de googles pour mieux surveiller le net~ 
    et référencer le site le plus haut possible lors d'une recherche sur les 
    différens moteurs de recherches. Pour cela on peu déjà utiliser le validateur W3C 
    et ensuite faire des balises meta courtes, avec description/auteurs/langues, 
    utilisation des bonnes balises sémantiques, les alts sur les images....

### ES6+

>Pour les templates c'est ça `string à écrire ${variable} texte suivant` le spread et le reste se font avec ...variable qui "explose" des choses comme un objet ou un tableau et ça permet de destructuré facilement.

>Pour les fonctions anonymes c'est une fonction dans une variable, les fonctions fléchés se font avec => code et les callbacks sont les fonctions appeller dans un retour de fonction ou dans les paramètres d'une autre fonction

>Pour les évenements JS on à l'écouteur d'évenment principalement qui s'écrit .addEventListener('type de l'évenement', fonction à faire => code)

>Pour le DOM c'est domotic object model et c'est un peu le navigateur qui parse le HTML et renvoie un gros objets contenant des objets textuels et des objets ayant des enfants (les balises)

>Pour les scopes c'est la portée par ex une const déclaré dans une fonction ça ne peut pas se lire hors de cette dernière

>Pour les class ça s'écrit class nom {code} mais on peut aussi faire des classes étendues d'autres classes, des classes avec un constructor pour y passé plusieurs paramètres ect

>Pour l'IDE j'utilise que ça, ainsi que standard js 

 ### React

>Pour le JSX c'est un mélange de xml et de react ce qui ressemble à envoyer des balises HTML avec des variables de react pour généré une page plus facilement

>Pour le déboggeur c'est installé et utile, me faut juste la prise en main mais je sais l'utiliser

>Pour le composant fonctionnel en fait c'est une fonctions qui reçois les props d'un évenement ou autre et qui permet de rendre react dynamique, même si les class sont encore plus dynamique et pour les fonctions il faut plutôt des hooks 

>Pour l'affichage conditionel il y a surtout l'opérateur ternaire comme {favorite ? 'favorite' : '' } pour par exemple l'étoile de la quête simpson quotes

>Pour les composants avec map cela s'utilise surtout avec un tableau ou un objet et avec map on le parse pour lui effectuer un "calcule" et ensuite créer un nouveau tableau (tableau.map(paramètre => code)

>Pour finir, pour le routing on la mis dans notre P2 ! C'est avec react router, à installer séparément, on peut même mettre des variables pour l'URL avec /:VariableName c'est top !
