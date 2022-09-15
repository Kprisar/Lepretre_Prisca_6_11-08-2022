# Brief
Développement d'une application web nommée "Piquante" dans laquelle les utilisateurs pourront ajouter leurs sauces préférées et liker ou disliker les sauces proposées par les autres utilisateurs.
Le but est de créer le backend de l'application, le frontend étant déjà codé et fourni.

# Objectifs du projet
Développement Backend en Javascript

# Installations et utilisations
1. Serveur Node.js
2. Framework Express
3. Base de données et hébergement MongoDB
5. Opérations relatives à la base de données réalisées avec mongoose
7. Sécurité OWASP et RGPD

# Mesures de sécurité mises en place
1. Hashage du mot de passe utilisateur avec bcrypt
2. Cryptage des emails utilisateurs dans la base de données avec crypto-js
3. Manupulation sécurisée de la base de donnée avec mongoose
4. Vérification que l'email utilisateur soit unique dans la base de données avec mongoose-unique-validator
5. Utilisation de variables d'environnement pour les données sensibles avec dotenv
6. Authentification de l'utilisateur par token avec jsonwebtoken
7. Protection des headers avec helmet

