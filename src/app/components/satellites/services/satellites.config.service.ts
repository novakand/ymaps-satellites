import { Observable, shareReplay } from "rxjs";
import { SatConfigFile } from "../interfaces/sat-config-file.interface";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SatConfigService {

  private readonly configs$ = this.http
    .get<Record<string, SatConfigFile>>(
      '/assets/data/satlan_config_files.json'
    )
    .pipe(
      shareReplay(1)
    );

  constructor(
    private readonly http: HttpClient
  ) {}

  getConfigs(): Observable<Record<string, SatConfigFile>> {
    return this.configs$;
  }
}