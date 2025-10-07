import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-detalle-archivo',
  imports: [MatIconModule],
  templateUrl: './detalle-archivo.html',
  styleUrl: './detalle-archivo.css'
})
export class DetalleArchivo {

  nombre = 'Source';
  tamano = '1.2 MB';
  modificado = 'Yesterday';
  cantidad = '1 item';

  tags = ['Work', 'Source', 'Font'];
  avatars = [
    'avatar.jpg',
    'avatar.jpg',
    'avatar.jpg',
    'avatar.jpg',
    'avatar.jpg'
  ];
  usuariosExtra = 3;

  actividad = [
    {
      fecha: 'Yesterday',
      tipo: 'shared-edit',
      usuarios: ['avatar.jpg', 'avatar.jpg'],
      mensaje: 'You shared edit access to <a class="actividad-link" href="#">Miko</a>'
    },
    {
      fecha: 'Yesterday',
      tipo: 'shared-edit',
      usuarios: ['avatar.jpg', 'avatar.jpg'],
      mensaje: 'You shared edit access to <a class="actividad-link" href="#">Ashley</a>'
    },
    {
      fecha: 'Apr 1, 2022',
      tipo: 'archivo',
      usuarios: ['avatar.jpg'],
      mensaje: 'You changed <a class="actividad-link" href="#">Maszeh.glyph</a><div class="actividad-archivo">Maszeh.glyph</div>'
    },
    {
      fecha: 'Feb 21, 2022',
      tipo: 'tag',
      usuarios: ['avatar.jpg'],
      mensaje: 'You added tag <span class="actividad-tag">Work</span> <span class="actividad-tag">+2</span>'
    },
    {
      fecha: 'Feb 16, 2022',
      tipo: 'shared-view',
      usuarios: ['avatar.jpg', 'avatar.jpg'],
      mensaje: 'You changed edit to view access to <a class="actividad-link" href="#">Nolan</a>'
    },
    {
      fecha: 'Feb 8, 2022',
      tipo: 'archivo',
      usuarios: ['avatar.jpg'],
      mensaje: 'You changed <a class="actividad-link" href="#">Maszeh.glyph</a>'
    }
  ];
}
