import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { OutdoorComponent } from './views/outdoor/outdoor.component';
import { DemoComponent } from './views/demo/demo.component';
import { JavascriptDocComponent } from './components/tutorials/javascript-doc/javascript-doc.component';
import { VariabiliInJavascriptComponent } from './components/tutorials/javascript-doc/variabili-in-javascript/variabili-in-javascript.component';
import { ThisInJavascriptComponent } from './components/tutorials/javascript-doc/this-in-javascript/this-in-javascript.component';
import { WoodProjectsComponent } from './views/wood/wood-projects.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'outdoor',
    component: OutdoorComponent
  },
  {
    path: 'woodwork',
    component: WoodProjectsComponent
  },
  {
    path: 'js-doc',
    component: JavascriptDocComponent
  },
  {
    path: 'js-doc/variabili-in-javascript',
    component: VariabiliInJavascriptComponent
  },
  {
    path: 'js-doc/this-in-javascript',
    component: ThisInJavascriptComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
