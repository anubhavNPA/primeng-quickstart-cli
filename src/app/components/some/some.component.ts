import { Component, OnInit } from '@angular/core';
import { SomeService }       from './some.service';
import { Agent }             from '../../models/agent';
import { Defaulter }         from '../../models/defaulter';

@Component({
  moduleId: module.id,
  selector: 'app-some',
  templateUrl: 'some.component.html',
  styleUrls: ['some.component.css']
})
export class SomeComponent implements OnInit {

   responseString: string;
    defaulterList: Defaulter[];
    agentList: Agent[];
    selectedAgent: Agent;
    constructor(private someService: SomeService) {
        this.getSomeRequest();
        this.defaulterList = [];
        this.agentList = [];
        this.getAgentsAndDefaulters();
    }

     getSomeRequest() {
        this.someService.getJsonTestResponse()
            .subscribe(message => {
                console.log(message);
                this.responseString = message.ip;
            })
    }
    getAgentsAndDefaulters() {
        this.agentList = this.someService.createAgents();
        this.defaulterList = this.someService.createDefaulters();
        console.log(this.agentList);
    }

  ngOnInit() {
  }

}
