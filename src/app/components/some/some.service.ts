import { Injectable }                       from '@angular/core';
import { Http, Response, Headers }          from '@angular/http';
import { Observable }                       from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Agent }            from '../../models/agent';
import { Defaulter }            from '../../models/defaulter';

@Injectable()
export class SomeService {

  constructor(private http: Http,
                /*private globalSettings: GlobalSettingsService,
                private userService: UserService*/) {
    }

    getJsonTestResponse() {
        console.log('bot connector service called');
        var headers = new Headers();
        //headers.append('Authorization', 'JWT ' + this.userService.getToken());
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://ip.jsontest.com/')
            .map(res => res.json());
        /*return this.http.get(this.globalSettings.API_SERVER_BASEURL +'/botconnector/'+1)
                    .map(res => res.json());*/
                    
    }

    public createAgents(): Agent[] {
      let agentList: Agent[] = [];
      let tempAgent: Agent;
      tempAgent = new Agent('anubhav', 'mumbai');
      agentList.push(tempAgent);
      tempAgent = new Agent('kushal', 'gurgaon');
      agentList.push(tempAgent);
      return agentList;
    }
   
   public createDefaulters(): Defaulter[] {
      let defaulterList: Defaulter[] = [];
      let tempDefaulter: Defaulter;
      tempDefaulter = new Defaulter('prateek', 'mumbai');
      defaulterList.push(tempDefaulter);
      tempDefaulter = new Defaulter('prashant', 'gurgaon');
      defaulterList.push(tempDefaulter);
      return defaulterList;
    }

}
