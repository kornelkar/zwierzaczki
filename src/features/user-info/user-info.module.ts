import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {BasicOwnerInfoTableComponent} from "./components/basic-owner-info-table/basic-owner-info-table.component";
import {HttpClientModule} from "@angular/common/http";
import {PetUserPageComponent} from "./containers/pet-user-page/pet-user-page.component";

@NgModule({
  declarations: [
    BasicOwnerInfoTableComponent,
    PetUserPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [
    BasicOwnerInfoTableComponent,
    PetUserPageComponent,
  ]
})
export class UserDetailsModule {
}
