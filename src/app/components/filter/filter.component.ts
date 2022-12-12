import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit  {
  @Output() filterEvent = new EventEmitter<string>();
  filterType = ''

  constructor(private router: Router,private route :  ActivatedRoute){}

  ngOnInit(): void {
    this.sendFilterType(this.route.snapshot.params['type'])
  }
  sendFilterType(type: 'todos'|'nao-lidos'|'lidos'){
     this.filterType = type;
     this.router.navigate(['/home',type])
     this.filterEvent.emit(type);
  }


}
