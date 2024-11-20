import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishService } from '../../services/wish.service';
import { Wishlist } from '../../../Wish';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule], // Certifique-se de incluir o CommonModule aqui
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  wishs: Wishlist[] = [];

  constructor(private wishService: WishService) {}

  ngOnInit(): void {
    this.wishService.getWishs().subscribe((dado) => {
      this.wishs = dado;
      console.log(dado);
    });
  }
}
