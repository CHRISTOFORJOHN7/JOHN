import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
namevalue: string="Wellcome"
ngOnInit(): void {
  this.getfunction();
}

changename(){
  //this.namevalue="JOHN"
  this.namevalue=this.namevalue=="Wellcome"?"JOHN":"Wellcome";
}

getfunction(){
console.log("hiiiiii john");
}
}
