import { Component, Input } from '@angular/core';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-comment-tree',
  templateUrl: './comment-tree.component.html',
  styleUrls: ['./comment-tree.component.scss']
})
export class CommentTreeComponent {
  @Input() commentTree:Item[]|undefined;
}
