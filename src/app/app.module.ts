import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericListFilterModule } from 'generic-list-filter';
import { HomeComponent } from './page/home/home.component';
import { WhoAreWeComponent } from './page/who-are-we/who-are-we.component';
import { CarouselSliderComponent } from './components/carousel-slider/carousel-slider.component';
import { CardItemsComponent } from './components/card-items/card-items.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HistoryComponent } from './components/history/history.component';
import { GridValueComponent } from './components/grid-value/grid-value.component';
import { GridUsComponent } from './components/grid-us/grid-us.component';
import { GridMissionComponent } from './components/grid-mission/grid-mission.component';
import { ConceptionComponent } from './page/service/etude/conception/conception.component';
import { SuiviComponent } from './page/service/etude/suivi/suivi.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { CardImagesComponent } from './components/card-images/card-images.component';
import { CreationsFilesComponent } from './page/service/obtaining-build-permit/creations-files/creations-files.component';
import { FollowedComponent } from './page/service/obtaining-build-permit/followed/followed.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { NavNavbarComponent } from './components/nav-navbar/nav-navbar.component';
import { NavInfosComponent } from './components/nav-infos/nav-infos.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GridServiceComponent } from './components/grid-service/grid-service.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FilterItemsComponent } from './components/filter-items/filter-items.component';
import { ContactComponent } from './components/contact/contact.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CatalogItemComponent } from './components/catalog-item/catalog-item.component';
import { CatalogueComponent } from './page/catalogue/catalogue.component';
import { WhatsappComponent } from './shared/whatsapp/whatsapp.component';
import { PartnerComponent } from './components/partner/partner.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhoAreWeComponent,
    CarouselSliderComponent,
    CardItemsComponent,
    HeaderComponent,
    FooterComponent,
    JumbotronComponent,
    HistoryComponent,
    GridValueComponent,
    GridUsComponent,
    GridMissionComponent,
    ConceptionComponent,
    SuiviComponent,
    AccordionComponent,
    TabsComponent,
    CardImagesComponent,
    CreationsFilesComponent,
    FollowedComponent,
    TimelineComponent,
    NavNavbarComponent,
    NavInfosComponent,
    AboutUsComponent,
    GridServiceComponent,
    ContactUsComponent,
    FilterItemsComponent,
    ContactComponent,
    CatalogComponent,
    CatalogItemComponent,
    CatalogueComponent,
    WhatsappComponent,
    PartnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GenericListFilterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
