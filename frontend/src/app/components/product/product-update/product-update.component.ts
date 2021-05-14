import { Produto } from "./../product.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { HeaderService } from "../../template/header/header.service";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {
  produto: Produto;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Área do Cliente > Alterar Frete',
      icon: 'edit',
      routeUrl: '/'
    }
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.productService.readById(id).subscribe((data) => {
      this.produto = data;
    });
  }

  updateProduct(): void {
    this.productService.update(this.produto).subscribe(() => {
      this.productService.showMessage("Frete atualizado com sucesso!");
      this.router.navigate(["/cliente/fretes"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/cliente/fretes"]);
  }
}
