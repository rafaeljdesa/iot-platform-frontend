export interface Device {
    id?: string,
    macAddress?: string,
    latitude?: number,
    longitude?: number,
    model?: string,
    type?: string
}

export interface Devices extends Array<Device> { }