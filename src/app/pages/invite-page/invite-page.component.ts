import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-invite-page',
  templateUrl: './invite-page.component.html',
  styleUrls: ['./invite-page.component.css']
})
export class InvitePageComponent implements OnInit {
  tripId: String;
  invitedUserName: String;
  error: String;
  constructor(private tripService: TripService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.tripId = params.id;
    });
  }

  submitForm(form) {
    this.tripService.inviteOne(this.invitedUserName,this.tripId)
    .then((result) => {
      this.router.navigate(['/trip', this.tripId]);
    })
    .catch((err) => {
          this.error = err.error.code;
        });
  }

}
