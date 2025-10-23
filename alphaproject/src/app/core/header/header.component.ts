import { Component, OnInit } from '@angular/core';

import { AuthappService } from 'src/app/core/services/authapp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public BasicAuth: AuthappService) { }

}
