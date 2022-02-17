import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {


  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
