import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Sidebar } from './sidebar/sidebar';
import { Topbar } from "./topbar/topbar";
import { QuickAccess } from './quick-access/quick-access';
import { Breadcrumb } from './breadcrumb/breadcrumb';
import { DetalleArchivo } from './detalle-archivo/detalle-archivo';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule, Sidebar, Topbar,QuickAccess,Breadcrumb,DetalleArchivo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TAREA3');
}
