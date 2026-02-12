import { User } from "../../entities/User";
import { hash } from "argon2";

export async function createUsers() {
  // Create dedicated guest user for unauthenticated visitors (no admin rights)
  const guestUser = await User.create({
    email: "guest@cyberquiz.com",
    pseudo: "GuestUser",
    hashedPassword: await hash("GuestPassword123!"),
    avatar: "https://i.pravatar.cc/150?img=12",
    is_admin: false
  }).save();

  const user1 = await User.create({
    email: "marie@example.com",
    pseudo: "MarieMefiante",
    hashedPassword: await hash("Password123!"),
    avatar: "https://i.pravatar.cc/150?img=19",
    is_admin: false
  }).save();

  const user2 = await User.create({
    email: "jean@example.com",
    pseudo: "JeanCurieux",
    hashedPassword: await hash("Password123!"),
    avatar: "https://i.pravatar.cc/150?img=56",
    is_admin: false
  }).save();

    const user3 = await User.create({
    email: "theo@example.com",
    pseudo: "theoTrouvetout",
    hashedPassword: await hash("Password123!"),
    avatar: "https://i.pravatar.cc/150?img=04",
    is_admin: false
  }).save();


  const admin = await User.create({
    email: "admin@cyberquiz.com",
    pseudo: "AdminCyberQuiz",
    hashedPassword: await hash("Password123!"),
    avatar: "https://i.pravatar.cc/150?img=38",
    is_admin: true
  }).save();

  return {
    guestUser,
    user1,
    user2,
    user3,
    admin,
  };
}

