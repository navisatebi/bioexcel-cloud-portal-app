import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { BiotoolsApplication } from './biotools-application';

@Injectable()
export class BiotoolsApplicationService {

  constructor(private _http: Http) {
  }

  public getAll(): Observable<BiotoolsApplication[]> {
    console.log('[BiotoolsApplciationService] Getting all applications');

    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    return this._http.get(
      "https://dev.bio.tools/api/tool/" + "?page=1&format=json&collection=BioExcel",
      {
        headers: headers
      }
    )
    .map(res => this.processResult(res))
    .catch(this.handleError);
  }

  private processResult(res: Response) {
    console.log('[BiotoolsApplciationService] Processing response %O', res);
    let jsonRes = res.json();
    console.log('[BiotoolsApplciationService] Processing json response %O', jsonRes);
    return <BiotoolsApplication[]>jsonRes.list;
  }

  private handleError(error: Response) {
    console.error('[BiotoolsApplciationService] error %O', error);
    return Observable.throw(<Error>error.json());
  }
}