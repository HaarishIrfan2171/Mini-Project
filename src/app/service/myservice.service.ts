import { HttpClient, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(
    private http: HttpClient
  ) { }

  getforcast(params): Observable<any>{
    let header = {
      "Transfer-Encoding": "chunked",
      "Connection": "keep-alive",
      "Vary": "Accept-Encoding",
      "CDN-PullZone": "93447",
      "CDN-Uid": "8fa3a04a-75d9-4707-8056-b7b33c8ac7fe",
      "CDN-RequestCountryCode": "GB",
      "CDN-ProxyVer": "1.02",
      "CDN-RequestPullSuccess": "True",
      "CDN-RequestPullCode": "200",
      "CDN-CachedAt": "08/29/2022 16:54:10",
      "CDN-EdgeStorageId": "946",
      "CDN-Status": "200",
      "CDN-RequestId": "0de541d767392372781d901c42713dd2",
      "CDN-Cache": "HIT",
      "Cache-Control": "public, max-age=180",
      "Content-Type": "application/json",
      "Date": "Mon, 29 Aug 2022 16:54:16 GMT",
      "Server": "BunnyCDN-FR-947"
    }
    return this.http.get('http://api.weatherapi.com/v1/forecast.json', {params: params, headers: header})
  }
}
