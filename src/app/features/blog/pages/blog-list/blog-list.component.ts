import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../../layout/header/header.component';
import { publishedPosts } from '../../content/posts';

@Component({
  selector: 'app-blog-list',
  imports: [DatePipe, RouterLink, HeaderComponent],
  templateUrl: './blog-list.component.html',
  styleUrl: '../../blog.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogListComponent {
  readonly posts = publishedPosts();
}
