import { DataSource } from "typeorm";
import { User } from "../../backend/src/entities/User";
import { Theme } from "../../backend/src/entities/Theme";
import { Level } from "../../backend/src/entities/Level";
import { Quiz } from "../../backend/src/entities/Quiz";
import { Question } from "../../backend/src/entities/Question";
import { Choice } from "../../backend/src/entities/Choice";
import { Attempt } from "../../backend/src/entities/Attempt";
import { Reward } from "../../backend/src/entities/Reward";

// Configuration spécifique pour les tests e2e
const testDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5434,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    // Importer directement les classes d'entités
    entities: [User, Theme, Level, Quiz, Question, Choice, Attempt, Reward],
    synchronize: true,
});

export async function connectDB() {
    if (!testDataSource.isInitialized) {
        await testDataSource.initialize();
    }
}

export async function disconnectDB() {
    if (testDataSource.isInitialized) {
        await testDataSource.destroy();
    }
}

export async function clearDB() {
    if (!testDataSource.isInitialized) {
        await testDataSource.initialize();
    }
    
    const runner = testDataSource.createQueryRunner();
    const tableDroppings = testDataSource.entityMetadatas.map(async(entity) =>
        runner.query(`DROP TABLE IF EXISTS "${entity.tableName}" CASCADE`)
    );
    await Promise.all(tableDroppings);
    await testDataSource.synchronize();
    await runner.release();
}

// Export pour utilisation dans les tests
export { testDataSource };