import { Component,OnChanges,OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
   
  <app-ng-style></app-ng-style>
  <app-css></app-css>
  <app-clases></app-clases>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit,OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,AfterViewChecked, OnDestroy {

  constructor() {
    console.log("constructor");
    
  }
  
  ngDoCheck(){console.log("ngDoCheck");
  }
  ngOnChanges(){console.log("ngOnChanges");
  }
  ngOnInit(){console.log("ngOnInit");
  }
  ngAfterContentInit(){console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(){console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(){console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(){console.log("ngAfterViewChecked");
  }
  ngOnDestroy(){console.log("ngOnDestroy");
  }

}
