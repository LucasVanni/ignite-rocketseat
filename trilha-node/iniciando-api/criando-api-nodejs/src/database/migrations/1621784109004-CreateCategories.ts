import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCategories1621784109004 implements MigrationInterface {
    // Para subir a migration
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'categories',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        /* 
                            Chave primária -> Idêntificador da tabela 
                            ( Deve conter alguma coluna que represente o reconhecimento dela )
                        */
                        isPrimary: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            })
        );
    }

    // Para desfazer a migration
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('categories');
    }
}
