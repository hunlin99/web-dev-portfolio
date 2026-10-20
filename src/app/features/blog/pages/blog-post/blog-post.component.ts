import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { HeaderComponent } from '../../../../layout/header/header.component';
import { publishedPosts } from '../../content/posts';

@Component({
  selector: 'app-blog-post',
  imports: [DatePipe, RouterLink, HeaderComponent],
  templateUrl: './blog-post.component.html',
  styleUrl: '../../blog.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPostComponent {
  readonly post = toSignal(inject(ActivatedRoute).paramMap.pipe(
    map(params => publishedPosts().find(post => post.slug === params.get('slug')))
  ));
}
