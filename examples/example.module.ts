import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { MyLibraryModule } from '../index';

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        BrowserModule,
        MyLibraryModule
    ],
    providers: [],
    bootstrap: [ExampleComponent]
})
export class ExampleModule { }
