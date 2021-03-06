import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';

import { OfferCreatePage } from '../offer-create/offer-create';
import { OfferModalPage } from '../offer-modal/offer-modal';

/**
 * Generated class for the PointListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
	selector: 'page-offers',
	templateUrl: 'offers.html',
})
export class OffersPage {
	private _offerCreateModal;

	offers = [
		{
			img: "https://www.projectlinus.org/images/image-2.jpg",
			price: "For Charity",
			reward: "Buy one blanket, donate one",
			description: "At Project Linus, a non-profit organization, we provide homemade blankets to children in need. Our blankets are lovingly made by adults.",
			creator: "projectlinus",
			isActivated: false
		}
	];

	balance: any = 500;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public modalCtrl: ModalController,
		public platform: Platform,
		public viewCtrl: ViewController
	) {
		this._offerCreateModal = this.modalCtrl.create(OfferCreatePage);
		this._offerCreateModal.onDidDismiss(data => {
			if (data) {
				this.offers.push(data);
			}
		});
	}

	presentOfferCreate() {
		this._offerCreateModal.present();
	}

	presentOfferModal(offer) {
		let offerModal = this.modalCtrl.create(OfferModalPage, { "offer": offer });
		offerModal.onDidDismiss(data => {
			if (data) {
				var index = this.offers.indexOf(data);
				if (index !== -1) {
					this.offers[index] = data;
				}
			}
		});
		offerModal.present();
	}

	onActivateClicked(offer) {
		offer.isActivated = true;
	}

	async ionViewDidLoad() {
		/*
		this.tokenIndex = this.navParams.get("tokenIndex");
		this.token = this.navParams.get("token");

		if (!this.token && this.tokenIndex) {
			this.tokens = await this.LoyalXProvider.TokenFactory.getTokensByOwner();
			this.token = this.tokens[this.tokenIndex];
		}
		let aToken = new this.LoyalXProvider.Token(this.token.address);
		let tempBalance = (await aToken.getBalance());
		*/
	}

}
