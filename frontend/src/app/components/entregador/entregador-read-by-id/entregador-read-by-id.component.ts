import { HeaderService } from './../../template/header/header.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from './../../product/product.service';
import { Produto } from './../../product/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entregador-read-by-id',
  templateUrl: './entregador-read-by-id.component.html',
  styleUrls: ['./entregador-read-by-id.component.css']
})
export class EntregadorReadByIdComponent implements OnInit {
  produto: Produto;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Área do Entregador > Visualizar Frete',
      icon: 'visibility',
      routeUrl: '/'
    }
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe((data) => {
      this.produto = data;
    });
  }

  aceitarFrete(): void {
    this.produto.status = "Aceito";
    this.productService.showMessage("Frete aceito com sucesso!");
    this.updateProduct();
  }

  recusarFrete(): void {
    this.produto.status = "Recusado";
    this.productService.showMessage("Frete recusado com sucesso!");
    this.updateProduct();
  }

  updateProduct(): void {
    this.productService.update(this.produto).subscribe(() => {
      this.router.navigate(["/entregador/fretes"]);
    });
  }

  voltar(): void {
    this.router.navigate(["/entregador/fretes"]);
  }

}
