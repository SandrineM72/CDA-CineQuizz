import { Query, Resolver } from "type-graphql";
import { Level } from "../entities/Level";

@Resolver()
export default class LevelResolver {
	@Query(() => [Level])
	async levels() {
		return await Level.find();
	}
}
