import {Injectable} from '@angular/core';

@Injectable()
export class LedManager{

    private ledModel :any =  [
			// SIDE 0: FRONT
			{side: "0", ledId: "00",order: "0", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "0", ledId: "01",order: "1", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "0", ledId: "02",order: "2", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "0", ledId: "03",order: "3", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "0", ledId: "04",order: "4", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "0", ledId: "05",order: "5", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "0", ledId: "06",order: "6", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "0", ledId: "07",order: "7", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "0", ledId: "08",order: "8", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},

			// SIDE 1 : LEFT
			{side: "1", ledId: "10",order: "0", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "1", ledId: "11",order: "1", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "1", ledId: "12",order: "2", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "1", ledId: "13",order: "3", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "1", ledId: "14",order: "4", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "1", ledId: "15",order: "5", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "1", ledId: "16",order: "6", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "1", ledId: "17",order: "7", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "1", ledId: "18",order: "8", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},

			// SIDE 2 : BACK
			{side: "2", ledId: "20",order: "0", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "2", ledId: "21",order: "1", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "2", ledId: "22",order: "2", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "2", ledId: "23",order: "3", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "2", ledId: "24",order: "4", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "2", ledId: "25",order: "5", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "2", ledId: "26",order: "6", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "2", ledId: "27",order: "7", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "2", ledId: "28",order: "8", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},

			// SIDE 3 : RIGHT
			{side: "3", ledId: "30",order: "0", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "3", ledId: "31",order: "1", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "3", ledId: "32",order: "2", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "3", ledId: "33",order: "3", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "3", ledId: "34",order: "4", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "3", ledId: "35",order: "5", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "3", ledId: "36",order: "6", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "3", ledId: "37",order: "7", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "3", ledId: "38",order: "8", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},

			// SIDE 4: TOP
			{side: "4", ledId: "40",order: "0", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "4", ledId: "41",order: "1", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "4", ledId: "42",order: "2", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "4", ledId: "43",order: "3", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "4", ledId: "44",order: "4", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "4", ledId: "45",order: "5", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "4", ledId: "46",order: "6", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "4", ledId: "47",order: "7", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false},
			{side: "4", ledId: "48",order: "8", r: "120", g: "120", b: "120", status: "OFF" ,isSecret: false}
		]

    private test: string = ""

    constructor(){
        console.log("LedManager ready!")
    }

    getLedModel(){
        return this.ledModel;
    }

    getLedById(id: string){
        for(let index in this.ledModel){
            if(this.ledModel[index].ledId == id){
                return this.ledModel[index];
            }
        }
    }

    setLedStatus(id: string, properties: any){
        try{
            let theLed = this.getLedById(id);
            theLed.r = properties.r ? properties.r : theLed.r;
            theLed.g = properties.g ? properties.g : theLed.g;
            theLed.b = properties.b ? properties.b : theLed.b;
            theLed.status = properties.status ? properties.status : theLed.status;
        }catch(e){
            console.log((<Error>e).message);
        }
    }

    


    settest(value: string){
        this.test = value;
    }

    gettest(){
        return this.test;
    }
}