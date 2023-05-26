import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class TemplateBrowseComponent implements OnInit, OnDestroy {
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

  ngOnDestroy(): void {
    console.log('Destroyed....');
  }

  /* getIfEmpty(valsku: any) {
    console.log(':', { valsku });
    if (valsku === 'select') {
      console.log('getEmpty:', { valsku });
      return 'select';
    } else {
      return valsku;
    }
  } */
  getCurrentSku(data: any, facet: any) {
    const res = data.multiVariationData.currentVariations[facet];
    // if no selection has been made default to first sku and update table data
    /* if (res === 'please_select') {
      console.log('I am empty sku......', { res });
      return 'select';
    } */
    this.defaultSku.next(res);
    console.log({ facet }, { res });
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

  handleSkuChange(item: any, type: string, selectedValue: any) {
    const { skus } = item.multiVariationData;
    const { itemNumber } = item;

    // use selectedValue to find the sku in the list of skus
    // get newSku
    const newSku = Object.entries(skus).filter((sku: any) => {
      /*  console.group();
      console.log('sku[type]', sku[1][type][0]);
      console.log({ item }, { type }, { selectedValue });
      console.groupEnd(); */
      return sku[1][type][0] === selectedValue;
    });
    const results = newSku[0][0];
    console.log('newSku', { results });

    /* update image thumbnail // find old sku then replace with newSku */
    const updateItemsSku = this.templateItems.value.map((item: any) => {
      if (item.itemNumber === itemNumber) {
        item.itemNumber = newSku[0][0];
        return item;
      }
    });
    console.log(
      'update',
      updateItemsSku.filter((f: any) => f !== undefined)
    );

    /* update other variations */
    // loop over other variations using skus list and update templateItems
    Object.entries(skus).map((skuItem) => {
      console.group();
      console.log({ skuItem });
      console.groupEnd();
    });
  }
  // return?
}
