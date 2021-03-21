import fs from 'fs';
import csvParse from 'csv-parse';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise<IImportCategory[]>((resolve, reject) => {
            const categories: IImportCategory[] = [];

            /* Cria uma stream de 
            leitura para o path do arquivo
        */
            const stream = fs.createReadStream(file.path);

            // Convertendo o CSV
            const parseFile = csvParse({ delimiter: ',' });

            /*
                Divide o que está sendo lido pelo 
                stream em pedaços, e envia
                para onde determinarmos.
            */
            stream.pipe(parseFile);

            parseFile
                .on('data', async (line) => {
                    const [name, description] = line;

                    categories.push({ name, description });
                })
                .on('end', () => {
                    resolve(categories);
                })
                .on('error', (err) => {
                    reject(err);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);

        categories.map(async (category) => {
            const { name, description } = category;

            const existCategory = this.categoriesRepository.findByName(name);

            if (!existCategory) {
                this.categoriesRepository.create({ name, description });
            }
        });

        // this.categoriesRepository.
    }
}

export { ImportCategoryUseCase };
