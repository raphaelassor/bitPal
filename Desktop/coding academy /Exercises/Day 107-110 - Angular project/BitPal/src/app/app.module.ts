import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../pages/home/home.component';
import { LineChartComponent } from '../cmps/charts/line-chart/line-chart.component';
import { AppHeaderComponent } from 'src/cmps/app-header/app-header.component';
import { ContactsComponent } from '../pages/contacts/contacts.component';
import { ContactListComponent } from '../cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from 'src/cmps/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from '../pages/contact-details/contact-details.component';
import { MarketDashboardComponent } from '../pages/market-dashboard/market-dashboard.component';
import { ContactEditComponent } from '../pages/contact-edit/contact-edit.component';
import { FormsModule } from '@angular/forms';
import { ContactFilterComponent } from '../cmps/contact-filter/contact-filter.component';
import { TransListComponent } from '../cmps/trans-list/trans-list.component';
import { TransferFundsComponent } from '../cmps/transfer-funds/transfer-funds.component';
import { BitPipe } from './pipes/bit.pipe';
import { LoginSignupComponent } from '../pages/login-signup/login-signup.component';
import { AppFooterComponent } from '../cmps/app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LineChartComponent,
    AppHeaderComponent,
    ContactsComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    MarketDashboardComponent,
    ContactEditComponent,
    ContactFilterComponent,
    TransListComponent,
    TransferFundsComponent,
    BitPipe,
    
    LoginSignupComponent,
         AppFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
}) 
export class AppModule { }
