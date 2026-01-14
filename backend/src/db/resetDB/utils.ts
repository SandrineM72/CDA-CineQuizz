import db from "../index";

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
  await runner.release();
}