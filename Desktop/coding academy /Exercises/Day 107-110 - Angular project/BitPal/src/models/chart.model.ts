import { ChartType } from "angular-google-charts";

export interface Chart { 
        type:ChartType
        data:Array<any>
        title:string
        options?:object
        style?:object
      
}
export interface DataPoint{
        x:number
        y:number 
}