import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.scss']
})
export class DispositivosComponent implements OnInit {

  dataSource: any[] = [
    { id: '1', macAddress: '00:19:B9:FB:E2:58', latitude: '-22.859010', longitude: '-43.373160', model: 'ASD', type: 'TEMPERATURE' },
    { id: '2', macAddress: '00:19:B9:FB:E2:58', latitude: '-22.859010', longitude: '-43.373160', model: 'HFG', type: 'PRESENCE' },
    { id: '3', macAddress: '00:19:B9:FB:E2:58', latitude: '-22.859010', longitude: '-43.373160', model: 'ERT', type: 'MOVEMENT' },
    { id: '4', macAddress: '00:19:B9:FB:E2:58', latitude: '-21.856010', longitude: '-44.373160', model: 'HSJ', type: 'TEMPERATURE' },
    { id: '5', macAddress: '00:19:B9:FB:E2:58', latitude: '-22.859010', longitude: '-43.373160', model: 'SDF', type: 'WATER' },
    { id: '6', macAddress: '00:19:B9:FB:E2:58', latitude: '-19.859010', longitude: '-56.373160', model: 'JHG', type: 'OTHER' },
    { id: '7', macAddress: '00:19:B9:FB:E2:58', latitude: '-15.859010', longitude: '-35.373160', model: 'SDF', type: 'TEMPERATURE' },
  ];

  displayedColumns: string[] = ['id', 'macAddress', 'latitude', 'longitude', 'model', 'type'];  

  constructor() { }

  ngOnInit(): void {
  }

}
