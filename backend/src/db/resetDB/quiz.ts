import { Quiz } from "../../entities/Quiz";
import type { Theme } from "../../entities/Theme";
import type { Level } from "../../entities/Level";

interface CreateQuizzesParams {
  phishingTheme: Theme;
  passwordTheme: Theme;
  wifiTheme: Theme;
  beginnerLevel: Level;
  advancedLevel: Level;
  expertLevel: Level;
}

export async function createQuizzes({
  phishingTheme,
  passwordTheme,
  wifiTheme,
  beginnerLevel,
  advancedLevel,
  expertLevel,
}: CreateQuizzesParams) {
  // ===== QUIZZES PUBLICS (3 SEULEMENT POUR L'ÉCRAN D'ACCUEIL) =====
  const quiz1 = await Quiz.create({
    title: "Phishing : repérer les arnaques par mail",
    description: "Commencer le quiz d'essai niveau débutant",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    time_limit: 300,
    is_public: true,
    is_draft: false,
    theme: phishingTheme,
    level: beginnerLevel
  }).save();

  const quiz2 = await Quiz.create({
    title: "Mots de passe sécurisés",
    description: "Commencer le quiz d'essai niveau avancé",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop",
    time_limit: 450,
    is_public: true,
    is_draft: false,
    theme: passwordTheme,
    level: advancedLevel
  }).save();

  const quiz3 = await Quiz.create({
    title: "Réseaux WiFi publics",
    description: "Commencer le quiz d'essai niveau expert",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop",
    time_limit: 600,
    is_public: true,
    is_draft: false,
    theme: wifiTheme,
    level: expertLevel
  }).save();

  // ===== QUIZZES PRIVÉS (NÉCESSITENT CONNEXION) =====
  const quiz4 = await Quiz.create({
    title: "Phishing Avancé",
    description: "Détectez les attaques de phishing sophistiquées",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    time_limit: 450,
    is_public: false,
    is_draft: false,
    theme: phishingTheme,
    level: advancedLevel
  }).save();

  const quiz5 = await Quiz.create({
    title: "Mots de Passe Avancés",
    description: "Techniques avancées de gestion des mots de passe",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop",
    time_limit: 450,
    is_public: false,
    is_draft: false,
    theme: passwordTheme,
    level: advancedLevel
  }).save();

  const quiz6 = await Quiz.create({
    title: "Sécurité WiFi Avancée",
    description: "Protégez-vous efficacement sur les réseaux publics",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop",
    time_limit: 450,
    is_public: false,
    is_draft: false,
    theme: wifiTheme,
    level: advancedLevel
  }).save();

  const quiz7 = await Quiz.create({
    title: "Expert Phishing",
    description: "Maîtrisez la détection des attaques de phishing les plus sophistiquées",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    time_limit: 600,
    is_public: false,
    is_draft: false,
    theme: phishingTheme,
    level: expertLevel
  }).save();

  const quiz8 = await Quiz.create({
    title: "Expert Mots de Passe",
    description: "Devenez un expert de la sécurité des identifiants",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop",
    time_limit: 600,
    is_public: false,
    is_draft: false,
    theme: passwordTheme,
    level: expertLevel
  }).save();

  const quiz9 = await Quiz.create({
    title: "Expert Réseaux WiFi",
    description: "Maîtrisez tous les aspects de la sécurité WiFi",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop",
    time_limit: 600,
    is_public: false,
    is_draft: false,
    theme: wifiTheme,
    level: expertLevel
  }).save();

  const quiz10 = await Quiz.create({
    title: "Attaques Ciblées",
    description: "Reconnaître les attaques de spear phishing",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    time_limit: 500,
    is_public: false,
    is_draft: false,
    theme: phishingTheme,
    level: expertLevel
  }).save();

  const quiz11 = await Quiz.create({
    title: "Gestionnaires de Mots de Passe",
    description: "Tout savoir sur les gestionnaires de mots de passe",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop",
    time_limit: 400,
    is_public: false,
    is_draft: false,
    theme: passwordTheme,
    level: advancedLevel
  }).save();

  const quiz12 = await Quiz.create({
    title: "VPN et Sécurité",
    description: "Utiliser un VPN sur les réseaux publics",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop",
    time_limit: 400,
    is_public: false,
    is_draft: false,
    theme: wifiTheme,
    level: advancedLevel
  }).save();

  const quiz13 = await Quiz.create({
    title: "Ingénierie Sociale",
    description: "Comprendre les techniques d'ingénierie sociale",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    time_limit: 550,
    is_public: false,
    is_draft: false,
    theme: phishingTheme,
    level: expertLevel
  }).save();

  const quiz14 = await Quiz.create({
    title: "Authentification Multi-Facteurs",
    description: "Sécurisez vos comptes avec la 2FA",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop",
    time_limit: 350,
    is_public: false,
    is_draft: false,
    theme: passwordTheme,
    level: advancedLevel
  }).save();

  const quiz15 = await Quiz.create({
    title: "Protocoles de Sécurité WiFi",
    description: "WPA, WPA2, WPA3 : comprendre les différences",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop",
    time_limit: 450,
    is_public: false,
    is_draft: false,
    theme: wifiTheme,
    level: expertLevel
  }).save();

  const quiz16 = await Quiz.create({
    title: "Emails Suspects",
    description: "Identifier les signaux d'alerte dans vos emails",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    time_limit: 350,
    is_public: false,
    is_draft: false,
    theme: phishingTheme,
    level: beginnerLevel
  }).save();

  const quiz17 = await Quiz.create({
    title: "Mots de Passe Faibles",
    description: "Éviter les erreurs courantes",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop",
    time_limit: 300,
    is_public: false,
    is_draft: false,
    theme: passwordTheme,
    level: beginnerLevel
  }).save();

  const quiz18 = await Quiz.create({
    title: "Hotspots Malveillants",
    description: "Reconnaître les faux points d'accès WiFi",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop",
    time_limit: 400,
    is_public: false,
    is_draft: false,
    theme: wifiTheme,
    level: advancedLevel
  }).save();

  const quiz19 = await Quiz.create({
    title: "Attaques par SMS",
    description: "Se protéger du smishing",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    time_limit: 350,
    is_public: false,
    is_draft: false,
    theme: phishingTheme,
    level: advancedLevel
  }).save();

  const quiz20 = await Quiz.create({
    title: "Biométrie et Sécurité",
    description: "Avantages et limites de l'authentification biométrique",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop",
    time_limit: 400,
    is_public: false,
    is_draft: false,
    theme: passwordTheme,
    level: expertLevel
  }).save();

  const quiz21 = await Quiz.create({
    title: "Man-in-the-Middle",
    description: "Comprendre les attaques MITM sur WiFi",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop",
    time_limit: 500,
    is_public: false,
    is_draft: false,
    theme: wifiTheme,
    level: expertLevel
  }).save();

  const quiz22 = await Quiz.create({
    title: "Clone de Sites Web",
    description: "Détecter les sites frauduleux",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    time_limit: 450,
    is_public: false,
    is_draft: false,
    theme: phishingTheme,
    level: advancedLevel
  }).save();

  const quiz23 = await Quiz.create({
    title: "Fuites de Données",
    description: "Vérifier si vos mots de passe ont été compromis",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop",
    time_limit: 400,
    is_public: false,
    is_draft: false,
    theme: passwordTheme,
    level: advancedLevel
  }).save();

  const quiz24 = await Quiz.create({
    title: "Cybersécurité au Quotidien",
    description: "Les bases de la sécurité informatique pour tous",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    time_limit: 350,
    is_public: false,
    is_draft: false,
    theme: phishingTheme,
    level: beginnerLevel
  }).save();

  const quiz25 = await Quiz.create({
    title: "Sécurité Mobile",
    description: "Protéger vos smartphones et tablettes",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop",
    time_limit: 400,
    is_public: false,
    is_draft: false,
    theme: wifiTheme,
    level: beginnerLevel
  }).save();

  const quiz26 = await Quiz.create({
    title: "Ransomware et Menaces",
    description: "Comprendre et se protéger des ransomwares",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    time_limit: 500,
    is_public: false,
    is_draft: false,
    theme: phishingTheme,
    level: advancedLevel
  }).save();

  const quiz27 = await Quiz.create({
    title: "Navigation Sécurisée",
    description: "Bonnes pratiques pour surfer en toute sécurité",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop",
    time_limit: 380,
    is_public: false,
    is_draft: false,
    theme: wifiTheme,
    level: beginnerLevel
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
