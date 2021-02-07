import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/model/device.model';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.scss']
})
export class LocalizacaoComponent implements OnInit {

  centerLat;
  centerLng;
  zoom = 15;

  devices: any[] = [
    { id: '1', macAddress: '00:19:B9:FB:E2:58', latitude: -22.859010, longitude: -43.373160, model: 'ASD', type: 'TEMPERATURE' },
    { id: '2', macAddress: '00:19:B9:FB:E2:58', latitude: -22.856598, longitude: -43.374319, model: 'HFG', type: 'PRESENCE' },
    { id: '3', macAddress: '00:19:B9:FB:E2:58', latitude: -22.858822, longitude: -43.374437, model: 'HFG', type: 'WATER' },
  ];

  networks: any[] = [
    { latitude: -22.859010, longitude: -43.373160, radiusInMeters: 1000 }
  ]

  constructor() { }

  ngOnInit(): void {
    this.centerLat = this.devices[0].latitude;
    this.centerLng = this.devices[0].longitude;
  }

}
