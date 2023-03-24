import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankManagementAccountComponent } from './bank-management-account/bank-management-account.component';
import { ListingRouteComponent } from './listing-route/listing-route.component';
import { DetailsRouteComponent } from './details-route/details-route.component';
import { CreateRouteComponent } from './create-route/create-route.component';
import { AboutRouteComponent } from './about-route/about-route.component';
import { EditableElementComponent } from './editable-element/editable-element.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundRouteComponent } from './not-found-route/not-found-route.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileforProfileComponent } from './profilefor-profile/profilefor-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    BankManagementAccountComponent,
    ListingRouteComponent,
    DetailsRouteComponent,
    CreateRouteComponent,
    AboutRouteComponent,
    EditableElementComponent,
    NavigationComponent,
    NotFoundRouteComponent,
    SearchComponent,
    ProfileComponent,
    DashboardComponent,
    ProfileforProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
