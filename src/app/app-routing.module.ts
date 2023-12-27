import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { OutdoorComponent } from './views/outdoor/outdoor.component';
import { DemoComponent } from './views/demo/demo.component';
import { JavascriptDocComponent } from './components/tutorials/javascript-doc/javascript-doc.component';
import { VariabiliInJavascriptComponent } from './components/tutorials/javascript-doc/variabili-in-javascript/variabili-in-javascript.component';

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
    path: 'js-doc',
    component: JavascriptDocComponent
  },
  {
    path: 'js-doc/variabili-in-javascript',
    component: VariabiliInJavascriptComponent
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
