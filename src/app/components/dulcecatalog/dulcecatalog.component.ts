import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 
import { UserWService } from "../../services/user-w.service";


@Component({
  selector: 'app-dulcecatalog',
  templateUrl: './dulcecatalog.component.html',
  styleUrls: ['./dulcecatalog.component.css']
})
export class DulcecatalogComponent implements OnInit {

  constructor(
  	 private dataApi: DataApiService,
    public _uw:UserWService
  	) { }
public tixs:TixInterface;
   ngOnInit() {
  	  this.getAllTixs();
  }

getAllTixs(){
        this.dataApi.getAllTixs().subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("no");
       }else{
        this.tixs=res;            
        }
     });  
    }

}
