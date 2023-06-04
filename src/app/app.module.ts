import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// modulos propios
import { AuthModule } from './modules/auth/auth.module';
import { HomeComponent } from './components/home/home.component';

// servicios compartidos
import { LoadingService } from './shared/services/loading.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
  ],

  providers: [LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
