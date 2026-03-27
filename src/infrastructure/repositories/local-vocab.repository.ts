import { chineseVocab } from "../../core/entities/vocabulary";
import { IVocabularyRepository } from "../../core/repositories/vocabulary.repository";

export class LocalVocab implements IVocabularyRepository {
    //mock data
    private data: chineseVocab[] = [
        { id: '1', word: '人家', pinyin: 'rén jiā', img: '🏠👤' },
        { id: '2', word: '大人', pinyin: 'dà rén', img: '🧑‍💼' },
    ];

    async getAll(): Promise<chineseVocab[]> {
        return this.data;
    }

    async getById(id: string): Promise<chineseVocab | null> {
        return this.data.find(data => data.id === id) || null
    }

    async getRandom(count: number): Promise<chineseVocab[]> {
        return [...this.data].sort(
            () => Math.random() - 0.5).slice(0, count)
    }
}

