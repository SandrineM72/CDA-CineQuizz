import { Quiz } from "../../entities/Quiz";
import { AgeRange } from "../../types";
import type { Category } from "../../entities/Category";
import type { Decade } from "../../entities/Decade";

interface CreateQuizzesParams {
  comedieCategory: Category;
  drameCategory: Category;
  actionCategory: Category;
  decade80: Decade;
  decade90: Decade;
  decade2000: Decade;
}

export async function createQuizzes({
  comedieCategory,
  drameCategory,
  actionCategory,
  decade80,
  decade90,
  decade2000,
}: CreateQuizzesParams) {
  const quiz1 = await Quiz.create({
    title: "Les Comédies Françaises Cultes",
    description: "Testez vos connaissances sur les comédies françaises incontournables",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop",
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
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop",
    age_range: AgeRange.MOINS_16,
    time_limit: 600,
    is_public: true,
    is_draft: false,
    category: actionCategory,
    decade: decade80
  }).save();

  const quiz3 = await Quiz.create({
    title: "Les Drames des Années 2000",
    description: "Explorez les films dramatiques qui ont marqué les années 2000",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop",
    age_range: AgeRange.MOINS_12,
    time_limit: 450,
    is_public: false,
    is_draft: true,
    category: drameCategory,
    decade: decade2000
  }).save();

  // ===== QUIZZES PRIVÉS =====
  const quiz4 = await Quiz.create({
    title: "Les Films de Science-Fiction Cultes",
    description: "Voyagez dans le temps et l'espace avec les meilleurs films SF",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=600&fit=crop",
    age_range: AgeRange.TOUS_PUBLICS,
    time_limit: 400,
    is_public: false,
    is_draft: false,
    category: actionCategory,
    decade: decade80
  }).save();

  const quiz5 = await Quiz.create({
    title: "Les Comédies Romantiques des 90's",
    description: "Retrouvez les plus belles histoires d'amour du cinéma",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&h=600&fit=crop",
    age_range: AgeRange.TOUS_PUBLICS,
    time_limit: 350,
    is_public: false,
    is_draft: false,
    category: comedieCategory,
    decade: decade90
  }).save();

  const quiz6 = await Quiz.create({
    title: "Les Thrillers Psychologiques",
    description: "Plongez dans l'univers des films à suspense",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop",
    age_range: AgeRange.MOINS_16,
    time_limit: 500,
    is_public: false,
    is_draft: false,
    category: drameCategory,
    decade: decade2000
  }).save();

  const quiz7 = await Quiz.create({
    title: "Les Films de Super-Héros",
    description: "Testez vos connaissances sur les héros masqués",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
    age_range: AgeRange.TOUS_PUBLICS,
    time_limit: 450,
    is_public: false,
    is_draft: false,
    category: actionCategory,
    decade: decade2000
  }).save();

  const quiz8 = await Quiz.create({
    title: "Les Comédies Musicales",
    description: "Chantez et dansez avec les plus grands classiques",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
    age_range: AgeRange.TOUS_PUBLICS,
    time_limit: 380,
    is_public: false,
    is_draft: false,
    category: comedieCategory,
    decade: decade90
  }).save();

  const quiz9 = await Quiz.create({
    title: "Les Films de Guerre",
    description: "Revivez les grandes batailles du cinéma",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    age_range: AgeRange.MOINS_16,
    time_limit: 550,
    is_public: false,
    is_draft: false,
    category: drameCategory,
    decade: decade80
  }).save();

  const quiz10 = await Quiz.create({
    title: "Les Comédies Américaines des 2000",
    description: "Découvrez les meilleures comédies hollywoodiennes",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop",
    age_range: AgeRange.TOUS_PUBLICS,
    time_limit: 420,
    is_public: false,
    is_draft: false,
    category: comedieCategory,
    decade: decade2000
  }).save();

  const quiz11 = await Quiz.create({
    title: "Les Films d'Horreur Classiques",
    description: "Frissons garantis avec les films d'épouvante",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
    age_range: AgeRange.MOINS_16,
    time_limit: 480,
    is_public: false,
    is_draft: false,
    category: drameCategory,
    decade: decade80
  }).save();

  const quiz12 = await Quiz.create({
    title: "Les Films d'Animation Disney",
    description: "Retour en enfance avec les classiques Disney",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
    age_range: AgeRange.MOINS_12,
    time_limit: 360,
    is_public: false,
    is_draft: false,
    category: comedieCategory,
    decade: decade90
  }).save();

  const quiz13 = await Quiz.create({
    title: "Les Films de Gangsters",
    description: "Plongez dans l'univers du crime organisé",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    age_range: AgeRange.MOINS_16,
    time_limit: 520,
    is_public: false,
    is_draft: false,
    category: actionCategory,
    decade: decade80
  }).save();

  const quiz14 = await Quiz.create({
    title: "Les Comédies Françaises Modernes",
    description: "Les meilleures comédies françaises récentes",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop",
    age_range: AgeRange.TOUS_PUBLICS,
    time_limit: 400,
    is_public: false,
    is_draft: false,
    category: comedieCategory,
    decade: decade2000
  }).save();

  const quiz15 = await Quiz.create({
    title: "Les Films de Fantasy",
    description: "Explorez les mondes magiques du cinéma",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=600&fit=crop",
    age_range: AgeRange.TOUS_PUBLICS,
    time_limit: 440,
    is_public: false,
    is_draft: false,
    category: actionCategory,
    decade: decade2000
  }).save();

  const quiz16 = await Quiz.create({
    title: "Les Drames Historiques",
    description: "Revivez les grands moments de l'histoire",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&h=600&fit=crop",
    age_range: AgeRange.MOINS_16,
    time_limit: 580,
    is_public: false,
    is_draft: false,
    category: drameCategory,
    decade: decade90
  }).save();

  const quiz17 = await Quiz.create({
    title: "Les Films de Sport",
    description: "L'esprit sportif au cinéma",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
    age_range: AgeRange.TOUS_PUBLICS,
    time_limit: 390,
    is_public: false,
    is_draft: false,
    category: drameCategory,
    decade: decade2000
  }).save();

  const quiz18 = await Quiz.create({
    title: "Les Comédies Britanniques",
    description: "L'humour britannique au cinéma",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
    age_range: AgeRange.TOUS_PUBLICS,
    time_limit: 410,
    is_public: false,
    is_draft: false,
    category: comedieCategory,
    decade: decade90
  }).save();

  const quiz19 = await Quiz.create({
    title: "Les Films de Road Movie",
    description: "Partez sur la route avec les meilleurs road movies",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    age_range: AgeRange.TOUS_PUBLICS,
    time_limit: 430,
    is_public: false,
    is_draft: false,
    category: drameCategory,
    decade: decade80
  }).save();

  const quiz20 = await Quiz.create({
    title: "Les Films de Zombies",
    description: "Survivez à l'apocalypse zombie",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
    age_range: AgeRange.MOINS_16,
    time_limit: 470,
    is_public: false,
    is_draft: false,
    category: actionCategory,
    decade: decade2000
  }).save();

  const quiz21 = await Quiz.create({
    title: "Les Comédies Italiennes",
    description: "Découvrez l'humour italien",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop",
    age_range: AgeRange.TOUS_PUBLICS,
    time_limit: 370,
    is_public: false,
    is_draft: false,
    category: comedieCategory,
    decade: decade80
  }).save();

  const quiz22 = await Quiz.create({
    title: "Les Films de Super-Vilains",
    description: "Les meilleurs méchants du cinéma",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=600&fit=crop",
    age_range: AgeRange.TOUS_PUBLICS,
    time_limit: 460,
    is_public: false,
    is_draft: false,
    category: actionCategory,
    decade: decade2000
  }).save();

  const quiz23 = await Quiz.create({
    title: "Les Drames Familiaux",
    description: "Les histoires de famille au cinéma",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&h=600&fit=crop",
    age_range: AgeRange.TOUS_PUBLICS,
    time_limit: 440,
    is_public: false,
    is_draft: false,
    category: drameCategory,
    decade: decade90
  }).save();

  // ===== QUIZZES PUBLICS SUPPLÉMENTAIRES =====
  const quiz24 = await Quiz.create({
    title: "Les Blockbusters des Années 2000",
    description: "Les plus gros succès du box-office des années 2000",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
    age_range: AgeRange.TOUS_PUBLICS,
    time_limit: 480,
    is_public: true,
    is_draft: false,
    category: actionCategory,
    decade: decade2000
  }).save();

  const quiz25 = await Quiz.create({
    title: "Les Comédies des Années 80",
    description: "L'âge d'or de la comédie au cinéma",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
    age_range: AgeRange.TOUS_PUBLICS,
    time_limit: 420,
    is_public: true,
    is_draft: false,
    category: comedieCategory,
    decade: decade80
  }).save();

  const quiz26 = await Quiz.create({
    title: "Les Drames des Années 90",
    description: "Les films dramatiques qui ont marqué les années 90",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    age_range: AgeRange.MOINS_16,
    time_limit: 500,
    is_public: true,
    is_draft: false,
    category: drameCategory,
    decade: decade90
  }).save();

  const quiz27 = await Quiz.create({
    title: "Les Films d'Aventure des Années 2000",
    description: "Partez à l'aventure avec les plus grands films d'action-aventure",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=600&fit=crop",
    age_range: AgeRange.TOUS_PUBLICS,
    time_limit: 460,
    is_public: true,
    is_draft: false,
    category: actionCategory,
    decade: decade2000
  }).save();

  return {
    quiz1,
    quiz2,
    quiz3,
    quiz4,
    quiz5,
    quiz6,
    quiz7,
    quiz8,
    quiz9,
    quiz10,
    quiz11,
    quiz12,
    quiz13,
    quiz14,
    quiz15,
    quiz16,
    quiz17,
    quiz18,
    quiz19,
    quiz20,
    quiz21,
    quiz22,
    quiz23,
    quiz24,
    quiz25,
    quiz26,
    quiz27,
  };
}

