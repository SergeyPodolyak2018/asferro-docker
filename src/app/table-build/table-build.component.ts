import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-table-build',
  templateUrl: './table-build.component.html',
  styleUrls: ['./table-build.component.css']
})
export class TableBuildComponent implements OnInit {
	data=[];
	constructor(private dataList:DataService){}
	ngOnInit() {
		this.data=this.dataList.hits;
		console.log(this.data);
	}

	isObject(input) {
		
		let temp=false;
		if (typeof input === 'object' ){
			temp= true;
		}else{
			temp= false;
		}
		return temp;
  	}
  	chekIsNumber(input) {
		let temp=false;
		if (!isNaN(input)){
			temp= false;
		}else{
			temp= true;
		}
		return temp;
  	}

}
