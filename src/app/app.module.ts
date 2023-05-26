import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HomeComponent } from './pages/home/home.component';
import { TemplateDetailComponent } from './pages/templates/template-detail/template-detail.component';
import { TemplateLineItemComponent } from './pages/templates/template-line-item/template-line-item.component';
import { TemplateSearchComponent } from './pages/templates/template-search/template-search.component';
import { TemplateBrowseComponent } from './pages/templates/template-browse/template-browse.component';
import { TemplateService } from './services/template.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateDetailComponent,
    TemplateLineItemComponent,
    TemplateSearchComponent,
    TemplateBrowseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSortModule,
    MatDialogModule,
    MatBadgeModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [TemplateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
