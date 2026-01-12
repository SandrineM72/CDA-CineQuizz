import { Query, Resolver } from "type-graphql";
import { Decade } from "../entities/Decade";

@Resolver()
export default class DecadeResolver {
	@Query(() => [Decade])
	async decades() {
		return await Decade.find();
	}
}
