import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { FirstContentComponent } from './first-content/first-content.component';
import { SecondContentComponent } from './second-content/second-content.component';
import { CommonModule } from '@angular/common';
import { TranslateLoader,TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstContentComponent,
    SecondContentComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot(
     {
      defaultLanguage:"ar",
       loader: {
      provide: TranslateLoader,
      useFactory: createTranslateLoder,
      deps: [HttpClient],
    }}
    )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoder(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
