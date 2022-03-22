import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tags';
  tagadd:any;
  n:number=0;
  nn:any
  masterText:any
  tagEdit:any
  sometext="Some Tags:";
  newTag="New Tag";
  isShown: boolean = false ;
  event: any;
   tagss: string[] = ["Master tag","Tag n1 ", "Tag n2"];

  selectedTags: string[] = []
  ngOnInit() {

    this.masterText=this.tagss[0]
    this.tagadd=this.newTag
  }
  toggleShowoff() {

    this.isShown = ! this.isShown;

    }
    onKey(event: any) {
      console.log(event.target.value)
      this.sometext = event.target.value ;
    }
 
    
   
  addtags(nn:any){
 console.log(this.nn)
    console.log(this.tagss)
    if(this.tagss.length>4){
  this.n=this.n+1
     this.tagss[4]=this.n+"+";

    }else{
      this.tagss.push(this.tagadd);
    }
    
  }
  onKeyAdd(event: any){
this.tagadd= event.target.value ;
console.log(this.tagadd)

  }

  onKeyEdit(event: any){
this.tagEdit= event.target.value ;
this.tagss[0]=this.tagEdit;
  }

  removetags(){
    this.tagss.splice(-1,1)
  
  }
 
}
