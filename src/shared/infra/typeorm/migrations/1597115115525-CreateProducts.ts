import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateProducts1597115115525 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        columns: [
          {
            default: 'uuid_generate_v4()',
            generationStrategy: 'uuid',
            isPrimary: true,
            name: 'id',
            type: 'uuid',
          },
          {
            isUnique: true,
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'decimal',
            precision: 8,
            scale: 2,
          },
          {
            name: 'quantity',
            type: 'integer',
          },
          {
            default: 'now()',
            name: 'created_at',
            type: 'timestamp',
          },
          {
            default: 'now()',
            name: 'updated_at',
            type: 'timestamp',
          },
        ],
        name: 'products',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
