import { User } from "../../entities/User";
import { AgeRange } from "../../types";
import { hash } from "argon2";

export async function createUsers() {
  const user1 = await User.create({
    email: "marie@example.com",
    pseudo: "MarieCinephile",
    age_range: AgeRange.TOUS_PUBLICS,
    hashedPassword: await hash("Password123!"),
    avatar: "https://i.pravatar.cc/150?img=47",
    is_admin: false
  }).save();

  const user2 = await User.create({
    email: "jean@example.com",
    pseudo: "JeanDuCinema",
    age_range: AgeRange.TOUS_PUBLICS,
    hashedPassword: await hash("Password123!"),
    avatar: "https://i.pravatar.cc/150?img=12",
    is_admin: false
  }).save();

  const admin = await User.create({
    email: "admin@cinequizz.com",
    pseudo: "AdminCineQuizz",
    age_range: AgeRange.TOUS_PUBLICS,
    hashedPassword: await hash("Password123!"),
    avatar: "https://i.pravatar.cc/150?img=33",
    is_admin: true
  }).save();

  return {
    user1,
    user2,
    admin,
  };
}

