import { Query, Resolver } from "type-graphql";
import { Theme } from "../entities/Theme";

@Resolver()
export default class ThemeResolver {
	@Query(() => [Theme])
	async themes() {
		return await Theme.find();
	}
}
