import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() childTitle;
  @Input() childContent;
  @Input() childLoveIt: number = 0;
  created_at = new Date();

  constructor() { }

  ngOnInit() {
  }

  onLoveIt(){
    this.childLoveIt += 1;
    console.log(this.childLoveIt);
  }
  onDontLoveIt(){
    this.childLoveIt -=1 ;
    console.log(this.childLoveIt);
  }

}
