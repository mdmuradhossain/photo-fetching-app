import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent implements OnInit {
  constructor(private photoService: PhotoService) {}

  photoUrl: string;
  ngOnInit(): void {
    this.onClick();
  }

  onClick() {
    this.getPhoto();
  }
  getPhoto() {
    this.photoService.getPhoto().subscribe(
      (res) => {
        this.photoUrl = res.urls.regular;
        console.log(res);
        console.log(res.location.title);
        console.log(res.urls.regular);
      },
      (err) => {
        throwError(err);
      }
    );
  }
}
