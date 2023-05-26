import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class TemplateService {

  private templateItems = new BehaviorSubject<any>( [] );
  public templateItems$ = this.templateItems.asObservable();

  constructor() { }

  updateItem( item: any ): void {
    this.templateItems.next( item );
  }



}
