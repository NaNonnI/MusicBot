const language = {
  loadevent : "Événement de joueur chargé - Traduit par MrCeriseYTB", 
  loadcmd : "Commande chargée", 
  prêt : " connecté avec succès.", 
  loadslash: "Les commandes d'application [/] ont été rechargées avec succès.", 
  error1 : "Le jeton de bot que vous avez entré dans votre projet est incorrect ou les intentions de votre bot sont désactivées !", 
  error2 : "Veuillez définir le jeton du bot dans token.js ou dans votre fichier .env dans votre projet !", 
  loadclientevent : "Événement client chargé", 
  embed1 : "Vous devez avoir le rôle <@&{djRole}>(DJ) défini sur ce serveur pour utiliser cette commande. Les utilisateurs sans ce rôle ne peuvent pas utiliser le {cmdMAP}", 
  message1 : "Vous n'êtes pas connecté à un canal audio. ❌", 
  message2: "Vous n'êtes pas sur le même canal audio que moi. ❌", 
  message3 : "Autorisation manquante", 
  msg4: "Quelque chose s'est mal passé", 
  msg5: "Aucune musique en cours de lecture. ❌", 
  msg6 : "Enregistrer la musique", 
  msg7: "Ecrire le nom de la playlist.", 
  msg8 : "Cette chanson est diffusée en direct, aucune donnée de durée à afficher. 🎧", 
  msg9: "**✅ Succès :** Données horaires mises à jour.", 
  msg10: "Vous n'avez pas encore de playlist avec ce nom. ❌", 
  msg11: "Cette musique est déjà dans cette playlist. ❌", 
  msg12: "ajouté à votre playlist musicale.", 
  error3 : "Erreur lors du rechargement des commandes de l'application [/] : ", 
  error4 : "AVERTISSEMENT : Il semble que vous n'ayez pas écrit l'URL mongodb ? Si vous n'entrez pas une URL mongodb valide dans le fichier config.js, vous ne pourrez pas utiliser le bot.", 
  msg13 : `🎵 En cours de lecture : **{piste ?.titre}** -> Chaîne : **{queue?.connection.channel.name}** 🎧`, 
  msg14: "La file d'attente est vide. Vous pouvez jouer un peu plus de musique, au revoir... ✅", 
  msg15: "Je me suis déconnecté car il n'y a plus personne sur ma chaîne. ❌", 
  msg16: "Je n'arrive pas à me connecter au canal vocal. ❌ Comme si quelqu'un m'avait déconnecté ? Je suis très triste. 😔", 
  msg17: "Il n'y a pas de piste précédente ! ❌", 
  msg18: "Lecture en cours de **{queue.previousTracks[1].title}**. ✅", 
  msg19 : " Statistiques du bot", 
  msg20 : "Actualiser", 
  msg21: "**Votre heure est terminée !**", 
  msg22: "**✅ Données mises à jour.**", 
  msg23: "La file d'attente est vide. ❌", 
  msg24: "La file d'attente vient d'être vidée. 🗑️", 
  msg26: "Si vous ne spécifiez pas de rôle DJ, vous ne pourrez pas utiliser la commande !", 
  msg25: "Le rôle DJ est correctement défini sur <@&{role}>.", 
  msg27: "Le rôle DJ a été supprimé avec succès.", 
  msg28: "Le rôle DJ n'est pas déjà défini.", 
  msg29: `Veuillez entrer un nom de filtre valide. ❌\n{filtres}`, 
  msg30: `Je n'ai pas trouvé de filtre portant ce nom. ❌\n{filtres}`, 
  msg31 : `Applied : **{filter}**, État du filtre : **{status}**\n **N'oubliez pas que si la musique est longue, le temps d'application du filtre peut être plus long en conséquence.**`, 
  msg32 : "Il est temps d'écouter de la musique sur votre serveur Discord avec une interface entièrement gratuite et avancée. Un bot musical qui prend en charge la lecture de musique sur de nombreuses plates-formes, ce qui rendra votre serveur spécial. Créez votre propre bot musical : https://github. com/umutxyp/MusicBot", 
  msg33 : "Commandes du robot", 
  msg34: "Vous avez déjà une commande active ici. ❌", 
  msg35 : "File d'attente", 
  msg36 : "Musique en cours de lecture", 
  msg37 : "Fermer la boucle", 
  msg38 : "Système de boucle", 
  msg39 : `> **Que diriez-vous de faire un choix ?** > **File d'attente :** boucle la file d'attente. > ** Musique en cours :** boucle la chanson en cours. > **Fermer la boucle :** Ferme la boucle.`, 
  msg40 : "Mode de boucle de file d'attente", 
  msg41: "Une erreur s'est produite. ❌", 
  msg42 : "Lecture en cours de la musique en mode boucle", 
  msg43: "Le mode boucle est déjà inactif. ❌", 
  msg44: `Mode Boucle **Fermé** 🔁`, 
  msg45 : "Le temps est écoulé", 
  msg46: "Système en boucle - Terminé", 
  msg47 : 'Enregistrer la liste de lecture', 
  msg48: "musique en pause ! ✅", 
  msg49 : `Ping de message`, 
  msg50 : `Latence des messages`, 
  msg51 : `Latence API`, 
  msg52 : `Il n'y a pas de liste de lecture. ❌`, 
  msg53: `Vous n'êtes pas autorisé à lire cette liste de lecture. ❌`, 
  msg54: `Vous n'avez pas encore de musique avec ce nom. ❌`, 
  msg55: `Je ne peux pas rejoindre votre canal vocal. ❌`, 
  msg56 : `Chargement de la liste de lecture... ✅`, 
  msg57 : `<@{interaction.member.id}>, **{music_filter.length}** pistes ajoutées à la file d'attente. ✅`, 
  msg58: `Il n'y a pas de liste de lecture avec ce nom. ❌`, 
  msg59: `Écrivez le nom de la piste que vous souhaitez rechercher. ❌`, 
  msg60: `Aucun résultat trouvé ! ❌`, 
  msg61: "Chargement de musique(s)... 🎧", 
  msg62: "liste nommée ajoutée à la playlist. ✅", 
  msg63: `La file d'attente est vide. ❌`, 
  msg64 : "Liste de musique du serveur", 
  msg65 : "Lecture en cours", 
  msg66: "Demandé par", 
  msg67: "Page", 
  msg68: `Le processeur de commandes a été annulé. ✅`, 
  msg69: `Server Music List - Time Ended!`, 
  msg70: `Votre temps est écoulé pour utiliser cette commande, vous pouvez taper \`/queue\` pour utiliser à nouveau la commande.`, 
  msg71: `Quelque chose s'est mal passé. ❌ C'est comme si vous n'aviez jamais arrêté la musique auparavant.`, 
  msg72: "La piste a repris ! ✅", 
  msg73: `Veuillez saisir un nom de chanson valide. ❌`, 
  msg74: `Aucun résultat de recherche trouvé ! ❌`, 
  msg75 : "Musique recherchée", msg76: "Choisissez une chanson de **1** à **{maxTracks.length}** ⬇️", 
  msg77: `Recherche de musique annulée. ✅`, 
  msg78: `Chargement... 🎧`, 
  msg79: "ajouté à la file d'attente. ✅", 
  msg80 : `Le temps de recherche de la chanson a expiré ❌`, 
  msg81 : "Annuler", 
  msg82: `Le nombre que vous avez entré est supérieur au nombre de chansons dans la file d'attente. ❌`, 
  msg83: "Chanson sautée ✅", 
  msg84: `Cette chanson est diffusée en direct, aucune donnée de durée à afficher. 🎧`, 
  msg85: `La musique s'est arrêtée. À la prochaine! ✅`, 
  msg86 : "Mettre à jour", 
  msg87: `Volume actuel : **{queue.volume}** 🔊\n**Pour modifier le volume, avec \`1\` à \`{maxVol}\` Tapez un nombre entre.**`, 
  msg88: `Le volume que vous souhaitez modifier est déjà le volume actuel ❌`, 
  msg89: `**Tapez un nombre de \`1\` à \`{maxVol}\` pour changer le volume .** ❌`, 
  msg90: "Volume modifié :", 
  msg91: `Écrivez le nom de la liste de lecture que vous souhaitez créer. ❌`, 
  msg92: `Une liste de lecture portant ce nom existe déjà. ❌`, 
  msg93: `Vous ne pouvez pas avoir plus de 30 listes de lecture. ❌`, 
  msg94: "Création de la liste de lecture... 🎧", msg95: "Liste de lecture créée ! 🎧", 
  msg96: `Vous n'avez pas encore de liste de lecture avec ce nom. ❌`, 
  msg97: "Suppression de la liste de lecture... 🎧", 
  msg98: "Liste de lecture supprimée ! 🎧", 
  msg99: `Écrivez le nom de la piste que vous souhaitez rechercher. ❌`, 
  msg100 : `Écrivez le nom de la liste de lecture à laquelle vous souhaitez ajouter la musique. ❌`, 
  msg101: `Vous ne pouvez pas avoir plus de {max_music} musiques dans une liste de lecture. ❌`, 
  msg102: "Chargement de musique(s)... 🎧", 
  msg103: "Toutes les musiques ajoutées à votre playlist ! 🎧", 
  msg104: `Cette musique est déjà dans cette liste de lecture. ❌`, 
  msg105: "ajouté à la playlist ! 🎧", 
  msg106: `Écrivez le nom de la liste de lecture dont vous souhaitez supprimer la musique. ❌`, 
  msg107: `Vous n'avez pas encore de musique avec ce nom. ❌`, 
  msg108: "Suppression de musique... 🎧", 
  msg109: "Musique supprimée ! 🎧", 
  msg110: "Écrivez le nom de la liste de lecture que vous souhaitez rechercher. ❌", 
  msg111: `Vous n'avez aucune musique dans cette liste de lecture. ❌`, 
  msg112 : "Meilleures listes de lecture publiques", 
  msg113: `Votre temps est écoulé pour utiliser cette commande, vous pouvez taper \`/playlist top\` pour utiliser à nouveau la commande.`, 
  msg114: `Il n'y a pas de liste de lecture publique. ❌`, 
  msg115: "Vos listes de lecture", 
  msg116: `musiques`, 
  msg117: `Vous n'avez aucune liste de lecture. ❌`, 
  msg118: "Votre temps est écoulé pour utiliser cette commande, vous pouvez taper \`/playlist list {nom}\` pour utiliser à nouveau la commande.", 
  msg119: "Utilisez la commande **/play playlist <list-name>** pour écouter ces playlists.\nTapez **/playlist list <list-name>** pour voir la musique dans une liste.", 
  msg120: "Veuillez spécifier un canal de texte.", 
  msg121: "<#{channel}> ajouté à la liste des canaux d'utilisation de la commande, la commande bot ne peut désormais être utilisée que sur les canaux de la liste.", 
  msg122: "Aucune donnée n'est déjà enregistrée.", 
  msg123: "<#{channel}> supprimé de la liste des canaux d'utilisation de la commande.", 
  msg124: "Ce canal est déjà sur la liste des canaux d'utilisation de la commande.", 
  msg125: "Ce canal n'est pas un canal texte.", 
  msg126: "❌ Voici la liste des canaux que vous pouvez commander sur ce serveur : {channel_filter}", 
  msg127: "La commande n'est pas définie.", error7 : "Veuillez réessayer cette commande plus tard. Possible bug signalé aux développeurs de robots.", 
  msg128: "Vous m'avez fait taire pendant que la musique jouait. C'est pourquoi j'ai arrêté la musique. Si vous annulez le son, je continuerai. 😔", 
  msg129: "joue", 
  msg130: "Veuillez écrire un nombre valide.", 
  msg131: "pour utiliser les commandes de la liste, vous devez voter pour le bot.", 
  msg132: "Aucune musique déjà mise en pause." }
}
module.exports = language;
