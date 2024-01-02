import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';

@Resolver(() => Restaurant)
export class RestaurantsResolver {
  @Query(() => [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    console.log('veganOnly', veganOnly);
    return [];
  }
  @Mutation(() => Boolean)
  createRestaurant(
    @Args('name') name: string,
    @Args('isVegan') isVegan: boolean,
    @Args('address') address: string,
    @Args('ownerName') ownerName: string,
  ): boolean {
    return true;
  }
}
