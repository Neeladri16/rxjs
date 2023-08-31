import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit{

  DellAvailable(){
    return false;
  }
  HpAvailable(){
    return false;
  }

  promiseVal;

  dell={
    brand:'Dell',
    hardDisk:'2 TB',
    color:'Black'
  }

  hp={
    brand:'Hp',
    harddDisk:'2 TB',
    color:'Silver'
  }

  notAvaill={
    brand:'Not Available',
    status:'FAILED'
  }

  ngOnInit(): void {

    let buyLaptop = new Promise((resolve,reject)=>{
          // resolve('Promise is resolved')
          // reject('Promise is rejected')
          if(this.DellAvailable()){
            setTimeout(()=>{return resolve(this.dell)},3000)
          }else if(this.HpAvailable()){
            setTimeout(()=>{return resolve(this.hp)},3000)
          }else{
            setTimeout(()=>{return reject(this.notAvaill)},3000)
          }
    });

    buyLaptop.then(res=>{
      console.log('then code =>',res)
      this.promiseVal =res
    }).catch(res=>{
      console.log('catch code =>',res)
      this.promiseVal =res
    })
  }

}
