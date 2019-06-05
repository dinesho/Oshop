import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { environment } from "src/environments/environment";
import { BsNavbarComponent } from "./bs-navbar/bs-navbar.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { OrderSuccessComponent } from "./order-success/order-success.component";
import { MyOrderComponent } from "./my-order/my-order.component";
import { AdminProductsComponent } from "./admin/admin-products/admin-products.component";
import { AdminOrdersComponent } from "./admin/admin-orders/admin-orders.component";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./auth.service";
import { AuthGuardService as AuthGuard } from "./auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "products", component: ProductsComponent },
      { path: "shopping-cart", component: ShoppingCartComponent },
      { path: "login", component: LoginComponent },
      {
        path: "checkout",
        component: CheckoutComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "order-success",
        component: OrderSuccessComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "my/orders",
        component: MyOrderComponent,
        canActivate: [AuthGuard]
      },

      {
        path: "admin/products",
        component: AdminProductsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "admin/orders",
        component: AdminOrdersComponent,
        canActivate: [AuthGuard]
      },
      { path: "**", component: HomeComponent }
    ])
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}
