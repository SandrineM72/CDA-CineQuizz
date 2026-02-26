import { Question } from "../../../entities/Question";
import { Choice } from "../../../entities/Choice";
import type { Quiz } from "../../../entities/Quiz";

interface CreatePhishingQuestionsParams {
  phishing_beginner_1: Quiz;
  phishing_beginner_2: Quiz;
  phishing_advanced_1: Quiz;
  phishing_advanced_2: Quiz;
  phishing_expert_1: Quiz;
  phishing_expert_2: Quiz;
}

export async function createPhishingQuestions({
  phishing_beginner_1,
  phishing_beginner_2,
  phishing_advanced_1,
  phishing_advanced_2,
  phishing_expert_1,
  phishing_expert_2,
}: CreatePhishingQuestionsParams) {

  // ========================================
  // QUIZ 1 : Premiers pas contre le phishing (DÉBUTANT)
  // ========================================

  const q1_1 = await Question.create({
    title: "Vous recevez un email de votre banque vous demandant de 'vérifier votre compte' en cliquant sur un lien. Que faites-vous ?",
    explanation: "Les banques ne demandent JAMAIS de cliquer sur un lien par email. C'est une technique classique de phishing. Contactez toujours votre banque directement par téléphone au numéro indiqué sur votre carte bancaire.",
    quiz: phishing_beginner_1
  }).save();

  await Choice.create({ description: "Vous appelez votre banque au numéro officiel", is_correct: true, question: q1_1 }).save();
  await Choice.create({ description: "Vous cliquez sur le lien pour vérifier", is_correct: false, question: q1_1 }).save();
  await Choice.create({ description: "Vous répondez à l'email pour demander si c'est vrai", is_correct: false, question: q1_1 }).save();

  const q1_2 = await Question.create({
    title: "Un email contient plusieurs fautes d'orthographe et vous appelle 'Cher client' au lieu de votre nom. C'est un signe de quoi ?",
    explanation: "Les emails de phishing contiennent souvent des fautes car ils sont traduits automatiquement ou rédigés rapidement. Les entreprises légitimes utilisent votre nom et relisent leurs messages.",
    quiz: phishing_beginner_1
  }).save();

  await Choice.create({ description: "C'est normal, personne n'est parfait", is_correct: false, question: q1_2 }).save();
  await Choice.create({ description: "C'est probablement une tentative de phishing", is_correct: true, question: q1_2 }).save();
  await Choice.create({ description: "C'est un email automatique sans importance", is_correct: false, question: q1_2 }).save();

  const q1_3 = await Question.create({
    title: "Vous recevez un colis que vous n'avez pas commandé avec une facture à payer. L'email demande un paiement urgent. Que faire ?",
    explanation: "C'est une arnaque courante appelée 'scam au faux colis'. Ne payez jamais et ne cliquez sur aucun lien. Vérifiez directement sur le site officiel du transporteur avec votre numéro de suivi si vous en avez un.",
    quiz: phishing_beginner_1
  }).save();

  await Choice.create({ description: "Vous payez rapidement pour éviter les frais", is_correct: false, question: q1_3 }).save();
  await Choice.create({ description: "Vous cliquez sur le lien pour voir les détails", is_correct: false, question: q1_3 }).save();
  await Choice.create({ description: "Vous vérifiez auprès du transporteur officiel", is_correct: true, question: q1_3 }).save();

  // ========================================
  // QUIZ 2 : Réseaux sociaux et arnaques (DÉBUTANT)
  // ========================================

  const q2_1 = await Question.create({
    title: "Sur Facebook, un ami vous envoie un message : 'Regarde cette vidéo choquante de toi !' avec un lien. Que faites-vous ?",
    explanation: "C'est une arnaque très fréquente. Le compte de votre ami a été piraté. Ne cliquez JAMAIS sur ces liens. Contactez votre ami par un autre moyen (téléphone, SMS) pour le prévenir que son compte est compromis.",
    quiz: phishing_beginner_2
  }).save();

  await Choice.create({ description: "Vous contactez votre ami par téléphone d'abord", is_correct: true, question: q2_1 }).save();
  await Choice.create({ description: "Vous cliquez par curiosité", is_correct: false, question: q2_1 }).save();
  await Choice.create({ description: "Vous partagez le lien pour prévenir les autres", is_correct: false, question: q2_1 }).save();

  const q2_2 = await Question.create({
    title: "Vous voyez une pub sur Instagram : 'iPhone gratuit ! Clique ici !'. Qu'est-ce que c'est probablement ?",
    explanation: "Rien n'est jamais gratuit en ligne. Ces publicités sont des arnaques pour récupérer vos données personnelles ou installer des virus. Les vraies promotions viennent toujours de sites officiels.",
    quiz: phishing_beginner_2
  }).save();

  await Choice.create({ description: "Une vraie promotion à ne pas rater", is_correct: false, question: q2_2 }).save();
  await Choice.create({ description: "Une arnaque pour voler vos données", is_correct: true, question: q2_2 }).save();
  await Choice.create({ description: "Un jeu-concours organisé par Apple", is_correct: false, question: q2_2 }).save();

  const q2_3 = await Question.create({
    title: "Vous partez en vacances 2 semaines. Que devriez-vous publier sur vos réseaux sociaux ?",
    explanation: "Ne jamais annoncer publiquement que vous êtes absent ! Les cambrioleurs surveillent aussi les réseaux sociaux. Partagez vos photos de vacances APRÈS votre retour, en toute sécurité.",
    quiz: phishing_beginner_2
  }).save();

  await Choice.create({ description: "'En vacances aux Maldives, retour le 15 août !'", is_correct: false, question: q2_3 }).save();
  await Choice.create({ description: "Des photos en temps réel avec géolocalisation", is_correct: false, question: q2_3 }).save();
  await Choice.create({ description: "Rien pendant les vacances, vous partagez au retour", is_correct: true, question: q2_3 }).save();

  // ========================================
  // QUIZ 3 : Phishing ciblé en entreprise (AVANCÉ)
  // ========================================

  const q3_1 = await Question.create({
    title: "Vous recevez un email urgent de votre 'PDG' vous demandant de faire un virement immédiat. L'adresse est pdg@entreprise-fr.com au lieu de pdg@entreprise.fr. Que faire ?",
    explanation: "C'est une attaque de spear phishing ciblant spécifiquement votre entreprise. Le domaine similaire (entreprise-fr.com) est un faux. Vérifiez TOUJOURS les demandes urgentes par téléphone, surtout pour des virements.",
    quiz: phishing_advanced_1
  }).save();

  await Choice.create({ description: "Vous appelez votre PDG pour confirmer", is_correct: true, question: q3_1 }).save();
  await Choice.create({ description: "Vous faites le virement, c'est urgent", is_correct: false, question: q3_1 }).save();
  await Choice.create({ description: "Vous répondez par email pour demander confirmation", is_correct: false, question: q3_1 }).save();

  const q3_2 = await Question.create({
    title: "Un email prétend venir des RH avec une 'mise à jour importante de votre fiche de paie' en pièce jointe .exe. Qu'est-ce qui est suspect ?",
    explanation: "Les fichiers .exe sont des programmes exécutables qui peuvent contenir des virus. Les RH envoient des PDF ou des liens vers un portail sécurisé, jamais des .exe. C'est une tentative d'infection par malware.",
    quiz: phishing_advanced_1
  }).save();

  await Choice.create({ description: "C'est normal, c'est un logiciel de paie", is_correct: false, question: q3_2 }).save();
  await Choice.create({ description: "Les RH n'envoient pas de fichiers .exe", is_correct: true, question: q3_2 }).save();
  await Choice.create({ description: "Rien n'est suspect, c'est sécurisé", is_correct: false, question: q3_2 }).save();

  const q3_3 = await Question.create({
    title: "Vous recevez une invitation LinkedIn d'un 'recruteur' qui demande vos identifiants Office 365 pour 'vérifier votre profil'. Quelle est la bonne réaction ?",
    explanation: "Aucun recruteur légitime ne demandera jamais vos identifiants professionnels. C'est du phishing visant à compromettre le système informatique de votre entreprise. Signalez ce profil à LinkedIn et votre service IT.",
    quiz: phishing_advanced_1
  }).save();

  await Choice.create({ description: "Vous donnez vos identifiants, c'est pour un job", is_correct: false, question: q3_3 }).save();
  await Choice.create({ description: "Vous créez un faux compte pour voir", is_correct: false, question: q3_3 }).save();
  await Choice.create({ description: "Vous refusez et signalez le profil", is_correct: true, question: q3_3 }).save();

  // ========================================
  // QUIZ 4 : Vérification d'URL et domaines (AVANCÉ)
  // ========================================

  const q4_1 = await Question.create({
    title: "Vous voyez cette URL : https://www.paypaI.com (avec un i majuscule). C'est quoi le problème ?",
    explanation: "C'est du 'typosquatting' : utiliser un caractère similaire (I majuscule au lieu de L minuscule) pour créer un faux site. Le vrai PayPal est paypal.com (avec un L). Vérifiez toujours attentivement chaque lettre.",
    quiz: phishing_advanced_2
  }).save();

  await Choice.create({ description: "C'est un faux site utilisant un 'I' au lieu d'un 'l'", is_correct: true, question: q4_1 }).save();
  await Choice.create({ description: "C'est le vrai site PayPal", is_correct: false, question: q4_1 }).save();
  await Choice.create({ description: "C'est la version internationale de PayPal", is_correct: false, question: q4_1 }).save();

  const q4_2 = await Question.create({
    title: "Un site commence par 'https://' et affiche un cadenas. Est-il forcément sûr ?",
    explanation: "Non ! HTTPS signifie seulement que la connexion est chiffrée, mais n'importe qui peut obtenir un certificat HTTPS, même les arnaqueurs. Vérifiez toujours le nom de domaine complet et la réputation du site.",
    quiz: phishing_advanced_2
  }).save();

  await Choice.create({ description: "Oui, HTTPS garantit que c'est sûr", is_correct: false, question: q4_2 }).save();
  await Choice.create({ description: "Non, il faut aussi vérifier le domaine", is_correct: true, question: q4_2 }).save();
  await Choice.create({ description: "Oui, le cadenas prouve la sécurité totale", is_correct: false, question: q4_2 }).save();

  const q4_3 = await Question.create({
    title: "Vous recevez un lien : bit.ly/cadeau2024. Pourquoi est-ce dangereux de cliquer sans vérifier ?",
    explanation: "Les raccourcisseurs d'URL (bit.ly, tinyurl) cachent la vraie destination. Vous ne savez pas vers quel site vous allez. Utilisez des outils comme 'CheckShortURL' pour voir l'URL complète avant de cliquer.",
    quiz: phishing_advanced_2
  }).save();

  await Choice.create({ description: "Bit.ly est un site de virus", is_correct: false, question: q4_3 }).save();
  await Choice.create({ description: "Ce n'est pas dangereux, c'est pratique", is_correct: false, question: q4_3 }).save();
  await Choice.create({ description: "On ne peut pas voir la vraie destination", is_correct: true, question: q4_3 }).save();

  // ========================================
  // QUIZ 5 : Business Email Compromise - BEC (EXPERT)
  // ========================================

  const q5_1 = await Question.create({
    title: "Dans une attaque BEC, les pirates se font passer pour un dirigeant et demandent un virement urgent. Quelle est leur technique principale ?",
    explanation: "Les attaquants BEC utilisent l'ingénierie sociale en créant un sentiment d'urgence et en exploitant la hiérarchie. Ils étudient l'entreprise sur LinkedIn, imitent le style d'écriture du dirigeant et choisissent un moment où il est injoignable (voyage, réunion).",
    quiz: phishing_expert_1
  }).save();

  await Choice.create({ description: "Ils créent un sentiment d'urgence et d'autorité", is_correct: true, question: q5_1 }).save();
  await Choice.create({ description: "Ils piratent le compte email du dirigeant", is_correct: false, question: q5_1 }).save();
  await Choice.create({ description: "Ils envoient un virus pour voler les mots de passe", is_correct: false, question: q5_1 }).save();

  const q5_2 = await Question.create({
    title: "Votre entreprise veut se protéger du BEC. Quelle mesure est la PLUS efficace ?",
    explanation: "La procédure de double validation (confirmation par téléphone ou en personne) est la défense la plus efficace contre le BEC. Les filtres anti-spam aident mais ne suffisent pas car ces emails sont souvent bien rédigés et personnalisés.",
    quiz: phishing_expert_1
  }).save();

  await Choice.create({ description: "Installer un meilleur antivirus", is_correct: false, question: q5_2 }).save();
  await Choice.create({ description: "Mettre en place une double validation pour les virements", is_correct: true, question: q5_2 }).save();
  await Choice.create({ description: "Bloquer tous les emails externes", is_correct: false, question: q5_2 }).save();

  const q5_3 = await Question.create({
    title: "Un email BEC bien conçu peut contenir toutes ces informations sur vous SAUF une. Laquelle ?",
    explanation: "Les attaquants BEC collectent énormément d'informations publiques (LinkedIn, site web, réseaux sociaux) mais ils n'ont PAS accès à vos emails internes sauf si le système est déjà compromis. C'est pour ça qu'une double vérification hors email (téléphone) fonctionne.",
    quiz: phishing_expert_1
  }).save();

  await Choice.create({ description: "Votre nom complet et fonction", is_correct: false, question: q5_3 }).save();
  await Choice.create({ description: "Le nom de vos collègues et clients", is_correct: false, question: q5_3 }).save();
  await Choice.create({ description: "Le contenu exact de vos emails internes récents", is_correct: true, question: q5_3 }).save();

  // ========================================
  // QUIZ 6 : Ingénierie sociale avancée (EXPERT)
  // ========================================

  const q6_1 = await Question.create({
    title: "Un attaquant utilise le 'pretexting' : il se fait passer pour un technicien IT et vous appelle pour 'résoudre un problème urgent'. Quelle est sa vraie intention ?",
    explanation: "Le pretexting consiste à créer un scénario crédible (faux technicien) pour obtenir des informations confidentielles ou un accès au système. Aucun vrai technicien IT ne demandera votre mot de passe par téléphone. Raccrochez et appelez votre service IT au numéro officiel.",
    quiz: phishing_expert_2
  }).save();

  await Choice.create({ description: "Obtenir vos identifiants ou un accès système", is_correct: true, question: q6_1 }).save();
  await Choice.create({ description: "Résoudre réellement un problème technique", is_correct: false, question: q6_1 }).save();
  await Choice.create({ description: "Vous vendre un logiciel antivirus", is_correct: false, question: q6_1 }).save();

  const q6_2 = await Question.create({
    title: "Technique du 'quid pro quo' : quelqu'un offre une aide technique gratuite en échange d'informations. Pourquoi est-ce efficace ?",
    explanation: "Le quid pro quo exploite le principe de réciprocité : quand on nous offre quelque chose, on se sent obligé de donner en retour. Les gens baissent leur garde face à quelqu'un qui 'aide'. Rappelez-vous : si c'est gratuit et non sollicité, c'est suspect.",
    quiz: phishing_expert_2
  }).save();

  await Choice.create({ description: "C'est une vraie offre commerciale", is_correct: false, question: q6_2 }).save();
  await Choice.create({ description: "Les gens font confiance à qui les aide", is_correct: true, question: q6_2 }).save();
  await Choice.create({ description: "Ça permet de tester la sécurité", is_correct: false, question: q6_2 }).save();

  const q6_3 = await Question.create({
    title: "Vous trouvez une clé USB dans le parking de votre entreprise avec l'étiquette 'Salaires 2024'. Que faire ?",
    explanation: "C'est une technique d'attaque classique appelée 'USB drop attack'. La clé contient probablement un malware qui s'installe automatiquement. Ne la branchez JAMAIS. Remettez-la à votre service de sécurité IT qui l'analysera en environnement isolé.",
    quiz: phishing_expert_2
  }).save();

  await Choice.create({ description: "Vous la branchez pour voir ce qu'il y a", is_correct: false, question: q6_3 }).save();
  await Choice.create({ description: "Vous la branchez sur votre PC personnel à la maison", is_correct: false, question: q6_3 }).save();
  await Choice.create({ description: "Vous la remettez au service IT sans la brancher", is_correct: true, question: q6_3 }).save();

}
