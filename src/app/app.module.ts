import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TareasModule } from './tareas/tareas.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TareaService } from 'src/app/tarea.service';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,
    TareasModule
  ],
  providers: [TareaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
