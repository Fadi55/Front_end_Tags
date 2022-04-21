import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tags';
  tagAdds: any;
  n: number = 0;
  masterText: any
  tagEdit: any
  sometext = "Some Tags:";
  newTag = "New Tag";
  isShown: boolean = false;
  event: any;
  TagsArray: string[] = ["Master tag", "Tag n1 ", "Tag n2"];
  selectedTags: string[] = []

  ngOnInit() {
    this.masterText = this.TagsArray[0]
    this.tagAdds = this.newTag
  }

 
//event on key Retrieve data'sometext input'
  onKey(event: any) {
    this.sometext = event.target.value;
  }


  //function add Tags 
  addtags() {
    if (this.TagsArray.length > 4){
      this.n = this.n + 1
      this.TagsArray[4] = this.n + "+";
    }else {
      this.TagsArray.push(this.tagAdds);
    }
  }

//event on key Retrieve data 'New Tag input'
  onKeyAdd(event: any) {
    this.tagAdds = event.target.value;
  }

  //event on key edit data'masterText input'
  onKeyEdit(event: any) {
    this.tagEdit = event.target.value;
    this.TagsArray[0] = this.tagEdit;
  }

  //function remove Tag From Array
  removetags() {
    // number of n + tags 
    if(this.n!==1){
    this.n=this.n-1
    this.TagsArray[4] = this.n + "+";
    }else{
      this.TagsArray.splice(-1, 1)
    }
  }

}
