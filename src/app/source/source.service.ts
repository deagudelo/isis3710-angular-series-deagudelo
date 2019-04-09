import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import data from "../../assets/data.json";
import serie1 from "../../assets/serie-1.json";
import serie2 from "../../assets/serie-1.json";
import serie3 from "../../assets/serie-1.json";
import serie4 from "../../assets/serie-1.json";
import serie5 from "../../assets/serie-1.json";
import serie6 from "../../assets/serie-1.json";

var series = [serie1,serie2,serie3,serie4,serie5,serie6];

console.log("series:", series);

@Injectable({
  providedIn: "root"
})

export class SourceService {

  constructor(private http: HttpClient) { }

  getSources(): any[] {
    console.log(data);
    return data;
  }

  getDetails(id: string){
    return series[Number(id)];
  }
}