import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../product.model';
import { ProductService } from '../product.service';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-product-read-by-id',
  templateUrl: './product-read-by-id.component.html',
  styleUrls: ['./product-read-by-id.component.css']
})
export class ProductReadByIdComponent implements OnInit {
  produto: Produto;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Área do Cliente > Visualizar Frete',
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

  voltar(): void {
    this.router.navigate(["/cliente/fretes"]);
  }
  
}
