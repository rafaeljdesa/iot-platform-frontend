import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from 'src/app/model/device.model';
import { Page } from 'src/app/model/page.model';
import { DispositivosService } from 'src/app/services/dispositivos.service';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.scss']
})
export class DispositivosComponent implements OnInit {

  /* dataSource: any[] = [
    { id: '1', macAddress: '00:19:B9:FB:E2:58', latitude: '-22.859010', longitude: '-43.373160', model: 'ASD', type: 'TEMPERATURE' },
    { id: '2', macAddress: '00:19:B9:FB:E2:58', latitude: '-22.859010', longitude: '-43.373160', model: 'HFG', type: 'PRESENCE' },
    { id: '3', macAddress: '00:19:B9:FB:E2:58', latitude: '-22.859010', longitude: '-43.373160', model: 'ERT', type: 'MOVEMENT' },
    { id: '4', macAddress: '00:19:B9:FB:E2:58', latitude: '-21.856010', longitude: '-44.373160', model: 'HSJ', type: 'TEMPERATURE' },
    { id: '5', macAddress: '00:19:B9:FB:E2:58', latitude: '-22.859010', longitude: '-43.373160', model: 'SDF', type: 'WATER' },
    { id: '6', macAddress: '00:19:B9:FB:E2:58', latitude: '-19.859010', longitude: '-56.373160', model: 'JHG', type: 'OTHER' },
    { id: '7', macAddress: '00:19:B9:FB:E2:58', latitude: '-15.859010', longitude: '-35.373160', model: 'SDF', type: 'TEMPERATURE' },
  ]; */

  dataSource: Device[];

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
