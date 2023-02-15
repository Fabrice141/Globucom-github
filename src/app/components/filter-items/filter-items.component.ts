import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-items',
  templateUrl: './filter-items.component.html',
  styleUrls: ['./filter-items.component.scss']
})
export class FilterItemsComponent implements OnInit {

@Input() list: any;
@Output() onFilterChange = new EventEmitter();

  country: any;
  sector: any;
  group: any;


     filterList = {
        country : ['India', 'USA', 'Japan', 'Australia'],
       sector: ['IT', 'Agriculture', 'Medical'],
       group: ['QUAD', 'G7', 'G20', 'SAARC'],

        //here you can add as many filters as you want.
        };


  constructor() { }

  header = [
  'country', 'sector', 'group', 'rank'
  ]

  data = [
    { country: 'India', sector: 'IT', group: 'QUAD', rank: 1 },
    { country: 'USA', sector: 'IT', group: 'QUAD', rank: 2 },
    { country: 'Australia', sector: 'IT', group: 'QUAD', rank: 3 },
    { country: 'Japan', sector: 'Agriculture', group: 'QUAD', rank: 4 },
    { country: 'India', sector: 'Medical', group: 'QUAD', rank: 5 },
    { country: 'USA', sector: 'Agriculture', group: 'G7', rank: '6' },
    { country: 'Australia', sector: 'Agriculture', group: 'G7', rank: '7' },
    { country: 'Japan', sector: 'Medical', group: 'G7', rank: '8' },
    { country: 'India', sector: 'Medical', group: 'G20', rank: '9' },
    { country: 'Japan', sector: 'IT', group: 'G7', rank: '10' },
    { country: 'India', sector: 'Medical', group: 'G20', rank: '11' },
  ];

  copyData = this.data;

  filterChange(appliedfilters: any) {
    this.data = this.copyData;
    this.country = appliedfilters.appliedFiltersValues.country;
    this.sector = appliedfilters.appliedFiltersValues.sector;
    this.group = appliedfilters.appliedFiltersValues.group;

      if(this.country) {
    this.data = this.data.filter(item => item.country === this.country);
      }

    if (this.sector) {
      this.data = this.data.filter(item => item.sector === this.sector);
    }

    if (this.group) {
      this.data = this.data.filter(item => item.group === this.group);
    }

  }



  ngOnInit(): void {
  }

}
