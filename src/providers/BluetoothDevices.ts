import {Injectable} from '@angular/core';

@Injectable()
export class BluetoothDevices{
    public devices : any = []

    constructor(){
        console.log("Devices!");
    }

    talk(){
        console.log("uep!")
    }

}