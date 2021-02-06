import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dispositivo-edicao',
  templateUrl: './dispositivo-edicao.component.html',
  styleUrls: ['./dispositivo-edicao.component.scss']
})
export class DispositivoEdicaoComponent implements OnInit {

  device: Device = { id: '1', macAddress: '00:19:B9:FB:E2:58', latitude: '-22.859010', longitude: '-43.373160', model: 'ASD', type: 'TEMPERATURE' };

  types: IotTypeEnum[] = [
    IotTypeEnum.Temperature,
    IotTypeEnum.Water,
    IotTypeEnum.Pressure,
    IotTypeEnum.Movement,
    IotTypeEnum.Presence,
    IotTypeEnum.Other
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

interface Device {
  id: string,
  macAddress: string,
  latitude: string,
  longitude: string,
  model: string,
  type: string
}

enum IotTypeEnum {
  Temperature = 'TEMPERATURE',
  Water = 'WATER',
  Pressure = 'PRESSURE',
  Movement = 'MOVEMENT',
  Presence = 'PRESENCE',
  Other = 'OTHER'
}
