import db from "../index";


export async function clearDB() {
  // Initialized DB connection if not yet done
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