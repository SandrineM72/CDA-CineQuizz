import { Attempt } from "../../entities/Attempt";
import type { User } from "../../entities/User";
import type { Quiz } from "../../entities/Quiz";

interface CreateAttemptsParams {
  user1: User;
  user2: User;
  quiz1: Quiz;
  quiz2: Quiz;
}

export async function createAttempts({ user1, user2, quiz1, quiz2 }: CreateAttemptsParams) {
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
    percentage_success: 67,
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

  return {
    attempt1,
    attempt2,
    attempt3,
  };
}

