import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CtaSectionComponent } from './cta-section/cta-section.component';
import { FooterComponent } from './footer/footer.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CtaSectionComponent,
    FooterComponent,
    BlogListComponent,
    MainWrapperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
