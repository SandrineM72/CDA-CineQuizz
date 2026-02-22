import type { User } from "../../entities/User";
import type { Quiz } from "../../entities/Quiz";
import type { Reward } from "../../entities/Reward";

interface CreateRelationsParams {
  user1: User;
  user2: User;
  quiz1: Quiz;
  quiz2: Quiz;
  bronzeReward: Reward;
  silverReward: Reward;
}

export async function createRelations({
  user1,
  user2,
  quiz1,
  quiz2,
  bronzeReward,
  silverReward,
}: CreateRelationsParams) {

  // Trophies (table trophy)
  // user1 a débloqué le trophée bronze et argent
  user1.won_rewards = [bronzeReward, silverReward];
  await user1.save();

  // user2 a débloqué le trophée bronze
  user2.won_rewards = [bronzeReward];
  await user2.save();
}

