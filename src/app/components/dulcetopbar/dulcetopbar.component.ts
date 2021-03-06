import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dulcetopbar',
  templateUrl: './dulcetopbar.component.html',
  styleUrls: ['./dulcetopbar.component.css']
})
export class DulcetopbarComponent implements OnInit {

  constructor() { }
   loadAPI = null;
  url = "assets/assetsdulce/js/script.js";
  ngOnInit() {
  	this.loadAPI = new Promise(resolve => {
          console.log("resolving promise...");
          this.loadScript();
        });
  }
   public loadScript() {
      console.log("preparing to load...");
      let node = document.createElement("script");
      node.src = this.url;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }

}




