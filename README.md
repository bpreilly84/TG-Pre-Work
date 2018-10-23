# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

By navigating to https://www.techtonicgroup.com/, when you click on a link, your browser and operating system figure out where you've clicked.  The web page that you're viewing has hidden information associated with whatever you clicked on.  That's called a Uniform resource locator (URL).  That indicates the next web page that you want to view. Embedded inside of the URL is the name of the web site that holds the page that you've asked for.  Your browser takes that URL, breaks out the name of the web site, and then uses the DNS to get an IP address for the site. Your browser then opens a TCP connection to the web site over IP.  It asks to speak to the HTTP server which then provides the next web page in HTML that your browser renders.

## From start to finish how does that data reach you to be rendered in the browser?

Once the browser receives the correct IP address it will build a connection with the server that matches IP address to transfer information. Browsers use internet protocols to build such connections. There are a number of different internet protocols which can be used but TCP is the most common protocol used for any type of HTTP request.


## What code is rendered in the browser?

Typically a browser will request HTML, CSS, JavaScript and image content from a server and interpret them based on web standards and specifications. They follow standards because it allows websites to behave the same way across all browsers, and creates less work and fewer headaches for web developers.

## What is the server-side code’s main function?

Most large-scale websites use server-side code to dynamically display different data when needed, generally pulled out of a database stored on a server and sent to the client to be displayed via some code like HTML and JavaScript.
The biggest benefit of server-side code is that it allows you to tailor website content for individual users. Dynamic sites can highlight content that is more relevant based on user preferences and habits. It can also make sites easier to use by storing personal preferences and information — for example reusing stored credit card details to streamline subsequent payments.
It can even allow interaction with users of the site, sending notifications and updates via email or through other channels. All of these capabilities enable much deeper engagement with users.

## What is the client-side code’s main function?

Client side programming has mostly to do with the user interface, with which the user interacts. In web development it's the browser, in the user's machine, that runs the code, and it's mainly done in javascript and flash. This code must run in a variety of browsers. These are static files that don’t change throughout your application’s life. Static files need to exist somewhere so that your users can download and run them in their browser on the client side

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

All your frontend JavaScript files can be bundled into a single JavaScript file. Bundling your application removes anything that isn’t essential. This includes shortening names and placing all JavaScript code in one file. It will also compile your code into the correct JavaScript version. This is so all web browsers can understand and run it. When your code is bundled, you just have to copy the files into your web server. Then configure your web server to serve files stored at that location.

## How many instances of the server-side code are available at any given time?

Whenever you visit a website, your browser makes a request to the server that contains the contents of the website. The request usually only takes a few milliseconds, but that ultimately depends on a multitude of factors like Your internet speed, the location of the server, how many users are trying to access the site, and how optimized the website is.
Once the request is done processing, your browser gets back the fully rendered HTML and displays it on the screen. If you then decide to visit a different page on the website, your browser will once again make another request for the new information. This will occur each and every time you visit a page that your browser does not have a cached version of.
It doesn’t matter if the new page only has a few items that are different than the current page, the browser will ask for the entire new page and will re-render everything from the ground up

## What is runtime?

Runtime is the period of time when a program is running. It begins when a program is opened and ends with the program is quit or closed.

## How many instances of the the databases connected to the server application are created?

You can run multiple instances of the Database Engine on a computer. One instance can be the default instance. The default instance has no name. If a connection request specifies only the name of the computer, the connection is made to the default instance. A named instance is one where you specify an instance name when installing the instance. A connection request must specify both the computer name and instance name in order to connect to the instance. There is no requirement to install a default instance; all of the instances running on a computer can be named instances.
