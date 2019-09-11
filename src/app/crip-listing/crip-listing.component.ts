import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { CribsService } from "./../services/cribs.service";

@Component({
  selector: "app-crip-listing",
  templateUrl: "./crip-listing.component.html",
  styleUrls: ["./crip-listing.component.css"]
})
export class CripListingComponent implements OnInit {
  cribs: any;
  error: string;

  constructor(private http: HttpClient, private CribsService: CribsService) {}

  ngOnInit() {
    this.CribsService.getAllCribs().subscribe(
      data => (this.cribs = data),
      error => (this.error = error.statusText)
    );

    this.CribsService.newCribSubject.subscribe(
      data => this.cribs.push(data)
    )
  }
}
