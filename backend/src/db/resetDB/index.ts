import db from "../index";
import { clearDB } from "./utils";
import { createThemes } from "./theme";
import { createLevels } from "./level";
import { createRewards } from "./reward";
import { createUsers } from "./user";
import { createQuizzes } from "./quiz";
import { createQuestions } from "./question";
import { createAttempts } from "./attempt";
import { createRelations } from "./relations";

async function main() {
  await clearDB();

  // Créer les thèmes et niveaux (sans dépendances)
  const themes = await createThemes();
  const levels = await createLevels();

  // Créer les récompenses (sans dépendances)
  const rewards = await createRewards();

  // Créer les utilisateurs (sans dépendances)
  const users = await createUsers();

  // Créer les quiz (dépend de themes et levels)
  const quizzes = await createQuizzes({
    phishingTheme: themes.phishingTheme,
    passwordTheme: themes.passwordTheme,
    wifiTheme: themes.wifiTheme,
    beginnerLevel: levels.beginnerLevel,
    advancedLevel: levels.advancedLevel,
    expertLevel: levels.expertLevel,
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
