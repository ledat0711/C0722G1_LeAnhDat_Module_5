import { Injectable } from '@angular/core';
import {IWord} from '../model/i-word';
@Injectable({
  providedIn: 'root'
})
export class DictionaryService{
words: IWord[] = [
  {word: 'one', mean: 'một'},
  {word: 'two', mean: 'hai'},
  {word: 'three', mean: 'ba'},
  {word: 'four', mean: 'bốn'}
];
  constructor() { }
  findAll(): any{
    return this.words;
  }
  findByWord(word: string): any{
    return this.words.find(item => item.word === word);
  }
}
