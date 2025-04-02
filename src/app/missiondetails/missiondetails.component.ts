import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mission } from '../models/mission';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missiondetails',
  imports: [],
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css'
})
export class MissiondetailsComponent implements OnInit {

  flight_number: number = 0
  @Input() mission: Mission | null = null

  constructor(private route: ActivatedRoute, private spacexapiService: SpacexapiService ){}

  ngOnInit(){
    this.route.params.subscribe(value => {
      this.flight_number = parseInt(value["flight_number"])
    })

    this.getMissionDetails()
  }

  private getMissionDetails() {
      this.spacexapiService.getMissionDetails(this.flight_number).subscribe(
        (data:Mission) => {
          this.mission = data
        },
        (error) => {
          console.log(error)
        }
      )
    }

}
