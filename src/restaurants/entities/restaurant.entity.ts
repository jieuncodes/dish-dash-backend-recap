import { Field, ObjectType } from '@nestjs/graphql';
import { RestaurantsResolver } from '../restaurants.resolver';

@ObjectType()
export class Restaurant {
  @Field(() => String)
  name: string;

  @Field(() => Boolean)
  isVegan: boolean;

  @Field(() => String)
  address: string;

  @Field(() => String)
  ownerName: string;
}
providers: [RestaurantsResolver];
