import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 
import { ActivatedRoute, Params} from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-dulceproductdetail',
  templateUrl: './dulceproductdetail.component.html',
  styleUrls: ['./dulceproductdetail.component.css']
})
export class DulceproductdetailComponent implements OnInit {

  constructor(
private router: Router, 
  private dataApi: DataApiService,
  private route:ActivatedRoute,
    private location: Location,
     public _uw:UserWService,
  	) { }
public tix:TixInterface;
  ngOnInit() {
  	  // this.getAllTixs();
  	  this.getDetails(this.route.snapshot.paramMap.get('id'));
  }

// getAllTixs(){
//         this.dataApi.getAllTixs().subscribe((res:any) => {
//       if (res[0] === undefined){
//         console.log("no");
//        }else{
//         this.tixs=res;            
//         }
//      });  
//     }

     getDetails(id: string){
    this.dataApi.getTixById(id).subscribe(tix => (this.tix = tix));
    
  }


}
