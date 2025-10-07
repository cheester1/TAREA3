import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  imports: [MatIconModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  menuItems = [
    { icon: 'folder_open', label: 'All Files', active: true },
    { icon: 'history', label: 'Recent', active: false },
    { icon: 'favorite_border', label: 'Favorites', active: false },
    { icon: 'share', label: 'Shared', active: false },
    { icon: 'local_offer', label: 'Tags', active: false },
  ];

  settingsItems = [
    { icon: 'settings', label: 'Settings', active: false },
    { icon: 'delete', label: 'Deleted Files', active: false },
  ];

  storageUsed = 42;
  storageTotal = 256;
}
