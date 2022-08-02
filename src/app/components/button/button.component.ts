import { Component, Input, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() name = ''
  constructor(public calS: CalculatorService) { }

  ngOnInit(): void {
  }

  set(){
   this.calS.valueView +=  this.name
   //a +=1 => a = a + 1
  }

}
