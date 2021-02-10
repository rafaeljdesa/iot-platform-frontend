import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device, Devices } from 'src/app/model/device.model';
import { Page } from 'src/app/model/page.model';
import { DispositivosService } from 'src/app/services/dispositivos.service';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.scss']
})
export class DispositivosComponent implements OnInit {

  dataSource: Devices;

  displayedColumns: string[] = ['id', 'macAddress', 'latitude', 'longitude', 'model', 'type', 'edit'];

  pagination = {
    page: 0,
    size: 10,
    qtdElements: null,
    options: [5, 10, 25, 100]
  };

  constructor(
    private router: Router,
    private dispositivosService: DispositivosService
  ) { }

  ngOnInit(): void {
    this.loadDevices();
  }

  edit(id) {
    this.router.navigate([`/dispositivos/${id}`]);
  }

  loadDevices() {
    this.dispositivosService.getPageable(
      this.pagination.page, 
      this.pagination.size
    )
    .subscribe((resp: Page<Device>) => {
      this.dataSource = resp.content;
      this.pagination.page = resp.number;
      this.pagination.qtdElements = resp.totalElements;              
    });
  }

  changePage(event) {
    this.pagination.page = event.pageIndex;
    this.pagination.size = event.pageSize;
    this.loadDevices();
  }

  addDevice() {
    this.router.navigate([`/dispositivos/adicionar`]);
  }

}
