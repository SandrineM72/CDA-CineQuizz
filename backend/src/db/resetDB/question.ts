import { Question } from "../../entities/Question";
import { Choice } from "../../entities/Choice";
import type { Quiz } from "../../entities/Quiz";

interface CreateQuestionsParams {
  quiz1: Quiz;
  quiz2: Quiz;
  quiz3: Quiz;
  quiz4: Quiz;
  quiz5: Quiz;
  quiz6: Quiz;
  quiz7: Quiz;
  quiz8: Quiz;
  quiz9: Quiz;
  quiz10: Quiz;
  quiz11: Quiz;
  quiz12: Quiz;
  quiz13: Quiz;
  quiz14: Quiz;
  quiz15: Quiz;
  quiz16: Quiz;
  quiz17: Quiz;
  quiz18: Quiz;
  quiz19: Quiz;
  quiz20: Quiz;
  quiz21: Quiz;
  quiz22: Quiz;
  quiz23: Quiz;
  quiz24: Quiz;
  quiz25: Quiz;
  quiz26: Quiz;
  quiz27: Quiz;
}

export async function createQuestions({ 
  quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7, quiz8, quiz9, quiz10,
  quiz11, quiz12, quiz13, quiz14, quiz15, quiz16, quiz17, quiz18, quiz19, quiz20,
  quiz21, quiz22, quiz23, quiz24, quiz25, quiz26, quiz27
}: CreateQuestionsParams) {
  
  // ===== QUIZ 1 : Initiation au Phishing (Débutant) =====
  const question1_1 = await Question.create({
    title: "Vous recevez un email de votre banque qui vous demande de cliquer sur un lien pour \"vérifier votre compte\". Que faites-vous ?",
    explanation: "Votre banque ne vous demandera jamais de cliquer sur un lien par email. C'est une arnaque pour voler vos codes. Appelez toujours votre banque directement au numéro sur votre carte.",
    quiz: quiz1
  }).save();

  await Choice.create({ description: "Vous cliquez sur le lien", is_correct: false, question: question1_1 }).save();
  await Choice.create({ description: "Vous appelez votre banque pour vérifier", is_correct: true, question: question1_1 }).save();
  await Choice.create({ description: "Vous répondez à l'email", is_correct: false, question: question1_1 }).save();

  const question1_2 = await Question.create({
    title: "Vous partez en vacances pour 2 semaines. Que publiez-vous sur Facebook ?",
    explanation: "Dire publiquement que vous êtes en vacances, c'est indiquer que votre maison est vide. Les cambrioleurs surveillent aussi les réseaux sociaux ! Partagez vos belles photos après votre retour.",
    quiz: quiz1
  }).save();

  await Choice.create({ description: "Enfin en vacances aux Maldives ! De retour le 15 août ☀️", is_correct: false, question: question1_2 }).save();
  await Choice.create({ description: "Des photos pendant vos vacances, sans préciser les dates", is_correct: false, question: question1_2 }).save();
  await Choice.create({ description: "Vous attendez votre retour pour partager vos souvenirs", is_correct: true, question: question1_2 }).save();

  // ===== QUIZ 2 : Sécurité des Mots de Passe (Débutant) =====
  const question2_1 = await Question.create({
    title: "Parmi ces mots de passe, lequel est le plus sûr ?",
    explanation: "Un bon mot de passe mélange des lettres majuscules et minuscules, des chiffres et des symboles. Évitez votre prénom, votre date de naissance ou des suites simples. Plus c'est compliqué, mieux vous êtes protégé !",
    quiz: quiz2
  }).save();

  await Choice.create({ description: "123456", is_correct: false, question: question2_1 }).save();
  await Choice.create({ description: "MonPrenom2024", is_correct: false, question: question2_1 }).save();
  await Choice.create({ description: "K8$mPz9!wQx", is_correct: true, question: question2_1 }).save();

  const question2_2 = await Question.create({
    title: "Un site propose d'activer la \"double authentification\". Qu'est-ce que c'est ?",
    explanation: "C'est comme avoir deux clés pour ouvrir votre porte au lieu d'une seule. Même si quelqu'un vole votre mot de passe, il ne pourra pas entrer sans le code reçu sur votre téléphone. C'est gratuit et très efficace !",
    quiz: quiz2
  }).save();

  await Choice.create({ description: "Vous devez créer deux mots de passe différents", is_correct: false, question: question2_2 }).save();
  await Choice.create({ description: "Vous devez confirmer votre identité par deux moyens (mot de passe + code sur téléphone)", is_correct: true, question: question2_2 }).save();
  await Choice.create({ description: "C'est une option payante pour les professionnels", is_correct: false, question: question2_2 }).save();

  // ===== QUIZ 3 : WiFi Public - Les Dangers (Débutant) =====
  const question3_1 = await Question.create({
    title: "Vous êtes dans un café et voulez consulter votre compte bancaire. Que faites-vous ?",
    explanation: "Le WiFi gratuit dans les lieux publics n'est pas sûr : des personnes malveillantes peuvent voir ce que vous faites. Pour consulter votre banque, utilisez toujours votre connexion mobile qui est protégée.",
    quiz: quiz3
  }).save();

  await Choice.create({ description: "Vous utilisez le WiFi gratuit du café", is_correct: false, question: question3_1 }).save();
  await Choice.create({ description: "Vous utilisez vos données mobiles (4G/5G)", is_correct: true, question: question3_1 }).save();
  await Choice.create({ description: "Vous demandez le mot de passe WiFi pour être plus sûr", is_correct: false, question: question3_1 }).save();

  const question3_2 = await Question.create({
    title: "Votre ordinateur vous propose une mise à jour de sécurité. Que faites-vous ?",
    explanation: "Les mises à jour réparent les failles de sécurité de votre ordinateur. Ne pas les faire, c'est comme laisser votre porte ouverte aux cambrioleurs. Installez-les dès qu'elles apparaissent.",
    quiz: quiz3
  }).save();

  await Choice.create({ description: "Vous l'installez rapidement", is_correct: true, question: question3_2 }).save();
  await Choice.create({ description: "Vous la reportez indéfiniment, ça prend trop de temps", is_correct: false, question: question3_2 }).save();
  await Choice.create({ description: "Vous attendez quelques mois pour voir si d'autres l'ont installée", is_correct: false, question: question3_2 }).save();

  // ===== QUIZ 4 : Phishing Avancé =====
  const question4_1 = await Question.create({
    title: "Vous recevez un email urgent de \"service-securite@banque-fr.com\" vous demandant de confirmer une transaction suspecte. L'email contient votre nom et les 4 derniers chiffres de votre carte. Que faites-vous ?",
    explanation: "Les fraudeurs peuvent obtenir des informations partielles vous concernant. L'adresse \"banque-fr.com\" n'est probablement pas le vrai domaine de votre banque. Vérifiez toujours le domaine exact et contactez votre banque via l'application mobile ou le numéro officiel.",
    quiz: quiz4
  }).save();

  await Choice.create({ description: "C'est légitime car ils connaissent mes informations, je clique", is_correct: false, question: question4_1 }).save();
  await Choice.create({ description: "Je vérifie l'adresse email complète et contacte ma banque par leurs canaux officiels", is_correct: true, question: question4_1 }).save();
  await Choice.create({ description: "Je réponds à l'email pour demander plus d'informations", is_correct: false, question: question4_1 }).save();

  const question4_2 = await Question.create({
    title: "Vous voulez partager des photos de la fête d'anniversaire de votre enfant. Quelle pratique est la plus sûre ?",
    explanation: "Les photos d'enfants ne devraient jamais être publiques. Même en mode \"Amis\", vous ne contrôlez pas qui voit réellement les photos (amis d'amis, captures d'écran). Un album privé limite l'exposition et respecte la vie privée des autres enfants présents.",
    quiz: quiz4
  }).save();

  await Choice.create({ description: "Publier publiquement avec géolocalisation désactivée", is_correct: false, question: question4_2 }).save();
  await Choice.create({ description: "Publier en mode \"Amis uniquement\" sans taguer les autres enfants", is_correct: false, question: question4_2 }).save();
  await Choice.create({ description: "Créer un album privé partagé uniquement avec la famille proche", is_correct: true, question: question4_2 }).save();

  // ===== QUIZ 5 : Mots de Passe Avancés =====
  const question5_1 = await Question.create({
    title: "Vous devez créer un mot de passe pour votre nouvelle boîte email professionnelle. Quelle est la meilleure pratique ?",
    explanation: "Chaque compte doit avoir un mot de passe unique. Si un site est piraté, tous vos comptes avec le même mot de passe sont en danger. Un gestionnaire de mots de passe (comme Bitwarden ou 1Password) crée et stocke des mots de passe complexes pour vous.",
    quiz: quiz5
  }).save();

  await Choice.create({ description: "Utiliser le même mot de passe que votre email personnel (plus facile à retenir)", is_correct: false, question: question5_1 }).save();
  await Choice.create({ description: "Créer \"EmailPro2024!\" (facile à retenir et assez complexe)", is_correct: false, question: question5_1 }).save();
  await Choice.create({ description: "Générer un mot de passe unique complexe et le stocker dans un gestionnaire de mots de passe", is_correct: true, question: question5_1 }).save();

  const question5_2 = await Question.create({
    title: "Votre banque propose plusieurs méthodes de double authentification. Laquelle est la plus sûre ?",
    explanation: "Les applications d'authentification sont plus sûres que les SMS (qui peuvent être interceptés via SIM swapping). L'email est le moins sûr car si votre email est compromis, le 2FA devient inutile. Les applications génèrent des codes temporaires localement sans connexion internet nécessaire.",
    quiz: quiz5
  }).save();

  await Choice.create({ description: "SMS avec code à 6 chiffres", is_correct: false, question: question5_2 }).save();
  await Choice.create({ description: "Application d'authentification (Google Authenticator, Authy)", is_correct: true, question: question5_2 }).save();
  await Choice.create({ description: "Email avec lien de confirmation", is_correct: false, question: question5_2 }).save();

  // ===== QUIZ 6 : Sécurité WiFi Avancée =====
  const question6_1 = await Question.create({
    title: "Vous devez travailler depuis un hôtel et accéder à des documents professionnels confidentiels. Quelle est la meilleure option ?",
    explanation: "Le partage de connexion utilise vos données mobiles chiffrées, c'est la solution la plus sûre. Un VPN ajoute une protection mais dépend de sa qualité. La navigation privée ne protège pas vos données sur le réseau, elle empêche juste l'enregistrement local de l'historique.",
    quiz: quiz6
  }).save();

  await Choice.create({ description: "Utiliser le WiFi de l'hôtel avec un VPN activé", is_correct: false, question: question6_1 }).save();
  await Choice.create({ description: "Utiliser le WiFi de l'hôtel en navigation privée", is_correct: false, question: question6_1 }).save();
  await Choice.create({ description: "Créer un point d'accès avec votre smartphone (partage de connexion)", is_correct: true, question: question6_1 }).save();

  const question6_2 = await Question.create({
    title: "Vous utilisez un logiciel professionnel important. Une mise à jour majeure est disponible. Quelle est la meilleure approche ?",
    explanation: "Les mises à jour majeures peuvent contenir des bugs affectant votre travail. Attendre quelques jours permet de repérer les problèmes. MAIS les correctifs de sécurité (security patches) doivent être installés rapidement car les failles sont publiques et exploitées activement.",
    quiz: quiz6
  }).save();

  await Choice.create({ description: "Installer immédiatement pour avoir les dernières fonctionnalités", is_correct: false, question: question6_2 }).save();
  await Choice.create({ description: "Attendre 1-2 semaines pour vérifier la stabilité, mais installer les correctifs de sécurité immédiatement", is_correct: true, question: question6_2 }).save();
  await Choice.create({ description: "Ne jamais mettre à jour un système qui fonctionne", is_correct: false, question: question6_2 }).save();

  // ===== QUIZ 7 : Expert Phishing =====
  const question7_1 = await Question.create({
    title: "Vous recevez un email parfaitement formaté de \"noreply@credit-agricole.fr\" avec le logo officiel, concernant une mise à jour RGPD obligatoire. L'en-tête DKIM est valide. Comment procédez-vous ?",
    explanation: "Même avec un DKIM valide, l'email peut être compromis (spoofing de domaine, compte légitime piraté). La seule méthode sûre est d'accéder directement au site officiel par vos propres moyens pour vérifier s'il y a réellement une action requise.",
    quiz: quiz7
  }).save();

  await Choice.create({ description: "L'en-tête DKIM prouve l'authenticité, je peux suivre les instructions", is_correct: false, question: question7_1 }).save();
  await Choice.create({ description: "Je survole les liens pour vérifier l'URL de destination avant de cliquer", is_correct: false, question: question7_1 }).save();
  await Choice.create({ description: "Je me connecte directement sur le site officiel de ma banque via mes favoris pour vérifier", is_correct: true, question: question7_1 }).save();

  const question7_2 = await Question.create({
    title: "Vous gérez le compte LinkedIn de votre entreprise. Un profil vous demande en connexion avec peu d'informations mais prétend être d'un cabinet de recrutement prestigieux. Que faites-vous ?",
    explanation: "Les faux profils LinkedIn sont utilisés pour l'espionnage industriel et le phishing ciblé. Vérifiez : présence web du cabinet, ancienneté du compte, cohérence des connexions, recommandations. Un profil légitime aura une empreinte numérique vérifiable. Refuser automatiquement peut faire rater de vraies opportunités.",
    quiz: quiz7
  }).save();

  await Choice.create({ description: "J'accepte, c'est important pour le networking professionnel", is_correct: false, question: question7_2 }).save();
  await Choice.create({ description: "Je vérifie l'existence du cabinet, le profil de la personne sur d'autres plateformes, et la cohérence de son réseau avant d'accepter", is_correct: true, question: question7_2 }).save();
  await Choice.create({ description: "Je refuse automatiquement les profils incomplets", is_correct: false, question: question7_2 }).save();

  // ===== QUIZ 8 : Expert Mots de Passe =====
  const question8_1 = await Question.create({
    title: "Quelle méthode offre la meilleure sécurité pour vos mots de passe professionnels critiques ?",
    explanation: "La combinaison gestionnaire de mots de passe + 2FA offre la meilleure protection. Même si quelqu'un obtient votre mot de passe, il ne pourra pas accéder sans le second facteur. Les passphrases sont bonnes mais moins pratiques à gérer sur de nombreux comptes.",
    quiz: quiz8
  }).save();

  await Choice.create({ description: "Un mot de passe de 16 caractères avec majuscules, minuscules, chiffres et symboles", is_correct: false, question: question8_1 }).save();
  await Choice.create({ description: "Une passphrase de 5 mots aléatoires du dictionnaire (ex: correct-horse-battery-staple-lamp)", is_correct: false, question: question8_1 }).save();
  await Choice.create({ description: "Un mot de passe de 12 caractères stocké dans un gestionnaire avec authentification biométrique et 2FA activé", is_correct: true, question: question8_1 }).save();

  const question8_2 = await Question.create({
    title: "Vous configurez le 2FA pour un compte critique d'administration système. Quelle méthode offre le meilleur équilibre sécurité/praticité ?",
    explanation: "Les clés matérielles U2F/WebAuthn (YubiKey, Titan) résistent au phishing et aux attaques man-in-the-middle. TOTP en backup reste utilisable si vous perdez la clé. Les codes de backup doivent être stockés chiffrés hors ligne. Le SMS est vulnérable au SIM swapping. La biométrie seule n'est pas du 2FA (pas deux facteurs différents).",
    quiz: quiz8
  }).save();

  await Choice.create({ description: "TOTP via application (RFC 6238) avec codes de backup sécurisés + clé U2F/WebAuthn comme méthode principale", is_correct: true, question: question8_2 }).save();
  await Choice.create({ description: "SMS + email comme double backup", is_correct: false, question: question8_2 }).save();
  await Choice.create({ description: "Authentification biométrique seule (empreinte digitale)", is_correct: false, question: question8_2 }).save();

  // ===== QUIZ 9 : Expert Réseaux WiFi =====
  const question9_1 = await Question.create({
    title: "Vous devez absolument utiliser un WiFi public pour une visioconférence professionnelle. Quelle configuration minimale de sécurité recommandez-vous ?",
    explanation: "Un VPN de qualité chiffre tout votre trafic. Vérifier le certificat SSL du réseau évite les attaques man-in-the-middle. Désactiver le partage de fichiers empêche l'accès à votre machine. Le HTTPS seul ne suffit pas, et la navigation privée ne protège pas les transmissions réseau.",
    quiz: quiz9
  }).save();

  await Choice.create({ description: "VPN commercial réputé + vérification du certificat SSL du réseau + désactivation du partage de fichiers", is_correct: true, question: question9_1 }).save();
  await Choice.create({ description: "Navigation privée + antivirus à jour + firewall activé", is_correct: false, question: question9_1 }).save();
  await Choice.create({ description: "Connexion au réseau avec mot de passe + HTTPS uniquement + 2FA sur tous les comptes", is_correct: false, question: question9_1 }).save();

  const question9_2 = await Question.create({
    title: "Votre serveur web professionnel exécute WordPress. Une vulnérabilité critique zero-day est annoncée avec un patch disponible. Quelle est la procédure optimale ?",
    explanation: "Une vulnérabilité zero-day critique est activement exploitée. Le délai de 24h permet de tester la compatibilité sans exposer le système trop longtemps. Déployer directement en production risque une panne. Attendre 2 semaines expose à une compromission quasi-certaine. Implémentez aussi des mesures temporaires : WAF rules, surveillance accrue.",
    quiz: quiz9
  }).save();

  await Choice.create({ description: "Appliquer le patch immédiatement en production", is_correct: false, question: question9_2 }).save();
  await Choice.create({ description: "Tester le patch sur un environnement de staging, puis déployer en production sous 24h maximum", is_correct: true, question: question9_2 }).save();
  await Choice.create({ description: "Attendre la prochaine fenêtre de maintenance planifiée dans 2 semaines", is_correct: false, question: question9_2 }).save();

  // ===== QUIZ 10 : Attaques Ciblées (Expert Phishing) =====
  const question10_1 = await Question.create({
    title: "Vous recevez un SMS d'un numéro similaire à celui de votre banque (différence d'un chiffre) concernant une tentative de connexion suspecte à votre compte. Quelle est cette technique et comment réagissez-vous ?",
    explanation: "C'est du SMS spoofing : les fraudeurs falsifient le numéro d'expéditeur pour qu'il ressemble à celui de votre banque. Le message peut même apparaître dans le fil de conversation légitime. Ne jamais cliquer sur les liens. Contactez votre banque via l'application ou le numéro officiel. Signalez le SMS au 33700 (plateforme officielle).",
    quiz: quiz10
  }).save();

  await Choice.create({ description: "C'est du SIM swapping, je contacte immédiatement mon opérateur", is_correct: false, question: question10_1 }).save();
  await Choice.create({ description: "C'est du SMS spoofing, je supprime le message et contacte ma banque par les canaux officiels", is_correct: true, question: question10_1 }).save();
  await Choice.create({ description: "C'est du smishing avec social engineering, je signale le numéro comme spam", is_correct: false, question: question10_1 }).save();

  // ===== QUIZ 11 : Gestionnaires de Mots de Passe =====
  const question11_1 = await Question.create({
    title: "Pour protéger vos photos de famille importantes, que faites-vous ?",
    explanation: "Si votre ordinateur tombe en panne ou est attaqué par un virus, vos photos seront perdues. Copiez-les sur un disque dur externe ET sur internet (Google Photos, iCloud...) pour être tranquille.",
    quiz: quiz11
  }).save();

  await Choice.create({ description: "Vous les gardez uniquement sur votre ordinateur", is_correct: false, question: question11_1 }).save();
  await Choice.create({ description: "Vous les sauvegardez sur un disque dur externe déconnecté + cloud", is_correct: true, question: question11_1 }).save();
  await Choice.create({ description: "Vous les envoyez par email à vous-même", is_correct: false, question: question11_1 }).save();

  // ===== QUIZ 12 : VPN et Sécurité =====
  const question12_1 = await Question.create({
    title: "Vous gérez les données importantes de votre petite entreprise. Quelle stratégie de sauvegarde appliquez-vous ?",
    explanation: "La règle 3-2-1 protège contre tous les scénarios : panne matérielle (plusieurs copies), sinistre local comme incendie (copie hors site), ransomware (le cloud garde les versions antérieures). L'automatisation évite les oublis. Les sauvegardes manuelles sont souvent négligées.",
    quiz: quiz12
  }).save();

  await Choice.create({ description: "Sauvegarde quotidienne automatique sur un disque dur réseau (NAS)", is_correct: false, question: question12_1 }).save();
  await Choice.create({ description: "Règle 3-2-1 : 3 copies, sur 2 supports différents, 1 hors site (cloud chiffré) avec sauvegarde automatique", is_correct: true, question: question12_1 }).save();
  await Choice.create({ description: "Sauvegarde hebdomadaire manuelle sur disque dur externe", is_correct: false, question: question12_1 }).save();

  // ===== QUIZ 13 : Ingénierie Sociale (Expert Phishing) =====
  const question13_1 = await Question.create({
    title: "Vous cherchez un logiciel gratuit pour lire des PDF. Où le téléchargez-vous ?",
    explanation: "Télécharger sur n'importe quel site peut vous faire installer des virus sans le savoir. Allez toujours sur le site officiel du logiciel, c'est le seul moyen d'être sûr que c'est sain.",
    quiz: quiz13
  }).save();

  await Choice.create({ description: "Sur le premier site trouvé via Google", is_correct: false, question: question13_1 }).save();
  await Choice.create({ description: "Sur le site officiel de l'éditeur (Adobe, Foxit...)", is_correct: true, question: question13_1 }).save();
  await Choice.create({ description: "Sur un site qui propose \"la version pro gratuite\"", is_correct: false, question: question13_1 }).save();

  // ===== QUIZ 14 : Authentification Multi-Facteurs =====
  const question14_1 = await Question.create({
    title: "Vous cherchez une alternative gratuite à Microsoft Office. Un site propose \"Office 2024 gratuit - crack inclus\". Quels sont les risques ?",
    explanation: "Les logiciels crackés contiennent souvent des malwares : virus qui volent vos données bancaires, ransomwares qui bloquent vos fichiers, keyloggers qui enregistrent vos mots de passe. C'est aussi illégal. Utilisez des alternatives légales gratuites : LibreOffice, Google Docs, OnlyOffice.",
    quiz: quiz14
  }).save();

  await Choice.create({ description: "Aucun risque si j'ai un bon antivirus", is_correct: false, question: question14_1 }).save();
  await Choice.create({ description: "Risques légaux (piratage) et risques de sécurité (malwares, ransomwares, keyloggers)", is_correct: true, question: question14_1 }).save();
  await Choice.create({ description: "C'est légal car Microsoft est une grande entreprise", is_correct: false, question: question14_1 }).save();

  // ===== QUIZ 15 : Protocoles de Sécurité WiFi =====
  const question15_1 = await Question.create({
    title: "Vous devez installer un outil de développement open-source depuis GitHub. Quelles vérifications effectuez-vous avant l'installation ?",
    explanation: "Même l'open-source peut être compromis (supply chain attacks). Vérifiez : signature cryptographique du fichier, correspondance du hash SHA256, activité récente du projet, absence d'injection malveillante récente dans les commits, réputation des mainteneurs. Analysez les dépendances avec des outils comme npm audit ou Snyk.",
    quiz: quiz15
  }).save();

  await Choice.create({ description: "Je vérifie le nombre d'étoiles et la dernière mise à jour", is_correct: false, question: question15_1 }).save();
  await Choice.create({ description: "Je vérifie : signature GPG du release, hash SHA256, historique des commits, réputation des contributeurs, issues de sécurité, dépendances du projet", is_correct: true, question: question15_1 }).save();
  await Choice.create({ description: "Je fais confiance car c'est open-source donc vérifié par la communauté", is_correct: false, question: question15_1 }).save();

  // ===== QUIZ 16 : Emails Suspects (Débutant Phishing) =====
  const question16_1 = await Question.create({
    title: "Votre entreprise subit une attaque ransomware. Vos sauvegardes sont chiffrées car le disque réseau était monté. Quelle architecture aurait prévenu cela ?",
    explanation: "L'immutabilité (Object Lock, versioning protégé) empêche la modification/suppression des sauvegardes, même avec accès admin. La segmentation réseau isole les systèmes de backup. Le RAID protège contre les pannes matérielles mais pas contre les ransomwares. Le 2FA ne protège pas si le système compromis a déjà les accès montés.",
    quiz: quiz16
  }).save();

  await Choice.create({ description: "Sauvegardes avec immutabilité activée (Object Lock S3) + rétention minimum 30 jours + segmentation réseau des backups", is_correct: true, question: question16_1 }).save();
  await Choice.create({ description: "Sauvegardes multiples sur plusieurs NAS avec RAID", is_correct: false, question: question16_1 }).save();
  await Choice.create({ description: "Sauvegardes cloud avec 2FA activé sur le compte", is_correct: false, question: question16_1 }).save();

  // Ajout de questions simples pour compléter les quiz restants
  // ===== QUIZ 17-27 : Questions complémentaires =====
  
  const question17_1 = await Question.create({
    title: "Quelle est la meilleure pratique pour créer un mot de passe sécurisé ?",
    explanation: "Un bon mot de passe doit être long (au moins 12 caractères), unique pour chaque compte, et contenir un mélange de lettres, chiffres et symboles.",
    quiz: quiz17
  }).save();

  await Choice.create({ description: "Utiliser votre date de naissance", is_correct: false, question: question17_1 }).save();
  await Choice.create({ description: "Créer une combinaison complexe avec lettres, chiffres et symboles", is_correct: true, question: question17_1 }).save();
  await Choice.create({ description: "Réutiliser le même mot de passe partout", is_correct: false, question: question17_1 }).save();

  const question18_1 = await Question.create({
    title: "Comment reconnaître un hotspot WiFi malveillant ?",
    explanation: "Les hotspots malveillants imitent souvent des réseaux légitimes avec des noms similaires. Méfiez-vous des réseaux sans mot de passe ou avec des noms génériques.",
    quiz: quiz18
  }).save();

  await Choice.create({ description: "Vérifier le nom exact avec l'établissement", is_correct: true, question: question18_1 }).save();
  await Choice.create({ description: "Se connecter au réseau le plus puissant", is_correct: false, question: question18_1 }).save();
  await Choice.create({ description: "Préférer les réseaux sans mot de passe", is_correct: false, question: question18_1 }).save();

  const question19_1 = await Question.create({
    title: "Qu'est-ce que le smishing ?",
    explanation: "Le smishing est du phishing par SMS. Les fraudeurs envoient des messages texte contenant des liens malveillants ou demandant des informations personnelles.",
    quiz: quiz19
  }).save();

  await Choice.create({ description: "Du phishing par SMS", is_correct: true, question: question19_1 }).save();
  await Choice.create({ description: "Un type de virus informatique", is_correct: false, question: question19_1 }).save();
  await Choice.create({ description: "Une technique de piratage WiFi", is_correct: false, question: question19_1 }).save();

  const question20_1 = await Question.create({
    title: "Pourquoi la biométrie seule n'est pas suffisante comme authentification ?",
    explanation: "La biométrie (empreinte, reconnaissance faciale) ne peut pas être changée si elle est compromise. Elle doit être combinée avec d'autres méthodes d'authentification.",
    quiz: quiz20
  }).save();

  await Choice.create({ description: "Elle peut être copiée et ne peut pas être modifiée", is_correct: true, question: question20_1 }).save();
  await Choice.create({ description: "Elle est trop lente", is_correct: false, question: question20_1 }).save();
  await Choice.create({ description: "Elle coûte trop cher", is_correct: false, question: question20_1 }).save();

  const question21_1 = await Question.create({
    title: "Qu'est-ce qu'une attaque Man-in-the-Middle ?",
    explanation: "Dans une attaque MITM, un pirate s'insère entre vous et votre destination pour intercepter ou modifier les communications.",
    quiz: quiz21
  }).save();

  await Choice.create({ description: "Un pirate intercepte vos communications", is_correct: true, question: question21_1 }).save();
  await Choice.create({ description: "Un virus qui efface vos données", is_correct: false, question: question21_1 }).save();
  await Choice.create({ description: "Un spam envoyé par email", is_correct: false, question: question21_1 }).save();

  const question22_1 = await Question.create({
    title: "Comment vérifier si un site web est sécurisé ?",
    explanation: "Un site sécurisé affiche HTTPS dans l'URL et un cadenas dans la barre d'adresse. Mais attention, HTTPS seul ne garantit pas qu'un site est légitime.",
    quiz: quiz22
  }).save();

  await Choice.create({ description: "Vérifier la présence de HTTPS et du cadenas", is_correct: true, question: question22_1 }).save();
  await Choice.create({ description: "Regarder si le site est joli", is_correct: false, question: question22_1 }).save();
  await Choice.create({ description: "Vérifier qu'il n'y a pas de pop-ups", is_correct: false, question: question22_1 }).save();

  const question23_1 = await Question.create({
    title: "Que faire si vous pensez que votre mot de passe a été compromis ?",
    explanation: "Changez immédiatement votre mot de passe et activez la double authentification. Vérifiez aussi l'activité récente de votre compte.",
    quiz: quiz23
  }).save();

  await Choice.create({ description: "Changer immédiatement le mot de passe et activer 2FA", is_correct: true, question: question23_1 }).save();
  await Choice.create({ description: "Attendre quelques jours pour voir", is_correct: false, question: question23_1 }).save();
  await Choice.create({ description: "Ajouter un chiffre à la fin du mot de passe", is_correct: false, question: question23_1 }).save();

  const question24_1 = await Question.create({
    title: "Qu'est-ce qu'un ransomware ?",
    explanation: "Un ransomware est un logiciel malveillant qui chiffre vos fichiers et demande une rançon pour les débloquer. Les sauvegardes régulières sont la meilleure protection.",
    quiz: quiz24
  }).save();

  await Choice.create({ description: "Un virus qui chiffre vos fichiers et demande une rançon", is_correct: true, question: question24_1 }).save();
  await Choice.create({ description: "Un logiciel qui accélère votre ordinateur", is_correct: false, question: question24_1 }).save();
  await Choice.create({ description: "Un antivirus gratuit", is_correct: false, question: question24_1 }).save();

  const question25_1 = await Question.create({
    title: "Pourquoi est-il important de maintenir vos applications mobiles à jour ?",
    explanation: "Les mises à jour corrigent des failles de sécurité qui pourraient être exploitées par des pirates. Ne pas mettre à jour expose vos données personnelles.",
    quiz: quiz25
  }).save();

  await Choice.create({ description: "Pour corriger les failles de sécurité", is_correct: true, question: question25_1 }).save();
  await Choice.create({ description: "Pour avoir de nouvelles couleurs", is_correct: false, question: question25_1 }).save();
  await Choice.create({ description: "Ce n'est pas important", is_correct: false, question: question25_1 }).save();

  const question26_1 = await Question.create({
    title: "Qu'est-ce que le social engineering en cybersécurité ?",
    explanation: "Le social engineering manipule les gens pour qu'ils divulguent des informations confidentielles ou effectuent des actions compromettantes.",
    quiz: quiz26
  }).save();

  await Choice.create({ description: "Manipuler les gens pour obtenir des informations", is_correct: true, question: question26_1 }).save();
  await Choice.create({ description: "Créer des réseaux sociaux", is_correct: false, question: question26_1 }).save();
  await Choice.create({ description: "Programmer des logiciels", is_correct: false, question: question26_1 }).save();

  const question27_1 = await Question.create({
    title: "Quelle est la règle d'or de la navigation sécurisée ?",
    explanation: "Réfléchissez avant de cliquer. Vérifiez toujours la source, l'URL, et demandez-vous si la requête est légitime avant d'agir.",
    quiz: quiz27
  }).save();

  await Choice.create({ description: "Réfléchir avant de cliquer sur un lien", is_correct: true, question: question27_1 }).save();
  await Choice.create({ description: "Cliquer rapidement pour gagner du temps", is_correct: false, question: question27_1 }).save();
  await Choice.create({ description: "Ne jamais utiliser internet", is_correct: false, question: question27_1 }).save();
}
