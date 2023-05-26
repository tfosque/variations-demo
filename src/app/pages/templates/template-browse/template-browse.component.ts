import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  template_gl92501052 as dataSrc,
  template_gl92631048 as dataSrc2,
} from 'src/app/services/templateData';
import * as _ from 'lodash';

@Component({
  selector: 'app-template-browse',
  templateUrl: './template-browse.component.html',
  styleUrls: ['./template-browse.component.scss'],
})
export class TemplateBrowseComponent implements OnInit {
  data: any = dataSrc;
  multiVariationData: any = new BehaviorSubject<any>({});
  currSku = new BehaviorSubject<any>({});
  defaultSku = new BehaviorSubject<string>('');
  skus = new BehaviorSubject<any>({});
  templateItems = new BehaviorSubject<any>({});
  baseImgUrl = 'https://beaconproplus.com';
  constructor() {
    this.templateItems.next(this.data.result.templateItems);
  }

  ngOnInit(): void {
    this.templateItems.subscribe((templates) => {
      console.log({ templates });
    });

    console.group();
    console.log({ dataSrc }, { dataSrc2 });
    console.groupEnd();
  }
  getCurrentSku(data: any, facet: any) {
    const res = data.multiVariationData.currentVariations[facet];
    this.defaultSku.next(res);
    // console.log({ res });
    return res;
  }

  getSkus(data: any, facet: any) {
    // loop over allVariations
    const list = Object.entries(data.multiVariationData.skus).map(
      (item: any) => {
        /*  console.group();
        console.log(item[1][facet][0]);
        console.groupEnd(); */
        return item[1][facet][0];
      }
    );
    // console.log({ list });
    return _.uniq(list);
  }
}
