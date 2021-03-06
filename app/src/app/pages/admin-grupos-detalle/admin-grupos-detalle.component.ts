import { Component, OnInit } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-grupos-detalle',
  templateUrl: './admin-grupos-detalle.component.html',
  styleUrls: ['./admin-grupos-detalle.component.scss']
})
export class AdminGruposDetalleComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  showTicket(){
    alert('Esta es la boleta');
  }

  back(){
    this.router.navigate(['admin/grupos']);
  }
}
