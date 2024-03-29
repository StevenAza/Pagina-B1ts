import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomCardService } from '../../../../services/cards/v1-card.services';

@Component({
  selector: 'app-footer-brand',
  templateUrl: './footer-brand.component.html',
  styleUrls: ['./footer-brand.component.scss']
})
export class FooterBrandComponent implements OnInit {
  imageLogo: string;
  nameBrand: any;

  constructor(private router: ActivatedRoute,
    private footerBrand: CustomCardService) {
    this.imageLogo = '';
    this.nameBrand = '';
  }

  ngOnInit() {
    this.getFooterBrandItems();
  }

  getFooterBrandItems() {
    this.footerBrand.getCustomCardInformation('brandcard').subscribe((items) => {
      if ( items.header[0].data !== undefined ) {
        this.imageLogo = items.header[0].data[0];
      }
      this.nameBrand = items.body[0].data.subtitle;
    });
  }
}
