import { chineseVocab } from "../entities/vocabulary";

export interface IVocabularyRepository {
    getAll(): Promise<chineseVocab[]>;

    getById(id: string): Promise<chineseVocab | null>;

    getRandom(count: number): Promise<chineseVocab[]>;
}