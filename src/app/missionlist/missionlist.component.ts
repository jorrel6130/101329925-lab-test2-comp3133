import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  imports: [],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})

export class MissionlistComponent implements OnInit {

  missions: Mission[] = []

  constructor(private spacexapiService: SpacexapiService) {}

  ngOnInit(): void {
    this.getMissions()
  }

  private getMissions() {
    this.spacexapiService.getMissions().subscribe(
      (data:Mission[]) => {
        this.missions = data
      },
      (error) => {
        console.log(error)
      }
    )
  }
}

