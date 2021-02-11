import { Component, OnInit } from '@angular/core';
import { Device, Devices } from 'src/app/model/device.model';
import { Page } from 'src/app/model/page.model';
import { DispositivosService } from 'src/app/services/dispositivos.service';
import { SimulacaoService } from 'src/app/services/simulacao.service';

@Component({
  selector: 'app-simulacao',
  templateUrl: './simulacao.component.html',
  styleUrls: ['./simulacao.component.scss']
})
export class SimulacaoComponent implements OnInit {

  dataSource: Devices;

  displayedColumns: string[] = ['id', 'macAddress', 'latitude', 'longitude', 'model', 'type', 'add'];

  pagination = {
    page: 0,
    size: 5,
    qtdElements: null,
    options: [5, 10, 25, 100]
  };

  selectedDevices: Devices = [];

  intervals: number[] = [1, 3, 5, 10, 60];

  constructor(    
    private dispositivosService: DispositivosService,
    private simulacaoService: SimulacaoService
  ) { }

  ngOnInit(): void {
    this.loadDevices();
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
  
  addToSimulation(device: Device) {
    if (!this.selectedDevices.find(d => d.id === device.id)) {
      this.selectedDevices.push(device);
    }
  }

  removeFromSimulation(device: Device) {
    this.selectedDevices = this.selectedDevices
      .filter(d => d.id !== device.id);
  }

  startSimulate(device: Device) {
    device.online = true;
    device.intervalEvent = setInterval(() => {
      this.simulacaoService.sendEvent(device)
        .subscribe();
    }, device.interval * 1000);
  }

  stopSimulate(device: Device) {
    device.online = false;
    clearInterval(device.intervalEvent);
  }

  stopSimulateAll() {
    this.selectedDevices.forEach(d => {
      if (d.online) this.stopSimulate(d);      
    });
  }

}
