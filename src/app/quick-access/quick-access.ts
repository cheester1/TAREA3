import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface QuickFolder {
  icon: string;
  name: string;
  size: string;
  items: number;
}

@Component({
  selector: 'app-quick-access',
  imports: [MatIconModule],
  templateUrl: './quick-access.html',
  styleUrl: './quick-access.css'
})
export class QuickAccess {

quickFolders: QuickFolder[] = [
    { icon: 'folder_open', name: 'Studio Work', size: '2.3 GB', items: 23 },
    { icon: 'folder_open', name: 'Source', size: '1.2 MB', items: 1 },
    { icon: 'folder_open', name: 'Brand Assets', size: '2.41 MB', items: 8 },
    { icon: 'folder_open', name: 'Great Studios Pitch...', size: '12.3 MB', items: 1 },
  ];
}
