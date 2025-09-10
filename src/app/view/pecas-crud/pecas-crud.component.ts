import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pecas-crud',
  templateUrl: './pecas-crud.component.html',
  styleUrls: ['./pecas-crud.component.css']
})
export class PecasCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPecasCreate(): void{
  this.router.navigate(['/pecas/create'])
}
}
