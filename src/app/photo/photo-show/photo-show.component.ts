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

  ngOnInit(): void {}

  getPhoto() {
    this.photoService.getPhoto().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        throwError(err);
      }
    );
  }
}
