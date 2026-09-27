import { Component, OnDestroy, OnInit } from '@angular/core';
import { Notification } from '../../services/notification';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit,OnDestroy {

   subscription!:Subscription;


  constructor(private notificationService:Notification){

  }
  ngOnDestroy(): void {
       
    this.subscription.unsubscribe();

  }
  ngOnInit(): void {
    
    // this.notificationService.getNotification().subscribe((msg)=>{
    //   console.log(msg);
    // },(error)=>{
    //   console.log(`-- {error}`);

    // });



    this.subscription=this.notificationService.getNotification().subscribe(
      {
        
        next:(msg)=>{
      console.log(msg);
        },
        error:(msg)=>{
          console.log(msg);
        },
        complete:()=>{
          console.log("complete");
        },
          
      });
      
  }








}
