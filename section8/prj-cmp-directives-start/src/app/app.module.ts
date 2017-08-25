import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { StarWarsService } from './star-wars.service';
import { LogService } from './log.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-rounting.module';

import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        TabsComponent,
        ListComponent,
        ItemComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [StarWarsService, LogService],
    bootstrap: [AppComponent]
})
export class AppModule { }
