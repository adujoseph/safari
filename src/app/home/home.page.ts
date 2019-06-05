import { Component } from '@angular/core';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private safariViewController: SafariViewController) {}

  openweb(){
    alert('pressed');
    this.safariViewController.isAvailable().then((available: boolean) => {
      if (available) {
          this.safariViewController.show({
            url: 'http://www.tnpsc.gov.in/',
            hidden: false,
            animated: false,
            transition: 'curl',
            enterReaderModeIfAvailable: true,
            tintColor: '#ff0000'
            })
            // .then((result: any) => {
            //       if(result.event === 'opened') console.log('Opened');
            //       else if(result.event === 'loaded') console.log('Loaded');
            //       else if(result.event === 'closed') console.log('Closed');
            //    },(error: any) => console.error(error)
            //   );
          } else {
      // use fallback browser, example InAppBrowser
      }
      }
      );
}

}
