import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PhotoResponse } from './photo.response';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  accessKey = environment.apiKey;
  constructor(private httpClient: HttpClient) {}

  getPhoto() {
    return this.httpClient.get<PhotoResponse>(
      'https://api.unsplash.com/photos//random',
      {
        headers: {
          Authorization: `Client-ID ${this.accessKey}`,
        },
      }
    );
  }
}
