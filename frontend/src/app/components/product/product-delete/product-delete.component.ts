import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "./../product.service";
import { Produto } from "./../product.model";
import { Component, OnInit } from "@angular/core";
import { HeaderService } from "../../template/header/header.service";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  produto: Produto;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Área do Cliente > Excluir Frete',
      icon: 'delete',
      routeUrl: '/'
    }
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe((data) => {
      this.produto = data;
    });
  }

  deleteProduct(): void {
    this.productService.delete(this.produto.id).subscribe(() => {
      this.productService.showMessage("Frete excluido com sucesso!");
      this.router.navigate(["/cliente/fretes"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/cliente/fretes"]);
  }
}
