import { NgModule } from '@angular/core';
import { NgxMdModule } from '@wellrightalex/ngx-md';
import { ReadmeComponent } from './components/readme.component';

@NgModule({
  declarations: [
    ReadmeComponent
  ],
  imports: [
    NgxMdModule
  ]
})
export class ReadmeModule {
}
