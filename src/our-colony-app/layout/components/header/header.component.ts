import { Component, OnInit } from '@angular/core';
import { AppRoutes } from '@oca/core/constants/routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  readonly AppRoutes = AppRoutes;

  constructor() {}

  ngOnInit() {}
}
