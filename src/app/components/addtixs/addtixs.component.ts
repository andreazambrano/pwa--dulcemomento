import { FilePickerComponent } from '../../../assets/file-picker/src/lib/file-picker.component';
import { ValidationError } from '../../../assets/file-picker/src/lib/validation-error.model';
import { FilePreviewModel } from '../../../assets/file-picker/src/lib/file-preview.model';

import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user-interface'; 
import { CardInterface } from '../../models/card-interface'; 
import { TixInterface } from '../../models/tix-interface';  
import { UserWService } from '../../services/user-w.service';
import { DataApiService } from '../../services/data-api.service';

import { Router } from '@angular/router';
import { isError } from "util";
import { Location } from '@angular/common';
import { ConfirmEqualValidatorDirective } from '../../confirm-equal-validator.directive';

import { FormBuilder, FormGroup,  Validators } from '@angular/forms';

import { HttpClient } from  '@angular/common/http';
import { DemoFilePickerAdapter } from  '../../file-picker.adapter';


@Component({
  selector: 'app-addtixs',
  templateUrl: './addtixs.component.html',
  styleUrls: ['./addtixs.component.css']
})
export class AddtixsComponent implements OnInit {


    adapter = new DemoFilePickerAdapter(this.http,this._uw);
  @ViewChild('uploader', { static: true }) uploader: FilePickerComponent;
   myFiles: FilePreviewModel[] = [];

ngFormAddtixs: FormGroup;
  submitted = false;

  constructor(
  private  http: HttpClient,
  public _uw:UserWService, 
  private dataApiService: DataApiService,
  private authService: AuthService, 
  private location: Location,
  private router: Router,
  private formBuilder: FormBuilder
  	) { }

public user : UserInterface ={
    name:"",
    email:"",
    password:""
  };

  public card : CardInterface ={
      userd:"",
      type:"",
      phone:"",
      companyName:"",
      address:""
    };

public tix : TixInterface ={
       userd:"",
      productName:"",
      description:"",
      notes:"",
      codigo:"",
      modelo:"",
      tallas:[],
      price:0,
      discount:0,
      new:"false",
      category:"",
      status:"",
      images:[]
    };


  public isError = false;
  public isLogged =false;
  public urlCreated = "";
  public images:any[]=[];

  ngOnInit() {
    this._uw.images=[];
 this.ngFormAddtixs = this.formBuilder.group({
      productName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      notes: ['', [Validators.required]],
      price: ['', [Validators.required]],
      category: ['', [Validators.required]]
      });
  }


 get fval() {
  return this.ngFormAddtixs.controls;
  }

  sendTix(){
      this.submitted = true;
      if (this.ngFormAddtixs.invalid) {
         this._uw.errorFormAddtixs=true;
      return;
        } 
      this._uw.errorFormAddtixs=false;
      // this.user = this.authService.getCurrentUser();
      // let val=(this.user.id).toString();
      this.tix = this.ngFormAddtixs.value;
      // this.tix.userd="a"+val;
      this.tix.status="activated";
      this.tix.images=this._uw.images;
      return this.dataApiService.saveTixFree(this.tix)
        .subscribe(
            // tix => this.router.navigate(['/mytixs'])
        );
  }    
    
  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }
  set():void{
    if(this.ngFormAddtixs.value.category=='Botas y botines'){
    this._uw.botas=true;
     this._uw.moccs=false;
    this._uw.zapatos=false;

    }
    if(this.ngFormAddtixs.value.category=='Moccs'){
    this._uw.botas=false;
    this._uw.moccs=true;
    this._uw.zapatos=false;
    }
    if(this.ngFormAddtixs.value.category=='Zapatos'){
    this._uw.botas=false;
      this._uw.zapatos=true;
      this._uw.moccs=false;
    }
  }
 finish(){
    if (this._uw.errorFormAddtixs){
      this.sendTix();
    }
    this.router.navigate(['/addtixs'])
  }
  reset():void{
    this._uw.selectorA=true;
    this.router.navigate(['/addtixs']);
  }
   onValidationError(e: ValidationError) {
    console.log(e);
  }
  onUploadSuccess(e: FilePreviewModel) {
   // console.log(e);
  // console.log(this.myFiles);
  this.images=this._uw.file;
  }
  onRemoveSuccess(e: FilePreviewModel) {
    console.log(e);
  }
  onFileAdded(file: FilePreviewModel) {
    
    file.fileName="http://localhost:80/imgApi2/server/local-storage/tixsImages/"+file.fileName;
    this.myFiles.push(file);
    // this.images.push(file.fileName);

  }

  removeFile() {
  this.uploader.removeFileFromList(this.myFiles[0].fileName);
  }





}
