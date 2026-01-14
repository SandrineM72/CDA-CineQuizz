import db from "../index";
import { clearDB } from "./utils";
import { createCategories } from "./category";
import { createDecades } from "./decade";
import { createRewards } from "./reward";
import { createUsers } from "./user";
import { createQuizzes } from "./quiz";
import { createQuestions } from "./question";
import { createAttempts } from "./attempt";
import { createRelations } from "./relations";

async function main() {
  await clearDB();

  // Créer les catégories et décennies (sans dépendances)
  const categories = await createCategories();
  const decades = await createDecades();

  // Créer les récompenses (sans dépendances)
  const rewards = await createRewards();

  // Créer les utilisateurs (sans dépendances)
  const users = await createUsers();

  // Créer les quiz (dépend de categories et decades)
  const quizzes = await createQuizzes({
    comedieCategory: categories.comedieCategory,
    drameCategory: categories.drameCategory,
    actionCategory: categories.actionCategory,
    decade80: decades.decade80,
    decade90: decades.decade90,
    decade2000: decades.decade2000,
  });

  // Créer les questions et choix (dépend de quizzes)
  await createQuestions({
    quiz1: quizzes.quiz1,
    quiz2: quizzes.quiz2,
    quiz3: quizzes.quiz3,
    quiz4: quizzes.quiz4,
    quiz5: quizzes.quiz5,
    quiz6: quizzes.quiz6,
    quiz7: quizzes.quiz7,
    quiz8: quizzes.quiz8,
    quiz9: quizzes.quiz9,
    quiz10: quizzes.quiz10,
    quiz11: quizzes.quiz11,
    quiz12: quizzes.quiz12,
    quiz13: quizzes.quiz13,
    quiz14: quizzes.quiz14,
    quiz15: quizzes.quiz15,
    quiz16: quizzes.quiz16,
    quiz17: quizzes.quiz17,
    quiz18: quizzes.quiz18,
    quiz19: quizzes.quiz19,
    quiz20: quizzes.quiz20,
    quiz21: quizzes.quiz21,
    quiz22: quizzes.quiz22,
    quiz23: quizzes.quiz23,
    quiz24: quizzes.quiz24,
    quiz25: quizzes.quiz25,
    quiz26: quizzes.quiz26,
    quiz27: quizzes.quiz27,
  });

  // Créer les tentatives (dépend de users et quizzes)
  await createAttempts({
    user1: users.user1,
    user2: users.user2,
    quiz1: quizzes.quiz1,
    quiz2: quizzes.quiz2,
  });

  // Créer les relations many-to-many (dépend de users, quizzes et rewards)
  await createRelations({
    user1: users.user1,
    user2: users.user2,
    quiz1: quizzes.quiz1,
    quiz2: quizzes.quiz2,
    bronzeReward: rewards.bronzeReward,
    silverReward: rewards.silverReward,
  });

  await db.destroy();
  console.log("✅ Base de données réinitialisée avec succès !");
}

main();

