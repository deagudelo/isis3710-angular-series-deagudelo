import { Component, OnInit } from "@angular/core";

import { SourceService } from "../source.service";

@Component({
  selector: "app-source-list",
  templateUrl: "./source-list.component.html",
  styleUrls: ["./source-list.component.css"]
})
export class SourceListComponent implements OnInit {

  constructor(private sourceService: SourceService) { }

  sources: any[];
  average: Number;

  getSources() {
    this.sources = this.sourceService.getSources();
    computeAverage(this.sources);
  }
  computeAverage(private list: []){
    average = 0;
    for(let source of list){
      
    }
    
  }

  ngOnInit() {
  	this.getSources();
  }
  }