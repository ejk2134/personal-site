import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ThingsilikeComponent} from './thingsilike/thingsilike.component';
import { ProjectsComponent} from './projects/projects.component';

const appRoutes: Routes = [
    { path: 'mystuff', component: ThingsilikeComponent},
    { path: 'projects', component: ProjectsComponent}
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