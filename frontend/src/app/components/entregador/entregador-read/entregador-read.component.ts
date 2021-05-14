import { HeaderService } from './../../template/header/header.service';
import { ProductService } from './../../product/product.service';
import { Produto } from './../../product/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entregador-read',
  templateUrl: './entregador-read.component.html',
  styleUrls: ['./entregador-read.component.css']
})
export class EntregadorReadComponent implements OnInit {

  produtos: Produto[] = []
  displayedColumns = ['id', 'nome', 'descricao', 'cliente', 'status', 'action']
  
  constructor(private productService: ProductService, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Área do Entregador',
      icon: 'sports_motorsports',
      routeUrl: '/'
    }
  }

  ngOnInit(): void {
    this.productService.read().subscribe(data => {
      this.produtos = data
    })
  }

}
