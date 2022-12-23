import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstNum: number = 2;
  secondNum: number = 3;
  result: (number | string) = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  sum() {
    this.result = this.firstNum + this.secondNum;
  }

  minus() {
    this.result = this.firstNum - this.secondNum;
  }

  multi() {
    this.result = this.firstNum * this.secondNum;
  }

  div() {
    if (this.secondNum == 0) {
      this.result = 'Không thể chia cho 0';
    } else{
      this.result = this.firstNum / this.secondNum;
    }
  }
}
