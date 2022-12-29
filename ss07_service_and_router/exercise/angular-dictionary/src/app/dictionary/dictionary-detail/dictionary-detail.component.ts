import {Component, OnInit} from '@angular/core';
import {IWord} from '../model/i-word';
import {ActivatedRoute} from '@angular/router';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  yourWord!: IWord;

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    const keyWord = this.activatedRoute.snapshot.params.word;
    this.yourWord = this.dictionaryService.findByWord(keyWord);
  }
}
