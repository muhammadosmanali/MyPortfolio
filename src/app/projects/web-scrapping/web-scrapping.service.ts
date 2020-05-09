import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface CouponResData {
  day: string;
  language: string;
  heading: string;
  category: string;
  linkToDetail: string;
  linkToCoupon: string;
  categoryInUrl: string;
  imageUrl: string;
  description: string;
}

export interface GiveawayResData {
  name: string;
  pcOrNot: string;
  price: string;
  link: string;
  linkToDetail: string;
  imageUrl: string;
}

@Injectable()
export class WebScrappingService {

  constructor(private http: HttpClient) {}

  //COUPONS COURSES

  fetchCouponCourses(id: number) {
    return this.http.get<{message: string, data: CouponResData[]}>('http://localhost:3000/api/getCourses/' + id);
  }

  fetchCouponLink(categoryInUrl: string) {
    return this.http.get<{message: string, link: string}>('http://localhost:3000/api/getCoupon/' + categoryInUrl);
  }

  //GIVEAWAYS

  fetchGiveaways(id: number) {
    return this.http.get<{message: string, data: GiveawayResData[]}>("http://localhost:3000/api/giveaways/" + id);
  }

  fetchGiveawayDetail(linkToDetail: string) {
    return this.http.get<{message: string, data: any}>("http://localhost:3000/api/giveaway/getDetail/" + linkToDetail);
  }

  getGiveawayPagination() {
    return this.http.get<{message: string, data: number}>("http://localhost:3000/api/giveaway/getPagination");
  }
}
