import { ProductService } from './../product.service';
import { Produto } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  produtos: Produto[] = []
  displayedColumns = ['id', 'nome', 'descricao', 'cliente', 'status', 'action']
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(data => {
      this.produtos = data
    })
  }

}
