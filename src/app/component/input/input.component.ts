import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/data'
import { FileInputService } from 'src/app/service/file-input.service'
import { Router } from '@angular/router';
import {Papa} from 'ngx-papaparse'
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {
  header : any
  myData : any
  new : any
  output:any
  formatted : any
   file:any;
  fileChanged(e: any) {
    this.file = e.target.files[0];
  }
  constructor(private papa: Papa,
              private fileInputService: FileInputService,
              private router: Router, private spinner: NgxSpinnerService
              ) { }

  //ngOnInit(): void {  }
  // spinner- changed
  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }
  showSpinner() {
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 24000);
  }






  saveInput(x:any){this.fileInputService.FileInput(x).subscribe(
    data =>{
      console.log(data);
      this.myData = data;
      this.formatted=JSON.stringify(this.myData)

//       this.goToEmployeeList();
    },
    error => console.log(error));
  }




  onSubmit(){

    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
    }
    this.new= fileReader.readAsText(this.file);
    this.papa.parse(this.file,{complete: (result) => {console.log('Parsed: ', result);
                                                        this.header=result.data.splice(0,1)[0];
                                                        this.output=result.data}})
    this.saveInput(this.output);
//     showSpinner() {
//       this.spinner.show();
//       setTimeout(() => {
//         this.spinner.hide();
//       }, 5000);
//     }
  }

}











// line9
// export class InputComponent implements OnInit {
//   FileInput: FileInput = new FileInput();
//   constructor(private http: HttpClient) { }
//
//   ngOnInit(): void {
//   }
//   onSubmit(data:any){
//     console.warn(data);
//     this.display_input();
//     }
//
// }

