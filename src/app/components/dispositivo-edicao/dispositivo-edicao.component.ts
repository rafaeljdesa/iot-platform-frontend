import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from 'src/app/model/device.model';
import { DispositivosService } from 'src/app/services/dispositivos.service';

@Component({
  selector: 'app-dispositivo-edicao',
  templateUrl: './dispositivo-edicao.component.html',
  styleUrls: ['./dispositivo-edicao.component.scss']
})
export class DispositivoEdicaoComponent implements OnInit {

  // device: Device = { id: '1', macAddress: '00:19:B9:FB:E2:58', latitude: '-22.859010', longitude: '-43.373160', model: 'ASD', type: 'TEMPERATURE' };

  device: Device = {};

  types: IotTypeEnum[] = [
    IotTypeEnum.Temperature,
    IotTypeEnum.Water,
    IotTypeEnum.Pressure,
    IotTypeEnum.Movement,
    IotTypeEnum.Presence,
    IotTypeEnum.Other
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private dispositivosService: DispositivosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => {
      const id = p['id'];
      if (id) this.loadDevice(id);
    });
  }

  loadDevice(id) {
    this.dispositivosService.getById(id)
      .subscribe((resp: Device) => this.device = resp);
  }

  saveDevice() {
    if (this.device.id) {
      this.dispositivosService.update(this.device)
        .subscribe((resp: Device) => this.onSuccess());
    } else {
      this.dispositivosService.create(this.device)
        .subscribe((resp: Device) => this.onSuccess());
    }
  }

  deleteDevice() {
    const resp = confirm('Deseja excluir o dispositivo?');
    if (!resp) return;
    this.dispositivosService.deleteById(this.device.id)
      .subscribe(resp => this.onSuccess());
  }

  private onSuccess() {
    this.router.navigate(['/dispositivos']);
  }

}

enum IotTypeEnum {
  Temperature = 'TEMPERATURE',
  Water = 'WATER',
  Pressure = 'PRESSURE',
  Movement = 'MOVEMENT',
  Presence = 'PRESENCE',
  Other = 'OTHER'
}
