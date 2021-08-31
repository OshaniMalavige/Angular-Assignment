import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../service/blog.service';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {
  get currentBlog(): Blog {
    return <Blog>this._currentBlog;
  }

  protected _currentBlog: Blog;
  constructor(private activeRoter: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    const id = +this.activeRoter.snapshot.paramMap.get('id');
    this._currentBlog = this.blogService.blogs.find(blog => blog.id === id);
    console.log(this._currentBlog);
  }
}
