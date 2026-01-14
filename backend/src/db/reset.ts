import { unlink } from "node:fs/promises";
import { resolve } from "node:path";

import { User } from "../entities/User";
import { Attempt } from "../entities/Attempt";
import { Quiz } from "../entities/Quiz";
import { Category } from "../entities/Category";
import { Decade } from "../entities/Decade";
import { Question } from "../entities/Question";
import { Reward} from "../entities/Reward";
import { Choice } from "../entities/Choice";


import db from "./index";
import { AgeRange } from "../types";
import { hash } from "argon2";

export async function clearDB() {
  const runner = db.createQueryRunner();
  const tableDroppings = db.entityMetadatas.map(async(entity) =>
  runner.query(`DROP TABLE IF EXISTS "${entity.tableName}" CASCADE`)
  )
  await Promise.all(tableDroppings);
  await db.synchronize();
}

async function main() {
  await db.initialize();
  await clearDB().catch(console.error);


// ===== CATEGORIES =====
  const comedieCategory = await Category.create({ 
    name: "Comédie" 
  }).save();
  
  const drameCategory = await Category.create({ 
    name: "Drame" 
  }).save();
  
  const actionCategory = await Category.create({ 
    name: "Action" 
  }).save();


// ===== DECADES =====
  const decade80 = await Decade.create({ 
    name: "Années 80" 
  }).save();
  
  const decade90 = await Decade.create({ 
    name: "Années 90" 
  }).save();
  
  const decade2000 = await Decade.create({ 
    name: "Années 2000" 
  }).save();


  // ===== REWARDS =====
  const bronzeReward = await Reward.create({
    name: "Trophée Bronze",
    image: "/clap_bronze.png"
  }).save();

  const silverReward = await Reward.create({
    name: "Trophée Argent",
    image: "/clap_argent.png"
  }).save();

  const goldReward = await Reward.create({
    name: "Trophée Or",
    image: "/clap_or.png"
  }).save();

  
 // ===== USERS =====
  const user1 = await User.create({
    email: "marie@example.com",
    pseudo: "MarieCinephile",
    age_range: AgeRange.TOUS_PUBLICS,
    hashedPassword: await hash ("Password123!"),
    avatar: "/avatar_1-sansBG",
    is_admin: false
  }).save();

  const user2 = await User.create({
    email: "jean@example.com",
    pseudo: "JeanDuCinema",
    age_range: AgeRange.TOUS_PUBLICS,
    hashedPassword: await hash ("Password123!"),
    avatar: "/avatar_2-sansBG.png",
    is_admin: false
  }).save();

  const admin = await User.create({
    email: "admin@cinequizz.com",
    pseudo: "AdminCineQuizz",
    age_range: AgeRange.TOUS_PUBLICS,
    hashedPassword: await hash("Password123!"),
    avatar: "/avatar_3-sansBG.png",
    is_admin: true
  }).save();


   // ===== QUIZ =====
  const quiz1 = await Quiz.create({
    title: "Les Comédies Cultes des années 90",
    description: "Testez vos connaissances sur les comédies incontournables",
    image: "/films/le_diner_de_cons.png",
    age_range: AgeRange.TOUS_PUBLICS,
    time_limit: 300,
    is_public: true,
    is_draft: false,
    category: comedieCategory,
    decade: decade90
  }).save();

  const quiz2 = await Quiz.create({
    title: "Le Cinéma d'Action des Années 80",
    description: "Plongez dans l'univers explosif du cinéma d'action",
    image: "/films/rambo.png",
    age_range: AgeRange.MOINS_16,
    time_limit: 600,
    is_public: true,
    is_draft: false,
    category: actionCategory,
    decade: decade80
  }).save();

  const quiz3 = await Quiz.create({
    title: "Les Drames des Années 2000",
    description: "Explorez les films dramatiques qui ont marqué vos années 2000",
    image: "/films/le_pianiste.png",
    age_range: AgeRange.MOINS_12,
    time_limit: 450,
    is_public: true,
    is_draft: false,
    category: drameCategory,
    decade: decade2000
  }).save();


// ===== QUESTIONS & CHOICES pour Quiz 1 =====
  const question1_1 = await Question.create({
    title: "Dans quel film Gérard Depardieu joue-t-il un homme préhistorique ?",
    quiz: quiz1
  }).save();

  await Choice.create({
    description: "Les Visiteurs",
    is_correct: false,
    question: question1_1
  }).save();

  await Choice.create({
    description: "RRRrrrr!!!",
    is_correct: true,
    question: question1_1
  }).save();

  await Choice.create({
    description: "Astérix et Obélix",
    is_correct: false,
    question: question1_1
  }).save();

  await Choice.create({
    description: "Le Dîner de Cons",
    is_correct: false,
    question: question1_1
  }).save();

  const question1_2 = await Question.create({
    title: "Qui réalise 'La Cité de la Peur' ?",
    quiz: quiz1
  }).save();

  await Choice.create({
    description: "Les Nuls",
    is_correct: true,
    question: question1_2
  }).save();

  await Choice.create({
    description: "Les Inconnus",
    is_correct: false,
    question: question1_2
  }).save();

  await Choice.create({
    description: "Le Splendid",
    is_correct: false,
    question: question1_2
  }).save();

  await Choice.create({
    description: "Coluche",
    is_correct: false,
    question: question1_2
  }).save();

  const question1_3 = await Question.create({
    title: "Dans 'Le Père Noël est une Ordure', quel est le nom du personnage joué par Thierry Lhermitte ?",
    quiz: quiz1
  }).save();

  await Choice.create({
    description: "Pierre Mortez",
    is_correct: true,
    question: question1_3
  }).save();

  await Choice.create({
    description: "Félix",
    is_correct: false,
    question: question1_3
  }).save();

  await Choice.create({
    description: "Thérèse",
    is_correct: false,
    question: question1_3
  }).save();

  await Choice.create({
    description: "Zézette",
    is_correct: false,
    question: question1_3
  }).save();


// ===== QUESTIONS & CHOICES pour Quiz 2 =====
  const question2_1 = await Question.create({
    title: "Quel acteur incarne le cyborg T-800 dans 'Terminator' ?",
    quiz: quiz2
  }).save();

  await Choice.create({
    description: "Sylvester Stallone",
    is_correct: false,
    question: question2_1
  }).save();

  await Choice.create({
    description: "Arnold Schwarzenegger",
    is_correct: true,
    question: question2_1
  }).save();

  await Choice.create({
    description: "Jean-Claude Van Damme",
    is_correct: false,
    question: question2_1
  }).save();

  await Choice.create({
    description: "Bruce Willis",
    is_correct: false,
    question: question2_1
  }).save();

  const question2_2 = await Question.create({
    title: "Dans quel film entend-on 'Yippee-ki-yay' ?",
    quiz: quiz2
  }).save();

  await Choice.create({
    description: "Die Hard",
    is_correct: true,
    question: question2_2
  }).save();

  await Choice.create({
    description: "Predator",
    is_correct: false,
    question: question2_2
  }).save();

  await Choice.create({
    description: "RoboCop",
    is_correct: false,
    question: question2_2
  }).save();

  await Choice.create({
    description: "Total Recall",
    is_correct: false,
    question: question2_2
  }).save();

  const question2_3 = await Question.create({
    title: "Qui réalise 'Alien' en 1979 ?",
    quiz: quiz2
  }).save();

  await Choice.create({
    description: "James Cameron",
    is_correct: false,
    question: question2_3
  }).save();

  await Choice.create({
    description: "Ridley Scott",
    is_correct: true,
    question: question2_3
  }).save();

  await Choice.create({
    description: "John Carpenter",
    is_correct: false,
    question: question2_3
  }).save();

  await Choice.create({
    description: "George Lucas",
    is_correct: false,
    question: question2_3
  }).save();


// ===== QUESTIONS & CHOICES pour Quiz 3 =====
  const question3_1 = await Question.create({
    title: "Quel film français remporte la Palme d'Or en 2008 ?",
    quiz: quiz3
  }).save();

  await Choice.create({
    description: "Entre les murs",
    is_correct: true,
    question: question3_1
  }).save();

  await Choice.create({
    description: "La Vie d'Adèle",
    is_correct: false,
    question: question3_1
  }).save();

  await Choice.create({
    description: "Amour",
    is_correct: false,
    question: question3_1
  }).save();

  await Choice.create({
    description: "Le Pianiste",
    is_correct: false,
    question: question3_1
  }).save();

  const question3_2 = await Question.create({
    title: "Dans quel film Marion Cotillard incarne-t-elle Édith Piaf ?",
    quiz: quiz3
  }).save();

  await Choice.create({
    description: "La Môme",
    is_correct: true,
    question: question3_2
  }).save();

  await Choice.create({
    description: "Coco avant Chanel",
    is_correct: false,
    question: question3_2
  }).save();

  await Choice.create({
    description: "Les Choristes",
    is_correct: false,
    question: question3_2
  }).save();

  await Choice.create({
    description: "Intouchables",
    is_correct: false,
    question: question3_2
  }).save();

  const question3_3 = await Question.create({
    title: "Quel réalisateur a créé 'Le Fabuleux Destin d'Amélie Poulain' ?",
    quiz: quiz3
  }).save();

  await Choice.create({
    description: "Luc Besson",
    is_correct: false,
    question: question3_3
  }).save();

  await Choice.create({
    description: "Jean-Pierre Jeunet",
    is_correct: true,
    question: question3_3
  }).save();

  await Choice.create({
    description: "François Ozon",
    is_correct: false,
    question: question3_3
  }).save();

  await Choice.create({
    description: "Olivier Assayas",
    is_correct: false,
    question: question3_3
  }).save();


// ===== ATTEMPTS =====
  const attempt1 = await Attempt.create({
    user: user1,
    quiz: quiz1,
    started_at: new Date("2024-01-15T10:30:00"),
    finished_at: new Date("2024-01-15T10:35:00"),
    score: 3,
    percentage_success: 100,
    duration: 300,
    passed: true
  }).save();

  const attempt2 = await Attempt.create({
    user: user2,
    quiz: quiz2,
    started_at: new Date("2024-01-16T14:00:00"),
    finished_at: new Date("2024-01-16T14:08:00"),
    score: 2,
    percentage_success: 66,
    duration: 480,
    passed: true
  }).save();

  const attempt3 = await Attempt.create({
    user: user1,
    quiz: quiz2,
    started_at: new Date("2024-01-17T16:00:00"),
    score: 1,
    percentage_success: 33,
    duration: 180,
    passed: false
  }).save();


// ===== RELATIONS MANY-TO-MANY =====
  
  // Likes (table like_)
  // user1 aime quiz1 et quiz2
  user1.liked_quizzes = [quiz1, quiz2];
  await user1.save();

  // user2 aime quiz1
  user2.liked_quizzes = [quiz1];
  await user2.save();

  // Trophies (table trophy)
  // user1 a débloqué le trophée bronze et argent
  user1.won_rewards = [bronzeReward, silverReward];
  await user1.save();

  // user2 a débloqué le trophée bronze
  user2.won_rewards = [bronzeReward];
  await user2.save();

  await db.destroy();
  console.log("✅ Base de données réinitialisée avec succès !");
}

main();