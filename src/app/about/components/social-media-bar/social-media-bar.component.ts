import { Component, OnInit } from '@angular/core';
import { faFacebookF, faTwitter, faDribbble, faLinkedinIn, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-social-media-bar',
    templateUrl: './social-media-bar.component.html',
})
export class SocialMediaBarComponent implements OnInit {
    constructor() { }

    socialIcons = {
        twitter: faTwitter,
        facebook: faFacebookF,
        dribbble: faDribbble,
        linkedin: faLinkedinIn,
        instagram: faInstagram,
        googleplus: faGooglePlusG
    };

    ngOnInit(): void { }
}
