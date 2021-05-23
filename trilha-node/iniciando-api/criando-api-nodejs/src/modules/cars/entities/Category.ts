import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

/*
    Decorator para informar ao typeorm 
    a relação desse model que agora é uma entity,
    com a tabela categories que foi criada pela 
    migration
*/
@Entity('categories')
class Category {
    // Coluna primária, que será o id da migration.
    @PrimaryColumn()
    id?: string;

    // Referencia a coluna name com o name da migration.
    @Column()
    name: string;

    // Referencia a coluna description com o description da migration.
    @Column()
    description: string;

    // Referencia a coluna created_at com o created_at da migration.
    // Além de referenciar é um decorator específico para created_at.
    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Category };
