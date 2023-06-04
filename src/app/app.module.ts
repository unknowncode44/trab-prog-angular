import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// modulos propios
import { AuthModule } from './modules/auth/auth.module';
import { HomeModule } from './modules/home/home.module';

// servicios compartidos
import { LoadingService } from './shared/services/loading.service';




@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeModule
  ],

  providers: [LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
