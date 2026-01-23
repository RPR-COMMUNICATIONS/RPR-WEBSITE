import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OllieService {
    // THE SINGAPORE ENDPOINT
    private readonly endpoint = 'https://asia-southeast1-rpr-corporate-site.cloudfunctions.net/ollieChat';

    constructor(private http: HttpClient) { }

    sendMessage(userPrompt: string): Observable<any> {
        // Note: We no longer send an API key. 
        // The Cloud Function handles the key internally via Secret Manager.
        return this.http.post(this.endpoint, { prompt: userPrompt });
    }
}
