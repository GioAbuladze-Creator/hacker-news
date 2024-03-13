import { Component, OnInit } from '@angular/core';
import { HackernewsApiService } from '../hackernews-api.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-item-comments',
  templateUrl: './item-comments.component.html',
  styleUrls: ['./item-comments.component.scss']
})
export class ItemCommentsComponent implements OnInit{
  sub:any;
  item!:Item;

  constructor(
    private hn:HackernewsApiService,
    private route:ActivatedRoute
  ){}
  ngOnInit(){
    this.sub=this.route.params.subscribe({
      next:params=>{
        let itemID=+params['id'];
        this.hn.fetchComments(itemID).subscribe({
          next:data=>this.item=data,
          error:()=>console.log('Could not load item' + itemID)
        })
      }
    })
  }
}
