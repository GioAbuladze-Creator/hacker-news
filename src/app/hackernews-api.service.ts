import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './interfaces/item';

@Injectable()
export class HackernewsApiService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://node-hnapi.herokuapp.com';
  }

  fetchStories(storyType: string, page: number) {
    return this.http.get<Item[]>(`${this.baseUrl}/${storyType}?page=${page}`)
  }
  fetchComments(id:number){
    return this.http.get<Item>(`${this.baseUrl}/item/${id}`)
  }

}
