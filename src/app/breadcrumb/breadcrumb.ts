import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface FilaArchivo {
  icono: string;
  nombre: string;
  compartido: string;
  avatares?: string[];
  usuariosExtra?: number;
  tamano: string;
  modificado: string;
  esCarpeta?: boolean;
}


@Component({
  selector: 'app-breadcrumb',
  imports: [MatIconModule],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.css'
})

export class Breadcrumb {
  files: FilaArchivo[] = [
    { icono: 'folder', nombre: 'Docs', compartido: 'Public', tamano: '4.5 MB', modificado: 'Apr 10, 2022', esCarpeta: true },
    { icono: 'folder', nombre: 'Fonts', compartido: 'Public', tamano: '2.5 MB', modificado: 'Apr 2, 2022', esCarpeta: true },
    { icono: 'folder', nombre: 'Source', compartido: '', avatares: [
        'avatar.jpg','avatar.jpg','avatar.jpg'
      ], usuariosExtra: 4, tamano: '1.2 MB', modificado: 'Yesterday', esCarpeta: true
    },
    { icono: 'folder', nombre: 'Example', compartido: '', avatares: [
        'avatar.jpg','avatar.jpg'
      ], tamano: '12.2 MB', modificado: 'Yesterday', esCarpeta: true
    },
    { icono: 'description', nombre: 'OFL.txt', compartido: 'Public', tamano: '4 KB', modificado: 'Oct 12, 2021' },
    { icono: 'description', nombre: 'Readme.md', compartido: 'Public', tamano: '2 KB', modificado: 'Oct 12, 2021' },
    { icono: 'description', nombre: 'index.html', compartido: 'Public', tamano: '14 KB', modificado: 'Oct 12, 2021' }
  ];
}
