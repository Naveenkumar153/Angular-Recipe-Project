import { Component, OnInit, Output,EventEmitter } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.scss']
})

export class AppHeader implements OnInit{
    @Output() currentPage = new EventEmitter<string>();
    constructor(){

    }
    ngOnInit(){
        
    }

    onSelect(page:string){
        this.currentPage.emit(page);
    }
}