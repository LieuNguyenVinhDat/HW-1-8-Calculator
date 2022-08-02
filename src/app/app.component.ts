import { Component } from '@angular/core';
import { CalculatorService } from './services/calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular02';
  constructor(public calS:CalculatorService){

  }
  set(str: string){
    //if() la dau ko cong chuoi // else + chuoi
      this.calS.valueView +=  str
      //a +=1 => a = a + 1
  }
  clear() {
    this.calS.valueView = '';
  }

  getKetQua() {
    try {
      let result = this.calS.valueView;
      let str = "12/5*9+9.4*2"
      let res2 = (new Function('return ' + result)())
      if (result != undefined) {
        this.calS.valueView = eval(this.calS.valueView)
        this.calS.valueView = res2;
        console.log(res2)
        if(res2==undefined){
          this.calS.valueView = result;
        }
      }
    } catch (error) {
      this.calS.valueView = ('error');
    }


    // try {
    //   let result = eval(this.srv.inputView);
    //   console.log(result);
    //   if (result != undefined) {
    //     this.srv.inputView = result;
    //   }
    // } catch (error) {
    //   this.srv.inputView = ('error');
    // }

  }
}
