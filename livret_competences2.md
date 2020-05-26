# Validation de compétences suite Checkpoint 2

## UNIX

### - Gérer les processus et le multi-tâche (ps, top, kill ...)

**- La commande PS:** 
Commande "ps" permet d'afficher les processus actifs ainsi que ces ressources utilisées à un instant t, par utilisateur, par PID, par % d'utilisation ...
Les processus correspondent à des programmes lancés par l'utilisateur qui se logent dans la mémoire d'un ordinateur et s'éxecute par le processeur de ce dernier.

Les options:
- L'option "-x" permet de visualiser tout les processus actifs de l'utilisateur courant
- L'option "-ax" permet de visualiser tous les processus de la machine de tous les utilisateurs
- L'option "-aux" permet de visualiser affiche les utilisateurs associés à chaque processus
- L'option "-u nom_utilisateur" affiche chaque processus associés à utilisateur
- L'option "-p PID" affiche les informations sur un processus
- L'option "-t" affiche tout les processus liées a un terminal

Exemple:
```
ps aux
```
Montre les processus de tous les utilisateurs (a), les propriétaires, les processus non attachés à un terminal (x).

**- La commande TOP:** 
Cette commande permet de donner les mêmes informations que ps mais en temps réel. On peut lui préciser le délai de rafraîchissement.
Elle permet de surveiller son système et d’identifier des dysfonctionnement (= gestionnaire des tâches de Windows).

Exemple:
```
top -s 10
```
Permet d'observer ses processus toutes les 10 secondes.

**- La commande KILL:** 
Elle permet de mettre fin à un processus manuellement (exemple: une application qui a planté).
Elle intervient après avoir identifié les processus en cours.

Exemple:
```
ps aux
kill xxxx
```
Ici, j'identifie le Process ID (PID) du processus à "tuer" et je fais le kill avec son PID.

**- La commande HALT:** 
La commande halt commande l'arrêt immédiat de l'ordinateur. Il faut être root pour arrêter la machine.

Exemple:
```
sudo halt
```

**- La commande REBOOT:** 
Il existe la commande reboot pour redémarrer l'ordinateur. Il faut à nouveau être root.

Exemple:
```
sudo reboot
```

## SCRUM

### - Savoir organiser les différents rituels scrum
**- Sprint planning:** 
Au début de chaque itération, les professionnels du métier présentent les fonctionnalités à concevoir pendant le sprint. L’équipe technique les assimile, tente de les comprendre au mieux, et estime le temps nécessaire pour le développement de chaque tâche.

**- Daily stand-up meeting:**
Chaque jour, l’équipe présente le travail effectué et le travail à effectuer. Cette réunion quotidienne dure 15 minutes au maximum.
Le scrum master s'assure que tous les membres de l'équipe peuvent s'exprimer et remonter les problèmes rencontrés.

**- Sprint review:**
A la fin de chaque itération, toute l’équipe se déplace chez le client pour présenter le produit développé pendant le sprint.
La présentation est menée par le Product Owner.

**- Rétrospective:**
A la fin de chaque sprint, toute l’équipe analyse le travail effectué. Le sprint s’est-il bien déroulé ? Qu’est-ce qui n’a pas fonctionné ? Que peut-on améliorer ? Qu’est-ce qui fonctionne et qui doit être réitéré ?

### - Savoir rédiger un backlog
Lors de la mise en place du mode projet dans une équipe, il faut lister les fonctionnalités, améliorations et correctifs produits à apporter au produit au sein d'un même document, il s'agit du Product Backlog. Il contient notamment le rôle de chacun, les maquettes design, les fonctionnalités du produit.

Le Product Owner est responsable du Product Backlog et de son évolution en continu. Le Scrum Master peut également l'accompagner dans sa construction.
Contrairement au cahier des charges, on ne fige pas dans le temps le Product Backlog. On ne cesse de le faire évoluer au fil des échanges avec les utilisateurs, des évolutions du marché …

Les éléments importants à faire figurer dans le Product Backlog:
- ID: pour chaque user story afin de faciliter le suivi et traitement durant les sprints.

- Feature: la fonctionnalité à implémenter au sein de l'application.

- User Story: le respect de la structure d’une user story est essentielle : «  en tant que » pour définir le rôle de l’utilisateur, « je veux » afin d’exprimer le besoin identifié, « afin de » dans le but de communiquer sur le bénéfice de l’utilisateur.

- MVP: préciser si cette user story est un MVP ou pas (ou préciser le degré d'importance de l'US avec la méthode MSCW).

- Business Value: une valeur business est définie pour chaque user story par le Product Owner, ou le représentant produit. Il s’agit de quantifier le bénéfice perçu par vos utilisateurs. Elle est souvent mesurée à travers des échanges fréquents avec votre public cible.  

- Definition of Ready (DOR) : la DOR résulte d’un accord commun au sein de l’équipe sur les conditions requises pour statuer qu’une user story est prête à être intégrée dans un sprint. La DOR est définie habituellement en Grooming Session.

- Definition of Done (DOD) : la DOD résulte d’un accord commun au sein de l’équipe sur les conditions requises pour statuer qu’une user story est prête pour un release. La DOD peut être réalisée à différents niveaux : au niveau d’une user story, d’un sprint ou d’un release.

- Story Points : l’estimation de chaque user story en story points est réalisée par l’équipe de développement pour estimer la charge de travail de chaque user story. Un des moyens les plus utilisés est la suite de Fibonacci notamment à travers une Planning Poker session.

### - Etre en mesure de donner une estimation du temps de développement d'une User Story
Ceci va devoir se faire lors du sprint planning. L'estimation va se faire en fonction des story points dédiés à chaque fonctionalité.
Il faut que chaque membre du projet puisse s'exprimer et argumenter sur l'effort qu'il perçoit du développement de la fonctionnalité. L'effort va devoir être défini en comparant avec les autres US, en prenant en compte tous les critères.
Il faut aussi essayer de prendre en compte le risque et les inconnus qui peuvent avoir un rôle de ralentir la US.

Pour avoir une estimation du temps collant au mieux au réel:
- Avoir une baseline avec un groupe de stories de références,
- Utiliser suite de Fibonacci
- Utiliser le Planning Poker
- Faire l'atelier avec tous les membres de l'équipe

Il va falloir piloter le projet avec des story points et donc mesurer la vélocité de l'équipe à chaque fin de sprint, visualiser la quantité de travail à faire via un burn down chart afin de se projeter sur une date de fin de projet raisonnable (MAJ à chaque fin de sprint).

### - Savoir faire une démonstration de son projet
Plusieurs points importants:
- Préparer la session de démo: conditions matérielles, navigateur propre, retrouver les tickets traités durant le sprint, pense-bête avec principaux messages à faire passer.

- Devenir techno-aveugle le temps de la démo:
Employer un langage simple et imagé pour faire passer les messages clés de la démo.
Scripter les démos avec des exemples concrets afin de rendre le message plus facilement assimilables. 

- Travailler les messages clés:
Reformuler les besoins dans la démo pour rassurer les clients. Egalement il est important d'impliquer les interlocuteurs en leur demandant de préciser, d’illustrer, de commenter leurs besoin.

- Rendre la démo vivante en racontant l'histoire qui va avec la feature:
Prendre un peu de distance et bien raconter sa feature en plusieurs étapes: situation initiale, élément modificateur, péripéties, élément de résolution, situation finale.

- Apporter autour de la table quelques idées bonus

### - Savoir utiliser les tags de Git
Git donne la possibilité d’étiqueter un certain état dans l’historique comme important. Généralement, les gens utilisent cette fonctionnalité pour marquer les états de publication avec les tags.

Une étiquette légère ressemble beaucoup à une branche qui ne change pas, c’est juste un pointeur sur un commit spécifique.

Les étiquettes annotées, par contre, sont stockées en tant qu’objets à part entière dans la base de données de Git. Elles ont une somme de contrôle, contiennent le nom et l’adresse e-mail du créateur, la date, un message d’étiquetage et peuvent être signées et vérifiées avec GNU Privacy Guard (GPG). Il est généralement recommandé de créer des étiquettes annotées pour générer toute cette information mais si l’étiquette doit rester temporaire ou l’information supplémentaire n’est pas désirée, les étiquettes légères peuvent suffire.

Exemples:
````
git tag -a v1.4 -m 'ma version 1.4'
````
Création d'une étiquette annotée

````
git tag v1.4-lg
````
Création d'une étiquette légère

```
git show v1.4
```
Visualiser les données d'une étiquette

```
git tag
```
Lister toutes les étiquettes du projet.

```
git tag -l 'v1.8.5*'
```
Lister toutes les étiques de la série v1.8.5

### - Faire des commits atomiques correctement commentés et des PR de taille humaine
Faire des commits de petite taille se bornant à une seule tâche pour faciliter leur manipulation et le code review, avec des noms explicites

Pour les Pull Requests, l'idée est de pusher du code, non pas sur la branche principale de release, mais sur un espace dédié à la relecture et à la validation du code fourni. Ainsi on s'assure que le code pushé est relu au moins par un autre développeur. Les PR doivent correspondre à une seule user story.

## INTEGRATION
### - Utiliser un framework CSS (Bootstrap, MaterializeCSS, ...)
cf Projet 2, Hackathon, Checkpoint...

### - Connaitre les pré-processeur de code CSS (SCSS, ...)
Un préprocesseur CSS est un outil (ou programme) permettant de générer dynamiquement des fichiers CSS. L’objectif est d’améliorer l’écriture de ces fichiers, en apportant plus de flexibilité au développeur web.

Les + connus: Sass, LESS, PostCSS, Stylus.

Le préprocesseur va apporter des variables pour rassembler les couleurs, espacements...etc, une notation imbriquée pour modulariser CSS, des opérations et fonctions simples pour effectuer des calculs, des fonctions personnalisées avec boucles, conditions...

Le préprocesseur est un méta-langage qui nécessite d'être compilé en CSS normal pour être interprété par le navigateur. La compilation peut se faire via différentes manières (application graphique, plugin éditeur directement en ligne...).

### - Respecter les bonnes pratiques SEO
#### La structure technique
- Validation W3C: bien refermer ses balises, de ne pas insérer des <div> dans les balises de liens, de mettre un attribut aux images...

- Entêtes HTML: présence et optimisation:
La balise content-type.
``` <meta charset=“utf-8”> ```
Cette balise présente le contenu de la page, c’est la raison pour laquelle il est important qu’elle soit positionnée tout en haut du <head>.

La balise meta description.
``` <meta name=“description” content=“une courte description de votre page”> ```
Elle ne va pas directement influer sur le niveau de référencement mais va apporter les 2 lignes de résumé que l'on voit dans les résultats de recherche.

La balise title.
```<title>Le titre de ma page</title> ```
Impact direct sur le SEO, s'affiche sous la forme lien bleu dans recherches Google.

La balise canonical.
``` <link rel=“canonical” href=“http://mon-url-canonique.com /”> ```
Très importante, un contenu ne doit pas avoir 2 url différentes sous peine de déclasser fortement le site web.
Cette balise permet une page de référence en cas de contenus similaires entre plusieurs pages.

- Construction sémantique du code HTML

- Robots.txt:
Le but d’un tel fichier est de dire aux moteurs de recherche quelles pages ou quelles informations il peut ou ne peut pas télécharger.

- Sitemap.xml:
C’est un fichier qui répertorie des adresses web. Celles-ci peuvent être des pages, des images, des vidéos. Tout ce qui a une url sur votre site.
Permet d'aider les moteurs de recherche à trouver des urls non accessibles via l'arborescence du site.

- Structure du site: plan du site et page 404:
Le plan du site va permettre aux moteurs de recherche d'obtenir un accès plus rapide à l'ensemble des contenus du site, souvent positionné dans le footer.
La page 404 doit être personnalisée, important que l'utilisateur se sente toujours sur le site et que l'accès à d'autres pages soit aisé.

- Structure des URLs et arborescence:
Très important, l'arbo doit être la plus claire et simple possible, éviter les sous-sous-sous-menus, tout le contenu doit être accessible en maximum 4 clics.
Les quelques règles: séparateur de mot est le '-', le séparateur de thème est le '/', pas de caractères spéciaux.

- Maillage interne et fil d'Ariane:
Le maillage interne correspond à la liaison des pages de votre site entre elles. Il n’est pas recommandé d’avoir des pages orphelines c’est à dire des pages qui ne sont liées à aucune autre sur le site, et que donc personne ne peut trouver via l’arborescence.

Le fil d'Ariane contribue à la clarté du site. Il aide les internautes mais aussi les moteurs de recherche à hiérarchiser les pages des contenus plus globaux aux plus précis.

#### Les contenus
- Les images:
Bien les nommer, bon format, poids, attribut alt.

- Les textes:
Pas de surcharge de mots-clés, structurés avec balises (h2, p, a, strong...), contenu pertinent et original (0 plagiat)

- Les vidéos:
4 ou 5 secondes pour accrocher l'attention du user, grande qualité uniquement.

### Le netlinking
Le netlinking est une technique de référencement naturel qui consiste à poser des liens entrants vers son site sur d’autres supports de publication. 
Les quelques règles:
- Créer du contenu de qualité,
- Penser à l'UX,
- Respecter l'univers sémantique du mot-clé,
- Analyser le profil des liens entrants (ex avec Majestic SEO)

## JAVASCRIPT
### - Maîtrise de XmlHttpRequest(AJAX) / Fetch API
cf projet 2

### - Maîtriser le chargement de documents dans le navigateur (File API)
cf projet 2

### Travailler avec des bibliothèques externes (Axios, Moment, Lodash ...)
cf projet 2

## REACT
### - Consommer une API
cf projet 2

### - Déployer mon application
cf projet 2

### - Créer un composant sous forme de classe
cf projet 2

### - Créer un formulaire
cf projet 2

### - Connaître le cycle de vie d'un composant
cf projet 2

### - Utiliser les hooks
cf projet 2