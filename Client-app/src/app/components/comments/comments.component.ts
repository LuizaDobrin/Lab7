import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comment } from 'src/app/models/comments';
import { CommentService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  public comments: any = null;
  public filteredComments: any = null;
  public displayedColumns: string[] = ['Text', 'TaskId', 'Important'];

  constructor(private commentsService: CommentService, private route: Router) {
    this.getAllComments();
  }

  ngOnInit() {
  }

  getAllComments() {
    // this.tasks = []
    this.commentsService.getAllComments().subscribe(c => {
      this.comments = c;
      console.log(c);
    });
  }

  filteredComment(filter: string) {
    this.commentsService.getAllFilteredComments(filter).subscribe(c => {
      this.filteredComments = c;
      console.log(c);
    })

  }


  goBack() {
    this.route.navigate(['']);
  }

}
