import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './app.component';
import { SchemaEditComponent } from './schema-edit.component';

const routes: Routes = [
    { path: 'schema', component: SchemaEditComponent },
    { path: 'example/:id', component: MainComponent },
    { path: '**', component: MainComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
