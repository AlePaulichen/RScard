import { Component, OnInit, Input } from '@angular/core';
import {
    IconDefinition,
    faTwitter,
    faDribbble,
    faLinkedinIn,
    faInstagram,
    faGooglePlusG,
    faFacebookF
} from '@fortawesome/free-brands-svg-icons';
import { SocialIconsColor } from '../../enums/social-icons-color.enum';

@Component({
    selector: 'rsc-social-media-bar',
    templateUrl: './social-media-bar.component.html',
})
export class SocialMediaBarComponent implements OnInit {
    constructor() { }

    @Input() socialIcons: IconDefinition[] = [faTwitter, faFacebookF, faDribbble, faLinkedinIn, faInstagram, faGooglePlusG];

    @Input() socialIconsColor: SocialIconsColor = SocialIconsColor.WHITE;

    ngOnInit(): void {
        console.log(this.socialIconsColor);
    }
}
