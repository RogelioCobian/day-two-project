import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers', //element selector
  selector: '.app-servers', // Attribute selector
  // selector: '.app-servers', // class selector

  templateUrl: './servers.component.html', // External template

  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  // Internal Template
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName: string;
  serverCreated: boolean = false;
  servers = ['testserver', 'testserver2'];

  constructor() {
    console.log(this.allowNewServer);
    setTimeout(() => {
      this.allowNewServer = true;
      console.log(this.allowNewServer);
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'New Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
