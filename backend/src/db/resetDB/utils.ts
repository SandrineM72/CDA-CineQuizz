import db from "../index";

/* export async function clearDB() {
  // Comme vu en cours, pour PostgreSQL, on doit initialiser la connexion pour pouvoir supprimer les tables
  if (!db.isInitialized) {
    await db.initialize();
  }
  
  // Utiliser QueryRunner pour supprimer les tables individuellement
  const runner = db.createQueryRunner();
  try {
    // Supprimer toutes les tables en parallèle avec CASCADE pour gérer les dépendances
    const tableDroppings = db.entityMetadatas.map(async (entity) =>
      runner.query(`DROP TABLE IF EXISTS "${entity.tableName}" CASCADE`)
    );
    await Promise.all(tableDroppings);
  } finally {
    // Important : libérer le QueryRunner pour éviter les fuites de ressources
    await runner.release();
  }
  
  // Note: Les tables seront recréées lors de la prochaine initialisation avec synchronize: true
}
  */

export async function clearDB() {
  // Initialiser la connexion si elle n'est pas déjà initialisée
  if (!db.isInitialized) {
    await db.initialize();
  }
  
  const runner = db.createQueryRunner();
  const tableDroppings = db.entityMetadatas.map(async(entity) =>
  runner.query(`DROP TABLE IF EXISTS "${entity.tableName}" CASCADE`)
  )
  await Promise.all(tableDroppings);
  await db.synchronize();
}