import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color:white;
      font-size: 30px;
    }

    .standerd {
      font-size: 24px;
    }
  `]
})

export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getBackgroundColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }

  getColor() {
    return this.serverStatus === 'Online' ? 'white' : 'yellow';
  }
}
