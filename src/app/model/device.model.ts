export interface Device {
    id?: string,
    macAddress?: string,
    latitude?: number,
    longitude?: number,
    model?: string,
    type?: string,
    online?: boolean,
    interval?: number,
    intervalEvent?: any
}

export interface Devices extends Array<Device> { }