import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-topbar',
  imports: [MatIconModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css'
})
export class Topbar {
navItems = [
    { icon: 'folder', label: 'Files', active: true },
    { icon: 'bolt', label: 'Activity', active: false },
    { icon: 'calendar_today', label: 'Calendar', active: false },
    { icon: 'mail', label: 'Contact', active: false },
  ];
}
