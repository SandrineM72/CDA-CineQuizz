import { Question } from "../../../entities/Question";
import { Choice } from "../../../entities/Choice";
import type { Quiz } from "../../../entities/Quiz";

interface CreatePrivacyQuestionsParams {
  privacy_beginner_1: Quiz;
  privacy_beginner_2: Quiz;
  privacy_advanced_1: Quiz;
  privacy_advanced_2: Quiz;
  privacy_expert_1: Quiz;
  privacy_expert_2: Quiz;
}

export async function createPrivacyQuestions({
  privacy_beginner_1,
  privacy_beginner_2,
  privacy_advanced_1,
  privacy_advanced_2,
  privacy_expert_1,
  privacy_expert_2,
}: CreatePrivacyQuestionsParams) {

  // ========================================
  // QUIZ 1 : Vie privée sur les réseaux sociaux (DÉBUTANT)
  // ========================================

  const q1_1 = await Question.create({
    title: "Vous publiez une photo de vacances avec votre nouvelle maison en arrière-plan. Quel risque prenez-vous ?",
    explanation: "Les photos révèlent souvent plus que vous ne pensez : adresse visible sur une plaque de rue, intérieur de votre maison (objets de valeur), horaires d'absence. Les cambrioleurs utilisent les réseaux sociaux pour repérer des cibles. Publiez vos photos APRÈS votre retour et masquez les informations sensibles. Désactivez la géolocalisation automatique.",
    quiz: privacy_beginner_1
  }).save();

  await Choice.create({ description: "Révéler votre adresse et vos absences", is_correct: true, question: q1_1 }).save();
  await Choice.create({ description: "Aucun risque, c'est juste une photo", is_correct: false, question: q1_1 }).save();
  await Choice.create({ description: "Seulement gêner vos voisins", is_correct: false, question: q1_1 }).save();

  const q1_2 = await Question.create({
    title: "Sur Facebook, quel paramètre de confidentialité devriez-vous privilégier pour vos publications ?",
    explanation: "Limitez TOUJOURS vos publications à 'Amis' ou 'Personnalisé', jamais 'Public'. En mode Public, n'importe qui peut voir vos photos, lire vos posts, connaître vos habitudes, votre famille, vos amis, votre travail. Les recruteurs, assurances, arnaqueurs consultent les profils publics. Vérifiez régulièrement vos paramètres car Facebook les modifie souvent.",
    quiz: privacy_beginner_1
  }).save();

  await Choice.create({ description: "Public, pour avoir plus de likes", is_correct: false, question: q1_2 }).save();
  await Choice.create({ description: "Amis uniquement ou Personnalisé", is_correct: true, question: q1_2 }).save();
  await Choice.create({ description: "Amis d'amis, c'est assez restrictif", is_correct: false, question: q1_2 }).save();

  const q1_3 = await Question.create({
    title: "Une application de quiz ludique demande accès à votre liste d'amis et vos photos. Devriez-vous accepter ?",
    explanation: "NON ! Ces applications collectent vos données et celles de vos amis pour les revendre. Le scandale Cambridge Analytica a montré comment des apps 'innocentes' ont récolté les données de 87 millions d'utilisateurs Facebook. Lisez toujours les permissions demandées. Un quiz n'a PAS besoin d'accéder à vos photos ou contacts.",
    quiz: privacy_beginner_1
  }).save();

  await Choice.create({ description: "Oui, c'est juste pour personnaliser le quiz", is_correct: false, question: q1_3 }).save();
  await Choice.create({ description: "Oui, si tous vos amis l'ont fait", is_correct: false, question: q1_3 }).save();
  await Choice.create({ description: "Non, ces permissions sont abusives", is_correct: true, question: q1_3 }).save();

  // ========================================
  // QUIZ 2 : Paramètres de confidentialité essentiels (DÉBUTANT)
  // ========================================

  const q2_1 = await Question.create({
    title: "Google conserve votre historique de recherche et de localisation. Comment le désactiver ?",
    explanation: "Allez sur myactivity.google.com. Vous pouvez désactiver l'historique Web et des applications, l'historique de localisation, et l'historique YouTube. Google utilise ces données pour cibler la publicité et améliorer ses services. Désactiver n'empêche pas Google de collecter des données, mais limite leur conservation. Pour plus de confidentialité, utilisez DuckDuckGo ou Brave Search.",
    quiz: privacy_beginner_2
  }).save();

  await Choice.create({ description: "Dans les paramètres Google > Données et confidentialité", is_correct: true, question: q2_1 }).save();
  await Choice.create({ description: "C'est impossible, Google garde tout", is_correct: false, question: q2_1 }).save();
  await Choice.create({ description: "Il faut supprimer son compte Google", is_correct: false, question: q2_1 }).save();

  const q2_2 = await Question.create({
    title: "Qu'est-ce que l'authentification à deux facteurs (2FA) protège exactement ?",
    explanation: "La 2FA protège votre compte même si votre mot de passe est volé. Sans le deuxième facteur (code SMS, notification, clé physique), impossible de se connecter. C'est critique pour vos comptes importants : email, banque, réseaux sociaux. Microsoft estime que la 2FA bloque 99,9% des attaques automatisées. Activez-la PARTOUT où c'est proposé.",
    quiz: privacy_beginner_2
  }).save();

  await Choice.create({ description: "Seulement contre les virus", is_correct: false, question: q2_2 }).save();
  await Choice.create({ description: "Contre l'accès même si le mot de passe est volé", is_correct: true, question: q2_2 }).save();
  await Choice.create({ description: "Contre les publicités ciblées", is_correct: false, question: q2_2 }).save();

  const q2_3 = await Question.create({
    title: "Vous voulez limiter le suivi publicitaire sur votre smartphone. Que devriez-vous activer ?",
    explanation: "Sur iOS : Réglages > Confidentialité > Suivi > Désactiver 'Autoriser les demandes de suivi'. Sur Android : Paramètres > Google > Annonces > Supprimer l'ID publicitaire. Cela limite (mais n'élimine pas) le suivi entre applications. Pour plus de protection, utilisez Firefox Focus, Brave ou des bloqueurs de pubs comme AdGuard ou NextDNS.",
    quiz: privacy_beginner_2
  }).save();

  await Choice.create({ description: "Le mode avion permanent", is_correct: false, question: q2_3 }).save();
  await Choice.create({ description: "Le partage de position avec Google", is_correct: false, question: q2_3 }).save();
  await Choice.create({ description: "La limitation du suivi publicitaire", is_correct: true, question: q2_3 }).save();

  // ========================================
  // QUIZ 3 : RGPD et droits numériques (AVANCÉ)
  // ========================================

  const q3_1 = await Question.create({
    title: "Le RGPD vous donne le 'droit à l'effacement' (droit à l'oubli). Qu'est-ce que cela signifie ?",
    explanation: "Vous pouvez demander à une entreprise de supprimer TOUTES vos données personnelles qu'elle détient, sous certaines conditions. L'entreprise doit répondre sous 30 jours et justifier un refus éventuel. Cela s'applique aux données non nécessaires légalement (ex: facturation sur 10 ans). Utilisez des outils comme JustDeleteMe pour faciliter les suppressions de comptes.",
    quiz: privacy_advanced_1
  }).save();

  await Choice.create({ description: "Demander la suppression de vos données personnelles", is_correct: true, question: q3_1 }).save();
  await Choice.create({ description: "Effacer votre historique de navigation", is_correct: false, question: q3_1 }).save();
  await Choice.create({ description: "Supprimer les cookies de votre navigateur", is_correct: false, question: q3_1 }).save();

  const q3_2 = await Question.create({
    title: "Une entreprise française subit une fuite de données vous concernant. Quelle est son obligation légale ?",
    explanation: "Sous le RGPD, l'entreprise DOIT vous notifier dans les 72 heures si la fuite présente un risque pour vos droits (ex: mots de passe, données bancaires exposés). Elle doit aussi notifier la CNIL. Si l'entreprise ne le fait pas, vous pouvez porter plainte auprès de la CNIL. En cas de négligence grave, l'amende peut atteindre 4% du chiffre d'affaires mondial.",
    quiz: privacy_advanced_1
  }).save();

  await Choice.create({ description: "Rien, c'est leur problème", is_correct: false, question: q3_2 }).save();
  await Choice.create({ description: "Vous notifier dans les 72 heures", is_correct: true, question: q3_2 }).save();
  await Choice.create({ description: "Attendre 6 mois avant de vous prévenir", is_correct: false, question: q3_2 }).save();

  const q3_3 = await Question.create({
    title: "Le RGPD vous donne le droit à la 'portabilité des données'. Qu'est-ce que c'est ?",
    explanation: "Vous pouvez demander à récupérer VOS données dans un format lisible par machine (CSV, JSON) pour les transférer vers un autre service. Par exemple, exporter vos playlists Spotify vers Deezer, ou vos contacts Facebook vers un autre réseau. L'objectif est d'éviter le 'vendor lock-in' (enfermement propriétaire) et faciliter la concurrence.",
    quiz: privacy_advanced_1
  }).save();

  await Choice.create({ description: "Voyager avec vos données à l'étranger", is_correct: false, question: q3_3 }).save();
  await Choice.create({ description: "Copier les données d'une entreprise", is_correct: false, question: q3_3 }).save();
  await Choice.create({ description: "Récupérer vos données dans un format exportable", is_correct: true, question: q3_3 }).save();

  // ========================================
  // QUIZ 4 : Chiffrement et anonymat en ligne (AVANCÉ)
  // ========================================

  const q4_1 = await Question.create({
    title: "Quelle est la différence entre le chiffrement de bout en bout (E2EE) et le chiffrement en transit ?",
    explanation: "Le chiffrement en transit (HTTPS) protège vos données entre vous et le serveur, mais le serveur peut les lire. Le chiffrement de bout en bout (E2EE) chiffre sur VOTRE appareil et ne déchiffre que sur l'appareil du destinataire. Même le fournisseur de service ne peut pas lire vos messages. Signal, WhatsApp (controversé) utilisent l'E2EE. Gmail ne l'utilise PAS.",
    quiz: privacy_advanced_2
  }).save();

  await Choice.create({ description: "E2EE : seuls expéditeur et destinataire peuvent lire", is_correct: true, question: q4_1 }).save();
  await Choice.create({ description: "C'est exactement la même chose", is_correct: false, question: q4_1 }).save();
  await Choice.create({ description: "E2EE est moins sûr que le chiffrement en transit", is_correct: false, question: q4_1 }).save();

  const q4_2 = await Question.create({
    title: "Pourquoi Tor (The Onion Router) protège-t-il votre anonymat en ligne ?",
    explanation: "Tor fait passer votre connexion par 3 serveurs (nœuds) aléatoires avant d'atteindre la destination. Chaque nœud ne connaît que le précédent et le suivant, jamais la source ET la destination. Votre IP réelle est masquée. Attention : Tor est LENT et n'est pas magique - vous pouvez vous démasquer en vous connectant à vos comptes personnels.",
    quiz: privacy_advanced_2
  }).save();

  await Choice.create({ description: "Il chiffre votre disque dur", is_correct: false, question: q4_2 }).save();
  await Choice.create({ description: "Il fait passer votre connexion par plusieurs serveurs", is_correct: true, question: q4_2 }).save();
  await Choice.create({ description: "Il bloque toutes les publicités", is_correct: false, question: q4_2 }).save();

  const q4_3 = await Question.create({
    title: "Vous voulez chiffrer vos fichiers sensibles sur votre ordinateur. Quel outil utiliser ?",
    explanation: "VeraCrypt (successeur de TrueCrypt) est l'outil de référence gratuit et open-source pour chiffrer des fichiers, dossiers ou disques entiers. Sur Windows Pro, BitLocker est intégré. Sur Mac, FileVault. Sur Linux, LUKS. Le chiffrement rend vos données illisibles sans mot de passe, même si on vole votre ordinateur. ATTENTION : si vous perdez le mot de passe, les données sont perdues à jamais.",
    quiz: privacy_advanced_2
  }).save();

  await Choice.create({ description: "Un mot de passe sur le fichier Word suffit", is_correct: false, question: q4_3 }).save();
  await Choice.create({ description: "Cacher le fichier dans un dossier système", is_correct: false, question: q4_3 }).save();
  await Choice.create({ description: "VeraCrypt, BitLocker ou FileVault", is_correct: true, question: q4_3 }).save();

  // ========================================
  // QUIZ 5 : Surveillance numérique et traçage (EXPERT)
  // ========================================

  const q5_1 = await Question.create({
    title: "Qu'est-ce que le 'browser fingerprinting' et pourquoi est-il plus invasif que les cookies ?",
    explanation: "Le fingerprinting crée une empreinte unique de votre navigateur en combinant : résolution d'écran, polices installées, plugins, timezone, langue, Canvas/WebGL rendering. Même en navigation privée ou en supprimant les cookies, votre empreinte reste identifiable. C'est utilisé pour vous tracer entre sites. Protection : Brave, Firefox avec resistFingerprinting, ou Tor Browser.",
    quiz: privacy_expert_1
  }).save();

  await Choice.create({ description: "Il crée une empreinte unique même sans cookies", is_correct: true, question: q5_1 }).save();
  await Choice.create({ description: "C'est une technique de scan d'empreintes digitales", is_correct: false, question: q5_1 }).save();
  await Choice.create({ description: "C'est moins invasif que les cookies", is_correct: false, question: q5_1 }).save();

  const q5_2 = await Question.create({
    title: "Comment les 'data brokers' (courtiers en données) obtiennent-ils des informations sur vous ?",
    explanation: "Les data brokers (Acxiom, Experian, Oracle) agrègent des données de centaines de sources : registres publics, achats en ligne, cartes de fidélité, réseaux sociaux, applications, opérateurs télécom. Ils créent des profils détaillés (revenus, santé, opinions politiques, habitudes) vendus aux publicitaires, assurances, employeurs. Vous n'avez souvent aucun contrôle ni même connaissance de ces profils.",
    quiz: privacy_expert_1
  }).save();

  await Choice.create({ description: "En piratant votre ordinateur", is_correct: false, question: q5_2 }).save();
  await Choice.create({ description: "En agrégeant des données de multiples sources", is_correct: true, question: q5_2 }).save();
  await Choice.create({ description: "Uniquement via les réseaux sociaux", is_correct: false, question: q5_2 }).save();

  const q5_3 = await Question.create({
    title: "Qu'est-ce qu'un 'supercookie' (UIDH) et pourquoi est-il controversé ?",
    explanation: "Les supercookies (Unique Identifier Header) sont injectés par certains opérateurs télécom (Verizon l'a fait) directement dans vos requêtes HTTP. Vous ne pouvez PAS les bloquer ou supprimer comme des cookies normaux car ils sont ajoutés par votre FAI, pas votre navigateur. Ils permettent de vous tracer sur tous les sites même en navigation privée. C'est considéré comme une violation majeure de la vie privée.",
    quiz: privacy_expert_1
  }).save();

  await Choice.create({ description: "Des cookies très grands (>1MB)", is_correct: false, question: q5_3 }).save();
  await Choice.create({ description: "Des cookies de sites gouvernementaux", is_correct: false, question: q5_3 }).save();
  await Choice.create({ description: "Injectés par le FAI, impossibles à bloquer", is_correct: true, question: q5_3 }).save();

  // ========================================
  // QUIZ 6 : Métadonnées et empreinte numérique (EXPERT)
  // ========================================

  const q6_1 = await Question.create({
    title: "Qu'est-ce que les métadonnées EXIF d'une photo peuvent révéler sur vous ?",
    explanation: "Les métadonnées EXIF contiennent : date/heure exacte de la prise, GPS (latitude/longitude précise de votre maison !), modèle d'appareil, paramètres photo. En publiant une photo, vous pouvez involontairement révéler votre adresse. Les réseaux sociaux suppriment souvent les EXIF automatiquement, mais pas toujours. Utilisez ExifTool, ImageOptim ou les paramètres iOS/Android pour retirer les métadonnées avant partage.",
    quiz: privacy_expert_2
  }).save();

  await Choice.create({ description: "Localisation GPS, date, modèle d'appareil", is_correct: true, question: q6_1 }).save();
  await Choice.create({ description: "Seulement la taille du fichier", is_correct: false, question: q6_1 }).save();
  await Choice.create({ description: "Les EXIF ne contiennent aucune donnée sensible", is_correct: false, question: q6_1 }).save();

  const q6_2 = await Question.create({
    title: "L'analyse de vos métadonnées de communications (qui appelle qui, quand, durée) peut révéler quoi sur vous ?",
    explanation: "Les métadonnées révèlent énormément : votre réseau social complet, vos habitudes (travail, sommeil), vos relations intimes (appels nocturnes), votre santé (appels fréquents à un oncologue), vos problèmes financiers (appels à des créanciers), vos opinions politiques (contacts avec des militants). Edward Snowden a révélé que la NSA collecte massivement ces métadonnées. Certains experts disent 'les métadonnées en disent plus que le contenu'.",
    quiz: privacy_expert_2
  }).save();

  await Choice.create({ description: "Seulement le nombre d'appels par jour", is_correct: false, question: q6_2 }).save();
  await Choice.create({ description: "Votre réseau social, habitudes, santé, opinions", is_correct: true, question: q6_2 }).save();
  await Choice.create({ description: "Rien d'important, c'est juste technique", is_correct: false, question: q6_2 }).save();

  const q6_3 = await Question.create({
    title: "Qu'est-ce que la 'corrélation de données' et pourquoi est-elle puissante pour le profilage ?",
    explanation: "La corrélation combine des données apparemment innocentes de sources différentes pour déduire des informations sensibles. Exemple : achat de vitamines prénatales + abonnement à magazine parental + recherches sur poussettes = grossesse probable (Target l'a fait et a envoyé des pubs bébé à une ado avant que ses parents le sachent !). L'IA moderne excelle dans ces corrélations subtiles.",
    quiz: privacy_expert_2
  }).save();

  await Choice.create({ description: "Corriger les erreurs dans les bases de données", is_correct: false, question: q6_3 }).save();
  await Choice.create({ description: "Comparer deux fichiers pour trouver des doublons", is_correct: false, question: q6_3 }).save();
  await Choice.create({ description: "Combiner des données innocentes pour déduire des infos sensibles", is_correct: true, question: q6_3 }).save();

}
