import { NgModule }      	from '@angular/core';
import { BrowserModule }	from '@angular/platform-browser';

import { AppComponent }		from './app.component';

import { ListComponent }	from './list/list.component';
import { ItemComponent }	from './item/item.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, ListComponent, ItemComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
