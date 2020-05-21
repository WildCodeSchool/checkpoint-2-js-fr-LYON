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

Un peu hasardeux au début du P2, mais après deux semaines, bonne estimation des US, de leu complexité et du temps necessaire à leur développement.

### Savoir faire une démonstration de son projet

Chaque semaine en fin de Sprint, et au Démo-Day.

## Git

### Savoir utiliser les tags de Git

## Wild

### Organiser sa veille techno
### S'autoformer à une nouvelle technologie
### Synthétiser des informations et les présenter aux autres 
### Pitcher son idée / projet en un temps limité
### Maintenir une présence à jour et de qualité en ligne (CV en ligne ex. sur linkedin, réseaux sociaux, Github, portfolio, billets de blog)

Je suis active sur LinkedIn, mon profil et mon CV sont à jour, je me tiens informées des news dans le secteur de la tech, je suis abonée aux groupes d'interet et je développe mon réseau.

### Concevoir et rédiger un CV et un email d'accompagnement personnalisé

CV à jour.

### Utiliser l'anglais dans son activité professionnelle

L'anglais c'est ok pour moi, dans la vie quotidienne comme professionnelle. 

## JavaScript

### Maîtrise de XmlHttpRequest(AJAX) / Fetch API
### Maîtriser les Regex	A acquérir
### Maîtrise de Promise + Découverte Async/Await
### Maîtrise des Exceptions (try/catch/finally)
### Exploiter un schema JSON et exploiter une API
### Travailler avec des bibliothèques externes (Axios, Moment, Lodash ...)
### Maîtrise d'un outil de transpiling (Babel, traceur...)

## React

### Consommer une API
### Déployer mon application
### Créer un composant sous forme de classe (stateful)
### Créer un formulaire
### Connaître le cycle de vie d'un composant
### Communiquer entre les Composants (props, event emits ...)
### Utiliser la Context API
### Utiliser les hooks
