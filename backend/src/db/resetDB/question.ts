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
  // ===== QUESTIONS & CHOICES pour Quiz 1 =====
  const question1_1 = await Question.create({
    title: "Dans quel film Gérard Depardieu joue-t-il un homme préhistorique ?",
    quiz: quiz1
  }).save();

  await Choice.create({ description: "Les Visiteurs", is_correct: false, question: question1_1 }).save();
  await Choice.create({ description: "RRRrrrr!!!", is_correct: true, question: question1_1 }).save();
  await Choice.create({ description: "Astérix et Obélix", is_correct: false, question: question1_1 }).save();
  await Choice.create({ description: "Le Dîner de Cons", is_correct: false, question: question1_1 }).save();

  const question1_2 = await Question.create({
    title: "Qui réalise 'La Cité de la Peur' ?",
    quiz: quiz1
  }).save();

  await Choice.create({ description: "Les Nuls", is_correct: true, question: question1_2 }).save();
  await Choice.create({ description: "Les Inconnus", is_correct: false, question: question1_2 }).save();
  await Choice.create({ description: "Le Splendid", is_correct: false, question: question1_2 }).save();
  await Choice.create({ description: "Coluche", is_correct: false, question: question1_2 }).save();

  const question1_3 = await Question.create({
    title: "Dans 'Le Père Noël est une Ordure', quel est le nom du personnage joué par Thierry Lhermitte ?",
    quiz: quiz1
  }).save();

  await Choice.create({ description: "Pierre Mortez", is_correct: true, question: question1_3 }).save();
  await Choice.create({ description: "Félix", is_correct: false, question: question1_3 }).save();
  await Choice.create({ description: "Thérèse", is_correct: false, question: question1_3 }).save();
  await Choice.create({ description: "Zézette", is_correct: false, question: question1_3 }).save();

  const question1_4 = await Question.create({
    title: "Quel est le nom du personnage principal dans 'Les Bronzés font du ski' ?",
    quiz: quiz1
  }).save();

  await Choice.create({ description: "Gigi", is_correct: true, question: question1_4 }).save();
  await Choice.create({ description: "Popeye", is_correct: false, question: question1_4 }).save();
  await Choice.create({ description: "Bernard", is_correct: false, question: question1_4 }).save();
  await Choice.create({ description: "Jean-Claude", is_correct: false, question: question1_4 }).save();

  const question1_5 = await Question.create({
    title: "Dans 'OSS 117', qui incarne l'agent secret ?",
    quiz: quiz1
  }).save();

  await Choice.create({ description: "Jean Dujardin", is_correct: true, question: question1_5 }).save();
  await Choice.create({ description: "Gad Elmaleh", is_correct: false, question: question1_5 }).save();
  await Choice.create({ description: "Franck Dubosc", is_correct: false, question: question1_5 }).save();
  await Choice.create({ description: "Dany Boon", is_correct: false, question: question1_5 }).save();

  const question1_6 = await Question.create({
    title: "Quel film de Dany Boon a battu des records d'entrées en France ?",
    quiz: quiz1
  }).save();

  await Choice.create({ description: "Les Ch'tis", is_correct: true, question: question1_6 }).save();
  await Choice.create({ description: "Rien à déclarer", is_correct: false, question: question1_6 }).save();
  await Choice.create({ description: "Supercondriaque", is_correct: false, question: question1_6 }).save();
  await Choice.create({ description: "La Ch'tite famille", is_correct: false, question: question1_6 }).save();

  const question1_7 = await Question.create({
    title: "Dans 'Intouchables', quel acteur joue le rôle de Driss ?",
    quiz: quiz1
  }).save();

  await Choice.create({ description: "Omar Sy", is_correct: true, question: question1_7 }).save();
  await Choice.create({ description: "Kad Merad", is_correct: false, question: question1_7 }).save();
  await Choice.create({ description: "Franck Dubosc", is_correct: false, question: question1_7 }).save();
  await Choice.create({ description: "Gad Elmaleh", is_correct: false, question: question1_7 }).save();

  const question1_8 = await Question.create({
    title: "Quel est le titre du film avec Louis de Funès dans un restaurant ?",
    quiz: quiz1
  }).save();

  await Choice.create({ description: "L'Aile ou la Cuisse", is_correct: true, question: question1_8 }).save();
  await Choice.create({ description: "Le Gendarme", is_correct: false, question: question1_8 }).save();
  await Choice.create({ description: "La Grande Vadrouille", is_correct: false, question: question1_8 }).save();
  await Choice.create({ description: "Rabbi Jacob", is_correct: false, question: question1_8 }).save();

  const question1_9 = await Question.create({
    title: "Qui réalise 'Le Dîner de Cons' ?",
    quiz: quiz1
  }).save();

  await Choice.create({ description: "Francis Veber", is_correct: true, question: question1_9 }).save();
  await Choice.create({ description: "Claude Zidi", is_correct: false, question: question1_9 }).save();
  await Choice.create({ description: "Gérard Oury", is_correct: false, question: question1_9 }).save();
  await Choice.create({ description: "Patrice Leconte", is_correct: false, question: question1_9 }).save();

  const question1_10 = await Question.create({
    title: "Dans 'Les Visiteurs', quel acteur joue le rôle de Godefroy ?",
    quiz: quiz1
  }).save();

  await Choice.create({ description: "Jean Reno", is_correct: true, question: question1_10 }).save();
  await Choice.create({ description: "Christian Clavier", is_correct: false, question: question1_10 }).save();
  await Choice.create({ description: "Gérard Depardieu", is_correct: false, question: question1_10 }).save();
  await Choice.create({ description: "Thierry Lhermitte", is_correct: false, question: question1_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 2 =====
  const question2_1 = await Question.create({
    title: "Quel acteur incarne le cyborg T-800 dans 'Terminator' ?",
    quiz: quiz2
  }).save();

  await Choice.create({ description: "S. Stallone", is_correct: false, question: question2_1 }).save();
  await Choice.create({ description: "A. Schwarzenegger", is_correct: true, question: question2_1 }).save();
  await Choice.create({ description: "J.C. Van Damme", is_correct: false, question: question2_1 }).save();
  await Choice.create({ description: "Bruce Willis", is_correct: false, question: question2_1 }).save();

  const question2_2 = await Question.create({
    title: "Dans quel film entend-on 'Yippee-ki-yay' ?",
    quiz: quiz2
  }).save();

  await Choice.create({ description: "Die Hard", is_correct: true, question: question2_2 }).save();
  await Choice.create({ description: "Predator", is_correct: false, question: question2_2 }).save();
  await Choice.create({ description: "RoboCop", is_correct: false, question: question2_2 }).save();
  await Choice.create({ description: "Total Recall", is_correct: false, question: question2_2 }).save();

  const question2_3 = await Question.create({
    title: "Qui réalise 'Alien' en 1979 ?",
    quiz: quiz2
  }).save();

  await Choice.create({ description: "James Cameron", is_correct: false, question: question2_3 }).save();
  await Choice.create({ description: "Ridley Scott", is_correct: true, question: question2_3 }).save();
  await Choice.create({ description: "John Carpenter", is_correct: false, question: question2_3 }).save();
  await Choice.create({ description: "George Lucas", is_correct: false, question: question2_3 }).save();

  const question2_4 = await Question.create({
    title: "Quel film de science-fiction sorti en 1982 met en scène un réplicant chasseur ?",
    quiz: quiz2
  }).save();

  await Choice.create({ description: "Blade Runner", is_correct: true, question: question2_4 }).save();
  await Choice.create({ description: "The Thing", is_correct: false, question: question2_4 }).save();
  await Choice.create({ description: "E.T.", is_correct: false, question: question2_4 }).save();
  await Choice.create({ description: "Tron", is_correct: false, question: question2_4 }).save();

  const question2_5 = await Question.create({
    title: "Dans 'Predator', qui est l'acteur principal ?",
    quiz: quiz2
  }).save();

  await Choice.create({ description: "A. Schwarzenegger", is_correct: true, question: question2_5 }).save();
  await Choice.create({ description: "S. Stallone", is_correct: false, question: question2_5 }).save();
  await Choice.create({ description: "Chuck Norris", is_correct: false, question: question2_5 }).save();
  await Choice.create({ description: "Dolph Lundgren", is_correct: false, question: question2_5 }).save();

  const question2_6 = await Question.create({
    title: "Quel film de 1984 met en scène un robot policier ?",
    quiz: quiz2
  }).save();

  await Choice.create({ description: "RoboCop", is_correct: true, question: question2_6 }).save();
  await Choice.create({ description: "Terminator", is_correct: false, question: question2_6 }).save();
  await Choice.create({ description: "Short Circuit", is_correct: false, question: question2_6 }).save();
  await Choice.create({ description: "The Running Man", is_correct: false, question: question2_6 }).save();

  const question2_7 = await Question.create({
    title: "Dans 'L'Arme fatale', qui forme le duo de policiers ?",
    quiz: quiz2
  }).save();

  await Choice.create({ description: "Gibson & Glover", is_correct: true, question: question2_7 }).save();
  await Choice.create({ description: "Willis & Jackson", is_correct: false, question: question2_7 }).save();
  await Choice.create({ description: "Murphy & Nolte", is_correct: false, question: question2_7 }).save();
  await Choice.create({ description: "Stallone & Russell", is_correct: false, question: question2_7 }).save();

  const question2_8 = await Question.create({
    title: "Quel film de 1985 met en scène un boxeur soviétique ?",
    quiz: quiz2
  }).save();

  await Choice.create({ description: "Rocky IV", is_correct: true, question: question2_8 }).save();
  await Choice.create({ description: "Rambo II", is_correct: false, question: question2_8 }).save();
  await Choice.create({ description: "Commando", is_correct: false, question: question2_8 }).save();
  await Choice.create({ description: "Cobra", is_correct: false, question: question2_8 }).save();

  const question2_9 = await Question.create({
    title: "Qui réalise 'The Terminator' en 1984 ?",
    quiz: quiz2
  }).save();

  await Choice.create({ description: "James Cameron", is_correct: true, question: question2_9 }).save();
  await Choice.create({ description: "John McTiernan", is_correct: false, question: question2_9 }).save();
  await Choice.create({ description: "Paul Verhoeven", is_correct: false, question: question2_9 }).save();
  await Choice.create({ description: "Richard Donner", is_correct: false, question: question2_9 }).save();

  const question2_10 = await Question.create({
    title: "Dans 'Top Gun', quel acteur incarne Maverick ?",
    quiz: quiz2
  }).save();

  await Choice.create({ description: "Tom Cruise", is_correct: true, question: question2_10 }).save();
  await Choice.create({ description: "Val Kilmer", is_correct: false, question: question2_10 }).save();
  await Choice.create({ description: "Charlie Sheen", is_correct: false, question: question2_10 }).save();
  await Choice.create({ description: "Brad Pitt", is_correct: false, question: question2_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 3 =====
  const question3_1 = await Question.create({
    title: "Quel film français remporte la Palme d'Or en 2008 ?",
    quiz: quiz3
  }).save();

  await Choice.create({ description: "Entre les murs", is_correct: true, question: question3_1 }).save();
  await Choice.create({ description: "La Vie d'Adèle", is_correct: false, question: question3_1 }).save();
  await Choice.create({ description: "Amour", is_correct: false, question: question3_1 }).save();
  await Choice.create({ description: "Le Pianiste", is_correct: false, question: question3_1 }).save();

  const question3_2 = await Question.create({
    title: "Dans quel film Marion Cotillard incarne-t-elle Édith Piaf ?",
    quiz: quiz3
  }).save();

  await Choice.create({ description: "La Môme", is_correct: true, question: question3_2 }).save();
  await Choice.create({ description: "Coco avant Chanel", is_correct: false, question: question3_2 }).save();
  await Choice.create({ description: "Les Choristes", is_correct: false, question: question3_2 }).save();
  await Choice.create({ description: "Intouchables", is_correct: false, question: question3_2 }).save();

  const question3_3 = await Question.create({
    title: "Quel réalisateur a créé 'Le Fabuleux Destin d'Amélie Poulain' ?",
    quiz: quiz3
  }).save();

  await Choice.create({ description: "Luc Besson", is_correct: false, question: question3_3 }).save();
  await Choice.create({ description: "Jean-Pierre Jeunet", is_correct: true, question: question3_3 }).save();
  await Choice.create({ description: "François Ozon", is_correct: false, question: question3_3 }).save();
  await Choice.create({ description: "Olivier Assayas", is_correct: false, question: question3_3 }).save();

  const question3_4 = await Question.create({
    title: "Quel film français de 2001 raconte l'histoire d'un pianiste juif pendant la Seconde Guerre mondiale ?",
    quiz: quiz3
  }).save();

  await Choice.create({ description: "Le Pianiste", is_correct: true, question: question3_4 }).save();
  await Choice.create({ description: "Schindler", is_correct: false, question: question3_4 }).save();
  await Choice.create({ description: "La Vie est belle", is_correct: false, question: question3_4 }).save();
  await Choice.create({ description: "Un long dimanche", is_correct: false, question: question3_4 }).save();

  const question3_5 = await Question.create({
    title: "Dans 'Les Choristes', quel acteur joue le rôle du nouveau surveillant ?",
    quiz: quiz3
  }).save();

  await Choice.create({ description: "Gérard Jugnot", is_correct: true, question: question3_5 }).save();
  await Choice.create({ description: "François Berléand", is_correct: false, question: question3_5 }).save();
  await Choice.create({ description: "Kad Merad", is_correct: false, question: question3_5 }).save();
  await Choice.create({ description: "Jean Reno", is_correct: false, question: question3_5 }).save();

  const question3_6 = await Question.create({
    title: "Quel film de 2004 met en scène deux amis d'enfance qui se retrouvent ?",
    quiz: quiz3
  }).save();

  await Choice.create({ description: "L'Équipier", is_correct: true, question: question3_6 }).save();
  await Choice.create({ description: "Petits Mouchoirs", is_correct: false, question: question3_6 }).save();
  await Choice.create({ description: "Nos jours heureux", is_correct: false, question: question3_6 }).save();
  await Choice.create({ description: "Je vais bien", is_correct: false, question: question3_6 }).save();

  const question3_7 = await Question.create({
    title: "Qui réalise 'Un long dimanche de fiançailles' ?",
    quiz: quiz3
  }).save();

  await Choice.create({ description: "Jean-Pierre Jeunet", is_correct: true, question: question3_7 }).save();
  await Choice.create({ description: "François Ozon", is_correct: false, question: question3_7 }).save();
  await Choice.create({ description: "Olivier Assayas", is_correct: false, question: question3_7 }).save();
  await Choice.create({ description: "A. Desplechin", is_correct: false, question: question3_7 }).save();

  const question3_8 = await Question.create({
    title: "Dans 'Je vais bien, ne t'en fais pas', quel acteur joue le rôle principal ?",
    quiz: quiz3
  }).save();

  await Choice.create({ description: "M. Laurent", is_correct: true, question: question3_8 }).save();
  await Choice.create({ description: "M. Cotillard", is_correct: false, question: question3_8 }).save();
  await Choice.create({ description: "A. Tautou", is_correct: false, question: question3_8 }).save();
  await Choice.create({ description: "S. Marceau", is_correct: false, question: question3_8 }).save();

  const question3_9 = await Question.create({
    title: "Quel film de 2002 raconte l'histoire d'un homme qui perd sa mémoire ?",
    quiz: quiz3
  }).save();

  await Choice.create({ description: "Je me souviens de toi", is_correct: true, question: question3_9 }).save();
  await Choice.create({ description: "Memento", is_correct: false, question: question3_9 }).save();
  await Choice.create({ description: "Eternal Sunshine", is_correct: false, question: question3_9 }).save();
  await Choice.create({ description: "Bourne Identity", is_correct: false, question: question3_9 }).save();

  const question3_10 = await Question.create({
    title: "Dans 'Les Petits Mouchoirs', qui réalise le film ?",
    quiz: quiz3
  }).save();

  await Choice.create({ description: "G. Canet", is_correct: true, question: question3_10 }).save();
  await Choice.create({ description: "C. Klapisch", is_correct: false, question: question3_10 }).save();
  await Choice.create({ description: "O. Nakache", is_correct: false, question: question3_10 }).save();
  await Choice.create({ description: "É. Toledano", is_correct: false, question: question3_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 4 (Science-Fiction) =====
  const question4_1 = await Question.create({ title: "Quel film de SF met en scène un androïde nommé Roy Batty ?", quiz: quiz4 }).save();
  await Choice.create({ description: "Blade Runner", is_correct: true, question: question4_1 }).save();
  await Choice.create({ description: "Terminator", is_correct: false, question: question4_1 }).save();
  await Choice.create({ description: "Alien", is_correct: false, question: question4_1 }).save();
  await Choice.create({ description: "Matrix", is_correct: false, question: question4_1 }).save();

  const question4_2 = await Question.create({ title: "Dans '2001: L'Odyssée de l'espace', quel est le nom de l'ordinateur ?", quiz: quiz4 }).save();
  await Choice.create({ description: "HAL 9000", is_correct: true, question: question4_2 }).save();
  await Choice.create({ description: "C-3PO", is_correct: false, question: question4_2 }).save();
  await Choice.create({ description: "R2-D2", is_correct: false, question: question4_2 }).save();
  await Choice.create({ description: "GERTY", is_correct: false, question: question4_2 }).save();

  const question4_3 = await Question.create({ title: "Qui réalise 'Star Wars' en 1977 ?", quiz: quiz4 }).save();
  await Choice.create({ description: "George Lucas", is_correct: true, question: question4_3 }).save();
  await Choice.create({ description: "Steven Spielberg", is_correct: false, question: question4_3 }).save();
  await Choice.create({ description: "Ridley Scott", is_correct: false, question: question4_3 }).save();
  await Choice.create({ description: "James Cameron", is_correct: false, question: question4_3 }).save();

  const question4_4 = await Question.create({ title: "Dans 'E.T.', quelle planète visite le héros ?", quiz: quiz4 }).save();
  await Choice.create({ description: "La Terre", is_correct: true, question: question4_4 }).save();
  await Choice.create({ description: "Mars", is_correct: false, question: question4_4 }).save();
  await Choice.create({ description: "Jupiter", is_correct: false, question: question4_4 }).save();
  await Choice.create({ description: "Vénus", is_correct: false, question: question4_4 }).save();

  const question4_5 = await Question.create({ title: "Quel film de SF met en scène un voyage dans le temps avec une DeLorean ?", quiz: quiz4 }).save();
  await Choice.create({ description: "Retour vers le futur", is_correct: true, question: question4_5 }).save();
  await Choice.create({ description: "Terminator", is_correct: false, question: question4_5 }).save();
  await Choice.create({ description: "Looper", is_correct: false, question: question4_5 }).save();
  await Choice.create({ description: "Source Code", is_correct: false, question: question4_5 }).save();

  const question4_6 = await Question.create({ title: "Dans 'Alien', quel est le nom du vaisseau spatial ?", quiz: quiz4 }).save();
  await Choice.create({ description: "Nostromo", is_correct: true, question: question4_6 }).save();
  await Choice.create({ description: "Enterprise", is_correct: false, question: question4_6 }).save();
  await Choice.create({ description: "Millennium", is_correct: false, question: question4_6 }).save();
  await Choice.create({ description: "Prometheus", is_correct: false, question: question4_6 }).save();

  const question4_7 = await Question.create({ title: "Qui joue le rôle de Neo dans 'Matrix' ?", quiz: quiz4 }).save();
  await Choice.create({ description: "Keanu Reeves", is_correct: true, question: question4_7 }).save();
  await Choice.create({ description: "Tom Cruise", is_correct: false, question: question4_7 }).save();
  await Choice.create({ description: "Will Smith", is_correct: false, question: question4_7 }).save();
  await Choice.create({ description: "Matt Damon", is_correct: false, question: question4_7 }).save();

  const question4_8 = await Question.create({ title: "Quel film de SF met en scène un monde virtuel appelé OASIS ?", quiz: quiz4 }).save();
  await Choice.create({ description: "Ready Player One", is_correct: true, question: question4_8 }).save();
  await Choice.create({ description: "Matrix", is_correct: false, question: question4_8 }).save();
  await Choice.create({ description: "Tron", is_correct: false, question: question4_8 }).save();
  await Choice.create({ description: "Inception", is_correct: false, question: question4_8 }).save();

  const question4_9 = await Question.create({ title: "Dans 'Interstellar', quelle planète visitent les astronautes ?", quiz: quiz4 }).save();
  await Choice.create({ description: "Plusieurs planètes", is_correct: true, question: question4_9 }).save();
  await Choice.create({ description: "Mars uniquement", is_correct: false, question: question4_9 }).save();
  await Choice.create({ description: "Jupiter uniquement", is_correct: false, question: question4_9 }).save();
  await Choice.create({ description: "Saturne uniquement", is_correct: false, question: question4_9 }).save();

  const question4_10 = await Question.create({ title: "Qui réalise 'Blade Runner' en 1982 ?", quiz: quiz4 }).save();
  await Choice.create({ description: "Ridley Scott", is_correct: true, question: question4_10 }).save();
  await Choice.create({ description: "James Cameron", is_correct: false, question: question4_10 }).save();
  await Choice.create({ description: "George Lucas", is_correct: false, question: question4_10 }).save();
  await Choice.create({ description: "Steven Spielberg", is_correct: false, question: question4_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 5 (Comédies Romantiques 90's) =====
  const question5_1 = await Question.create({ title: "Dans 'Pretty Woman', qui joue le rôle de Vivian ?", quiz: quiz5 }).save();
  await Choice.create({ description: "Julia Roberts", is_correct: true, question: question5_1 }).save();
  await Choice.create({ description: "Meg Ryan", is_correct: false, question: question5_1 }).save();
  await Choice.create({ description: "Sandra Bullock", is_correct: false, question: question5_1 }).save();
  await Choice.create({ description: "Cameron Diaz", is_correct: false, question: question5_1 }).save();

  const question5_2 = await Question.create({ title: "Quel film met en scène Tom Hanks et Meg Ryan qui communiquent par email ?", quiz: quiz5 }).save();
  await Choice.create({ description: "Vous avez un message", is_correct: true, question: question5_2 }).save();
  await Choice.create({ description: "Quand Harry rencontre Sally", is_correct: false, question: question5_2 }).save();
  await Choice.create({ description: "Sleepless in Seattle", is_correct: false, question: question5_2 }).save();
  await Choice.create({ description: "Notting Hill", is_correct: false, question: question5_2 }).save();

  const question5_3 = await Question.create({ title: "Dans 'Quand Harry rencontre Sally', qui joue le rôle de Sally ?", quiz: quiz5 }).save();
  await Choice.create({ description: "Meg Ryan", is_correct: true, question: question5_3 }).save();
  await Choice.create({ description: "Julia Roberts", is_correct: false, question: question5_3 }).save();
  await Choice.create({ description: "Demi Moore", is_correct: false, question: question5_3 }).save();
  await Choice.create({ description: "Andie MacDowell", is_correct: false, question: question5_3 }).save();

  const question5_4 = await Question.create({ title: "Quel film met en scène Hugh Grant et Julia Roberts à Notting Hill ?", quiz: quiz5 }).save();
  await Choice.create({ description: "Notting Hill", is_correct: true, question: question5_4 }).save();
  await Choice.create({ description: "Quatre mariages", is_correct: false, question: question5_4 }).save();
  await Choice.create({ description: "Love Actually", is_correct: false, question: question5_4 }).save();
  await Choice.create({ description: "Le Journal de Bridget Jones", is_correct: false, question: question5_4 }).save();

  const question5_5 = await Question.create({ title: "Dans 'Sleepless in Seattle', quelle ville est mise en scène ?", quiz: quiz5 }).save();
  await Choice.create({ description: "Seattle", is_correct: true, question: question5_5 }).save();
  await Choice.create({ description: "New York", is_correct: false, question: question5_5 }).save();
  await Choice.create({ description: "Los Angeles", is_correct: false, question: question5_5 }).save();
  await Choice.create({ description: "Chicago", is_correct: false, question: question5_5 }).save();

  const question5_6 = await Question.create({ title: "Qui réalise 'Pretty Woman' en 1990 ?", quiz: quiz5 }).save();
  await Choice.create({ description: "Garry Marshall", is_correct: true, question: question5_6 }).save();
  await Choice.create({ description: "Rob Reiner", is_correct: false, question: question5_6 }).save();
  await Choice.create({ description: "Nora Ephron", is_correct: false, question: question5_6 }).save();
  await Choice.create({ description: "Richard Curtis", is_correct: false, question: question5_6 }).save();

  const question5_7 = await Question.create({ title: "Dans 'Quatre mariages et un enterrement', qui joue le rôle principal ?", quiz: quiz5 }).save();
  await Choice.create({ description: "Hugh Grant", is_correct: true, question: question5_7 }).save();
  await Choice.create({ description: "Colin Firth", is_correct: false, question: question5_7 }).save();
  await Choice.create({ description: "Ewan McGregor", is_correct: false, question: question5_7 }).save();
  await Choice.create({ description: "Ralph Fiennes", is_correct: false, question: question5_7 }).save();

  const question5_8 = await Question.create({ title: "Quel film met en scène Sandra Bullock et Keanu Reeves dans un bus ?", quiz: quiz5 }).save();
  await Choice.create({ description: "Speed", is_correct: true, question: question5_8 }).save();
  await Choice.create({ description: "While You Were Sleeping", is_correct: false, question: question5_8 }).save();
  await Choice.create({ description: "The Net", is_correct: false, question: question5_8 }).save();
  await Choice.create({ description: "Miss Congeniality", is_correct: false, question: question5_8 }).save();

  const question5_9 = await Question.create({ title: "Dans 'Le Journal de Bridget Jones', qui joue le rôle de Mark Darcy ?", quiz: quiz5 }).save();
  await Choice.create({ description: "Colin Firth", is_correct: true, question: question5_9 }).save();
  await Choice.create({ description: "Hugh Grant", is_correct: false, question: question5_9 }).save();
  await Choice.create({ description: "Ewan McGregor", is_correct: false, question: question5_9 }).save();
  await Choice.create({ description: "Ralph Fiennes", is_correct: false, question: question5_9 }).save();

  const question5_10 = await Question.create({ title: "Qui réalise 'Quand Harry rencontre Sally' ?", quiz: quiz5 }).save();
  await Choice.create({ description: "Rob Reiner", is_correct: true, question: question5_10 }).save();
  await Choice.create({ description: "Nora Ephron", is_correct: false, question: question5_10 }).save();
  await Choice.create({ description: "Garry Marshall", is_correct: false, question: question5_10 }).save();
  await Choice.create({ description: "Richard Curtis", is_correct: false, question: question5_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 6 (Thrillers Psychologiques) =====
  const question6_1 = await Question.create({ title: "Quel film met en scène un psychiatre et un patient dans un hôpital ?", quiz: quiz6 }).save();
  await Choice.create({ description: "Shutter Island", is_correct: true, question: question6_1 }).save();
  await Choice.create({ description: "Inception", is_correct: false, question: question6_1 }).save();
  await Choice.create({ description: "The Machinist", is_correct: false, question: question6_1 }).save();
  await Choice.create({ description: "Fight Club", is_correct: false, question: question6_1 }).save();

  const question6_2 = await Question.create({ title: "Dans 'Fight Club', qui joue le rôle de Tyler Durden ?", quiz: quiz6 }).save();
  await Choice.create({ description: "Brad Pitt", is_correct: true, question: question6_2 }).save();
  await Choice.create({ description: "Edward Norton", is_correct: false, question: question6_2 }).save();
  await Choice.create({ description: "Jared Leto", is_correct: false, question: question6_2 }).save();
  await Choice.create({ description: "Christian Bale", is_correct: false, question: question6_2 }).save();

  const question6_3 = await Question.create({ title: "Qui réalise 'Inception' ?", quiz: quiz6 }).save();
  await Choice.create({ description: "Christopher Nolan", is_correct: true, question: question6_3 }).save();
  await Choice.create({ description: "David Fincher", is_correct: false, question: question6_3 }).save();
  await Choice.create({ description: "Martin Scorsese", is_correct: false, question: question6_3 }).save();
  await Choice.create({ description: "Denis Villeneuve", is_correct: false, question: question6_3 }).save();

  const question6_4 = await Question.create({ title: "Dans 'Memento', quel est le problème du personnage principal ?", quiz: quiz6 }).save();
  await Choice.create({ description: "Perte de mémoire", is_correct: true, question: question6_4 }).save();
  await Choice.create({ description: "Troubles visuels", is_correct: false, question: question6_4 }).save();
  await Choice.create({ description: "Amnésie totale", is_correct: false, question: question6_4 }).save();
  await Choice.create({ description: "Hallucinations", is_correct: false, question: question6_4 }).save();

  const question6_5 = await Question.create({ title: "Quel film met en scène un détective dans un labyrinthe de rêves ?", quiz: quiz6 }).save();
  await Choice.create({ description: "Inception", is_correct: true, question: question6_5 }).save();
  await Choice.create({ description: "Shutter Island", is_correct: false, question: question6_5 }).save();
  await Choice.create({ description: "The Prestige", is_correct: false, question: question6_5 }).save();
  await Choice.create({ description: "Interstellar", is_correct: false, question: question6_5 }).save();

  const question6_6 = await Question.create({ title: "Dans 'The Machinist', qui joue le rôle principal ?", quiz: quiz6 }).save();
  await Choice.create({ description: "Christian Bale", is_correct: true, question: question6_6 }).save();
  await Choice.create({ description: "Jake Gyllenhaal", is_correct: false, question: question6_6 }).save();
  await Choice.create({ description: "Ryan Gosling", is_correct: false, question: question6_6 }).save();
  await Choice.create({ description: "Michael Fassbender", is_correct: false, question: question6_6 }).save();

  const question6_7 = await Question.create({ title: "Qui réalise 'Fight Club' ?", quiz: quiz6 }).save();
  await Choice.create({ description: "David Fincher", is_correct: true, question: question6_7 }).save();
  await Choice.create({ description: "Christopher Nolan", is_correct: false, question: question6_7 }).save();
  await Choice.create({ description: "Darren Aronofsky", is_correct: false, question: question6_7 }).save();
  await Choice.create({ description: "Martin Scorsese", is_correct: false, question: question6_7 }).save();

  const question6_8 = await Question.create({ title: "Dans 'Shutter Island', qui joue le rôle du marshal ?", quiz: quiz6 }).save();
  await Choice.create({ description: "Leonardo DiCaprio", is_correct: true, question: question6_8 }).save();
  await Choice.create({ description: "Mark Ruffalo", is_correct: false, question: question6_8 }).save();
  await Choice.create({ description: "Ben Kingsley", is_correct: false, question: question6_8 }).save();
  await Choice.create({ description: "Max von Sydow", is_correct: false, question: question6_8 }).save();

  const question6_9 = await Question.create({ title: "Quel film met en scène un homme qui ne dort plus ?", quiz: quiz6 }).save();
  await Choice.create({ description: "The Machinist", is_correct: true, question: question6_9 }).save();
  await Choice.create({ description: "Fight Club", is_correct: false, question: question6_9 }).save();
  await Choice.create({ description: "Memento", is_correct: false, question: question6_9 }).save();
  await Choice.create({ description: "Insomnia", is_correct: false, question: question6_9 }).save();

  const question6_10 = await Question.create({ title: "Dans 'Memento', qui réalise le film ?", quiz: quiz6 }).save();
  await Choice.create({ description: "Christopher Nolan", is_correct: true, question: question6_10 }).save();
  await Choice.create({ description: "David Fincher", is_correct: false, question: question6_10 }).save();
  await Choice.create({ description: "Darren Aronofsky", is_correct: false, question: question6_10 }).save();
  await Choice.create({ description: "Martin Scorsese", is_correct: false, question: question6_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 7 (Super-Héros) =====
  const question7_1 = await Question.create({ title: "Quel acteur joue Iron Man dans le MCU ?", quiz: quiz7 }).save();
  await Choice.create({ description: "Robert Downey Jr", is_correct: true, question: question7_1 }).save();
  await Choice.create({ description: "Chris Evans", is_correct: false, question: question7_1 }).save();
  await Choice.create({ description: "Chris Hemsworth", is_correct: false, question: question7_1 }).save();
  await Choice.create({ description: "Mark Ruffalo", is_correct: false, question: question7_1 }).save();

  const question7_2 = await Question.create({ title: "Dans 'The Dark Knight', qui joue le Joker ?", quiz: quiz7 }).save();
  await Choice.create({ description: "Heath Ledger", is_correct: true, question: question7_2 }).save();
  await Choice.create({ description: "Joaquin Phoenix", is_correct: false, question: question7_2 }).save();
  await Choice.create({ description: "Jack Nicholson", is_correct: false, question: question7_2 }).save();
  await Choice.create({ description: "Jared Leto", is_correct: false, question: question7_2 }).save();

  const question7_3 = await Question.create({ title: "Quel est le vrai nom de Spider-Man dans les films ?", quiz: quiz7 }).save();
  await Choice.create({ description: "Peter Parker", is_correct: true, question: question7_3 }).save();
  await Choice.create({ description: "Miles Morales", is_correct: false, question: question7_3 }).save();
  await Choice.create({ description: "Gwen Stacy", is_correct: false, question: question7_3 }).save();
  await Choice.create({ description: "Tony Stark", is_correct: false, question: question7_3 }).save();

  const question7_4 = await Question.create({ title: "Qui joue Captain America dans le MCU ?", quiz: quiz7 }).save();
  await Choice.create({ description: "Chris Evans", is_correct: true, question: question7_4 }).save();
  await Choice.create({ description: "Chris Hemsworth", is_correct: false, question: question7_4 }).save();
  await Choice.create({ description: "Chris Pratt", is_correct: false, question: question7_4 }).save();
  await Choice.create({ description: "Chris Pine", is_correct: false, question: question7_4 }).save();

  const question7_5 = await Question.create({ title: "Dans 'Wonder Woman', qui joue le rôle principal ?", quiz: quiz7 }).save();
  await Choice.create({ description: "Gal Gadot", is_correct: true, question: question7_5 }).save();
  await Choice.create({ description: "Scarlett Johansson", is_correct: false, question: question7_5 }).save();
  await Choice.create({ description: "Brie Larson", is_correct: false, question: question7_5 }).save();
  await Choice.create({ description: "Zoe Saldana", is_correct: false, question: question7_5 }).save();

  const question7_6 = await Question.create({ title: "Quel film met en scène les X-Men ?", quiz: quiz7 }).save();
  await Choice.create({ description: "X-Men", is_correct: true, question: question7_6 }).save();
  await Choice.create({ description: "Avengers", is_correct: false, question: question7_6 }).save();
  await Choice.create({ description: "Justice League", is_correct: false, question: question7_6 }).save();
  await Choice.create({ description: "Fantastic Four", is_correct: false, question: question7_6 }).save();

  const question7_7 = await Question.create({ title: "Qui joue Thor dans le MCU ?", quiz: quiz7 }).save();
  await Choice.create({ description: "Chris Hemsworth", is_correct: true, question: question7_7 }).save();
  await Choice.create({ description: "Chris Evans", is_correct: false, question: question7_7 }).save();
  await Choice.create({ description: "Tom Hiddleston", is_correct: false, question: question7_7 }).save();
  await Choice.create({ description: "Anthony Hopkins", is_correct: false, question: question7_7 }).save();

  const question7_8 = await Question.create({ title: "Dans 'Black Panther', quelle est la nation fictive ?", quiz: quiz7 }).save();
  await Choice.create({ description: "Wakanda", is_correct: true, question: question7_8 }).save();
  await Choice.create({ description: "Asgard", is_correct: false, question: question7_8 }).save();
  await Choice.create({ description: "Atlantis", is_correct: false, question: question7_8 }).save();
  await Choice.create({ description: "Genosha", is_correct: false, question: question7_8 }).save();

  const question7_9 = await Question.create({ title: "Qui réalise 'The Dark Knight' ?", quiz: quiz7 }).save();
  await Choice.create({ description: "Christopher Nolan", is_correct: true, question: question7_9 }).save();
  await Choice.create({ description: "Zack Snyder", is_correct: false, question: question7_9 }).save();
  await Choice.create({ description: "Joss Whedon", is_correct: false, question: question7_9 }).save();
  await Choice.create({ description: "Tim Burton", is_correct: false, question: question7_9 }).save();

  const question7_10 = await Question.create({ title: "Quel est le nom du bouclier de Captain America ?", quiz: quiz7 }).save();
  await Choice.create({ description: "Bouclier vibranium", is_correct: true, question: question7_10 }).save();
  await Choice.create({ description: "Bouclier adamantium", is_correct: false, question: question7_10 }).save();
  await Choice.create({ description: "Bouclier uru", is_correct: false, question: question7_10 }).save();
  await Choice.create({ description: "Bouclier kryptonien", is_correct: false, question: question7_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 8 (Comédies Musicales) =====
  const question8_1 = await Question.create({ title: "Quel film musical met en scène des lycéens qui chantent ?", quiz: quiz8 }).save();
  await Choice.create({ description: "High School Musical", is_correct: true, question: question8_1 }).save();
  await Choice.create({ description: "Grease", is_correct: false, question: question8_1 }).save();
  await Choice.create({ description: "Hairspray", is_correct: false, question: question8_1 }).save();
  await Choice.create({ description: "Mamma Mia", is_correct: false, question: question8_1 }).save();

  const question8_2 = await Question.create({ title: "Dans 'Mamma Mia', quels sont les chanteurs du groupe ABBA ?", quiz: quiz8 }).save();
  await Choice.create({ description: "ABBA", is_correct: true, question: question8_2 }).save();
  await Choice.create({ description: "The Beatles", is_correct: false, question: question8_2 }).save();
  await Choice.create({ description: "Queen", is_correct: false, question: question8_2 }).save();
  await Choice.create({ description: "The Rolling Stones", is_correct: false, question: question8_2 }).save();

  const question8_3 = await Question.create({ title: "Qui joue le rôle principal dans 'La La Land' ?", quiz: quiz8 }).save();
  await Choice.create({ description: "Ryan Gosling", is_correct: true, question: question8_3 }).save();
  await Choice.create({ description: "Emma Stone", is_correct: false, question: question8_3 }).save();
  await Choice.create({ description: "Jake Gyllenhaal", is_correct: false, question: question8_3 }).save();
  await Choice.create({ description: "Andrew Garfield", is_correct: false, question: question8_3 }).save();

  const question8_4 = await Question.create({ title: "Quel film musical met en scène des chats qui dansent ?", quiz: quiz8 }).save();
  await Choice.create({ description: "Cats", is_correct: true, question: question8_4 }).save();
  await Choice.create({ description: "The Lion King", is_correct: false, question: question8_4 }).save();
  await Choice.create({ description: "Aristocats", is_correct: false, question: question8_4 }).save();
  await Choice.create({ description: "Oliver & Company", is_correct: false, question: question8_4 }).save();

  const question8_5 = await Question.create({ title: "Dans 'Les Misérables', qui joue Jean Valjean ?", quiz: quiz8 }).save();
  await Choice.create({ description: "Hugh Jackman", is_correct: true, question: question8_5 }).save();
  await Choice.create({ description: "Russell Crowe", is_correct: false, question: question8_5 }).save();
  await Choice.create({ description: "Eddie Redmayne", is_correct: false, question: question8_5 }).save();
  await Choice.create({ description: "Aaron Tveit", is_correct: false, question: question8_5 }).save();

  const question8_6 = await Question.create({ title: "Qui réalise 'La La Land' ?", quiz: quiz8 }).save();
  await Choice.create({ description: "Damien Chazelle", is_correct: true, question: question8_6 }).save();
  await Choice.create({ description: "Tom Hooper", is_correct: false, question: question8_6 }).save();
  await Choice.create({ description: "Rob Marshall", is_correct: false, question: question8_6 }).save();
  await Choice.create({ description: "Baz Luhrmann", is_correct: false, question: question8_6 }).save();

  const question8_7 = await Question.create({ title: "Quel film musical met en scène des chanteurs de rue à Paris ?", quiz: quiz8 }).save();
  await Choice.create({ description: "Les Misérables", is_correct: true, question: question8_7 }).save();
  await Choice.create({ description: "Moulin Rouge", is_correct: false, question: question8_7 }).save();
  await Choice.create({ description: "La La Land", is_correct: false, question: question8_7 }).save();
  await Choice.create({ description: "Chicago", is_correct: false, question: question8_7 }).save();

  const question8_8 = await Question.create({ title: "Dans 'Grease', qui joue Sandy ?", quiz: quiz8 }).save();
  await Choice.create({ description: "Olivia Newton-John", is_correct: true, question: question8_8 }).save();
  await Choice.create({ description: "Stockard Channing", is_correct: false, question: question8_8 }).save();
  await Choice.create({ description: "Debbie Reynolds", is_correct: false, question: question8_8 }).save();
  await Choice.create({ description: "Julie Andrews", is_correct: false, question: question8_8 }).save();

  const question8_9 = await Question.create({ title: "Quel film musical met en scène Nicole Kidman et Ewan McGregor ?", quiz: quiz8 }).save();
  await Choice.create({ description: "Moulin Rouge", is_correct: true, question: question8_9 }).save();
  await Choice.create({ description: "Chicago", is_correct: false, question: question8_9 }).save();
  await Choice.create({ description: "Les Misérables", is_correct: false, question: question8_9 }).save();
  await Choice.create({ description: "La La Land", is_correct: false, question: question8_9 }).save();

  const question8_10 = await Question.create({ title: "Qui réalise 'Moulin Rouge' ?", quiz: quiz8 }).save();
  await Choice.create({ description: "Baz Luhrmann", is_correct: true, question: question8_10 }).save();
  await Choice.create({ description: "Rob Marshall", is_correct: false, question: question8_10 }).save();
  await Choice.create({ description: "Tom Hooper", is_correct: false, question: question8_10 }).save();
  await Choice.create({ description: "Damien Chazelle", is_correct: false, question: question8_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 9 (Films de Guerre) =====
  const question9_1 = await Question.create({ title: "Quel film de guerre met en scène le débarquement en Normandie ?", quiz: quiz9 }).save();
  await Choice.create({ description: "Il faut sauver le soldat Ryan", is_correct: true, question: question9_1 }).save();
  await Choice.create({ description: "Full Metal Jacket", is_correct: false, question: question9_1 }).save();
  await Choice.create({ description: "Apocalypse Now", is_correct: false, question: question9_1 }).save();
  await Choice.create({ description: "Platoon", is_correct: false, question: question9_1 }).save();

  const question9_2 = await Question.create({ title: "Qui réalise 'Il faut sauver le soldat Ryan' ?", quiz: quiz9 }).save();
  await Choice.create({ description: "Steven Spielberg", is_correct: true, question: question9_2 }).save();
  await Choice.create({ description: "Stanley Kubrick", is_correct: false, question: question9_2 }).save();
  await Choice.create({ description: "Francis Ford Coppola", is_correct: false, question: question9_2 }).save();
  await Choice.create({ description: "Oliver Stone", is_correct: false, question: question9_2 }).save();

  const question9_3 = await Question.create({ title: "Dans 'Full Metal Jacket', quelle guerre est représentée ?", quiz: quiz9 }).save();
  await Choice.create({ description: "Guerre du Vietnam", is_correct: true, question: question9_3 }).save();
  await Choice.create({ description: "Seconde Guerre mondiale", is_correct: false, question: question9_3 }).save();
  await Choice.create({ description: "Guerre de Corée", is_correct: false, question: question9_3 }).save();
  await Choice.create({ description: "Guerre d'Irak", is_correct: false, question: question9_3 }).save();

  const question9_4 = await Question.create({ title: "Quel film met en scène un sniper pendant la guerre d'Irak ?", quiz: quiz9 }).save();
  await Choice.create({ description: "American Sniper", is_correct: true, question: question9_4 }).save();
  await Choice.create({ description: "Lone Survivor", is_correct: false, question: question9_4 }).save();
  await Choice.create({ description: "Zero Dark Thirty", is_correct: false, question: question9_4 }).save();
  await Choice.create({ description: "The Hurt Locker", is_correct: false, question: question9_4 }).save();

  const question9_5 = await Question.create({ title: "Dans 'Apocalypse Now', qui joue le colonel Kurtz ?", quiz: quiz9 }).save();
  await Choice.create({ description: "Marlon Brando", is_correct: true, question: question9_5 }).save();
  await Choice.create({ description: "Robert Duvall", is_correct: false, question: question9_5 }).save();
  await Choice.create({ description: "Martin Sheen", is_correct: false, question: question9_5 }).save();
  await Choice.create({ description: "Harrison Ford", is_correct: false, question: question9_5 }).save();

  const question9_6 = await Question.create({ title: "Qui réalise 'Full Metal Jacket' ?", quiz: quiz9 }).save();
  await Choice.create({ description: "Stanley Kubrick", is_correct: true, question: question9_6 }).save();
  await Choice.create({ description: "Steven Spielberg", is_correct: false, question: question9_6 }).save();
  await Choice.create({ description: "Oliver Stone", is_correct: false, question: question9_6 }).save();
  await Choice.create({ description: "Francis Ford Coppola", is_correct: false, question: question9_6 }).save();

  const question9_7 = await Question.create({ title: "Quel film met en scène des soldats dans une tranchée ?", quiz: quiz9 }).save();
  await Choice.create({ description: "1917", is_correct: true, question: question9_7 }).save();
  await Choice.create({ description: "Dunkirk", is_correct: false, question: question9_7 }).save();
  await Choice.create({ description: "Hacksaw Ridge", is_correct: false, question: question9_7 }).save();
  await Choice.create({ description: "Fury", is_correct: false, question: question9_7 }).save();

  const question9_8 = await Question.create({ title: "Dans 'Platoon', qui réalise le film ?", quiz: quiz9 }).save();
  await Choice.create({ description: "Oliver Stone", is_correct: true, question: question9_8 }).save();
  await Choice.create({ description: "Stanley Kubrick", is_correct: false, question: question9_8 }).save();
  await Choice.create({ description: "Francis Ford Coppola", is_correct: false, question: question9_8 }).save();
  await Choice.create({ description: "Michael Cimino", is_correct: false, question: question9_8 }).save();

  const question9_9 = await Question.create({ title: "Quel film met en scène l'évacuation de Dunkerque ?", quiz: quiz9 }).save();
  await Choice.create({ description: "Dunkirk", is_correct: true, question: question9_9 }).save();
  await Choice.create({ description: "1917", is_correct: false, question: question9_9 }).save();
  await Choice.create({ description: "Hacksaw Ridge", is_correct: false, question: question9_9 }).save();
  await Choice.create({ description: "Fury", is_correct: false, question: question9_9 }).save();

  const question9_10 = await Question.create({ title: "Qui réalise 'Dunkirk' ?", quiz: quiz9 }).save();
  await Choice.create({ description: "Christopher Nolan", is_correct: true, question: question9_10 }).save();
  await Choice.create({ description: "Steven Spielberg", is_correct: false, question: question9_10 }).save();
  await Choice.create({ description: "Ridley Scott", is_correct: false, question: question9_10 }).save();
  await Choice.create({ description: "Clint Eastwood", is_correct: false, question: question9_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 10 (Comédies Américaines 2000) =====
  const question10_1 = await Question.create({ title: "Quel film met en scène Will Ferrell comme journaliste ?", quiz: quiz10 }).save();
  await Choice.create({ description: "Anchorman", is_correct: true, question: question10_1 }).save();
  await Choice.create({ description: "Talladega Nights", is_correct: false, question: question10_1 }).save();
  await Choice.create({ description: "Step Brothers", is_correct: false, question: question10_1 }).save();
  await Choice.create({ description: "The Other Guys", is_correct: false, question: question10_1 }).save();

  const question10_2 = await Question.create({ title: "Dans 'Superbad', qui joue le rôle de Seth ?", quiz: quiz10 }).save();
  await Choice.create({ description: "Jonah Hill", is_correct: true, question: question10_2 }).save();
  await Choice.create({ description: "Michael Cera", is_correct: false, question: question10_2 }).save();
  await Choice.create({ description: "Christopher Mintz-Plasse", is_correct: false, question: question10_2 }).save();
  await Choice.create({ description: "Seth Rogen", is_correct: false, question: question10_2 }).save();

  const question10_3 = await Question.create({ title: "Qui réalise 'The Hangover' ?", quiz: quiz10 }).save();
  await Choice.create({ description: "Todd Phillips", is_correct: true, question: question10_3 }).save();
  await Choice.create({ description: "Judd Apatow", is_correct: false, question: question10_3 }).save();
  await Choice.create({ description: "Adam McKay", is_correct: false, question: question10_3 }).save();
  await Choice.create({ description: "Greg Mottola", is_correct: false, question: question10_3 }).save();

  const question10_4 = await Question.create({ title: "Quel film met en scène Steve Carell comme boss ?", quiz: quiz10 }).save();
  await Choice.create({ description: "The Office", is_correct: true, question: question10_4 }).save();
  await Choice.create({ description: "40 ans, toujours puceau", is_correct: false, question: question10_4 }).save();
  await Choice.create({ description: "Evan Almighty", is_correct: false, question: question10_4 }).save();
  await Choice.create({ description: "Crazy, Stupid, Love", is_correct: false, question: question10_4 }).save();

  const question10_5 = await Question.create({ title: "Dans 'Step Brothers', qui joue les deux frères ?", quiz: quiz10 }).save();
  await Choice.create({ description: "Will Ferrell & John C. Reilly", is_correct: true, question: question10_5 }).save();
  await Choice.create({ description: "Will Ferrell & Mark Wahlberg", is_correct: false, question: question10_5 }).save();
  await Choice.create({ description: "Seth Rogen & James Franco", is_correct: false, question: question10_5 }).save();
  await Choice.create({ description: "Jonah Hill & Michael Cera", is_correct: false, question: question10_5 }).save();

  const question10_6 = await Question.create({ title: "Quel film met en scène des adolescents qui font une fête ?", quiz: quiz10 }).save();
  await Choice.create({ description: "Project X", is_correct: true, question: question10_6 }).save();
  await Choice.create({ description: "Superbad", is_correct: false, question: question10_6 }).save();
  await Choice.create({ description: "21 Jump Street", is_correct: false, question: question10_6 }).save();
  await Choice.create({ description: "Neighbors", is_correct: false, question: question10_6 }).save();

  const question10_7 = await Question.create({ title: "Dans 'The Hangover', quelle ville visitent les personnages ?", quiz: quiz10 }).save();
  await Choice.create({ description: "Las Vegas", is_correct: true, question: question10_7 }).save();
  await Choice.create({ description: "Miami", is_correct: false, question: question10_7 }).save();
  await Choice.create({ description: "Los Angeles", is_correct: false, question: question10_7 }).save();
  await Choice.create({ description: "New York", is_correct: false, question: question10_7 }).save();

  const question10_8 = await Question.create({ title: "Qui réalise 'Superbad' ?", quiz: quiz10 }).save();
  await Choice.create({ description: "Greg Mottola", is_correct: true, question: question10_8 }).save();
  await Choice.create({ description: "Judd Apatow", is_correct: false, question: question10_8 }).save();
  await Choice.create({ description: "Todd Phillips", is_correct: false, question: question10_8 }).save();
  await Choice.create({ description: "Adam McKay", is_correct: false, question: question10_8 }).save();

  const question10_9 = await Question.create({ title: "Quel film met en scène Owen Wilson et Vince Vaughn ?", quiz: quiz10 }).save();
  await Choice.create({ description: "Wedding Crashers", is_correct: true, question: question10_9 }).save();
  await Choice.create({ description: "The Break-Up", is_correct: false, question: question10_9 }).save();
  await Choice.create({ description: "Dodgeball", is_correct: false, question: question10_9 }).save();
  await Choice.create({ description: "Old School", is_correct: false, question: question10_9 }).save();

  const question10_10 = await Question.create({ title: "Dans 'Anchorman', quelle chaîne de télévision est mise en scène ?", quiz: quiz10 }).save();
  await Choice.create({ description: "Channel 4", is_correct: true, question: question10_10 }).save();
  await Choice.create({ description: "CNN", is_correct: false, question: question10_10 }).save();
  await Choice.create({ description: "Fox News", is_correct: false, question: question10_10 }).save();
  await Choice.create({ description: "NBC", is_correct: false, question: question10_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 11 (Films d'Horreur) =====
  const question11_1 = await Question.create({ title: "Quel film d'horreur met en scène un tueur masqué ?", quiz: quiz11 }).save();
  await Choice.create({ description: "Halloween", is_correct: true, question: question11_1 }).save();
  await Choice.create({ description: "Friday the 13th", is_correct: false, question: question11_1 }).save();
  await Choice.create({ description: "A Nightmare on Elm Street", is_correct: false, question: question11_1 }).save();
  await Choice.create({ description: "Scream", is_correct: false, question: question11_1 }).save();

  const question11_2 = await Question.create({ title: "Dans 'The Shining', qui joue le rôle principal ?", quiz: quiz11 }).save();
  await Choice.create({ description: "Jack Nicholson", is_correct: true, question: question11_2 }).save();
  await Choice.create({ description: "Shelley Duvall", is_correct: false, question: question11_2 }).save();
  await Choice.create({ description: "Danny Lloyd", is_correct: false, question: question11_2 }).save();
  await Choice.create({ description: "Scatman Crothers", is_correct: false, question: question11_2 }).save();

  const question11_3 = await Question.create({ title: "Qui réalise 'Psychose' ?", quiz: quiz11 }).save();
  await Choice.create({ description: "Alfred Hitchcock", is_correct: true, question: question11_3 }).save();
  await Choice.create({ description: "Stanley Kubrick", is_correct: false, question: question11_3 }).save();
  await Choice.create({ description: "John Carpenter", is_correct: false, question: question11_3 }).save();
  await Choice.create({ description: "Wes Craven", is_correct: false, question: question11_3 }).save();

  const question11_4 = await Question.create({ title: "Quel film met en scène une famille hantée ?", quiz: quiz11 }).save();
  await Choice.create({ description: "The Conjuring", is_correct: true, question: question11_4 }).save();
  await Choice.create({ description: "Insidious", is_correct: false, question: question11_4 }).save();
  await Choice.create({ description: "The Amityville Horror", is_correct: false, question: question11_4 }).save();
  await Choice.create({ description: "Poltergeist", is_correct: false, question: question11_4 }).save();

  const question11_5 = await Question.create({ title: "Dans 'The Exorcist', qui est possédé ?", quiz: quiz11 }).save();
  await Choice.create({ description: "Une jeune fille", is_correct: true, question: question11_5 }).save();
  await Choice.create({ description: "Un garçon", is_correct: false, question: question11_5 }).save();
  await Choice.create({ description: "Un prêtre", is_correct: false, question: question11_5 }).save();
  await Choice.create({ description: "Une mère", is_correct: false, question: question11_5 }).save();

  const question11_6 = await Question.create({ title: "Qui réalise 'Halloween' en 1978 ?", quiz: quiz11 }).save();
  await Choice.create({ description: "John Carpenter", is_correct: true, question: question11_6 }).save();
  await Choice.create({ description: "Wes Craven", is_correct: false, question: question11_6 }).save();
  await Choice.create({ description: "Sean S. Cunningham", is_correct: false, question: question11_6 }).save();
  await Choice.create({ description: "Tobe Hooper", is_correct: false, question: question11_6 }).save();

  const question11_7 = await Question.create({ title: "Quel film met en scène un tueur dans les rêves ?", quiz: quiz11 }).save();
  await Choice.create({ description: "A Nightmare on Elm Street", is_correct: true, question: question11_7 }).save();
  await Choice.create({ description: "Friday the 13th", is_correct: false, question: question11_7 }).save();
  await Choice.create({ description: "Halloween", is_correct: false, question: question11_7 }).save();
  await Choice.create({ description: "Scream", is_correct: false, question: question11_7 }).save();

  const question11_8 = await Question.create({ title: "Dans 'The Shining', quel est le nom de l'hôtel ?", quiz: quiz11 }).save();
  await Choice.create({ description: "Overlook Hotel", is_correct: true, question: question11_8 }).save();
  await Choice.create({ description: "Bates Motel", is_correct: false, question: question11_8 }).save();
  await Choice.create({ description: "Hotel California", is_correct: false, question: question11_8 }).save();
  await Choice.create({ description: "Grand Hotel", is_correct: false, question: question11_8 }).save();

  const question11_9 = await Question.create({ title: "Qui réalise 'The Exorcist' ?", quiz: quiz11 }).save();
  await Choice.create({ description: "William Friedkin", is_correct: true, question: question11_9 }).save();
  await Choice.create({ description: "Alfred Hitchcock", is_correct: false, question: question11_9 }).save();
  await Choice.create({ description: "Stanley Kubrick", is_correct: false, question: question11_9 }).save();
  await Choice.create({ description: "Roman Polanski", is_correct: false, question: question11_9 }).save();

  const question11_10 = await Question.create({ title: "Quel film met en scène un tueur téléphonique ?", quiz: quiz11 }).save();
  await Choice.create({ description: "Scream", is_correct: true, question: question11_10 }).save();
  await Choice.create({ description: "When a Stranger Calls", is_correct: false, question: question11_10 }).save();
  await Choice.create({ description: "The Ring", is_correct: false, question: question11_10 }).save();
  await Choice.create({ description: "One Missed Call", is_correct: false, question: question11_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 12 (Animation Disney) =====
  const question12_1 = await Question.create({ title: "Quel est le premier long-métrage d'animation Disney ?", quiz: quiz12 }).save();
  await Choice.create({ description: "Blanche-Neige", is_correct: true, question: question12_1 }).save();
  await Choice.create({ description: "Pinocchio", is_correct: false, question: question12_1 }).save();
  await Choice.create({ description: "Bambi", is_correct: false, question: question12_1 }).save();
  await Choice.create({ description: "Dumbo", is_correct: false, question: question12_1 }).save();

  const question12_2 = await Question.create({ title: "Dans 'Le Roi Lion', qui est le méchant ?", quiz: quiz12 }).save();
  await Choice.create({ description: "Scar", is_correct: true, question: question12_2 }).save();
  await Choice.create({ description: "Mufasa", is_correct: false, question: question12_2 }).save();
  await Choice.create({ description: "Timon", is_correct: false, question: question12_2 }).save();
  await Choice.create({ description: "Pumbaa", is_correct: false, question: question12_2 }).save();

  const question12_3 = await Question.create({ title: "Quel personnage Disney vit sous la mer ?", quiz: quiz12 }).save();
  await Choice.create({ description: "Ariel", is_correct: true, question: question12_3 }).save();
  await Choice.create({ description: "Belle", is_correct: false, question: question12_3 }).save();
  await Choice.create({ description: "Jasmine", is_correct: false, question: question12_3 }).save();
  await Choice.create({ description: "Pocahontas", is_correct: false, question: question12_3 }).save();

  const question12_4 = await Question.create({ title: "Dans 'La Belle et la Bête', qui est transformé en bête ?", quiz: quiz12 }).save();
  await Choice.create({ description: "Le prince", is_correct: true, question: question12_4 }).save();
  await Choice.create({ description: "Le serviteur", is_correct: false, question: question12_4 }).save();
  await Choice.create({ description: "Le père", is_correct: false, question: question12_4 }).save();
  await Choice.create({ description: "Le chasseur", is_correct: false, question: question12_4 }).save();

  const question12_5 = await Question.create({ title: "Quel film Disney met en scène un garçon qui veut devenir un homme ?", quiz: quiz12 }).save();
  await Choice.create({ description: "Mulan", is_correct: true, question: question12_5 }).save();
  await Choice.create({ description: "Aladdin", is_correct: false, question: question12_5 }).save();
  await Choice.create({ description: "Pocahontas", is_correct: false, question: question12_5 }).save();
  await Choice.create({ description: "Tarzan", is_correct: false, question: question12_5 }).save();

  const question12_6 = await Question.create({ title: "Dans 'Aladdin', qui est le génie ?", quiz: quiz12 }).save();
  await Choice.create({ description: "Robin Williams", is_correct: true, question: question12_6 }).save();
  await Choice.create({ description: "Will Smith", is_correct: false, question: question12_6 }).save();
  await Choice.create({ description: "Eddie Murphy", is_correct: false, question: question12_6 }).save();
  await Choice.create({ description: "Jim Carrey", is_correct: false, question: question12_6 }).save();

  const question12_7 = await Question.create({ title: "Quel personnage Disney a des cheveux magiques ?", quiz: quiz12 }).save();
  await Choice.create({ description: "Raiponce", is_correct: true, question: question12_7 }).save();
  await Choice.create({ description: "Elsa", is_correct: false, question: question12_7 }).save();
  await Choice.create({ description: "Ariel", is_correct: false, question: question12_7 }).save();
  await Choice.create({ description: "Belle", is_correct: false, question: question12_7 }).save();

  const question12_8 = await Question.create({ title: "Dans 'Frozen', qui sont les deux sœurs ?", quiz: quiz12 }).save();
  await Choice.create({ description: "Elsa et Anna", is_correct: true, question: question12_8 }).save();
  await Choice.create({ description: "Ariel et Belle", is_correct: false, question: question12_8 }).save();
  await Choice.create({ description: "Jasmine et Mulan", is_correct: false, question: question12_8 }).save();
  await Choice.create({ description: "Cendrillon et Blanche-Neige", is_correct: false, question: question12_8 }).save();

  const question12_9 = await Question.create({ title: "Quel film Disney met en scène un garçon élevé par des loups ?", quiz: quiz12 }).save();
  await Choice.create({ description: "Le Livre de la Jungle", is_correct: true, question: question12_9 }).save();
  await Choice.create({ description: "Tarzan", is_correct: false, question: question12_9 }).save();
  await Choice.create({ description: "Le Roi Lion", is_correct: false, question: question12_9 }).save();
  await Choice.create({ description: "Bambi", is_correct: false, question: question12_9 }).save();

  const question12_10 = await Question.create({ title: "Dans 'Cendrillon', quelle est la fée marraine ?", quiz: quiz12 }).save();
  await Choice.create({ description: "Fée marraine", is_correct: true, question: question12_10 }).save();
  await Choice.create({ description: "Fée Clochette", is_correct: false, question: question12_10 }).save();
  await Choice.create({ description: "Fée bleue", is_correct: false, question: question12_10 }).save();
  await Choice.create({ description: "Fée des dents", is_correct: false, question: question12_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 13 (Films de Gangsters) =====
  const question13_1 = await Question.create({ title: "Quel film met en scène Al Pacino comme parrain ?", quiz: quiz13 }).save();
  await Choice.create({ description: "Le Parrain", is_correct: true, question: question13_1 }).save();
  await Choice.create({ description: "Scarface", is_correct: false, question: question13_1 }).save();
  await Choice.create({ description: "Carlito's Way", is_correct: false, question: question13_1 }).save();
  await Choice.create({ description: "Heat", is_correct: false, question: question13_1 }).save();

  const question13_2 = await Question.create({ title: "Dans 'Les Affranchis', qui réalise le film ?", quiz: quiz13 }).save();
  await Choice.create({ description: "Martin Scorsese", is_correct: true, question: question13_2 }).save();
  await Choice.create({ description: "Francis Ford Coppola", is_correct: false, question: question13_2 }).save();
  await Choice.create({ description: "Brian De Palma", is_correct: false, question: question13_2 }).save();
  await Choice.create({ description: "Michael Mann", is_correct: false, question: question13_2 }).save();

  const question13_3 = await Question.create({ title: "Qui joue le rôle de Tony Montana dans 'Scarface' ?", quiz: quiz13 }).save();
  await Choice.create({ description: "Al Pacino", is_correct: true, question: question13_3 }).save();
  await Choice.create({ description: "Robert De Niro", is_correct: false, question: question13_3 }).save();
  await Choice.create({ description: "Joe Pesci", is_correct: false, question: question13_3 }).save();
  await Choice.create({ description: "Ray Liotta", is_correct: false, question: question13_3 }).save();

  const question13_4 = await Question.create({ title: "Quel film met en scène des gangsters à Boston ?", quiz: quiz13 }).save();
  await Choice.create({ description: "The Departed", is_correct: true, question: question13_4 }).save();
  await Choice.create({ description: "Goodfellas", is_correct: false, question: question13_4 }).save();
  await Choice.create({ description: "Casino", is_correct: false, question: question13_4 }).save();
  await Choice.create({ description: "Heat", is_correct: false, question: question13_4 }).save();

  const question13_5 = await Question.create({ title: "Dans 'Le Parrain', qui joue Michael Corleone ?", quiz: quiz13 }).save();
  await Choice.create({ description: "Al Pacino", is_correct: true, question: question13_5 }).save();
  await Choice.create({ description: "Marlon Brando", is_correct: false, question: question13_5 }).save();
  await Choice.create({ description: "James Caan", is_correct: false, question: question13_5 }).save();
  await Choice.create({ description: "Robert Duvall", is_correct: false, question: question13_5 }).save();

  const question13_6 = await Question.create({ title: "Qui réalise 'Le Parrain' ?", quiz: quiz13 }).save();
  await Choice.create({ description: "Francis Ford Coppola", is_correct: true, question: question13_6 }).save();
  await Choice.create({ description: "Martin Scorsese", is_correct: false, question: question13_6 }).save();
  await Choice.create({ description: "Brian De Palma", is_correct: false, question: question13_6 }).save();
  await Choice.create({ description: "Sergio Leone", is_correct: false, question: question13_6 }).save();

  const question13_7 = await Question.create({ title: "Quel film met en scène des gangsters à Las Vegas ?", quiz: quiz13 }).save();
  await Choice.create({ description: "Casino", is_correct: true, question: question13_7 }).save();
  await Choice.create({ description: "Ocean's Eleven", is_correct: false, question: question13_7 }).save();
  await Choice.create({ description: "The Hangover", is_correct: false, question: question13_7 }).save();
  await Choice.create({ description: "21", is_correct: false, question: question13_7 }).save();

  const question13_8 = await Question.create({ title: "Dans 'Goodfellas', qui joue Henry Hill ?", quiz: quiz13 }).save();
  await Choice.create({ description: "Ray Liotta", is_correct: true, question: question13_8 }).save();
  await Choice.create({ description: "Robert De Niro", is_correct: false, question: question13_8 }).save();
  await Choice.create({ description: "Joe Pesci", is_correct: false, question: question13_8 }).save();
  await Choice.create({ description: "Paul Sorvino", is_correct: false, question: question13_8 }).save();

  const question13_9 = await Question.create({ title: "Quel film met en scène un gangster qui devient informateur ?", quiz: quiz13 }).save();
  await Choice.create({ description: "The Departed", is_correct: true, question: question13_9 }).save();
  await Choice.create({ description: "Goodfellas", is_correct: false, question: question13_9 }).save();
  await Choice.create({ description: "Casino", is_correct: false, question: question13_9 }).save();
  await Choice.create({ description: "Donnie Brasco", is_correct: false, question: question13_9 }).save();

  const question13_10 = await Question.create({ title: "Dans 'Heat', qui joue le rôle du détective ?", quiz: quiz13 }).save();
  await Choice.create({ description: "Al Pacino", is_correct: true, question: question13_10 }).save();
  await Choice.create({ description: "Robert De Niro", is_correct: false, question: question13_10 }).save();
  await Choice.create({ description: "Val Kilmer", is_correct: false, question: question13_10 }).save();
  await Choice.create({ description: "Tom Sizemore", is_correct: false, question: question13_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 14 (Comédies Françaises Modernes) =====
  const question14_1 = await Question.create({ title: "Quel film met en scène Omar Sy et François Cluzet ?", quiz: quiz14 }).save();
  await Choice.create({ description: "Intouchables", is_correct: true, question: question14_1 }).save();
  await Choice.create({ description: "Qu'est-ce qu'on a fait", is_correct: false, question: question14_1 }).save();
  await Choice.create({ description: "Samba", is_correct: false, question: question14_1 }).save();
  await Choice.create({ description: "Chocolat", is_correct: false, question: question14_1 }).save();

  const question14_2 = await Question.create({ title: "Dans 'Bienvenue chez les Ch'tis', qui réalise le film ?", quiz: quiz14 }).save();
  await Choice.create({ description: "Dany Boon", is_correct: true, question: question14_2 }).save();
  await Choice.create({ description: "Kad Merad", is_correct: false, question: question14_2 }).save();
  await Choice.create({ description: "Franck Dubosc", is_correct: false, question: question14_2 }).save();
  await Choice.create({ description: "Gad Elmaleh", is_correct: false, question: question14_2 }).save();

  const question14_3 = await Question.create({ title: "Quel film met en scène des amis qui partent en vacances ?", quiz: quiz14 }).save();
  await Choice.create({ description: "Qu'est-ce qu'on a fait", is_correct: true, question: question14_3 }).save();
  await Choice.create({ description: "Les Bronzés", is_correct: false, question: question14_3 }).save();
  await Choice.create({ description: "Camping", is_correct: false, question: question14_3 }).save();
  await Choice.create({ description: "Les Tuche", is_correct: false, question: question14_3 }).save();

  const question14_4 = await Question.create({ title: "Dans 'Intouchables', quel est le handicap de Philippe ?", quiz: quiz14 }).save();
  await Choice.create({ description: "Tétraplégie", is_correct: true, question: question14_4 }).save();
  await Choice.create({ description: "Cécité", is_correct: false, question: question14_4 }).save();
  await Choice.create({ description: "Surdité", is_correct: false, question: question14_4 }).save();
  await Choice.create({ description: "Amputation", is_correct: false, question: question14_4 }).save();

  const question14_5 = await Question.create({ title: "Qui joue le rôle principal dans 'Supercondriaque' ?", quiz: quiz14 }).save();
  await Choice.create({ description: "Dany Boon", is_correct: true, question: question14_5 }).save();
  await Choice.create({ description: "Kad Merad", is_correct: false, question: question14_5 }).save();
  await Choice.create({ description: "Franck Dubosc", is_correct: false, question: question14_5 }).save();
  await Choice.create({ description: "Gad Elmaleh", is_correct: false, question: question14_5 }).save();

  const question14_6 = await Question.create({ title: "Quel film met en scène un homme qui devient riche ?", quiz: quiz14 }).save();
  await Choice.create({ description: "Intouchables", is_correct: true, question: question14_6 }).save();
  await Choice.create({ description: "Qu'est-ce qu'on a fait", is_correct: false, question: question14_6 }).save();
  await Choice.create({ description: "Samba", is_correct: false, question: question14_6 }).save();
  await Choice.create({ description: "Chocolat", is_correct: false, question: question14_6 }).save();

  const question14_7 = await Question.create({ title: "Dans 'Camping', qui joue le rôle de Gigi ?", quiz: quiz14 }).save();
  await Choice.create({ description: "Franck Dubosc", is_correct: true, question: question14_7 }).save();
  await Choice.create({ description: "Mathilde Seigner", is_correct: false, question: question14_7 }).save();
  await Choice.create({ description: "Gérard Lanvin", is_correct: false, question: question14_7 }).save();
  await Choice.create({ description: "Claude Brasseur", is_correct: false, question: question14_7 }).save();

  const question14_8 = await Question.create({ title: "Qui réalise 'Intouchables' ?", quiz: quiz14 }).save();
  await Choice.create({ description: "É. Toledano & O. Nakache", is_correct: true, question: question14_8 }).save();
  await Choice.create({ description: "Dany Boon", is_correct: false, question: question14_8 }).save();
  await Choice.create({ description: "Philippe Lacheau", is_correct: false, question: question14_8 }).save();
  await Choice.create({ description: "Dany Boon", is_correct: false, question: question14_8 }).save();

  const question14_9 = await Question.create({ title: "Quel film met en scène des amis qui font une soirée ?", quiz: quiz14 }).save();
  await Choice.create({ description: "Qu'est-ce qu'on a fait", is_correct: true, question: question14_9 }).save();
  await Choice.create({ description: "Les Bronzés", is_correct: false, question: question14_9 }).save();
  await Choice.create({ description: "Camping", is_correct: false, question: question14_9 }).save();
  await Choice.create({ description: "Les Tuche", is_correct: false, question: question14_9 }).save();

  const question14_10 = await Question.create({ title: "Dans 'Les Tuche', quelle est la ville d'origine ?", quiz: quiz14 }).save();
  await Choice.create({ description: "Bouzolles", is_correct: true, question: question14_10 }).save();
  await Choice.create({ description: "Paris", is_correct: false, question: question14_10 }).save();
  await Choice.create({ description: "Lyon", is_correct: false, question: question14_10 }).save();
  await Choice.create({ description: "Marseille", is_correct: false, question: question14_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 15 (Films de Fantasy) =====
  const question15_1 = await Question.create({ title: "Quel film met en scène un hobbit nommé Bilbo ?", quiz: quiz15 }).save();
  await Choice.create({ description: "Le Hobbit", is_correct: true, question: question15_1 }).save();
  await Choice.create({ description: "Le Seigneur des Anneaux", is_correct: false, question: question15_1 }).save();
  await Choice.create({ description: "Harry Potter", is_correct: false, question: question15_1 }).save();
  await Choice.create({ description: "Narnia", is_correct: false, question: question15_1 }).save();

  const question15_2 = await Question.create({ title: "Dans 'Harry Potter', quelle est l'école de magie ?", quiz: quiz15 }).save();
  await Choice.create({ description: "Poudlard", is_correct: true, question: question15_2 }).save();
  await Choice.create({ description: "Beauxbâtons", is_correct: false, question: question15_2 }).save();
  await Choice.create({ description: "Durmstrang", is_correct: false, question: question15_2 }).save();
  await Choice.create({ description: "Ilvermorny", is_correct: false, question: question15_2 }).save();

  const question15_3 = await Question.create({ title: "Qui joue le rôle de Gandalf dans 'Le Seigneur des Anneaux' ?", quiz: quiz15 }).save();
  await Choice.create({ description: "Ian McKellen", is_correct: true, question: question15_3 }).save();
  await Choice.create({ description: "Christopher Lee", is_correct: false, question: question15_3 }).save();
  await Choice.create({ description: "Hugo Weaving", is_correct: false, question: question15_3 }).save();
  await Choice.create({ description: "Orlando Bloom", is_correct: false, question: question15_3 }).save();

  const question15_4 = await Question.create({ title: "Quel film met en scène un lionceau nommé Simba ?", quiz: quiz15 }).save();
  await Choice.create({ description: "Le Roi Lion", is_correct: true, question: question15_4 }).save();
  await Choice.create({ description: "Tarzan", is_correct: false, question: question15_4 }).save();
  await Choice.create({ description: "Bambi", is_correct: false, question: question15_4 }).save();
  await Choice.create({ description: "Le Livre de la Jungle", is_correct: false, question: question15_4 }).save();

  const question15_5 = await Question.create({ title: "Dans 'Narnia', quelle est la sorcière blanche ?", quiz: quiz15 }).save();
  await Choice.create({ description: "Jadis", is_correct: true, question: question15_5 }).save();
  await Choice.create({ description: "Aslan", is_correct: false, question: question15_5 }).save();
  await Choice.create({ description: "Lucy", is_correct: false, question: question15_5 }).save();
  await Choice.create({ description: "Edmund", is_correct: false, question: question15_5 }).save();

  const question15_6 = await Question.create({ title: "Qui réalise 'Le Seigneur des Anneaux' ?", quiz: quiz15 }).save();
  await Choice.create({ description: "Peter Jackson", is_correct: true, question: question15_6 }).save();
  await Choice.create({ description: "Guillermo del Toro", is_correct: false, question: question15_6 }).save();
  await Choice.create({ description: "Tim Burton", is_correct: false, question: question15_6 }).save();
  await Choice.create({ description: "Terry Gilliam", is_correct: false, question: question15_6 }).save();

  const question15_7 = await Question.create({ title: "Quel film met en scène un sorcier nommé Dumbledore ?", quiz: quiz15 }).save();
  await Choice.create({ description: "Harry Potter", is_correct: true, question: question15_7 }).save();
  await Choice.create({ description: "Le Seigneur des Anneaux", is_correct: false, question: question15_7 }).save();
  await Choice.create({ description: "Narnia", is_correct: false, question: question15_7 }).save();
  await Choice.create({ description: "Le Hobbit", is_correct: false, question: question15_7 }).save();

  const question15_8 = await Question.create({ title: "Dans 'Le Seigneur des Anneaux', quel est l'anneau ?", quiz: quiz15 }).save();
  await Choice.create({ description: "L'anneau unique", is_correct: true, question: question15_8 }).save();
  await Choice.create({ description: "L'anneau de pouvoir", is_correct: false, question: question15_8 }).save();
  await Choice.create({ description: "L'anneau magique", is_correct: false, question: question15_8 }).save();
  await Choice.create({ description: "L'anneau d'or", is_correct: false, question: question15_8 }).save();

  const question15_9 = await Question.create({ title: "Quel film met en scène un monde magique appelé Narnia ?", quiz: quiz15 }).save();
  await Choice.create({ description: "Narnia", is_correct: true, question: question15_9 }).save();
  await Choice.create({ description: "Harry Potter", is_correct: false, question: question15_9 }).save();
  await Choice.create({ description: "Le Seigneur des Anneaux", is_correct: false, question: question15_9 }).save();
  await Choice.create({ description: "Le Hobbit", is_correct: false, question: question15_9 }).save();

  const question15_10 = await Question.create({ title: "Dans 'Harry Potter', qui joue le rôle de Voldemort ?", quiz: quiz15 }).save();
  await Choice.create({ description: "Ralph Fiennes", is_correct: true, question: question15_10 }).save();
  await Choice.create({ description: "Alan Rickman", is_correct: false, question: question15_10 }).save();
  await Choice.create({ description: "Michael Gambon", is_correct: false, question: question15_10 }).save();
  await Choice.create({ description: "Gary Oldman", is_correct: false, question: question15_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 16 (Drames Historiques) =====
  const question16_1 = await Question.create({ title: "Quel film met en scène l'histoire de Schindler ?", quiz: quiz16 }).save();
  await Choice.create({ description: "La Liste de Schindler", is_correct: true, question: question16_1 }).save();
  await Choice.create({ description: "Le Pianiste", is_correct: false, question: question16_1 }).save();
  await Choice.create({ description: "La Vie est belle", is_correct: false, question: question16_1 }).save();
  await Choice.create({ description: "Inglourious Basterds", is_correct: false, question: question16_1 }).save();

  const question16_2 = await Question.create({ title: "Dans 'Le Pianiste', qui joue le rôle principal ?", quiz: quiz16 }).save();
  await Choice.create({ description: "Adrien Brody", is_correct: true, question: question16_2 }).save();
  await Choice.create({ description: "Liam Neeson", is_correct: false, question: question16_2 }).save();
  await Choice.create({ description: "Ralph Fiennes", is_correct: false, question: question16_2 }).save();
  await Choice.create({ description: "Ben Kingsley", is_correct: false, question: question16_2 }).save();

  const question16_3 = await Question.create({ title: "Qui réalise 'La Liste de Schindler' ?", quiz: quiz16 }).save();
  await Choice.create({ description: "Steven Spielberg", is_correct: true, question: question16_3 }).save();
  await Choice.create({ description: "Roman Polanski", is_correct: false, question: question16_3 }).save();
  await Choice.create({ description: "Roberto Benigni", is_correct: false, question: question16_3 }).save();
  await Choice.create({ description: "Quentin Tarantino", is_correct: false, question: question16_3 }).save();

  const question16_4 = await Question.create({ title: "Quel film met en scène l'histoire de la reine Élisabeth ?", quiz: quiz16 }).save();
  await Choice.create({ description: "The Queen", is_correct: true, question: question16_4 }).save();
  await Choice.create({ description: "Elizabeth", is_correct: false, question: question16_4 }).save();
  await Choice.create({ description: "The Crown", is_correct: false, question: question16_4 }).save();
  await Choice.create({ description: "Victoria", is_correct: false, question: question16_4 }).save();

  const question16_5 = await Question.create({ title: "Dans 'Gladiator', qui joue le rôle de Maximus ?", quiz: quiz16 }).save();
  await Choice.create({ description: "Russell Crowe", is_correct: true, question: question16_5 }).save();
  await Choice.create({ description: "Joaquin Phoenix", is_correct: false, question: question16_5 }).save();
  await Choice.create({ description: "Connie Nielsen", is_correct: false, question: question16_5 }).save();
  await Choice.create({ description: "Richard Harris", is_correct: false, question: question16_5 }).save();

  const question16_6 = await Question.create({ title: "Qui réalise 'Gladiator' ?", quiz: quiz16 }).save();
  await Choice.create({ description: "Ridley Scott", is_correct: true, question: question16_6 }).save();
  await Choice.create({ description: "Steven Spielberg", is_correct: false, question: question16_6 }).save();
  await Choice.create({ description: "Martin Scorsese", is_correct: false, question: question16_6 }).save();
  await Choice.create({ description: "Christopher Nolan", is_correct: false, question: question16_6 }).save();

  const question16_7 = await Question.create({ title: "Quel film met en scène l'histoire de Lincoln ?", quiz: quiz16 }).save();
  await Choice.create({ description: "Lincoln", is_correct: true, question: question16_7 }).save();
  await Choice.create({ description: "Gettysburg", is_correct: false, question: question16_7 }).save();
  await Choice.create({ description: "The Conspirator", is_correct: false, question: question16_7 }).save();
  await Choice.create({ description: "Amistad", is_correct: false, question: question16_7 }).save();

  const question16_8 = await Question.create({ title: "Dans 'Braveheart', qui joue le rôle de William Wallace ?", quiz: quiz16 }).save();
  await Choice.create({ description: "Mel Gibson", is_correct: true, question: question16_8 }).save();
  await Choice.create({ description: "Sophie Marceau", is_correct: false, question: question16_8 }).save();
  await Choice.create({ description: "Patrick McGoohan", is_correct: false, question: question16_8 }).save();
  await Choice.create({ description: "Angus Macfadyen", is_correct: false, question: question16_8 }).save();

  const question16_9 = await Question.create({ title: "Qui réalise 'Braveheart' ?", quiz: quiz16 }).save();
  await Choice.create({ description: "Mel Gibson", is_correct: true, question: question16_9 }).save();
  await Choice.create({ description: "Ridley Scott", is_correct: false, question: question16_9 }).save();
  await Choice.create({ description: "Steven Spielberg", is_correct: false, question: question16_9 }).save();
  await Choice.create({ description: "Martin Scorsese", is_correct: false, question: question16_9 }).save();

  const question16_10 = await Question.create({ title: "Quel film met en scène l'histoire de la reine Victoria ?", quiz: quiz16 }).save();
  await Choice.create({ description: "Victoria", is_correct: true, question: question16_10 }).save();
  await Choice.create({ description: "The Queen", is_correct: false, question: question16_10 }).save();
  await Choice.create({ description: "Elizabeth", is_correct: false, question: question16_10 }).save();
  await Choice.create({ description: "The Crown", is_correct: false, question: question16_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 17 (Films de Sport) =====
  const question17_1 = await Question.create({ title: "Quel film met en scène un boxeur nommé Rocky ?", quiz: quiz17 }).save();
  await Choice.create({ description: "Rocky", is_correct: true, question: question17_1 }).save();
  await Choice.create({ description: "Raging Bull", is_correct: false, question: question17_1 }).save();
  await Choice.create({ description: "Million Dollar Baby", is_correct: false, question: question17_1 }).save();
  await Choice.create({ description: "Creed", is_correct: false, question: question17_1 }).save();

  const question17_2 = await Question.create({ title: "Dans 'Raging Bull', qui joue le rôle de Jake LaMotta ?", quiz: quiz17 }).save();
  await Choice.create({ description: "Robert De Niro", is_correct: true, question: question17_2 }).save();
  await Choice.create({ description: "Sylvester Stallone", is_correct: false, question: question17_2 }).save();
  await Choice.create({ description: "Mark Wahlberg", is_correct: false, question: question17_2 }).save();
  await Choice.create({ description: "Clint Eastwood", is_correct: false, question: question17_2 }).save();

  const question17_3 = await Question.create({ title: "Qui réalise 'Rocky' ?", quiz: quiz17 }).save();
  await Choice.create({ description: "John G. Avildsen", is_correct: true, question: question17_3 }).save();
  await Choice.create({ description: "Sylvester Stallone", is_correct: false, question: question17_3 }).save();
  await Choice.create({ description: "Martin Scorsese", is_correct: false, question: question17_3 }).save();
  await Choice.create({ description: "Clint Eastwood", is_correct: false, question: question17_3 }).save();

  const question17_4 = await Question.create({ title: "Quel film met en scène un joueur de football américain ?", quiz: quiz17 }).save();
  await Choice.create({ description: "Remember the Titans", is_correct: true, question: question17_4 }).save();
  await Choice.create({ description: "The Blind Side", is_correct: false, question: question17_4 }).save();
  await Choice.create({ description: "Friday Night Lights", is_correct: false, question: question17_4 }).save();
  await Choice.create({ description: "We Are Marshall", is_correct: false, question: question17_4 }).save();

  const question17_5 = await Question.create({ title: "Dans 'Million Dollar Baby', qui joue le rôle du coach ?", quiz: quiz17 }).save();
  await Choice.create({ description: "Clint Eastwood", is_correct: true, question: question17_5 }).save();
  await Choice.create({ description: "Hilary Swank", is_correct: false, question: question17_5 }).save();
  await Choice.create({ description: "Morgan Freeman", is_correct: false, question: question17_5 }).save();
  await Choice.create({ description: "Mickey Rourke", is_correct: false, question: question17_5 }).save();

  const question17_6 = await Question.create({ title: "Quel film met en scène un joueur de basket-ball ?", quiz: quiz17 }).save();
  await Choice.create({ description: "Space Jam", is_correct: true, question: question17_6 }).save();
  await Choice.create({ description: "He Got Game", is_correct: false, question: question17_6 }).save();
  await Choice.create({ description: "Coach Carter", is_correct: false, question: question17_6 }).save();
  await Choice.create({ description: "White Men Can't Jump", is_correct: false, question: question17_6 }).save();

  const question17_7 = await Question.create({ title: "Dans 'The Blind Side', qui joue le rôle de Michael Oher ?", quiz: quiz17 }).save();
  await Choice.create({ description: "Quinton Aaron", is_correct: true, question: question17_7 }).save();
  await Choice.create({ description: "Sandra Bullock", is_correct: false, question: question17_7 }).save();
  await Choice.create({ description: "Tim McGraw", is_correct: false, question: question17_7 }).save();
  await Choice.create({ description: "Kathy Bates", is_correct: false, question: question17_7 }).save();

  const question17_8 = await Question.create({ title: "Qui réalise 'Million Dollar Baby' ?", quiz: quiz17 }).save();
  await Choice.create({ description: "Clint Eastwood", is_correct: true, question: question17_8 }).save();
  await Choice.create({ description: "Martin Scorsese", is_correct: false, question: question17_8 }).save();
  await Choice.create({ description: "Sylvester Stallone", is_correct: false, question: question17_8 }).save();
  await Choice.create({ description: "John G. Avildsen", is_correct: false, question: question17_8 }).save();

  const question17_9 = await Question.create({ title: "Quel film met en scène un joueur de tennis ?", quiz: quiz17 }).save();
  await Choice.create({ description: "Match Point", is_correct: true, question: question17_9 }).save();
  await Choice.create({ description: "Wimbledon", is_correct: false, question: question17_9 }).save();
  await Choice.create({ description: "Borg vs McEnroe", is_correct: false, question: question17_9 }).save();
  await Choice.create({ description: "Battle of the Sexes", is_correct: false, question: question17_9 }).save();

  const question17_10 = await Question.create({ title: "Dans 'Space Jam', qui est le joueur de basket ?", quiz: quiz17 }).save();
  await Choice.create({ description: "Michael Jordan", is_correct: true, question: question17_10 }).save();
  await Choice.create({ description: "LeBron James", is_correct: false, question: question17_10 }).save();
  await Choice.create({ description: "Kobe Bryant", is_correct: false, question: question17_10 }).save();
  await Choice.create({ description: "Magic Johnson", is_correct: false, question: question17_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 18 (Comédies Britanniques) =====
  const question18_1 = await Question.create({ title: "Quel film met en scène Hugh Grant et Colin Firth ?", quiz: quiz18 }).save();
  await Choice.create({ description: "Love Actually", is_correct: true, question: question18_1 }).save();
  await Choice.create({ description: "Notting Hill", is_correct: false, question: question18_1 }).save();
  await Choice.create({ description: "Four Weddings", is_correct: false, question: question18_1 }).save();
  await Choice.create({ description: "Bridget Jones", is_correct: false, question: question18_1 }).save();

  const question18_2 = await Question.create({ title: "Dans 'The Full Monty', quel est le thème principal ?", quiz: quiz18 }).save();
  await Choice.create({ description: "Striptease masculin", is_correct: true, question: question18_2 }).save();
  await Choice.create({ description: "Football", is_correct: false, question: question18_2 }).save();
  await Choice.create({ description: "Musique", is_correct: false, question: question18_2 }).save();
  await Choice.create({ description: "Cuisine", is_correct: false, question: question18_2 }).save();

  const question18_3 = await Question.create({ title: "Qui réalise 'Love Actually' ?", quiz: quiz18 }).save();
  await Choice.create({ description: "Richard Curtis", is_correct: true, question: question18_3 }).save();
  await Choice.create({ description: "Mike Newell", is_correct: false, question: question18_3 }).save();
  await Choice.create({ description: "Peter Cattaneo", is_correct: false, question: question18_3 }).save();
  await Choice.create({ description: "Sharon Maguire", is_correct: false, question: question18_3 }).save();

  const question18_4 = await Question.create({ title: "Quel film met en scène un groupe de rock ?", quiz: quiz18 }).save();
  await Choice.create({ description: "The Commitments", is_correct: true, question: question18_4 }).save();
  await Choice.create({ description: "The Full Monty", is_correct: false, question: question18_4 }).save();
  await Choice.create({ description: "Love Actually", is_correct: false, question: question18_4 }).save();
  await Choice.create({ description: "Notting Hill", is_correct: false, question: question18_4 }).save();

  const question18_5 = await Question.create({ title: "Dans 'Bridget Jones's Diary', qui joue le rôle de Mark Darcy ?", quiz: quiz18 }).save();
  await Choice.create({ description: "Colin Firth", is_correct: true, question: question18_5 }).save();
  await Choice.create({ description: "Hugh Grant", is_correct: false, question: question18_5 }).save();
  await Choice.create({ description: "Renée Zellweger", is_correct: false, question: question18_5 }).save();
  await Choice.create({ description: "Patrick Dempsey", is_correct: false, question: question18_5 }).save();

  const question18_6 = await Question.create({ title: "Qui réalise 'The Full Monty' ?", quiz: quiz18 }).save();
  await Choice.create({ description: "Peter Cattaneo", is_correct: true, question: question18_6 }).save();
  await Choice.create({ description: "Richard Curtis", is_correct: false, question: question18_6 }).save();
  await Choice.create({ description: "Mike Newell", is_correct: false, question: question18_6 }).save();
  await Choice.create({ description: "Sharon Maguire", is_correct: false, question: question18_6 }).save();

  const question18_7 = await Question.create({ title: "Quel film met en scène des amis qui partent en voyage ?", quiz: quiz18 }).save();
  await Choice.create({ description: "The Trip", is_correct: true, question: question18_7 }).save();
  await Choice.create({ description: "Love Actually", is_correct: false, question: question18_7 }).save();
  await Choice.create({ description: "The Full Monty", is_correct: false, question: question18_7 }).save();
  await Choice.create({ description: "Notting Hill", is_correct: false, question: question18_7 }).save();

  const question18_8 = await Question.create({ title: "Dans 'Love Actually', combien d'histoires d'amour sont racontées ?", quiz: quiz18 }).save();
  await Choice.create({ description: "Plusieurs", is_correct: true, question: question18_8 }).save();
  await Choice.create({ description: "Une seule", is_correct: false, question: question18_8 }).save();
  await Choice.create({ description: "Deux", is_correct: false, question: question18_8 }).save();
  await Choice.create({ description: "Trois", is_correct: false, question: question18_8 }).save();

  const question18_9 = await Question.create({ title: "Qui joue le rôle principal dans 'The Full Monty' ?", quiz: quiz18 }).save();
  await Choice.create({ description: "Robert Carlyle", is_correct: true, question: question18_9 }).save();
  await Choice.create({ description: "Mark Addy", is_correct: false, question: question18_9 }).save();
  await Choice.create({ description: "Tom Wilkinson", is_correct: false, question: question18_9 }).save();
  await Choice.create({ description: "Paul Barber", is_correct: false, question: question18_9 }).save();

  const question18_10 = await Question.create({ title: "Quel film met en scène un groupe de chanteurs irlandais ?", quiz: quiz18 }).save();
  await Choice.create({ description: "The Commitments", is_correct: true, question: question18_10 }).save();
  await Choice.create({ description: "The Full Monty", is_correct: false, question: question18_10 }).save();
  await Choice.create({ description: "Love Actually", is_correct: false, question: question18_10 }).save();
  await Choice.create({ description: "Notting Hill", is_correct: false, question: question18_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 19 (Road Movies) =====
  const question19_1 = await Question.create({ title: "Quel film met en scène deux amis sur la route ?", quiz: quiz19 }).save();
  await Choice.create({ description: "Thelma et Louise", is_correct: true, question: question19_1 }).save();
  await Choice.create({ description: "Easy Rider", is_correct: false, question: question19_1 }).save();
  await Choice.create({ description: "Into the Wild", is_correct: false, question: question19_1 }).save();
  await Choice.create({ description: "Little Miss Sunshine", is_correct: false, question: question19_1 }).save();

  const question19_2 = await Question.create({ title: "Dans 'Easy Rider', qui joue le rôle principal ?", quiz: quiz19 }).save();
  await Choice.create({ description: "Peter Fonda", is_correct: true, question: question19_2 }).save();
  await Choice.create({ description: "Dennis Hopper", is_correct: false, question: question19_2 }).save();
  await Choice.create({ description: "Jack Nicholson", is_correct: false, question: question19_2 }).save();
  await Choice.create({ description: "Dennis Hopper", is_correct: false, question: question19_2 }).save();

  const question19_3 = await Question.create({ title: "Qui réalise 'Thelma et Louise' ?", quiz: quiz19 }).save();
  await Choice.create({ description: "Ridley Scott", is_correct: true, question: question19_3 }).save();
  await Choice.create({ description: "Dennis Hopper", is_correct: false, question: question19_3 }).save();
  await Choice.create({ description: "Sean Penn", is_correct: false, question: question19_3 }).save();
  await Choice.create({ description: "Jonathan Dayton", is_correct: false, question: question19_3 }).save();

  const question19_4 = await Question.create({ title: "Quel film met en scène une famille en voyage ?", quiz: quiz19 }).save();
  await Choice.create({ description: "Little Miss Sunshine", is_correct: true, question: question19_4 }).save();
  await Choice.create({ description: "Thelma et Louise", is_correct: false, question: question19_4 }).save();
  await Choice.create({ description: "Easy Rider", is_correct: false, question: question19_4 }).save();
  await Choice.create({ description: "Into the Wild", is_correct: false, question: question19_4 }).save();

  const question19_5 = await Question.create({ title: "Dans 'Into the Wild', qui joue le rôle principal ?", quiz: quiz19 }).save();
  await Choice.create({ description: "Emile Hirsch", is_correct: true, question: question19_5 }).save();
  await Choice.create({ description: "Sean Penn", is_correct: false, question: question19_5 }).save();
  await Choice.create({ description: "Vince Vaughn", is_correct: false, question: question19_5 }).save();
  await Choice.create({ description: "Hal Holbrook", is_correct: false, question: question19_5 }).save();

  const question19_6 = await Question.create({ title: "Qui réalise 'Into the Wild' ?", quiz: quiz19 }).save();
  await Choice.create({ description: "Sean Penn", is_correct: true, question: question19_6 }).save();
  await Choice.create({ description: "Ridley Scott", is_correct: false, question: question19_6 }).save();
  await Choice.create({ description: "Dennis Hopper", is_correct: false, question: question19_6 }).save();
  await Choice.create({ description: "Jonathan Dayton", is_correct: false, question: question19_6 }).save();

  const question19_7 = await Question.create({ title: "Quel film met en scène deux femmes sur la route ?", quiz: quiz19 }).save();
  await Choice.create({ description: "Thelma et Louise", is_correct: true, question: question19_7 }).save();
  await Choice.create({ description: "Easy Rider", is_correct: false, question: question19_7 }).save();
  await Choice.create({ description: "Into the Wild", is_correct: false, question: question19_7 }).save();
  await Choice.create({ description: "Little Miss Sunshine", is_correct: false, question: question19_7 }).save();

  const question19_8 = await Question.create({ title: "Dans 'Easy Rider', quel est le moyen de transport ?", quiz: quiz19 }).save();
  await Choice.create({ description: "Moto", is_correct: true, question: question19_8 }).save();
  await Choice.create({ description: "Voiture", is_correct: false, question: question19_8 }).save();
  await Choice.create({ description: "Vélo", is_correct: false, question: question19_8 }).save();
  await Choice.create({ description: "Bus", is_correct: false, question: question19_8 }).save();

  const question19_9 = await Question.create({ title: "Qui réalise 'Easy Rider' ?", quiz: quiz19 }).save();
  await Choice.create({ description: "Dennis Hopper", is_correct: true, question: question19_9 }).save();
  await Choice.create({ description: "Ridley Scott", is_correct: false, question: question19_9 }).save();
  await Choice.create({ description: "Sean Penn", is_correct: false, question: question19_9 }).save();
  await Choice.create({ description: "Jonathan Dayton", is_correct: false, question: question19_9 }).save();

  const question19_10 = await Question.create({ title: "Quel film met en scène un jeune homme qui part dans la nature ?", quiz: quiz19 }).save();
  await Choice.create({ description: "Into the Wild", is_correct: true, question: question19_10 }).save();
  await Choice.create({ description: "Thelma et Louise", is_correct: false, question: question19_10 }).save();
  await Choice.create({ description: "Easy Rider", is_correct: false, question: question19_10 }).save();
  await Choice.create({ description: "Little Miss Sunshine", is_correct: false, question: question19_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 20 (Films de Zombies) =====
  const question20_1 = await Question.create({ title: "Quel film met en scène des zombies dans un centre commercial ?", quiz: quiz20 }).save();
  await Choice.create({ description: "Dawn of the Dead", is_correct: true, question: question20_1 }).save();
  await Choice.create({ description: "Night of the Living Dead", is_correct: false, question: question20_1 }).save();
  await Choice.create({ description: "28 Days Later", is_correct: false, question: question20_1 }).save();
  await Choice.create({ description: "World War Z", is_correct: false, question: question20_1 }).save();

  const question20_2 = await Question.create({ title: "Dans '28 Days Later', quel est le virus ?", quiz: quiz20 }).save();
  await Choice.create({ description: "Rage", is_correct: true, question: question20_2 }).save();
  await Choice.create({ description: "Zombie", is_correct: false, question: question20_2 }).save();
  await Choice.create({ description: "Peste", is_correct: false, question: question20_2 }).save();
  await Choice.create({ description: "Grippe", is_correct: false, question: question20_2 }).save();

  const question20_3 = await Question.create({ title: "Qui réalise 'Night of the Living Dead' ?", quiz: quiz20 }).save();
  await Choice.create({ description: "George A. Romero", is_correct: true, question: question20_3 }).save();
  await Choice.create({ description: "Danny Boyle", is_correct: false, question: question20_3 }).save();
  await Choice.create({ description: "Zack Snyder", is_correct: false, question: question20_3 }).save();
  await Choice.create({ description: "Marc Forster", is_correct: false, question: question20_3 }).save();

  const question20_4 = await Question.create({ title: "Quel film met en scène Brad Pitt contre les zombies ?", quiz: quiz20 }).save();
  await Choice.create({ description: "World War Z", is_correct: true, question: question20_4 }).save();
  await Choice.create({ description: "28 Days Later", is_correct: false, question: question20_4 }).save();
  await Choice.create({ description: "Dawn of the Dead", is_correct: false, question: question20_4 }).save();
  await Choice.create({ description: "Zombieland", is_correct: false, question: question20_4 }).save();

  const question20_5 = await Question.create({ title: "Dans 'Zombieland', qui joue le rôle principal ?", quiz: quiz20 }).save();
  await Choice.create({ description: "Jesse Eisenberg", is_correct: true, question: question20_5 }).save();
  await Choice.create({ description: "Woody Harrelson", is_correct: false, question: question20_5 }).save();
  await Choice.create({ description: "Emma Stone", is_correct: false, question: question20_5 }).save();
  await Choice.create({ description: "Abigail Breslin", is_correct: false, question: question20_5 }).save();

  const question20_6 = await Question.create({ title: "Qui réalise '28 Days Later' ?", quiz: quiz20 }).save();
  await Choice.create({ description: "Danny Boyle", is_correct: true, question: question20_6 }).save();
  await Choice.create({ description: "George A. Romero", is_correct: false, question: question20_6 }).save();
  await Choice.create({ description: "Zack Snyder", is_correct: false, question: question20_6 }).save();
  await Choice.create({ description: "Marc Forster", is_correct: false, question: question20_6 }).save();

  const question20_7 = await Question.create({ title: "Quel film met en scène des zombies rapides ?", quiz: quiz20 }).save();
  await Choice.create({ description: "28 Days Later", is_correct: true, question: question20_7 }).save();
  await Choice.create({ description: "Night of the Living Dead", is_correct: false, question: question20_7 }).save();
  await Choice.create({ description: "Dawn of the Dead", is_correct: false, question: question20_7 }).save();
  await Choice.create({ description: "World War Z", is_correct: false, question: question20_7 }).save();

  const question20_8 = await Question.create({ title: "Dans 'Dawn of the Dead', qui réalise le remake ?", quiz: quiz20 }).save();
  await Choice.create({ description: "Zack Snyder", is_correct: true, question: question20_8 }).save();
  await Choice.create({ description: "George A. Romero", is_correct: false, question: question20_8 }).save();
  await Choice.create({ description: "Danny Boyle", is_correct: false, question: question20_8 }).save();
  await Choice.create({ description: "Marc Forster", is_correct: false, question: question20_8 }).save();

  const question20_9 = await Question.create({ title: "Quel film met en scène des zombies dans un train ?", quiz: quiz20 }).save();
  await Choice.create({ description: "Train to Busan", is_correct: true, question: question20_9 }).save();
  await Choice.create({ description: "World War Z", is_correct: false, question: question20_9 }).save();
  await Choice.create({ description: "28 Days Later", is_correct: false, question: question20_9 }).save();
  await Choice.create({ description: "Zombieland", is_correct: false, question: question20_9 }).save();

  const question20_10 = await Question.create({ title: "Dans 'World War Z', quelle ville est attaquée en premier ?", quiz: quiz20 }).save();
  await Choice.create({ description: "Philadelphie", is_correct: true, question: question20_10 }).save();
  await Choice.create({ description: "New York", is_correct: false, question: question20_10 }).save();
  await Choice.create({ description: "Los Angeles", is_correct: false, question: question20_10 }).save();
  await Choice.create({ description: "Chicago", is_correct: false, question: question20_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 21 (Comédies Italiennes) =====
  const question21_1 = await Question.create({ title: "Quel film met en scène Roberto Benigni comme prisonnier ?", quiz: quiz21 }).save();
  await Choice.create({ description: "La Vie est belle", is_correct: true, question: question21_1 }).save();
  await Choice.create({ description: "Pinocchio", is_correct: false, question: question21_1 }).save();
  await Choice.create({ description: "Le Tigre et la Neige", is_correct: false, question: question21_1 }).save();
  await Choice.create({ description: "Johnny Stecchino", is_correct: false, question: question21_1 }).save();

  const question21_2 = await Question.create({ title: "Dans 'La Dolce Vita', qui réalise le film ?", quiz: quiz21 }).save();
  await Choice.create({ description: "Federico Fellini", is_correct: true, question: question21_2 }).save();
  await Choice.create({ description: "Roberto Benigni", is_correct: false, question: question21_2 }).save();
  await Choice.create({ description: "Vittorio De Sica", is_correct: false, question: question21_2 }).save();
  await Choice.create({ description: "Luchino Visconti", is_correct: false, question: question21_2 }).save();

  const question21_3 = await Question.create({ title: "Qui joue le rôle principal dans 'La Vie est belle' ?", quiz: quiz21 }).save();
  await Choice.create({ description: "Roberto Benigni", is_correct: true, question: question21_3 }).save();
  await Choice.create({ description: "Nicoletta Braschi", is_correct: false, question: question21_3 }).save();
  await Choice.create({ description: "Giorgio Cantarini", is_correct: false, question: question21_3 }).save();
  await Choice.create({ description: "Giustino Durano", is_correct: false, question: question21_3 }).save();

  const question21_4 = await Question.create({ title: "Quel film met en scène Marcello Mastroianni ?", quiz: quiz21 }).save();
  await Choice.create({ description: "La Dolce Vita", is_correct: true, question: question21_4 }).save();
  await Choice.create({ description: "8½", is_correct: false, question: question21_4 }).save();
  await Choice.create({ description: "La Notte", is_correct: false, question: question21_4 }).save();
  await Choice.create({ description: "Divorce à l'italienne", is_correct: false, question: question21_4 }).save();

  const question21_5 = await Question.create({ title: "Qui réalise 'La Vie est belle' ?", quiz: quiz21 }).save();
  await Choice.create({ description: "Roberto Benigni", is_correct: true, question: question21_5 }).save();
  await Choice.create({ description: "Federico Fellini", is_correct: false, question: question21_5 }).save();
  await Choice.create({ description: "Vittorio De Sica", is_correct: false, question: question21_5 }).save();
  await Choice.create({ description: "Luchino Visconti", is_correct: false, question: question21_5 }).save();

  const question21_6 = await Question.create({ title: "Quel film met en scène un journaliste à Rome ?", quiz: quiz21 }).save();
  await Choice.create({ description: "La Dolce Vita", is_correct: true, question: question21_6 }).save();
  await Choice.create({ description: "8½", is_correct: false, question: question21_6 }).save();
  await Choice.create({ description: "La Notte", is_correct: false, question: question21_6 }).save();
  await Choice.create({ description: "Divorce à l'italienne", is_correct: false, question: question21_6 }).save();

  const question21_7 = await Question.create({ title: "Dans '8½', qui réalise le film ?", quiz: quiz21 }).save();
  await Choice.create({ description: "Federico Fellini", is_correct: true, question: question21_7 }).save();
  await Choice.create({ description: "Roberto Benigni", is_correct: false, question: question21_7 }).save();
  await Choice.create({ description: "Vittorio De Sica", is_correct: false, question: question21_7 }).save();
  await Choice.create({ description: "Luchino Visconti", is_correct: false, question: question21_7 }).save();

  const question21_8 = await Question.create({ title: "Quel film met en scène un réalisateur en crise ?", quiz: quiz21 }).save();
  await Choice.create({ description: "8½", is_correct: true, question: question21_8 }).save();
  await Choice.create({ description: "La Dolce Vita", is_correct: false, question: question21_8 }).save();
  await Choice.create({ description: "La Notte", is_correct: false, question: question21_8 }).save();
  await Choice.create({ description: "Divorce à l'italienne", is_correct: false, question: question21_8 }).save();

  const question21_9 = await Question.create({ title: "Dans 'La Vie est belle', quelle est la période historique ?", quiz: quiz21 }).save();
  await Choice.create({ description: "Seconde Guerre mondiale", is_correct: true, question: question21_9 }).save();
  await Choice.create({ description: "Première Guerre mondiale", is_correct: false, question: question21_9 }).save();
  await Choice.create({ description: "Guerre froide", is_correct: false, question: question21_9 }).save();
  await Choice.create({ description: "Renaissance", is_correct: false, question: question21_9 }).save();

  const question21_10 = await Question.create({ title: "Quel film met en scène un homme qui divorce ?", quiz: quiz21 }).save();
  await Choice.create({ description: "Divorce à l'italienne", is_correct: true, question: question21_10 }).save();
  await Choice.create({ description: "La Dolce Vita", is_correct: false, question: question21_10 }).save();
  await Choice.create({ description: "8½", is_correct: false, question: question21_10 }).save();
  await Choice.create({ description: "La Notte", is_correct: false, question: question21_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 22 (Super-Vilains) =====
  const question22_1 = await Question.create({ title: "Quel super-vilain est le frère de Thor ?", quiz: quiz22 }).save();
  await Choice.create({ description: "Loki", is_correct: true, question: question22_1 }).save();
  await Choice.create({ description: "Thanos", is_correct: false, question: question22_1 }).save();
  await Choice.create({ description: "Hela", is_correct: false, question: question22_1 }).save();
  await Choice.create({ description: "Malekith", is_correct: false, question: question22_1 }).save();

  const question22_2 = await Question.create({ title: "Dans 'The Dark Knight', qui joue le Joker ?", quiz: quiz22 }).save();
  await Choice.create({ description: "Heath Ledger", is_correct: true, question: question22_2 }).save();
  await Choice.create({ description: "Joaquin Phoenix", is_correct: false, question: question22_2 }).save();
  await Choice.create({ description: "Jack Nicholson", is_correct: false, question: question22_2 }).save();
  await Choice.create({ description: "Jared Leto", is_correct: false, question: question22_2 }).save();

  const question22_3 = await Question.create({ title: "Quel super-vilain collecte les pierres d'infinité ?", quiz: quiz22 }).save();
  await Choice.create({ description: "Thanos", is_correct: true, question: question22_3 }).save();
  await Choice.create({ description: "Loki", is_correct: false, question: question22_3 }).save();
  await Choice.create({ description: "Ultron", is_correct: false, question: question22_3 }).save();
  await Choice.create({ description: "Ronan", is_correct: false, question: question22_3 }).save();

  const question22_4 = await Question.create({ title: "Dans 'Spider-Man', qui est le méchant principal ?", quiz: quiz22 }).save();
  await Choice.create({ description: "Le Bouffon Vert", is_correct: true, question: question22_4 }).save();
  await Choice.create({ description: "Le Docteur Octopus", is_correct: false, question: question22_4 }).save();
  await Choice.create({ description: "Venom", is_correct: false, question: question22_4 }).save();
  await Choice.create({ description: "Le Vautour", is_correct: false, question: question22_4 }).save();

  const question22_5 = await Question.create({ title: "Qui joue le rôle de Thanos dans le MCU ?", quiz: quiz22 }).save();
  await Choice.create({ description: "Josh Brolin", is_correct: true, question: question22_5 }).save();
  await Choice.create({ description: "Tom Hiddleston", is_correct: false, question: question22_5 }).save();
  await Choice.create({ description: "Mark Ruffalo", is_correct: false, question: question22_5 }).save();
  await Choice.create({ description: "Benedict Cumberbatch", is_correct: false, question: question22_5 }).save();

  const question22_6 = await Question.create({ title: "Quel super-vilain est l'ennemi de Superman ?", quiz: quiz22 }).save();
  await Choice.create({ description: "Lex Luthor", is_correct: true, question: question22_6 }).save();
  await Choice.create({ description: "Darkseid", is_correct: false, question: question22_6 }).save();
  await Choice.create({ description: "Doomsday", is_correct: false, question: question22_6 }).save();
  await Choice.create({ description: "Zod", is_correct: false, question: question22_6 }).save();

  const question22_7 = await Question.create({ title: "Dans 'X-Men', qui est le méchant principal ?", quiz: quiz22 }).save();
  await Choice.create({ description: "Magneto", is_correct: true, question: question22_7 }).save();
  await Choice.create({ description: "Apocalypse", is_correct: false, question: question22_7 }).save();
  await Choice.create({ description: "Mystique", is_correct: false, question: question22_7 }).save();
  await Choice.create({ description: "Sabretooth", is_correct: false, question: question22_7 }).save();

  const question22_8 = await Question.create({ title: "Qui joue le rôle de Magneto dans 'X-Men' ?", quiz: quiz22 }).save();
  await Choice.create({ description: "Ian McKellen", is_correct: true, question: question22_8 }).save();
  await Choice.create({ description: "Patrick Stewart", is_correct: false, question: question22_8 }).save();
  await Choice.create({ description: "Hugh Jackman", is_correct: false, question: question22_8 }).save();
  await Choice.create({ description: "Michael Fassbender", is_correct: false, question: question22_8 }).save();

  const question22_9 = await Question.create({ title: "Quel super-vilain est l'ennemi de Wonder Woman ?", quiz: quiz22 }).save();
  await Choice.create({ description: "Ares", is_correct: true, question: question22_9 }).save();
  await Choice.create({ description: "Cheetah", is_correct: false, question: question22_9 }).save();
  await Choice.create({ description: "Darkseid", is_correct: false, question: question22_9 }).save();
  await Choice.create({ description: "Steppenwolf", is_correct: false, question: question22_9 }).save();

  const question22_10 = await Question.create({ title: "Dans 'Avengers', qui est le méchant principal ?", quiz: quiz22 }).save();
  await Choice.create({ description: "Loki", is_correct: true, question: question22_10 }).save();
  await Choice.create({ description: "Thanos", is_correct: false, question: question22_10 }).save();
  await Choice.create({ description: "Ultron", is_correct: false, question: question22_10 }).save();
  await Choice.create({ description: "Ronan", is_correct: false, question: question22_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 23 (Drames Familiaux) =====
  const question23_1 = await Question.create({ title: "Quel film met en scène une famille dysfonctionnelle ?", quiz: quiz23 }).save();
  await Choice.create({ description: "Little Miss Sunshine", is_correct: true, question: question23_1 }).save();
  await Choice.create({ description: "The Royal Tenenbaums", is_correct: false, question: question23_1 }).save();
  await Choice.create({ description: "August: Osage County", is_correct: false, question: question23_1 }).save();
  await Choice.create({ description: "The Family Stone", is_correct: false, question: question23_1 }).save();

  const question23_2 = await Question.create({ title: "Dans 'The Royal Tenenbaums', qui réalise le film ?", quiz: quiz23 }).save();
  await Choice.create({ description: "Wes Anderson", is_correct: true, question: question23_2 }).save();
  await Choice.create({ description: "Jonathan Dayton", is_correct: false, question: question23_2 }).save();
  await Choice.create({ description: "John Wells", is_correct: false, question: question23_2 }).save();
  await Choice.create({ description: "Thomas Bezucha", is_correct: false, question: question23_2 }).save();

  const question23_3 = await Question.create({ title: "Qui joue le rôle principal dans 'Little Miss Sunshine' ?", quiz: quiz23 }).save();
  await Choice.create({ description: "Abigail Breslin", is_correct: true, question: question23_3 }).save();
  await Choice.create({ description: "Greg Kinnear", is_correct: false, question: question23_3 }).save();
  await Choice.create({ description: "Toni Collette", is_correct: false, question: question23_3 }).save();
  await Choice.create({ description: "Steve Carell", is_correct: false, question: question23_3 }).save();

  const question23_4 = await Question.create({ title: "Quel film met en scène une famille qui se réunit ?", quiz: quiz23 }).save();
  await Choice.create({ description: "August: Osage County", is_correct: true, question: question23_4 }).save();
  await Choice.create({ description: "Little Miss Sunshine", is_correct: false, question: question23_4 }).save();
  await Choice.create({ description: "The Royal Tenenbaums", is_correct: false, question: question23_4 }).save();
  await Choice.create({ description: "The Family Stone", is_correct: false, question: question23_4 }).save();

  const question23_5 = await Question.create({ title: "Dans 'The Royal Tenenbaums', qui joue le rôle de Royal ?", quiz: quiz23 }).save();
  await Choice.create({ description: "Gene Hackman", is_correct: true, question: question23_5 }).save();
  await Choice.create({ description: "Anjelica Huston", is_correct: false, question: question23_5 }).save();
  await Choice.create({ description: "Ben Stiller", is_correct: false, question: question23_5 }).save();
  await Choice.create({ description: "Gwyneth Paltrow", is_correct: false, question: question23_5 }).save();

  const question23_6 = await Question.create({ title: "Qui réalise 'Little Miss Sunshine' ?", quiz: quiz23 }).save();
  await Choice.create({ description: "Jonathan Dayton", is_correct: true, question: question23_6 }).save();
  await Choice.create({ description: "Wes Anderson", is_correct: false, question: question23_6 }).save();
  await Choice.create({ description: "John Wells", is_correct: false, question: question23_6 }).save();
  await Choice.create({ description: "Thomas Bezucha", is_correct: false, question: question23_6 }).save();

  const question23_7 = await Question.create({ title: "Quel film met en scène une famille de génies ?", quiz: quiz23 }).save();
  await Choice.create({ description: "The Royal Tenenbaums", is_correct: true, question: question23_7 }).save();
  await Choice.create({ description: "Little Miss Sunshine", is_correct: false, question: question23_7 }).save();
  await Choice.create({ description: "August: Osage County", is_correct: false, question: question23_7 }).save();
  await Choice.create({ description: "The Family Stone", is_correct: false, question: question23_7 }).save();

  const question23_8 = await Question.create({ title: "Dans 'August: Osage County', qui joue le rôle de Violet ?", quiz: quiz23 }).save();
  await Choice.create({ description: "Meryl Streep", is_correct: true, question: question23_8 }).save();
  await Choice.create({ description: "Julia Roberts", is_correct: false, question: question23_8 }).save();
  await Choice.create({ description: "Julianne Nicholson", is_correct: false, question: question23_8 }).save();
  await Choice.create({ description: "Juliette Lewis", is_correct: false, question: question23_8 }).save();

  const question23_9 = await Question.create({ title: "Quel film met en scène une famille qui part en voyage ?", quiz: quiz23 }).save();
  await Choice.create({ description: "Little Miss Sunshine", is_correct: true, question: question23_9 }).save();
  await Choice.create({ description: "The Royal Tenenbaums", is_correct: false, question: question23_9 }).save();
  await Choice.create({ description: "August: Osage County", is_correct: false, question: question23_9 }).save();
  await Choice.create({ description: "The Family Stone", is_correct: false, question: question23_9 }).save();

  const question23_10 = await Question.create({ title: "Dans 'The Family Stone', qui joue le rôle principal ?", quiz: quiz23 }).save();
  await Choice.create({ description: "Sarah Jessica Parker", is_correct: true, question: question23_10 }).save();
  await Choice.create({ description: "Diane Keaton", is_correct: false, question: question23_10 }).save();
  await Choice.create({ description: "Rachel McAdams", is_correct: false, question: question23_10 }).save();
  await Choice.create({ description: "Claire Danes", is_correct: false, question: question23_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 24 (Blockbusters 2000) =====
  const question24_1 = await Question.create({ title: "Quel film a été le plus gros succès en 2001 ?", quiz: quiz24 }).save();
  await Choice.create({ description: "Harry Potter", is_correct: true, question: question24_1 }).save();
  await Choice.create({ description: "Le Seigneur des Anneaux", is_correct: false, question: question24_1 }).save();
  await Choice.create({ description: "Shrek", is_correct: false, question: question24_1 }).save();
  await Choice.create({ description: "Monstres et Cie", is_correct: false, question: question24_1 }).save();

  const question24_2 = await Question.create({ title: "Dans 'Le Seigneur des Anneaux', qui joue Frodon ?", quiz: quiz24 }).save();
  await Choice.create({ description: "Elijah Wood", is_correct: true, question: question24_2 }).save();
  await Choice.create({ description: "Sean Astin", is_correct: false, question: question24_2 }).save();
  await Choice.create({ description: "Orlando Bloom", is_correct: false, question: question24_2 }).save();
  await Choice.create({ description: "Viggo Mortensen", is_correct: false, question: question24_2 }).save();

  const question24_3 = await Question.create({ title: "Qui réalise 'Pirates des Caraïbes' ?", quiz: quiz24 }).save();
  await Choice.create({ description: "Gore Verbinski", is_correct: true, question: question24_3 }).save();
  await Choice.create({ description: "Steven Spielberg", is_correct: false, question: question24_3 }).save();
  await Choice.create({ description: "Christopher Nolan", is_correct: false, question: question24_3 }).save();
  await Choice.create({ description: "Peter Jackson", is_correct: false, question: question24_3 }).save();

  const question24_4 = await Question.create({ title: "Quel film met en scène un pirate nommé Jack Sparrow ?", quiz: quiz24 }).save();
  await Choice.create({ description: "Pirates des Caraïbes", is_correct: true, question: question24_4 }).save();
  await Choice.create({ description: "Master and Commander", is_correct: false, question: question24_4 }).save();
  await Choice.create({ description: "Hook", is_correct: false, question: question24_4 }).save();
  await Choice.create({ description: "Cutthroat Island", is_correct: false, question: question24_4 }).save();

  const question24_5 = await Question.create({ title: "Dans 'Spider-Man', qui joue le rôle principal ?", quiz: quiz24 }).save();
  await Choice.create({ description: "Tobey Maguire", is_correct: true, question: question24_5 }).save();
  await Choice.create({ description: "Andrew Garfield", is_correct: false, question: question24_5 }).save();
  await Choice.create({ description: "Tom Holland", is_correct: false, question: question24_5 }).save();
  await Choice.create({ description: "Jake Gyllenhaal", is_correct: false, question: question24_5 }).save();

  const question24_6 = await Question.create({ title: "Quel film a été le plus gros succès en 2003 ?", quiz: quiz24 }).save();
  await Choice.create({ description: "Le Seigneur des Anneaux", is_correct: true, question: question24_6 }).save();
  await Choice.create({ description: "Pirates des Caraïbes", is_correct: false, question: question24_6 }).save();
  await Choice.create({ description: "Matrix Reloaded", is_correct: false, question: question24_6 }).save();
  await Choice.create({ description: "X-Men 2", is_correct: false, question: question24_6 }).save();

  const question24_7 = await Question.create({ title: "Qui joue le rôle de Jack Sparrow ?", quiz: quiz24 }).save();
  await Choice.create({ description: "Johnny Depp", is_correct: true, question: question24_7 }).save();
  await Choice.create({ description: "Orlando Bloom", is_correct: false, question: question24_7 }).save();
  await Choice.create({ description: "Geoffrey Rush", is_correct: false, question: question24_7 }).save();
  await Choice.create({ description: "Keira Knightley", is_correct: false, question: question24_7 }).save();

  const question24_8 = await Question.create({ title: "Quel film met en scène des mutants ?", quiz: quiz24 }).save();
  await Choice.create({ description: "X-Men", is_correct: true, question: question24_8 }).save();
  await Choice.create({ description: "Spider-Man", is_correct: false, question: question24_8 }).save();
  await Choice.create({ description: "Hulk", is_correct: false, question: question24_8 }).save();
  await Choice.create({ description: "Daredevil", is_correct: false, question: question24_8 }).save();

  const question24_9 = await Question.create({ title: "Dans 'Matrix Reloaded', qui joue Neo ?", quiz: quiz24 }).save();
  await Choice.create({ description: "Keanu Reeves", is_correct: true, question: question24_9 }).save();
  await Choice.create({ description: "Laurence Fishburne", is_correct: false, question: question24_9 }).save();
  await Choice.create({ description: "Carrie-Anne Moss", is_correct: false, question: question24_9 }).save();
  await Choice.create({ description: "Hugo Weaving", is_correct: false, question: question24_9 }).save();

  const question24_10 = await Question.create({ title: "Quel film a été le plus gros succès en 2002 ?", quiz: quiz24 }).save();
  await Choice.create({ description: "Spider-Man", is_correct: true, question: question24_10 }).save();
  await Choice.create({ description: "Le Seigneur des Anneaux", is_correct: false, question: question24_10 }).save();
  await Choice.create({ description: "Harry Potter", is_correct: false, question: question24_10 }).save();
  await Choice.create({ description: "Star Wars", is_correct: false, question: question24_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 25 (Comédies 80) =====
  const question25_1 = await Question.create({ title: "Quel film met en scène Bill Murray comme fantôme ?", quiz: quiz25 }).save();
  await Choice.create({ description: "SOS Fantômes", is_correct: true, question: question25_1 }).save();
  await Choice.create({ description: "Groundhog Day", is_correct: false, question: question25_1 }).save();
  await Choice.create({ description: "Lost in Translation", is_correct: false, question: question25_1 }).save();
  await Choice.create({ description: "Ghostbusters", is_correct: false, question: question25_1 }).save();

  const question25_2 = await Question.create({ title: "Dans 'Retour vers le futur', qui joue le rôle de Doc ?", quiz: quiz25 }).save();
  await Choice.create({ description: "Christopher Lloyd", is_correct: true, question: question25_2 }).save();
  await Choice.create({ description: "Michael J. Fox", is_correct: false, question: question25_2 }).save();
  await Choice.create({ description: "Crispin Glover", is_correct: false, question: question25_2 }).save();
  await Choice.create({ description: "Lea Thompson", is_correct: false, question: question25_2 }).save();

  const question25_3 = await Question.create({ title: "Qui réalise 'Retour vers le futur' ?", quiz: quiz25 }).save();
  await Choice.create({ description: "Robert Zemeckis", is_correct: true, question: question25_3 }).save();
  await Choice.create({ description: "Steven Spielberg", is_correct: false, question: question25_3 }).save();
  await Choice.create({ description: "Ivan Reitman", is_correct: false, question: question25_3 }).save();
  await Choice.create({ description: "John Hughes", is_correct: false, question: question25_3 }).save();

  const question25_4 = await Question.create({ title: "Quel film met en scène des adolescents qui font une fête ?", quiz: quiz25 }).save();
  await Choice.create({ description: "Risky Business", is_correct: true, question: question25_4 }).save();
  await Choice.create({ description: "Ferris Bueller", is_correct: false, question: question25_4 }).save();
  await Choice.create({ description: "The Breakfast Club", is_correct: false, question: question25_4 }).save();
  await Choice.create({ description: "Sixteen Candles", is_correct: false, question: question25_4 }).save();

  const question25_5 = await Question.create({ title: "Dans 'The Breakfast Club', qui réalise le film ?", quiz: quiz25 }).save();
  await Choice.create({ description: "John Hughes", is_correct: true, question: question25_5 }).save();
  await Choice.create({ description: "Robert Zemeckis", is_correct: false, question: question25_5 }).save();
  await Choice.create({ description: "Ivan Reitman", is_correct: false, question: question25_5 }).save();
  await Choice.create({ description: "Steven Spielberg", is_correct: false, question: question25_5 }).save();

  const question25_6 = await Question.create({ title: "Quel film met en scène un adolescent qui séche l'école ?", quiz: quiz25 }).save();
  await Choice.create({ description: "Ferris Bueller", is_correct: true, question: question25_6 }).save();
  await Choice.create({ description: "Risky Business", is_correct: false, question: question25_6 }).save();
  await Choice.create({ description: "The Breakfast Club", is_correct: false, question: question25_6 }).save();
  await Choice.create({ description: "Sixteen Candles", is_correct: false, question: question25_6 }).save();

  const question25_7 = await Question.create({ title: "Dans 'SOS Fantômes', qui joue le rôle de Peter ?", quiz: quiz25 }).save();
  await Choice.create({ description: "Bill Murray", is_correct: true, question: question25_7 }).save();
  await Choice.create({ description: "Dan Aykroyd", is_correct: false, question: question25_7 }).save();
  await Choice.create({ description: "Harold Ramis", is_correct: false, question: question25_7 }).save();
  await Choice.create({ description: "Ernie Hudson", is_correct: false, question: question25_7 }).save();

  const question25_8 = await Question.create({ title: "Qui réalise 'SOS Fantômes' ?", quiz: quiz25 }).save();
  await Choice.create({ description: "Ivan Reitman", is_correct: true, question: question25_8 }).save();
  await Choice.create({ description: "Robert Zemeckis", is_correct: false, question: question25_8 }).save();
  await Choice.create({ description: "John Hughes", is_correct: false, question: question25_8 }).save();
  await Choice.create({ description: "Steven Spielberg", is_correct: false, question: question25_8 }).save();

  const question25_9 = await Question.create({ title: "Quel film met en scène un adolescent qui fête ses 16 ans ?", quiz: quiz25 }).save();
  await Choice.create({ description: "Sixteen Candles", is_correct: true, question: question25_9 }).save();
  await Choice.create({ description: "Ferris Bueller", is_correct: false, question: question25_9 }).save();
  await Choice.create({ description: "The Breakfast Club", is_correct: false, question: question25_9 }).save();
  await Choice.create({ description: "Risky Business", is_correct: false, question: question25_9 }).save();

  const question25_10 = await Question.create({ title: "Dans 'Retour vers le futur', qui joue le rôle de Marty ?", quiz: quiz25 }).save();
  await Choice.create({ description: "Michael J. Fox", is_correct: true, question: question25_10 }).save();
  await Choice.create({ description: "Christopher Lloyd", is_correct: false, question: question25_10 }).save();
  await Choice.create({ description: "Crispin Glover", is_correct: false, question: question25_10 }).save();
  await Choice.create({ description: "Lea Thompson", is_correct: false, question: question25_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 26 (Drames 90) =====
  const question26_1 = await Question.create({ title: "Quel film met en scène Tom Hanks comme simple d'esprit ?", quiz: quiz26 }).save();
  await Choice.create({ description: "Forrest Gump", is_correct: true, question: question26_1 }).save();
  await Choice.create({ description: "Philadelphia", is_correct: false, question: question26_1 }).save();
  await Choice.create({ description: "Cast Away", is_correct: false, question: question26_1 }).save();
  await Choice.create({ description: "Saving Private Ryan", is_correct: false, question: question26_1 }).save();

  const question26_2 = await Question.create({ title: "Dans 'The Shawshank Redemption', qui joue le rôle d'Andy ?", quiz: quiz26 }).save();
  await Choice.create({ description: "Tim Robbins", is_correct: true, question: question26_2 }).save();
  await Choice.create({ description: "Morgan Freeman", is_correct: false, question: question26_2 }).save();
  await Choice.create({ description: "Bob Gunton", is_correct: false, question: question26_2 }).save();
  await Choice.create({ description: "William Sadler", is_correct: false, question: question26_2 }).save();

  const question26_3 = await Question.create({ title: "Qui réalise 'Forrest Gump' ?", quiz: quiz26 }).save();
  await Choice.create({ description: "Robert Zemeckis", is_correct: true, question: question26_3 }).save();
  await Choice.create({ description: "Frank Darabont", is_correct: false, question: question26_3 }).save();
  await Choice.create({ description: "Steven Spielberg", is_correct: false, question: question26_3 }).save();
  await Choice.create({ description: "Jonathan Demme", is_correct: false, question: question26_3 }).save();

  const question26_4 = await Question.create({ title: "Quel film met en scène un homme qui s'évade de prison ?", quiz: quiz26 }).save();
  await Choice.create({ description: "The Shawshank Redemption", is_correct: true, question: question26_4 }).save();
  await Choice.create({ description: "Forrest Gump", is_correct: false, question: question26_4 }).save();
  await Choice.create({ description: "Philadelphia", is_correct: false, question: question26_4 }).save();
  await Choice.create({ description: "The Green Mile", is_correct: false, question: question26_4 }).save();

  const question26_5 = await Question.create({ title: "Dans 'Philadelphia', qui joue le rôle principal ?", quiz: quiz26 }).save();
  await Choice.create({ description: "Tom Hanks", is_correct: true, question: question26_5 }).save();
  await Choice.create({ description: "Denzel Washington", is_correct: false, question: question26_5 }).save();
  await Choice.create({ description: "Antonio Banderas", is_correct: false, question: question26_5 }).save();
  await Choice.create({ description: "Jason Robards", is_correct: false, question: question26_5 }).save();

  const question26_6 = await Question.create({ title: "Qui réalise 'The Shawshank Redemption' ?", quiz: quiz26 }).save();
  await Choice.create({ description: "Frank Darabont", is_correct: true, question: question26_6 }).save();
  await Choice.create({ description: "Robert Zemeckis", is_correct: false, question: question26_6 }).save();
  await Choice.create({ description: "Steven Spielberg", is_correct: false, question: question26_6 }).save();
  await Choice.create({ description: "Jonathan Demme", is_correct: false, question: question26_6 }).save();

  const question26_7 = await Question.create({ title: "Quel film met en scène un homme qui survit sur une île ?", quiz: quiz26 }).save();
  await Choice.create({ description: "Cast Away", is_correct: true, question: question26_7 }).save();
  await Choice.create({ description: "Forrest Gump", is_correct: false, question: question26_7 }).save();
  await Choice.create({ description: "The Shawshank Redemption", is_correct: false, question: question26_7 }).save();
  await Choice.create({ description: "The Green Mile", is_correct: false, question: question26_7 }).save();

  const question26_8 = await Question.create({ title: "Dans 'The Green Mile', qui joue le rôle de Paul ?", quiz: quiz26 }).save();
  await Choice.create({ description: "Tom Hanks", is_correct: true, question: question26_8 }).save();
  await Choice.create({ description: "Michael Clarke Duncan", is_correct: false, question: question26_8 }).save();
  await Choice.create({ description: "David Morse", is_correct: false, question: question26_8 }).save();
  await Choice.create({ description: "Bonnie Hunt", is_correct: false, question: question26_8 }).save();

  const question26_9 = await Question.create({ title: "Qui réalise 'Philadelphia' ?", quiz: quiz26 }).save();
  await Choice.create({ description: "Jonathan Demme", is_correct: true, question: question26_9 }).save();
  await Choice.create({ description: "Robert Zemeckis", is_correct: false, question: question26_9 }).save();
  await Choice.create({ description: "Frank Darabont", is_correct: false, question: question26_9 }).save();
  await Choice.create({ description: "Steven Spielberg", is_correct: false, question: question26_9 }).save();

  const question26_10 = await Question.create({ title: "Quel film met en scène un homme condamné à mort ?", quiz: quiz26 }).save();
  await Choice.create({ description: "The Green Mile", is_correct: true, question: question26_10 }).save();
  await Choice.create({ description: "The Shawshank Redemption", is_correct: false, question: question26_10 }).save();
  await Choice.create({ description: "Forrest Gump", is_correct: false, question: question26_10 }).save();
  await Choice.create({ description: "Philadelphia", is_correct: false, question: question26_10 }).save();

  // ===== QUESTIONS & CHOICES pour Quiz 27 (Films d'Aventure 2000) =====
  const question27_1 = await Question.create({ title: "Quel film met en scène un archéologue aventurier ?", quiz: quiz27 }).save();
  await Choice.create({ description: "Indiana Jones", is_correct: true, question: question27_1 }).save();
  await Choice.create({ description: "Lara Croft", is_correct: false, question: question27_1 }).save();
  await Choice.create({ description: "National Treasure", is_correct: false, question: question27_1 }).save();
  await Choice.create({ description: "The Mummy", is_correct: false, question: question27_1 }).save();

  const question27_2 = await Question.create({ title: "Dans 'Pirates des Caraïbes', qui joue Jack Sparrow ?", quiz: quiz27 }).save();
  await Choice.create({ description: "Johnny Depp", is_correct: true, question: question27_2 }).save();
  await Choice.create({ description: "Orlando Bloom", is_correct: false, question: question27_2 }).save();
  await Choice.create({ description: "Geoffrey Rush", is_correct: false, question: question27_2 }).save();
  await Choice.create({ description: "Keira Knightley", is_correct: false, question: question27_2 }).save();

  const question27_3 = await Question.create({ title: "Quel film met en scène un trésor caché ?", quiz: quiz27 }).save();
  await Choice.create({ description: "National Treasure", is_correct: true, question: question27_3 }).save();
  await Choice.create({ description: "The Da Vinci Code", is_correct: false, question: question27_3 }).save();
  await Choice.create({ description: "Indiana Jones", is_correct: false, question: question27_3 }).save();
  await Choice.create({ description: "The Mummy", is_correct: false, question: question27_3 }).save();

  const question27_4 = await Question.create({ title: "Dans 'The Mummy', quelle est la malédiction ?", quiz: quiz27 }).save();
  await Choice.create({ description: "Résurrection", is_correct: true, question: question27_4 }).save();
  await Choice.create({ description: "Mort", is_correct: false, question: question27_4 }).save();
  await Choice.create({ description: "Maladie", is_correct: false, question: question27_4 }).save();
  await Choice.create({ description: "Pauvreté", is_correct: false, question: question27_4 }).save();

  const question27_5 = await Question.create({ title: "Qui joue le rôle de Lara Croft ?", quiz: quiz27 }).save();
  await Choice.create({ description: "Angelina Jolie", is_correct: true, question: question27_5 }).save();
  await Choice.create({ description: "Scarlett Johansson", is_correct: false, question: question27_5 }).save();
  await Choice.create({ description: "Charlize Theron", is_correct: false, question: question27_5 }).save();
  await Choice.create({ description: "Milla Jovovich", is_correct: false, question: question27_5 }).save();

  const question27_6 = await Question.create({ title: "Quel film met en scène un code secret ?", quiz: quiz27 }).save();
  await Choice.create({ description: "The Da Vinci Code", is_correct: true, question: question27_6 }).save();
  await Choice.create({ description: "National Treasure", is_correct: false, question: question27_6 }).save();
  await Choice.create({ description: "Angels & Demons", is_correct: false, question: question27_6 }).save();
  await Choice.create({ description: "Inferno", is_correct: false, question: question27_6 }).save();

  const question27_7 = await Question.create({ title: "Dans 'Indiana Jones', quel est l'objet recherché ?", quiz: quiz27 }).save();
  await Choice.create({ description: "L'Arche d'Alliance", is_correct: true, question: question27_7 }).save();
  await Choice.create({ description: "Le Graal", is_correct: false, question: question27_7 }).save();
  await Choice.create({ description: "Le Crâne de Cristal", is_correct: false, question: question27_7 }).save();
  await Choice.create({ description: "La Pierre Philosophale", is_correct: false, question: question27_7 }).save();

  const question27_8 = await Question.create({ title: "Qui réalise 'Pirates des Caraïbes' ?", quiz: quiz27 }).save();
  await Choice.create({ description: "Gore Verbinski", is_correct: true, question: question27_8 }).save();
  await Choice.create({ description: "Steven Spielberg", is_correct: false, question: question27_8 }).save();
  await Choice.create({ description: "Ridley Scott", is_correct: false, question: question27_8 }).save();
  await Choice.create({ description: "Christopher Nolan", is_correct: false, question: question27_8 }).save();

  const question27_9 = await Question.create({ title: "Quel film met en scène des momies égyptiennes ?", quiz: quiz27 }).save();
  await Choice.create({ description: "The Mummy", is_correct: true, question: question27_9 }).save();
  await Choice.create({ description: "Indiana Jones", is_correct: false, question: question27_9 }).save();
  await Choice.create({ description: "National Treasure", is_correct: false, question: question27_9 }).save();
  await Choice.create({ description: "Lara Croft", is_correct: false, question: question27_9 }).save();

  const question27_10 = await Question.create({ title: "Dans 'National Treasure', qui joue le rôle principal ?", quiz: quiz27 }).save();
  await Choice.create({ description: "Nicolas Cage", is_correct: true, question: question27_10 }).save();
  await Choice.create({ description: "Harrison Ford", is_correct: false, question: question27_10 }).save();
  await Choice.create({ description: "Tom Cruise", is_correct: false, question: question27_10 }).save();
  await Choice.create({ description: "Brad Pitt", is_correct: false, question: question27_10 }).save();
}

