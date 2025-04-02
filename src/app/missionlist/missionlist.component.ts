import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';
import { FormBuilder, Validator, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-missionlist',
  imports: [ReactiveFormsModule],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})

export class MissionlistComponent implements OnInit {

  missions: Mission[] = []
  form: any;

  constructor(private spacexapiService: SpacexapiService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      year: new FormControl()
  })
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

  search() {
    if (this.form?.valid) {
      const year = this.form.value.year
      console.log('Form data:', year);
      if (year) {
        this.spacexapiService.getMissionsByYear(year).subscribe(
          (data:Mission[]) => {
            this.missions = data
          },
          (error) => {
            console.log(error)
          }
        )
      } else {
        this.getMissions()
      }
    }
  }
}

