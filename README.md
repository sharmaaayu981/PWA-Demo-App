# PWA DEMO APPLICATION

### STEPS
- Create an app manifest
- Add it to your base HTML template
- Create the service worker
- Serve the service worker on the root of the scope you used in the manifest
- Add a <script> block to your base HTML template to load the service worker
- Deploy your progressive web app
- Use your progressive web app!


### Create an App Manifest
An app manifest is a JSON file containing the following information:

The canonical name of the website
A short version of that name (for icons)
The theme color of the website for OS integration
The background color of the website for OS integration
The URL scope that the progressive web app is limited to
The start URL that new instances of the progressive web app will implicitly load
A human-readable description
Orientation restrictions (it is unwise to change this from "any" without a hard technical limit)
Any icons for your website to be used on the home screen (see the above manifest generator for autogenerating icons)
This information will be used as the OS-level metadata for your progressive web app when it is installed.

### Here is an example web app manifest from my portfolio site

This is a Sample [Manifest.json](https://github.com/sharmaaayu981/PWA-Demo-App/blob/master/MyPortfolio/MyPortfolio/manifest.json) used in my project.

### Add the Manifest to Your Base HTML Template

I suggest adding the HTML link for the manifest to the lowest level HTML template of your app, or, in the case of a pure client-side web app, its main index.html file, as it needs to be as visible by the browser client trying to install the app. Adding this is simple. Assuming you are hosting this manifest at the path /static/manifest.json, simply add it to the <head> section:

<link rel="manifest" href="/manifest.json">

### Now we can create and add the service worker.

### Create the Service Worker
When service workers are used with the fetch event, you can set up caching of assets and pages as the user browses. This makes content available offline and loads it significantly faster. We are just going to focus on the offline caching features of service workers today instead of automated background sync, because iOS doesn't support background sync yet (although things are moving in a good direction).

At a high level, consider what assets and pages you want users of your website always to be able to access some copy of (even if it goes out of date). These pages will additionally be cached for every user to that website with a browser that supports service workers. I suggest implicitly caching at least the following:

Any CSS, JavaScript or image files core to the operations of your website that your starting route does not load
Contact information for the person, company or service running the progressive web app
Any other pages or information you might find useful for users of your website
For example, I have the following precached for my portfolio site:

My homepage (implicitly includes all of the CSS on the site) /
My blog index /blog/
My contact information /contact
My resume /resume
The offline information page /offline.html
This translates into the following service worker code:


You host the above at <your-scope>/sw.js. This file must be served from the same level as the scope. There is no way around this, unfortunately.

### Load the Service Worker
To load the service worker, we just add the following to your base HTML template at the end of your <body> tag:

<script>
 if (!navigator.serviceWorker.controller) {
     navigator.serviceWorker.register("/sw.js").then(function(reg) {
         console.log("Service worker has been registered for scope: " + reg.scope);
     });
 }
</script>

And then deploy these changes – you should see your service worker posting logs in your browser’s console. If you are testing this from a phone, see platform-specific instructions here for iOS+Safari and here for Chrome+Android.

### Deploy Your Progressive Web App
Deploying your web app is going to be specific to how your app is developed. If you don't have a place to put it already, Heroku offers a nice and simple way to host progressive web apps. Using the static buildpack is the fastest way to deploy a static application (i.e. one that is only HTML, JavaScript, and CSS). You can look at my fork of GraphvizOnline for an example of a Heroku-compatible progressive web app. Note that if you deploy this, you will need to edit the start URL in the manifest to the URL that will reach the deployed website – for instance, sandy-beach-3033.herokuapp.com.
