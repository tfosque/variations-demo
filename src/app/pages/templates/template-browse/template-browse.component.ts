import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  template_gl92501052 as dataSrc,
  template_gl92631048 as dataSrc2,
} from 'src/app/services/templateData';
import * as _ from 'lodash';

@Component( {
  selector: 'app-template-browse',
  templateUrl: './template-browse.component.html',
  styleUrls: ['./template-browse.component.scss'],
} )
export class TemplateBrowseComponent implements OnInit {
  data: any = dataSrc;
  multiVariationData: any = new BehaviorSubject<any>( {} );
  currSku = new BehaviorSubject<any>( {} );
  defaultSku = new BehaviorSubject<string>( '' );
  skus = new BehaviorSubject<any>( {} );
  templateItems = new BehaviorSubject<any>( {} );
  baseImgUrl = 'https://beaconproplus.com';
  constructor() {
    this.templateItems.next( this.data.result.templateItems );
  }

  ngOnInit(): void {
    this.templateItems.subscribe( ( templates ) => {
      console.log( { templates } );
    } );

    console.group();
    console.log( { dataSrc }, { dataSrc2 } );
    console.groupEnd();
  }
  getDefaultSku( data: any, facet: any ) {
    const res = data.multiVariationData.currentVariations[facet];
    this.defaultSku.next( res );
    console.log( data.itemNumber, { res } );
    // return default value of [0] if empty
    return res !== 'please_select' ? res : 'select';
  }

  getSkus( data: any, facet: any ) {
    // loop over allVariations // has to match items[value] for default selections
    const list = Object.entries( data.multiVariationData.skus ).map(
      ( item: any ) => {
        /*   console.group();
          console.log( 'itemNumber:', item )
          console.log( item[1] )
          console.log( item[1][facet][0] );
          console.groupEnd(); */
        return item[1][facet][0];
      }
    );
    //console.log( { list }, 'uniq:', _.uniq( list ) );
    // TODO how do i sort without affecting default or current selection
    return _.uniq( list );
  }

  handleSkuChange( item: any, type: string, selectedValue: any ) {
    const { skus } = item.multiVariationData;
    const { itemNumber } = item;

    // use selectedValue to find the sku in the list of skus --// get newSku
    const newSku = Object.entries( skus ).filter( ( sku: any ) => {
      /*  console.group();
      console.log('sku[type]', sku[1][type][0]);
      console.log({ item }, { type }, { selectedValue });
      console.groupEnd(); */
      return sku[1][type][0] === selectedValue;
    } );
    const results = newSku[0][0];
    console.log( 'newSku', { results } );

    /* update changes to other variations */
    /* if other variations value is equal to 'please_select' then use [0] first item */


    /* update image thumbnail */
    // find old sku then replace with newSku
    const update = this.templateItems.value.map( ( item: any ) => {
      //  console.log({ item });
      if ( item.itemNumber === itemNumber ) {
        // console.log({ itemNumber });
        item.itemNumber = newSku[0][0];
        return item;
      }
    } );
    console.log(
      'update',
      update.filter( ( f: any ) => f !== undefined )
    );
    // return?
  }

  sortList( objectArray: any ) {
    const jsSort = objectArray.sort( function ( a: any, b: any ) {
      var textA = a[0].toUpperCase();
      var textB = b[0].toUpperCase();
      return ( textA < textB ) ? -1 : ( textA > textB ) ? 1 : 0;
    } );
    // console.log( { jsSort } );
    return jsSort;
  }

  /* getMatches() {
    const getMatches: any = _.intersection( this.selectedMFG, this.skuDisplayColor );
    this.matches = getMatches;
    // console.log( { getMatches } ); // console.log( 'skuDisplayMFG', this.selectedMFG ); // console.log( 'skuDisplayColor', this.skuDisplayColor );
    return getMatches;
  } */

  // get MFG matches to a selected Color
  getAllMatches( color: any = ['Acadia(750)', ['555291']] ) {
    // product 40775

    // const objectColor = this.objectColor;
    // const objectMFG = this.objectMFG;

    // loop over each mfg
    /*  const entries = Object.entries( objectMFG )
       .map( ( itemMfg: any ) => {
        
         const itemColor: any = objectColor[color[0]];
        
         if ( _.includes( itemMfg[1], itemColor[0] ) ) {          
         }        
         return _.includes( itemMfg[1], itemColor[0] ) ? { ...itemMfg, active: true } : itemMfg;
       } );
     console.log( { entries } ); */
    /* End of entries  */

    // const matchesCompare = _.compact( entries );
    // console.log( { matchesCompare } );

    /*  */
    /* this.mfgs = matchesCompare;
    this.allMatches = matchesCompare; */
    // return ['no matches']
  }

  getItemVariations( data: any, index: any, element: any ) {
    // console.log( { data }, { index } );
    const list = data[index];
    // console.log( { list } );
    const KEYS = Object.keys( list );

    console.group();
    console.log( { element } );
    console.log( index, { KEYS } );
    console.groupEnd();

    return KEYS;
  }

  openDialog() {
    // const dialogRef = this.dialogComp.open( AddProductModalPilotComponent );

    /* dialogRef.afterClosed().subscribe( result => {
      console.log( `Dialog result: ${result}` );
    } ); */
  }

}
