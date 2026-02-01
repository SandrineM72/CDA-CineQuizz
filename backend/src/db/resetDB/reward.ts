import { Reward } from "../../entities/Reward";

export async function createRewards() {
  const bronzeReward = await Reward.create({
    name: "Trophée Bronze",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop"
  }).save();

  const silverReward = await Reward.create({
    name: "Trophée Argent",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop"
  }).save();

  const goldReward = await Reward.create({
    name: "Trophée Or",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop"
  }).save();

  return {
    bronzeReward,
    silverReward,
    goldReward,
  };
}

