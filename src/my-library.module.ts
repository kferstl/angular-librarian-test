import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [

    ],
    exports: [

    ],
    imports: [
        CommonModule
    ]
})
export class MyLibraryModule {
    static forRoot() {
        return {
            ngModule: MyLibraryModule,
            providers: []
        };
    }
}
