# Revue des notions "en cours d'acquisition" pour le Checkpoint 1

## UNIX

### Savoir gérer les droit (sudo, chown, chmod)

Pour tester cette commande, j'ai créé un nouvel user de test pour voir et changer ses droits 
```bash 
sudo adduser test
```
sous l'utilisateur amélie, création d'un fichier text test
```bash
amelie@amelie-ThinkPad-T430s:~$ touch test.txt
amelie@amelie-ThinkPad-T430s:~$ ll test.txt
-rw-rw-r-- 1 amelie amelie 0 avril 19 09:30 test.txt
```
la commande ls -l m'indique que les autres user que amelie n'auront pas les droits d'écriture sur ce fichier.
passage sur le user test
```bash
amelie@amelie-ThinkPad-T430s:~$ su test
```
impossible d'écrire dans le fichier test.txt
```bash
test@amelie-ThinkPad-T430s:/home/amelie$ ll test.txt
-rw-rw-r-- 1 amelie amelie 0 avril 19 09:30 test.txt
```
passage sur amelie pour donner les droits à test
```bash
test@amelie-ThinkPad-T430s:/home/amelie$ su amelie
```
changement des droits en read and write pour amelie, le groupe, et les autres
```bash
amelie@amelie-ThinkPad-T430s:~$ chmod 666 test.txt
amelie@amelie-ThinkPad-T430s:~$ ll test.txt
-rw-rw-rw- 1 amelie amelie 0 avril 19 09:30 test.txt
```
les droits sont changés, passage sur test pour vérifier
```bash
amelie@amelie-ThinkPad-T430s:~$ su test
```
possible d'écrire dans test.txt.

### Savoir gérer les paquets et mettre à jour le système

utilsation des commandes: 
```sudo apt update```
qui m'a indiquée que 29 paquets pouvaient être mis à jour, donc suivi de 
```sudo apt upgrade```
pour les mettre à jour.

### Gérer les processus et le multi-tâches  (ps, top, kill...)


## Git

### Faire relire mon code avec une PR

Pratiquée avec l'équipe du projet 2, première user story (us1) réalisée en peer programming avec Mickaël, pushé sur notre branche de features et pull request assignée à Christophe, après relecture, la PR est assignée à Pierre pour être mergée dans Dev.
Puis mis en pratique sur les 4 user stories suivantes, le workflow est clair.

## React

### Savoir implémenter un routing

Vu lors de la première semaine du P2. Implémentation d'un routing pour rediriger vers la bonne page au clic sur le bouton de lancement d'une session. Mis en place à 4, pour que tout le monde comprenne bien, c'est clair. 


# Revue des notions "en cours d'acquisition" pour le Checkpoint 2

## SCRUM

### Savoir organiser les différents rituels SCRUM

Pratiqué tout au long du P2 : Daily stand-up, rétro, sprint planning avec sprint poker. En expérimentant les rôles se Scrum Master et Product Owner.

### Savoir rédiger un backlog

Réalisé au début du P2 puis ré-ajusté tout au long du projet, en prenant en compte les besoins du client et en modifiant les US au moment de les évaluer et de définir les tâches.

### Etre en mesure de donner une estimation du temps de développement d'une histoire utlisateur	

Un peu hasardeux au début du P2, mais après deux semaines, bonne estimation des US, de leur complexité et du temps necessaire à leur développement.

### Savoir faire une démonstration de son projet

Chaque semaine en fin de Sprint, et au Démo-Day.

## Git

### Savoir utiliser les tags de Git

Les tags de Git sont des étiquettes que l'on peut assigner à des commit particuliers. On peut créer des étiquettes légères ou annoté, selon l'information que l'on souhaite conserver.

La commande ```$ git tag``` permet d'afficher tous les tags existants.

Création d'un tag simple :
```bash
$ git tag v0.1
```

Pour voir le tag il suffit de saisir la commande suivante :
```bash
$ git show v0.1
commit 94fd7b5f8e2be2bdb8c6f78fc11f5d0a5072462b (HEAD -> lyon_chevalier_amelie, tag: v0.1)
Author: Amélie <ameliechevalier3006@gmail.com>
Date:   Fri May 22 21:20:36 2020 +0200

    tag de git
```

Pour créer un tag annoté, il suffit de raouter la commande -a à la création du tag, et -m pour ajouter un message.
On voit ici que pour ce tag, on a plus d'informations sur le commit concerné, avec le créateur du tag la date et le message du commt.

```bash
$ git tag -a v0.2 -m "mon tag annoté"
$ git show tag v0.2
tag v0.2
Tagger: Amélie <ameliechevalier3006@gmail.com>
Date:   Fri May 22 21:30:05 2020 +0200

mon tag annoté

commit 2285019149fa7113f245569d1e19c49b26b1560e (HEAD -> lyon_chevalier_amelie, tag: v0.2)
Author: Amélie <ameliechevalier3006@gmail.com>
Date:   Fri May 22 21:29:42 2020 +0200

    création tag annoté
```
Pour annoter un commit passé, il suffit de rajouter le numéro unique du commit à la fin de la commande de tag.

## Wild

### Organiser sa veille techno
### S'autoformer à une nouvelle technologie
### Synthétiser des informations et les présenter aux autres

Compétence acquise au cours de mes études et expriences professionelle, appliquées à la wild au cours de la présentation de la veille techno mais aussi les présentations de projet quand j'étais product owner.

### Pitcher son idée / projet en un temps limité

Je me suis entrainée pour le P2, mais je pense que c'est encore en cours d'acquisition, avec de l'entraînement pendant le P3.

### Maintenir une présence à jour et de qualité en ligne (CV en ligne ex. sur linkedin, réseaux sociaux, Github, portfolio, billets de blog)

Je suis active sur LinkedIn, mon profil et mon CV sont à jour, je me tiens informée des news dans le secteur de la tech, je suis abonnée aux groupes d'interet et je développe mon réseau.

### Concevoir et rédiger un CV et un email d'accompagnement personnalisé

CV à jour. J'ai l'habitude des candidatures, en anglais, en français, avec mail personalisés ou lettres de motivation.

### Utiliser l'anglais dans son activité professionnelle

L'anglais c'est ok pour moi, dans la vie quotidienne comme professionnelle. 

## JavaScript

### Maîtrise de XmlHttpRequest(AJAX) / Fetch API
### Maîtriser les Regex

Quête Regex : Les expression régulières réalisée. Cependant, manque de pratique dans des cas concrêts, encore en cours d'acquisition. 

### Maîtrise de Promise + Découverte Async/Await

Notion de fonction asynchrone : la fonction s'interrompt au await pour attendre d'abord que la Promise soit résolue. Permet d'éviter par exemple lors d'une requête fetch ou axios, que ce que l'on cherche à afficher soit "undefined" tant que l'API n'a pas répondu. 
Beaucoup utilisé pendant le hackathon : a fait parti des notions qui se sont débloqiuées pour moi à ce moment là.

### Maîtrise des Exceptions (try/catch/finally)



### Exploiter un schema JSON et exploiter une API

Bien vu lors des quêtes, déjà bien compris à ce moment là, et exploité à fond lors du hackaton et la fin du P2, je suis à l'aise avec le traitement des réponses d'une requête à une API. Savoir loger étape par étape ce que l'API nous renvoit pour cibler ce dont on a besoin dans l'objet json. Compétence validée pendant le checkpoint 2.

### Travailler avec des bibliothèques externes (Axios, Moment, Lodash ...)

Bibliothèques utilisées pendant le P2.

### Maîtrise d'un outil de transpiling (Babel, traceur...)

Babel permet au navigateur de comprendre et interpréter le JSX et de le retourner au client. En utilisant create-react-app, babel est inclu dans la configuration. 

## React

### Consommer une API

Découvert au cours du P2, renforcé au hackathon, confirmé au checkpoint 2. 
Utilisation d'axios ou de fetch, avec l'url à requêter et traitement des données renvoyées par les API dans les .then() pour extraire les data voulues. Beaucoup de travail pour comprendre les documentation des API, comment faire les bonnes requêtes et traiter correctement les données. 

### Déployer mon application

Déploiement de plusieurs applications sur netflify au cours des quêtes, du hackathon et du P2. Je sais le faire à partir d'un repo git.

### Créer un composant sous forme de classe (stateful)

Bonne compréhension et manipualtion des composant classe, avec leur state. A l'aise avec le constructor, les props, la methode render obligatoire pour une classe. Si le composant n'a pas besoin de gérer un state et qu'il est juste fonctionnel, il est recommandé d'utiliser une simple fonction. Avec ES6+ il est même possible d'utiliser les hooks, pour gérer un state dans un composant fonctionnel.

### Créer un formulaire

Création d'un input, de type controlé, dont la valeur saisie est récpérée et mise à jour dans le state pour être ensuite utilisée, pour lancer une recherche, pour filter etc...

### Connaître le cycle de vie d'un composant

Au montage d'un composant, la méthode render() est appelée, puis le cycle de vie est le suivant :
- componentDidMount() : juste après le premier render, cette méthode est appelée. C'est ici qu'il est conseillé de mettre les requêtes à l'API et faire les mises à jour du state. render() est à nouveau appelé après et le composant est re-rendu avec le state à jour.
- componenDidUpdate() : est appelé quand le state est mis à jour, et le composant est ensuite re-rendu;
- componentWillUnmount() : est appelé juste avant la mort du composant, c'est l'endroit pour nettoyer toutes les méthodes en cours (les timer, les requêtes qui ne seraient pas résolues etc) et éviter ainsi des fuites de mémoire (des actions inutiles qui tournent alors que le composant est mort). Aucun render n'est fait après cette méthode, le state ne doit pas être mis à jour à cet endroit. 

### Communiquer entre les Composants (props, event emits ...)

Devenue pro du "props-drilling" pendant le hackathon, j'ai pu en abuser à la fin du P2 et au checkpoint 2. J'ai compris qu'avec Context, on pouvait éviter ce props-drilling, mais je ne l'ai pas encore mis en pratique.
L'idée est d'avoir un state dans App, le composant le plus haut, ce qui permet de passer ce state aux enfants, et aux enfants des enfants. Le passage des props ne se fait que de parents vers enfants, jamais l'inverse ni entre sibblings donc il est necessaire le state soit remonté quand on veut le récupérer dans un composant au même niveau.

### Utiliser la Context API

J'ai regardé les vidéos de The Net Ninja à propos de l'API Context pour comprende le principe, la mise en place et l'utilisation d'un seul puis de plusieurs contexts. Mise en pratique avec l'atelier à la fin du cours, mais manque de pratique, toujours en cours d'acquisition.

### Utiliser les hooks
