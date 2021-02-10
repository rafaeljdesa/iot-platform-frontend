import { Component, OnInit } from '@angular/core';
import { Device, Devices } from 'src/app/model/device.model';
import { DispositivosService } from 'src/app/services/dispositivos.service';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.scss']
})
export class LocalizacaoComponent implements OnInit {

  centerLat;
  centerLng;
  zoom = 15;

  devices: Devices;

  networks: any[] = [
    { latitude: -22.859010, longitude: -43.373160, radiusInMeters: 1000 }
  ];

  constructor(private dispositivosService: DispositivosService) { }

  ngOnInit(): void {
    this.loadDevices();    
  }

  private loadDevices() {
    this.dispositivosService.getAll()
      .subscribe((resp: Devices) => {
        this.devices = resp;
        this.setCenterCoordenates();
      });
  }

  private setCenterCoordenates() {
    if (this.devices?.length > 0) {
      this.centerLat = this.devices[0].latitude;
      this.centerLng = this.devices[0].longitude;
    }
  }

}
