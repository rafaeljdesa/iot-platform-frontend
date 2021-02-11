import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Device } from '../model/device.model';

@Injectable({
  providedIn: 'root'
})
export class SimulacaoService {

  URL = environment.API_BASE_URL + '/event-producer-service/event-producer/iot';

  deviceData = {
    TEMPERATURE: {
      temperature: 30 // em graus Celsius
    },
    WATER: {
      waterLevel: 0.1 // em metros
    },
    PRESSURE: {
      pressureLevel: 1 // padrão
    }
  };

  constructor(private http: HttpClient) { }

  sendEvent(device: Device) {
    const dataByDeviceType = this.deviceData[device.type] || {};
    const event = { 
      deviceId: device.id,
      eventData: {
        ...dataByDeviceType
      }
    };
    return this.http.post(this.URL, event);
  }

}
