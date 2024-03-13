import { Component, OnInit } from '@angular/core';
import { HackernewsApiService } from '../hackernews-api.service';
import { Item } from '../interfaces/item';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  typeSub!:Subscription;
  pageSub!:Subscription;
  items!: Item[];
  storiesType!:string;
  pageNum!:number;
  listStart!:number;
  constructor(
    private hn: HackernewsApiService,
    private route:ActivatedRoute,
    ) {
  }
  ngOnInit() {
    this.typeSub=this.route
      .data
      .subscribe(data=>this.storiesType=(data as {storiesType:string}).storiesType);
    this.pageSub= this.route.params.subscribe(params=>{
      this.pageNum=+params['page']?+params['page']:1;
      this.hn.fetchStories(this.storiesType,this.pageNum).subscribe({
        next:items=>this.items=items,
        error:()=>console.log('Error fetching' + this.storiesType + 'stories'),
        complete:()=>{
          this.listStart = ((this.pageNum - 1) * 30) + 1;
          window.scrollTo(0, 0);        
        }
      })
    })
    
  }
}
