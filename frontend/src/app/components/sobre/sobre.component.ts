import { HeaderService } from './../template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Sobre',
      icon: 'info',
      routeUrl: '/'
    }
  }

  ngOnInit(): void {
  }

}
