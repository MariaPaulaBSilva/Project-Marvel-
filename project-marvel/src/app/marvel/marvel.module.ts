import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { MarvelApiService } from '../marvel-api.service'; 
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule  
  ],
  providers: [MarvelApiService],  
  bootstrap: []
})
export class AppModule { }
