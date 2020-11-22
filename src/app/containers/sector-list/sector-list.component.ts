import {Component, OnInit} from '@angular/core';
import * as dataResources from '../../data/dataResources';
import {ActivatedRoute} from '@angular/router';
import {ResourcePortal} from '../../models';

@Component({
  selector: 'app-sector-list',
  templateUrl: './sector-list.component.html',
  styleUrls: ['./sector-list.component.scss']
})
export class SectorListComponent implements OnInit {

  public filteredDataResources: ResourcePortal[];

  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.filteredDataResources = dataResources.dataResources.filter(resource => resource.sector === this.route.snapshot.params.sectorId);
  }

}
