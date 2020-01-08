import { Component, OnInit } from '@angular/core';


import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-storylist',
  templateUrl: './storylist.component.html',
  styleUrls: ['./storylist.component.css']
})
export class StorylistComponent implements OnInit {

  subscription: Subscription;
   storsy:any;
   display:boolean=false

cols: any[];
jsonData:any;
  constructor(private api:ServiceService){

  }



  ngOnInit() {
    this.subscription = timer(0, 10000).pipe(
      switchMap(() => this.api.getMethod('https://hn.algolia.com/api/v1/search_by_date?tags=story'))
    ).subscribe(result => {this.storsy = result
    console.log('every 10s'+this.storsy)
    });

    this.cols = [
      { field: 'title', header: 'Title' },
      { field: 'url', header: 'URL' },
      { field: 'created_at', header: 'CreatedAt' },
      { field: 'author', header: 'Author' }
    
  ];
}


showrowdata(data){

  this.display=true;
  this.jsonData=JSON.stringify(data);

}
ngOnDestroy() {
    this.subscription.unsubscribe();
}















}
