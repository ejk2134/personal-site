import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ThingsilikeComponent} from './thingsilike/thingsilike.component';

const appRoutes: Routes = [
    { path: 'mystuff', component: ThingsilikeComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        ),
    ],
    exports: [
        RouterModule
    ],
    providers: []
})

export class AppRoutingModule {}