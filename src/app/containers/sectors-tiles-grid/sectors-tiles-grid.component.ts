import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ResourcePortal} from "../../models";

@Component({
  selector: 'app-area-tiles-grid',
  templateUrl: './sectors-tiles-grid.component.html',
  styleUrls: ['./sectors-tiles-grid.component.scss']
})
export class SectorsTilesGridComponent {

  public infoSectors = [
    {
      id: 'documents',
      sector: 'DOCUMENTS',
      image: 'documents.svg'
    },
    {
      id: 'healthcare',
      sector: 'HEALTHCARE',
      image: 'healthcare.svg'
    },
    {
      id: 'education',
      sector: 'EDUCATION',
      image: 'education.svg'
    },
    {
      id: 'transportation',
      sector: 'TRANSPORTATION',
      image: 'transportation.svg'
    },
    {
      id: 'politics',
      sector: 'POLITICS',
      image: 'politics.svg'
    },
    {
      id: 'museum',
      sector: 'MUSEUM',
      image: 'museum.svg'
    },
    {
      id: 'housing',
      sector: 'HOUSING',
      image: 'housing.svg'
    },
    {
      id: 'public-utilities',
      sector: 'PUBLIC UTILITIES',
      image: 'public-utilities.svg'
    },
    {
      id: 'start-business',
      sector: 'START A BUSINESS',
      image: 'start-business.svg'
    },
  ];


  constructor(private router: Router,
              private active: ActivatedRoute) {
  }

}
