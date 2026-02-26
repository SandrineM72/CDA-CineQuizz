import { Question } from "../../../entities/Question";
import { Choice } from "../../../entities/Choice";
import type { Quiz } from "../../../entities/Quiz";

interface CreatePasswordQuestionsParams {
  password_beginner_1: Quiz;
  password_beginner_2: Quiz;
  password_advanced_1: Quiz;
  password_advanced_2: Quiz;
  password_expert_1: Quiz;
  password_expert_2: Quiz;
}

export async function createPasswordQuestions({
  password_beginner_1,
  password_beginner_2,
  password_advanced_1,
  password_advanced_2,
  password_expert_1,
  password_expert_2,
}: CreatePasswordQuestionsParams) {

  // ========================================
  // QUIZ 1 : Créer des mots de passe solides (DÉBUTANT)
  // ========================================

  const q1_1 = await Question.create({
    title: "Parmi ces mots de passe, lequel est le PLUS sécurisé ?",
    explanation: "Un mot de passe sûr doit être long (minimum 12 caractères), mélanger majuscules, minuscules, chiffres et symboles, et ne pas contenir d'informations personnelles. 'K8$mPz9!wQx' remplit tous ces critères.",
    quiz: password_beginner_1
  }).save();

  await Choice.create({ description: "K8$mPz9!wQx", is_correct: true, question: q1_1 }).save();
  await Choice.create({ description: "MonPrenom2024", is_correct: false, question: q1_1 }).save();
  await Choice.create({ description: "123456789", is_correct: false, question: q1_1 }).save();

  const q1_2 = await Question.create({
    title: "Pourquoi ne faut-il JAMAIS utiliser le même mot de passe sur plusieurs sites ?",
    explanation: "Si un site se fait pirater et que votre mot de passe est exposé, tous vos autres comptes utilisant le même mot de passe deviennent vulnérables. Un mot de passe unique par compte limite les dégâts en cas de fuite.",
    quiz: password_beginner_1
  }).save();

  await Choice.create({ description: "Parce que c'est interdit par la loi", is_correct: false, question: q1_2 }).save();
  await Choice.create({ description: "Si un site est piraté, tous vos comptes sont en danger", is_correct: true, question: q1_2 }).save();
  await Choice.create({ description: "Parce que les sites le détectent et vous bloquent", is_correct: false, question: q1_2 }).save();

  const q1_3 = await Question.create({
    title: "Où NE devez-vous JAMAIS noter vos mots de passe ?",
    explanation: "Un post-it sur l'écran ou sous le clavier est accessible à n'importe qui passant près de votre bureau. Utilisez plutôt un gestionnaire de mots de passe sécurisé ou, à la rigueur, un carnet personnel gardé sous clé chez vous.",
    quiz: password_beginner_1
  }).save();

  await Choice.create({ description: "Dans un carnet personnel à la maison", is_correct: false, question: q1_3 }).save();
  await Choice.create({ description: "Dans un gestionnaire de mots de passe", is_correct: false, question: q1_3 }).save();
  await Choice.create({ description: "Sur un post-it collé sur votre écran", is_correct: true, question: q1_3 }).save();

  // ========================================
  // QUIZ 2 : Double authentification pour tous (DÉBUTANT)
  // ========================================

  const q2_1 = await Question.create({
    title: "Qu'est-ce que la double authentification (2FA) ?",
    explanation: "La 2FA ajoute une deuxième étape de vérification après votre mot de passe : un code reçu par SMS, une notification sur votre téléphone, ou un code généré par une application. Même si quelqu'un vole votre mot de passe, il ne peut pas se connecter sans ce deuxième élément.",
    quiz: password_beginner_2
  }).save();

  await Choice.create({ description: "Utiliser mot de passe + code envoyé sur téléphone", is_correct: true, question: q2_1 }).save();
  await Choice.create({ description: "Avoir deux mots de passe différents", is_correct: false, question: q2_1 }).save();
  await Choice.create({ description: "Se connecter depuis deux appareils différents", is_correct: false, question: q2_1 }).save();

  const q2_2 = await Question.create({
    title: "Gmail vous propose d'activer la 2FA gratuitement. Que devriez-vous faire ?",
    explanation: "Activez TOUJOURS la 2FA quand elle est proposée, surtout sur vos comptes importants (email, banque, réseaux sociaux). C'est gratuit et ça multiplie votre sécurité par 100. Un pirate ne pourra pas accéder à votre compte même s'il a votre mot de passe.",
    quiz: password_beginner_2
  }).save();

  await Choice.create({ description: "L'ignorer, c'est compliqué pour rien", is_correct: false, question: q2_2 }).save();
  await Choice.create({ description: "L'activer immédiatement, c'est essentiel", is_correct: true, question: q2_2 }).save();
  await Choice.create({ description: "Attendre d'avoir des problèmes de sécurité", is_correct: false, question: q2_2 }).save();

  const q2_3 = await Question.create({
    title: "Vous recevez un SMS avec un code de vérification que vous n'avez PAS demandé. Que faire ?",
    explanation: "Si vous recevez un code 2FA non sollicité, quelqu'un essaie peut-être de se connecter à votre compte ! Ne partagez JAMAIS ce code. Changez immédiatement votre mot de passe et vérifiez l'activité récente de votre compte.",
    quiz: password_beginner_2
  }).save();

  await Choice.create({ description: "L'ignorer, c'est une erreur", is_correct: false, question: q2_3 }).save();
  await Choice.create({ description: "Donner le code au service client si on vous appelle", is_correct: false, question: q2_3 }).save();
  await Choice.create({ description: "Changer votre mot de passe immédiatement", is_correct: true, question: q2_3 }).save();

  // ========================================
  // QUIZ 3 : Gestionnaires de mots de passe (AVANCÉ)
  // ========================================

  const q3_1 = await Question.create({
    title: "Quel est le PRINCIPAL avantage d'un gestionnaire de mots de passe comme Bitwarden ou 1Password ?",
    explanation: "Le gestionnaire génère et stocke des mots de passe uniques et complexes pour chaque site. Vous n'avez qu'un seul mot de passe maître à retenir. Plus besoin de réutiliser des mots de passe faibles ou de les noter sur papier.",
    quiz: password_advanced_1
  }).save();

  await Choice.create({ description: "Il crée des mots de passe uniques pour chaque site", is_correct: true, question: q3_1 }).save();
  await Choice.create({ description: "Il rend vos mots de passe visibles en clair", is_correct: false, question: q3_1 }).save();
  await Choice.create({ description: "Il partage vos mots de passe avec vos amis", is_correct: false, question: q3_1 }).save();

  const q3_2 = await Question.create({
    title: "Votre gestionnaire de mots de passe vous demande un 'mot de passe maître'. Comment doit-il être ?",
    explanation: "Le mot de passe maître est la clé de tous vos autres mots de passe. Il doit être TRÈS fort (20+ caractères), unique (jamais utilisé ailleurs), et mémorisable. Utilisez une phrase de passe comme 'MonChat!Adore*LesSardines#AuCurry77'. Si vous le perdez, vous perdez tout.",
    quiz: password_advanced_1
  }).save();

  await Choice.create({ description: "Simple à retenir comme 'Password123'", is_correct: false, question: q3_2 }).save();
  await Choice.create({ description: "Très long, complexe et unique (20+ caractères)", is_correct: true, question: q3_2 }).save();
  await Choice.create({ description: "Le même que votre mot de passe email", is_correct: false, question: q3_2 }).save();

  const q3_3 = await Question.create({
    title: "Peut-on faire confiance à un gestionnaire de mots de passe gratuit et open-source comme Bitwarden ?",
    explanation: "Oui ! Les gestionnaires open-source comme Bitwarden sont auditables : des experts indépendants peuvent vérifier le code pour s'assurer qu'il n'y a pas de faille. Le chiffrement est fait localement sur votre appareil, même Bitwarden ne peut pas lire vos mots de passe.",
    quiz: password_advanced_1
  }).save();

  await Choice.create({ description: "Non, seuls les logiciels payants sont sûrs", is_correct: false, question: q3_3 }).save();
  await Choice.create({ description: "Non, ils revendent vos données", is_correct: false, question: q3_3 }).save();
  await Choice.create({ description: "Oui, l'open-source permet l'audit par des experts", is_correct: true, question: q3_3 }).save();

  // ========================================
  // QUIZ 4 : Fuites de données et compromission (AVANCÉ)
  // ========================================

  const q4_1 = await Question.create({
    title: "Le site 'Have I Been Pwned' (haveibeenpwned.com) permet de vérifier quoi ?",
    explanation: "Have I Been Pwned est un service légitime créé par un expert en sécurité. Il agrège les bases de données de mots de passe volés lors de piratages. Vous pouvez vérifier gratuitement si votre email ou mot de passe a été exposé lors d'une fuite de données.",
    quiz: password_advanced_2
  }).save();

  await Choice.create({ description: "Si vos mots de passe ont été exposés dans des fuites", is_correct: true, question: q4_1 }).save();
  await Choice.create({ description: "La force de vos mots de passe actuels", is_correct: false, question: q4_1 }).save();
  await Choice.create({ description: "Si votre ordinateur a des virus", is_correct: false, question: q4_1 }).save();

  const q4_2 = await Question.create({
    title: "Vous découvrez que votre mot de passe a été exposé dans une fuite de données. Que faire EN PREMIER ?",
    explanation: "Changez immédiatement le mot de passe sur TOUS les sites où vous l'avez utilisé. Puis activez la 2FA. Vérifier l'activité récente est important mais secondaire - la priorité est de bloquer l'accès aux pirates qui ont potentiellement votre mot de passe.",
    quiz: password_advanced_2
  }).save();

  await Choice.create({ description: "Vérifier l'activité récente de vos comptes", is_correct: false, question: q4_2 }).save();
  await Choice.create({ description: "Changer immédiatement ce mot de passe partout", is_correct: true, question: q4_2 }).save();
  await Choice.create({ description: "Attendre de voir si quelque chose se passe", is_correct: false, question: q4_2 }).save();

  const q4_3 = await Question.create({
    title: "Une entreprise vous informe qu'elle a subi une fuite de données. Elle dit que vos mots de passe étaient 'hashés'. Est-ce rassurant ?",
    explanation: "Le hashage est une protection partielle : il transforme votre mot de passe en code illisible. MAIS si votre mot de passe est faible ou courant, il peut quand même être 'cassé' avec des tables rainbow ou du brute force. Changez toujours votre mot de passe après une fuite, même s'il était hashé.",
    quiz: password_advanced_2
  }).save();

  await Choice.create({ description: "Oui, le hashage rend vos mots de passe illisibles", is_correct: false, question: q4_3 }).save();
  await Choice.create({ description: "Non, le hashage ne protège pas du tout", is_correct: false, question: q4_3 }).save();
  await Choice.create({ description: "Partiellement, changez quand même votre mot de passe", is_correct: true, question: q4_3 }).save();

  // ========================================
  // QUIZ 5 : Authentification moderne et biométrie (EXPERT)
  // ========================================

  const q5_1 = await Question.create({
    title: "Les 'Passkeys' (clés d'accès) remplacent progressivement les mots de passe. Quel est leur principal avantage sécuritaire ?",
    explanation: "Les Passkeys utilisent la cryptographie à clé publique : la clé privée reste sur votre appareil et n'est JAMAIS envoyée au site web. Même si le site se fait pirater, il n'y a aucun 'mot de passe' à voler. Le phishing devient aussi quasi impossible car la Passkey ne fonctionne que sur le vrai site.",
    quiz: password_expert_1
  }).save();

  await Choice.create({ description: "Ils ne peuvent pas être volés en cas de piratage du site", is_correct: true, question: q5_1 }).save();
  await Choice.create({ description: "Ils sont plus faciles à retenir", is_correct: false, question: q5_1 }).save();
  await Choice.create({ description: "Ils fonctionnent sans connexion Internet", is_correct: false, question: q5_1 }).save();

  const q5_2 = await Question.create({
    title: "Pourquoi la biométrie (empreinte digitale, reconnaissance faciale) ne devrait JAMAIS être le SEUL moyen d'authentification ?",
    explanation: "Contrairement à un mot de passe, vous ne pouvez pas changer votre empreinte digitale ou votre visage s'ils sont compromis. La biométrie peut être trompée (photo, faux doigt, deepfake). Elle doit TOUJOURS être combinée avec un autre facteur (mot de passe, Passkey, token physique).",
    quiz: password_expert_1
  }).save();

  await Choice.create({ description: "Elle est trop lente et peu pratique", is_correct: false, question: q5_2 }).save();
  await Choice.create({ description: "On ne peut pas la changer si elle est compromise", is_correct: true, question: q5_2 }).save();
  await Choice.create({ description: "Elle ne fonctionne pas sur tous les appareils", is_correct: false, question: q5_2 }).save();

  const q5_3 = await Question.create({
    title: "FIDO2 et WebAuthn sont des standards d'authentification moderne. Quel appareil physique peut les implémenter ?",
    explanation: "Les clés de sécurité FIDO2 (Yubikey, Google Titan) sont des petits appareils USB/NFC qui génèrent des codes cryptographiques. Mais FIDO2 fonctionne aussi avec les smartphones modernes, les ordinateurs avec TPM, et même certaines cartes à puce. C'est un standard ouvert et universel.",
    quiz: password_expert_1
  }).save();

  await Choice.create({ description: "Uniquement des clés USB spécialisées (Yubikey)", is_correct: false, question: q5_3 }).save();
  await Choice.create({ description: "Seulement les iPhones et ordinateurs Apple", is_correct: false, question: q5_3 }).save();
  await Choice.create({ description: "Clés USB, smartphones, ordinateurs avec TPM", is_correct: true, question: q5_3 }).save();

  // ========================================
  // QUIZ 6 : Attaques par force brute et dictionnaire (EXPERT)
  // ========================================

  const q6_1 = await Question.create({
    title: "Une attaque par 'dictionnaire' teste des millions de mots de passe courants. Lequel de ces mots de passe résiste le MIEUX ?",
    explanation: "Les attaques par dictionnaire testent d'abord les mots de passe les plus courants ('password', '123456'), puis des variantes ('Password1', 'P@ssword'). Un mot de passe aléatoire long comme 'Xk9#mPq2$wLz' n'apparaît dans AUCUN dictionnaire et nécessiterait une attaque par force brute pure, beaucoup plus lente.",
    quiz: password_expert_2
  }).save();

  await Choice.create({ description: "Xk9#mPq2$wLz", is_correct: true, question: q6_1 }).save();
  await Choice.create({ description: "P@ssw0rd2024", is_correct: false, question: q6_1 }).save();
  await Choice.create({ description: "JeAimeLeChat!", is_correct: false, question: q6_1 }).save();

  const q6_2 = await Question.create({
    title: "Un mot de passe de 8 caractères (minuscules uniquement) a 208 milliards de combinaisons. Combien de temps pour le casser avec un GPU moderne ?",
    explanation: "Un GPU moderne (RTX 4090) peut tester environ 100 milliards de hash MD5 par seconde. 208 milliards de combinaisons = moins de 3 secondes ! C'est pourquoi on recommande minimum 12 caractères avec majuscules, chiffres et symboles, ce qui donne des quadrillions de combinaisons.",
    quiz: password_expert_2
  }).save();

  await Choice.create({ description: "Plusieurs années", is_correct: false, question: q6_2 }).save();
  await Choice.create({ description: "Quelques secondes seulement", is_correct: true, question: q6_2 }).save();
  await Choice.create({ description: "Quelques jours", is_correct: false, question: q6_2 }).save();

  const q6_3 = await Question.create({
    title: "Qu'est-ce qu'une 'rainbow table' dans le contexte du cassage de mots de passe ?",
    explanation: "Une rainbow table est une base de données pré-calculée qui associe des mots de passe à leurs hash. Au lieu de calculer le hash en temps réel, l'attaquant cherche dans la table. C'est pour ça que les systèmes modernes utilisent le 'salage' : ajouter des données aléatoires avant le hashage pour rendre les rainbow tables inutiles.",
    quiz: password_expert_2
  }).save();

  await Choice.create({ description: "Un virus qui vole les mots de passe colorés", is_correct: false, question: q6_3 }).save();
  await Choice.create({ description: "Un algorithme de chiffrement multicouleur", is_correct: false, question: q6_3 }).save();
  await Choice.create({ description: "Une base de hash pré-calculés pour accélérer le cassage", is_correct: true, question: q6_3 }).save();

}
