import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Device } from '../model/device.model';

@Injectable({
  providedIn: 'root'
})
export class SimulacaoService {

  URL = environment.API_BASE_URL + '/event-producer-service/event-producer/iot';

  constructor(private http: HttpClient) { }

  sendEvent(device: Device) {
    const dataByDeviceType = this.getDeviceData()[device.type] || {};
    const event = { 
      deviceId: device.id,
      eventData: {
        ...dataByDeviceType
      }
    };
    return this.http.post(this.URL, event);
  }

  private getDeviceData() {
    return {
      TEMPERATURE: {
        temperature: this.randomNumber(29, 31) // em graus Celsius
      },
      WATER: {
        waterLevel: this.randomNumber(0, 0.2) // em metros
      },
      PRESSURE: {
        pressureLevel: this.randomNumber(1, 1.1) // padrão
      }
    };
  }

  private randomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

}
