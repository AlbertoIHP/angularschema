import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventHandler
{
	//Here you should create your news events
    public isSingIn: any




    constructor() 
    {
    	//Here you should initiate your eventemitter that will be suscribable for anybody that uses this service
        this.isSingIn = new EventEmitter()
    }



    //For each event you should create a method that service execute to emit an event
    public singIn()
    {
      this.isSingIn.emit()
    }



}
