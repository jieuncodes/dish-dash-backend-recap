import { Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dtos/output.dto';
import { Category } from 'src/users/entities/category.entity';

@ObjectType()
export class CategoryInput {
  @Field(() => String)
  slug: string;
}

@ObjectType()
export class CategoryOutput extends CoreOutput {
  @Field(() => Category, { nullable: true })
  category?: Category;
}
