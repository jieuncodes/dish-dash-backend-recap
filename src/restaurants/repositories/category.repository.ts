import { CustomRepository } from 'src/database/typeorm-ex.decorator';
import { Category } from 'src/users/entities/category.entity';
import { Repository } from 'typeorm';

@CustomRepository(Category)
export class CategoryRepository extends Repository<Category> {
  async getOrCreate(name: string): Promise<Category> {
    const categoryName = name.trim().toLowerCase();

    const categorySlug = categoryName.replace(/ /g, '-');
    let category = await this.findOne({
      where: { slug: categorySlug },
    });

    if (!category) {
      category = await this.save(
        this.create({ slug: categorySlug, name: categoryName }),
      );
    }
    return category;
  }
}
