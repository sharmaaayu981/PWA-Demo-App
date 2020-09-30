# PWA - PROGRESSIVE WEB APPLICATION
<img src ="Snapshots/m1.png" width= "19%" height ="50%"> <img src ="Snapshots/m2.png" width= "19%" height ="50%"> <img src ="Snapshots/m3.png" width= "19%" height ="50%"> <img src ="Snapshots/desk.png" width= "38%" height ="50%">

I am using my Portfolio Website for the DEMO. You can Use any responsive website for the same.

| Name | DEMO | <br>
| PWA |[Ayush's Portfolio](https://iayush.web.app) | <br>
| PWA |[Nilay Das's Portfolio](https://inilaydas.web.app) | <br>
| PWA |[Rahul Singh's Portfolio](https://irahulsingh.web.app) |<br>
| PWA |[Fauji Travel Agency ](https://faujitravelhp.web.app) | <br>
| PWA |[Fauji Travel Agency ](https://faujitravelhp.firebaseapp.com) |

### STEPS
- Create an app manifest
- Add it to your base HTML template
- Create the service worker
- Serve the service worker on the root of the scope you used in the manifest
- Add a <script> block to your base HTML template to load the service worker
- Deploy your progressive web app
- Use your progressive web app!


### Create an App Manifest
An app [Manifest](https://github.com/sharmaaayu981/PWA-Demo-App/blob/master/MyPortfolio/MyPortfolio/manifest.json) is a JSON file containing the following information:

The canonical name of the website
A short version of that name (for icons)
The theme color of the website for OS integration
The background color of the website for OS integration
The URL scope that the progressive web app is limited to
The start URL that new instances of the progressive web app will implicitly load
A human-readable description Orientation restrictions (it is unwise to change this from "any" without a hard technical limit)
Any icons for your website to be used on the home screen (see the above manifest generator for autogenerating icons)
This information will be used as the OS-level metadata for your progressive web app when it is installed.


### Here is an example web app manifest from my portfolio site
<img src ="Snapshots/manifest.png" width= "50%" height ="50%">

This is a Sample [Manifest.json](https://github.com/sharmaaayu981/PWA-Demo-App/blob/master/MyPortfolio/MyPortfolio/manifest.json) used in my project.

### Add the Manifest to Your Base HTML Template

I suggest adding the HTML link for the manifest to the lowest level HTML template of your app, or, in the case of a pure client-side web app, its main index.html file, as it needs to be as visible by the browser client trying to install the app. Adding this is simple. Assuming you are hosting this manifest at the path /static/manifest.json, simply add it to the <head> section:

<link rel="manifest" href="manifest.json">

### Now we can create and add the service worker.

### Create the Service Worker
When service workers are used with the fetch event, you can set up caching of assets and pages as the user browses. This makes content available offline and loads it significantly faster. We are just going to focus on the offline caching features of service workers today instead of automated background sync, because iOS doesn't support background sync yet (although things are moving in a good direction

<img src ="Snapshots/SW.png" width= "50%" height ="50%">

This is a Sample [Service-Worker](https://github.com/sharmaaayu981/PWA-Demo-App/blob/master/MyPortfolio/MyPortfolio/service-worker.js) used in my project.

Copy Paste the Content of [script](https://github.com/sharmaaayu981/PWA-Demo-App/blob/master/MyPortfolio/MyPortfolio/js/fun.js) as it is and paste in the bottom of your Html page ( it contains Javascript)

<img src ="Snapshots/SW1.png" width= "50%" height ="50%">



### Load the Service Worker
To load the service worker, we just add the following to your base HTML template at the end of your <body> tag:

<script>
 if (!navigator.serviceWorker.controller) {
     navigator.serviceWorker.register("/sw.js").then(function(reg) {
         console.log("Service worker has been registered for scope: " + reg.scope);
     });
 }
</script>



And then deploy these changes –  you should see your service worker posting logs in your browser’s console. If you are testing this from a phone, see platform-specific instructions here for iOS+Safari and here for Chrome+Android.

### Deploy Your Progressive Web App
Deploying your web app is going to be specific to how your app is developed. On firebase or on any server.

### Resources

| Name | Link |
| --- | --- |
| PWA |[Google Developers](https://developers.google.com/web/updates/2015/12/getting-started-pwa) |
| PWA |[Code Lab](https://codelabs.developers.google.com/codelabs/your-first-pwapp) |


### MIT License

Copyright (c) 2020 Ayush Sharma

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

