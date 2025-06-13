import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { gapi } from 'gapi-script';

@Injectable({
  providedIn: 'root'
})
export class HealthcareDataService implements OnInit {

  constructor() {
    //this.params.set('key', this.apiKey);
  }

  private http = inject(HttpClient);

  private requestUri = "";

  private apiKey = "AIzaSyBgQDdJtayuXa4qNzZpXfrEv_IYg4VNxUg"; // todo: move this to safe area or use Auth2.0 client ID instead
  private clientID = "505842476878-qte3bfrme0vahpinaalrk14vv4qa10l8.apps.googleusercontent.com";
  private clientSecret = "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";
  private scopes = "https://www.googleapis.com/auth/spreadsheets.readonly";
  /*private params = new HttpParams();*/

  private googleApiBaseUrl = "https://sheets.googleapis.com/v4/spreadsheets/";
  //private batchGetStringWithParams = "values:batchGet?&ranges=Transparency%202024%20-%20Ind%20QHP!C4:C&ranges=Transparency%202024%20-%20Ind%20QHP!D4:D&ranges=Transparency%202024%20-%20Ind%20QHP!E4:E&ranges=Transparency%202024%20-%20Ind%20QHP!H4:H&ranges=Transparency%202024%20-%20Ind%20QHP!J4:J&ranges=Transparency%202024%20-%20Ind%20QHP!AR4:AR&ranges=Transparency%202024%20-%20Ind%20QHP!AS4:AS&majorDimension=COLUMNS";
  private batchGetString = "values:batchGet";

  private spreadsheetId2022 = "1MnWHYYVoQyCwHyXib24FI68oOXp8is8XfuMQ61FvSEk";
  private spreadsheetId2023 = "1qP_iy9G755g8GFxmoj3fzkK-fllzEPGEcsQTT1Na58A";
  private spreadsheetId2024 = "1ZOwEmUrsTF1vOY1GOgvkgRn9KdloCZIewT2GKu65wVY";

  async ngOnInit() {
    await this.initializeGapi();
  }
  
  getData(year: string): Observable<any> {

    let params = new HttpParams();
    params.set('ranges', 'Transparency%202024%20-%20Ind%20QHP!C4:C');
    params.set('ranges', 'Transparency%202024%20-%20Ind%20QHP!D4:D');
    params.set('ranges', 'Transparency%202024%20-%20Ind%20QHP!E4:E');
    params.set('ranges', 'Transparency%202024%20-%20Ind%20QHP!H4:H');
    params.set('ranges', 'Transparency%202024%20-%20Ind%20QHP!J4:J');
    params.set('ranges', 'Transparency%202024%20-%20Ind%20QHP!AR4:AR');
    params.set('ranges', 'Transparency%202024%20-%20Ind%20QHP!AS4:AS');
    params.set('majorDimension', 'COLUMNS');



    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.clientID}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'localhost',
      //'x-api-key': this.apiKey
    })

    // Build Google Sheets API request string
    if (year == "2022") {
      this.requestUri = this.googleApiBaseUrl.concat(this.spreadsheetId2022, this.batchGetString);
    }
    else if (year == "2023") {
      this.requestUri = this.googleApiBaseUrl.concat(this.spreadsheetId2023, this.batchGetString);
    }
    else if (year == "2024") {
      this.requestUri = this.googleApiBaseUrl.concat(this.spreadsheetId2024, this.batchGetString);
    }

    // Send request
    if (!this.requestUri) {
      console.log("Request API string not properly constructed");
      return of();
    }

    console.log("sending getData http request");
    console.log("request string: " + this.requestUri);
    return this.http.get<any>(this.requestUri, { headers, params });

    
  }

  // Initialize Google API
  async initializeGapi() {
    await gapi.load('auth2', () => {
      gapi.auth2.init({
        apiKey: this.apiKey,
        client_id: this.clientID,
        scope: this.scopes
      });
    });
  }

  async getAccessToken() {
    const authInstance = gapi.auth2.getAuthInstance();
    const user = await authInstance.signIn();
    const accessToken = user.getAuthResponse().access_token;
    return accessToken;
  }
}
