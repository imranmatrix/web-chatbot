import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  ngOnInit() {
    this.loadChatWidget();
  }

  loadChatWidget(token=false) {
    // Set global variables
    (window as any).chat_widget_reference_no = '6rtket9h6nh66thr61jp8db16mtk2e9tc8wp8t8';
    (window as any).bot_type = 'Full';
    (window as any).token = token;


    // Load the chat widget script
    const scriptPing = document.createElement('script');
    scriptPing.type = 'text/javascript';
    scriptPing.src = 'https://talkk7uatchat.talkk.in/ping';
    document.body.appendChild(scriptPing);

    // Load the chat widget CSS
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://talkk7uatwebchat.talkk.in/index.css';
    document.head.appendChild(linkElement);

    // Load the chat widget JS
    const scriptWidget = document.createElement('script');
    scriptWidget.src = 'https://talkk7uatwebchat.talkk.in/index.js';
    scriptWidget.defer = true;
    document.body.appendChild(scriptWidget);
  }


}
