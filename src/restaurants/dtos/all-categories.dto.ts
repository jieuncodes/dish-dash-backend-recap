import { Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Category } from 'src/users/entities/category.entity';

@ObjectType()
export class AllCategoriesOutput extends CoreOutput {
  @Field(() => [Category], { nullable: true })
  categories?: Category[];
}
