import { Question } from "../../../entities/Question";
import { Choice } from "../../../entities/Choice";
import type { Quiz } from "../../../entities/Quiz";

interface CreateNetworkQuestionsParams {
  network_beginner_1: Quiz;
  network_beginner_2: Quiz;
  network_advanced_1: Quiz;
  network_advanced_2: Quiz;
  network_expert_1: Quiz;
  network_expert_2: Quiz;
}

export async function createNetworkQuestions({
  network_beginner_1,
  network_beginner_2,
  network_advanced_1,
  network_advanced_2,
  network_expert_1,
  network_expert_2,
}: CreateNetworkQuestionsParams) {

  // ========================================
  // QUIZ 1 : WiFi public - les dangers (DÉBUTANT)
  // ========================================

  const q1_1 = await Question.create({
    title: "Vous êtes dans un café et voulez consulter votre compte bancaire. Quelle connexion devez-vous utiliser ?",
    explanation: "Les WiFi publics ne sont PAS sécurisés : n'importe qui sur le même réseau peut potentiellement intercepter vos données. Pour consulter votre banque ou faire des achats, utilisez toujours vos données mobiles (4G/5G) qui sont chiffrées.",
    quiz: network_beginner_1
  }).save();

  await Choice.create({ description: "Vos données mobiles (4G/5G)", is_correct: true, question: q1_1 }).save();
  await Choice.create({ description: "Le WiFi gratuit du café", is_correct: false, question: q1_1 }).save();
  await Choice.create({ description: "Le WiFi du café avec un mot de passe", is_correct: false, question: q1_1 }).save();

  const q1_2 = await Question.create({
    title: "Qu'est-ce qu'un 'Evil Twin' (jumeau maléfique) dans un lieu public ?",
    explanation: "Un Evil Twin est un faux WiFi qui imite un réseau légitime. Par exemple, un pirate crée 'Starbucks_WiFi_Gratuit' pour ressembler au vrai réseau Starbucks. Quand vous vous y connectez, il peut voir tout ce que vous faites en ligne. Demandez toujours le nom exact du WiFi au personnel.",
    quiz: network_beginner_1
  }).save();

  await Choice.create({ description: "Un virus qui duplique vos fichiers", is_correct: false, question: q1_2 }).save();
  await Choice.create({ description: "Un faux WiFi qui imite un réseau légitime", is_correct: true, question: q1_2 }).save();
  await Choice.create({ description: "Un jumeau identique qui vous espionne", is_correct: false, question: q1_2 }).save();

  const q1_3 = await Question.create({
    title: "Vous voyez deux réseaux WiFi : 'Hotel_Guest' et 'Hotel_Guest_Free'. Que devriez-vous faire ?",
    explanation: "La présence de deux réseaux similaires est suspect. L'un est probablement un piège (Evil Twin). Demandez TOUJOURS à la réception quel est le vrai nom du WiFi de l'hôtel avant de vous connecter. Les pirates comptent sur le fait que les gens choisissent le réseau avec 'Free' dans le nom.",
    quiz: network_beginner_1
  }).save();

  await Choice.create({ description: "Choisir 'Hotel_Guest_Free' car c'est gratuit", is_correct: false, question: q1_3 }).save();
  await Choice.create({ description: "Se connecter aux deux pour plus de débit", is_correct: false, question: q1_3 }).save();
  await Choice.create({ description: "Demander à la réception quel est le bon réseau", is_correct: true, question: q1_3 }).save();

  // ========================================
  // QUIZ 2 : Navigation sécurisée au quotidien (DÉBUTANT)
  // ========================================

  const q2_1 = await Question.create({
    title: "Vous voyez 'https://' et un cadenas dans la barre d'adresse. Que signifie-t-il ?",
    explanation: "HTTPS signifie que votre connexion avec ce site est chiffrée : personne ne peut lire ce que vous envoyez (mot de passe, numéro de carte bancaire). Le HTTP simple (sans S) n'est PAS sécurisé. Mais attention : HTTPS ne garantit pas que le site est légitime, juste que la connexion est chiffrée !",
    quiz: network_beginner_2
  }).save();

  await Choice.create({ description: "Votre connexion avec ce site est chiffrée", is_correct: true, question: q2_1 }).save();
  await Choice.create({ description: "Le site est 100% sûr et vérifié", is_correct: false, question: q2_1 }).save();
  await Choice.create({ description: "Vous êtes protégé contre les virus", is_correct: false, question: q2_1 }).save();

  const q2_2 = await Question.create({
    title: "Votre navigateur affiche 'Connexion non sécurisée' sur un site. Devriez-vous continuer ?",
    explanation: "Ce message signifie que le site n'utilise pas HTTPS ou que son certificat est invalide. Toutes vos données (mots de passe, infos bancaires) seront envoyées en clair et lisibles par n'importe qui. Ne JAMAIS saisir d'informations sensibles sur un site non sécurisé.",
    quiz: network_beginner_2
  }).save();

  await Choice.create({ description: "Oui, c'est juste un avertissement pour rien", is_correct: false, question: q2_2 }).save();
  await Choice.create({ description: "Non, surtout si vous devez entrer un mot de passe", is_correct: true, question: q2_2 }).save();
  await Choice.create({ description: "Oui, si c'est un site connu", is_correct: false, question: q2_2 }).save();

  const q2_3 = await Question.create({
    title: "Pourquoi est-il important de maintenir votre navigateur à jour ?",
    explanation: "Les mises à jour corrigent des failles de sécurité découvertes dans le navigateur. Les pirates exploitent ces failles pour installer des virus ou voler vos données. Un navigateur obsolète est une porte d'entrée pour les attaques. Mettez à jour Chrome, Firefox, Safari ou Edge dès qu'une nouvelle version est disponible.",
    quiz: network_beginner_2
  }).save();

  await Choice.create({ description: "Pour avoir de nouvelles fonctionnalités", is_correct: false, question: q2_3 }).save();
  await Choice.create({ description: "Pour économiser de la batterie", is_correct: false, question: q2_3 }).save();
  await Choice.create({ description: "Pour corriger les failles de sécurité", is_correct: true, question: q2_3 }).save();

  // ========================================
  // QUIZ 3 : VPN et chiffrement (AVANCÉ)
  // ========================================

  const q3_1 = await Question.create({
    title: "Quel est le rôle PRINCIPAL d'un VPN (Virtual Private Network) ?",
    explanation: "Un VPN crée un tunnel chiffré entre votre appareil et Internet. Même sur un WiFi public non sécurisé, personne ne peut voir ce que vous faites. Le VPN masque aussi votre adresse IP réelle. C'est comme envoyer vos données dans une enveloppe scellée au lieu d'une carte postale lisible par tous.",
    quiz: network_advanced_1
  }).save();

  await Choice.create({ description: "Chiffrer votre trafic Internet", is_correct: true, question: q3_1 }).save();
  await Choice.create({ description: "Accélérer votre connexion Internet", is_correct: false, question: q3_1 }).save();
  await Choice.create({ description: "Bloquer les publicités sur tous les sites", is_correct: false, question: q3_1 }).save();

  const q3_2 = await Question.create({
    title: "Vous utilisez un VPN gratuit. Quel risque devez-vous considérer ?",
    explanation: "Les VPN gratuits doivent bien gagner de l'argent quelque part. Certains revendent vos données de navigation à des publicitaires, injectent des pubs, ou ont des failles de sécurité. Un VPN de confiance coûte quelques euros par mois (ProtonVPN, Mullvad, IVPN). Si c'est gratuit, VOUS êtes le produit.",
    quiz: network_advanced_1
  }).save();

  await Choice.create({ description: "Ils sont toujours aussi sûrs que les payants", is_correct: false, question: q3_2 }).save();
  await Choice.create({ description: "Ils peuvent revendre vos données de navigation", is_correct: true, question: q3_2 }).save();
  await Choice.create({ description: "Ils n'ont aucun risque particulier", is_correct: false, question: q3_2 }).save();

  const q3_3 = await Question.create({
    title: "Un VPN protège-t-il contre TOUTES les menaces en ligne ?",
    explanation: "Non ! Un VPN chiffre votre connexion mais ne vous protège PAS contre le phishing, les virus téléchargés, ou les sites frauduleux. Si vous cliquez sur un lien malveillant ou téléchargez un virus, le VPN n'y peut rien. C'est un outil de protection de la vie privée et de sécurité réseau, pas un antivirus.",
    quiz: network_advanced_1
  }).save();

  await Choice.create({ description: "Oui, un VPN protège contre tout", is_correct: false, question: q3_3 }).save();
  await Choice.create({ description: "Oui, mais seulement les VPN payants", is_correct: false, question: q3_3 }).save();
  await Choice.create({ description: "Non, il ne protège pas contre phishing et virus", is_correct: true, question: q3_3 }).save();

  // ========================================
  // QUIZ 4 : Hotspots malveillants (AVANCÉ)
  // ========================================

  const q4_1 = await Question.create({
    title: "Vous êtes à l'aéroport et voyez 'Airport_Free_WiFi' sans mot de passe. Qu'est-ce qui est suspect ?",
    explanation: "Les WiFi légitimes d'aéroport affichent généralement une page de connexion avec les conditions d'utilisation. Un réseau complètement ouvert sans AUCUNE authentification est très suspect. Les pirates créent des réseaux ouverts car les gens s'y connectent sans réfléchir. Vérifiez auprès du personnel ou utilisez vos données mobiles.",
    quiz: network_advanced_2
  }).save();

  await Choice.create({ description: "Un WiFi sans mot de passe est toujours suspect", is_correct: true, question: q4_1 }).save();
  await Choice.create({ description: "C'est normal, les aéroports offrent le WiFi gratuit", is_correct: false, question: q4_1 }).save();
  await Choice.create({ description: "Rien n'est suspect, c'est pratique", is_correct: false, question: q4_1 }).save();

  const q4_2 = await Question.create({
    title: "Un hotspot malveillant peut faire quoi exactement avec vos données ?",
    explanation: "Sur un hotspot malveillant, le pirate voit TOUT votre trafic non chiffré : sites visités, mots de passe sur sites HTTP, emails, cookies de session. Il peut aussi faire du 'SSL stripping' pour forcer des sites HTTPS à revenir en HTTP. Il peut modifier les pages web que vous visitez, injecter du code malveillant, ou vous rediriger vers des faux sites.",
    quiz: network_advanced_2
  }).save();

  await Choice.create({ description: "Seulement ralentir votre connexion", is_correct: false, question: q4_2 }).save();
  await Choice.create({ description: "Voir vos mots de passe et rediriger vers de faux sites", is_correct: true, question: q4_2 }).save();
  await Choice.create({ description: "Rien si vous utilisez HTTPS", is_correct: false, question: q4_2 }).save();

  const q4_3 = await Question.create({
    title: "Comment identifier un hotspot WiFi légitime dans un lieu public ?",
    explanation: "La meilleure méthode est de demander au personnel officiel (réception, service client) le nom EXACT du réseau WiFi et la procédure de connexion. Vérifiez aussi sur leur site web officiel ou leurs panneaux d'affichage. Méfiez-vous des réseaux avec des noms trop génériques ('Free WiFi', 'Guest') ou des fautes d'orthographe.",
    quiz: network_advanced_2
  }).save();

  await Choice.create({ description: "Choisir celui qui a le signal le plus fort", is_correct: false, question: q4_3 }).save();
  await Choice.create({ description: "Se connecter au premier réseau disponible", is_correct: false, question: q4_3 }).save();
  await Choice.create({ description: "Demander le nom exact au personnel du lieu", is_correct: true, question: q4_3 }).save();

  // ========================================
  // QUIZ 5 : Attaques Man-in-the-Middle (EXPERT)
  // ========================================

  const q5_1 = await Question.create({
    title: "Dans une attaque Man-in-the-Middle (MITM), l'attaquant se positionne où exactement ?",
    explanation: "L'attaquant s'insère littéralement ENTRE vous et votre destination (site web, serveur email). Vous croyez communiquer directement avec votre banque, mais en fait vos données passent par le pirate qui les lit, les enregistre, et peut même les modifier avant de les transmettre. C'est comme un facteur malveillant qui ouvre votre courrier avant de le délivrer.",
    quiz: network_expert_1
  }).save();

  await Choice.create({ description: "Entre vous et le serveur que vous contactez", is_correct: true, question: q5_1 }).save();
  await Choice.create({ description: "Dans votre ordinateur avec un virus", is_correct: false, question: q5_1 }).save();
  await Choice.create({ description: "Sur le serveur du site que vous visitez", is_correct: false, question: q5_1 }).save();

  const q5_2 = await Question.create({
    title: "Qu'est-ce que le 'SSL Stripping' dans une attaque MITM ?",
    explanation: "Le SSL Stripping force votre connexion à revenir de HTTPS (sécurisé) vers HTTP (non sécurisé). L'attaquant intercepte votre demande HTTPS, se connecte lui au site en HTTPS, mais vous sert la page en HTTP. Vous voyez le site normalement mais sans le cadenas de sécurité, et toutes vos données (mot de passe, etc.) sont lisibles par l'attaquant.",
    quiz: network_expert_1
  }).save();

  await Choice.create({ description: "Voler les certificats SSL des sites web", is_correct: false, question: q5_2 }).save();
  await Choice.create({ description: "Forcer une connexion HTTPS à devenir HTTP", is_correct: true, question: q5_2 }).save();
  await Choice.create({ description: "Désactiver le WiFi de votre appareil", is_correct: false, question: q5_2 }).save();

  const q5_3 = await Question.create({
    title: "Comment l'épinglage de certificat (Certificate Pinning) protège-t-il contre les MITM ?",
    explanation: "L'épinglage de certificat mémorise le certificat exact d'un site (ex: celui de votre banque) dans l'application. Si un attaquant tente une MITM avec un faux certificat, même valide, l'application détecte que ce n'est PAS le bon certificat mémorisé et refuse la connexion. C'est comme reconnaître la signature manuscrite exacte de quelqu'un au lieu de juste vérifier qu'il a un stylo.",
    quiz: network_expert_1
  }).save();

  await Choice.create({ description: "L'app demande un mot de passe supplémentaire", is_correct: false, question: q5_3 }).save();
  await Choice.create({ description: "L'app refuse toutes les connexions HTTPS", is_correct: false, question: q5_3 }).save();
  await Choice.create({ description: "L'app mémorise le certificat exact et détecte les faux", is_correct: true, question: q5_3 }).save();

  // ========================================
  // QUIZ 6 : Protocoles de sécurité WiFi (EXPERT)
  // ========================================

  const q6_1 = await Question.create({
    title: "Classez ces protocoles WiFi du MOINS au PLUS sécurisé : WEP, WPA, WPA2, WPA3",
    explanation: "WEP (1999) est obsolète et cassable en quelques minutes. WPA (2003) était une amélioration temporaire. WPA2 (2004) avec AES est solide mais vulnérable aux attaques par dictionnaire sur le mot de passe WiFi (attaque KRACK). WPA3 (2018) corrige ces failles avec le protocole SAE qui résiste au hacking hors ligne et offre le 'Forward Secrecy' (même si le mot de passe WiFi fuite plus tard, les anciennes communications restent sécurisées).",
    quiz: network_expert_2
  }).save();

  await Choice.create({ description: "WPA3 > WPA2 > WPA > WEP", is_correct: true, question: q6_1 }).save();
  await Choice.create({ description: "WEP > WPA > WPA2 > WPA3", is_correct: false, question: q6_1 }).save();
  await Choice.create({ description: "Tous sont équivalents en sécurité", is_correct: false, question: q6_1 }).save();

  const q6_2 = await Question.create({
    title: "Qu'est-ce que l'attaque KRACK (Key Reinstallation Attack) contre WPA2 ?",
    explanation: "KRACK exploite une faiblesse dans le handshake (poignée de main) WPA2 pour forcer la réinstallation d'une clé de chiffrement déjà utilisée. Cela permet à l'attaquant de déchiffrer le trafic, injecter des données, ou forger des paquets. Découverte en 2017, elle affecte tous les appareils WPA2. La solution : passer à WPA3 ou s'assurer que vos appareils ont les patchs de sécurité.",
    quiz: network_expert_2
  }).save();

  await Choice.create({ description: "Un virus qui casse les mots de passe WiFi", is_correct: false, question: q6_2 }).save();
  await Choice.create({ description: "Une faille permettant de déchiffrer le trafic WPA2", is_correct: true, question: q6_2 }).save();
  await Choice.create({ description: "Un malware qui s'installe via le WiFi", is_correct: false, question: q6_2 }).save();

  const q6_3 = await Question.create({
    title: "WPA3 introduit le 'SAE' (Simultaneous Authentication of Equals). Quel est son avantage majeur ?",
    explanation: "SAE remplace le PSK (Pre-Shared Key) de WPA2 par un échange cryptographique résistant aux attaques hors ligne. Avec WPA2, un attaquant peut capturer le handshake et tenter de deviner le mot de passe WiFi tranquillement chez lui avec des dictionnaires. Avec SAE de WPA3, il DOIT être présent lors de chaque tentative (limite de taux) et ne peut pas attaquer hors ligne. Cela rend le bruteforce du mot de passe WiFi quasi impossible.",
    quiz: network_expert_2
  }).save();

  await Choice.create({ description: "Connexion WiFi plus rapide", is_correct: false, question: q6_3 }).save();
  await Choice.create({ description: "Portée du signal WiFi augmentée", is_correct: false, question: q6_3 }).save();
  await Choice.create({ description: "Résistance aux attaques par dictionnaire hors ligne", is_correct: true, question: q6_3 }).save();

}
