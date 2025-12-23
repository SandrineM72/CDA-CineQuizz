import { Field, InputType, Int } from "type-graphql";

@InputType()
export class ObjectId {
  @Field(() => Int)
  id: number;
}

export enum AgeRange {
  TOUS_PUBLICS = "tous publics",
  MOINS_12 = "-12",
  MOINS_16 = "-16"
  }