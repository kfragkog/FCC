# Introduction to this Course

# Introduction to Front End Development
 - the internet: url -> IP address -> HTTP request asking for content -> the servers job is to figure out what the request wants, what to send back -> the browser gets the response back in HTML, CSS, JS and displays content
- all the logic is in the Back End, all the stuff we see and interact with is the Front End
- dynamic vs static pages eg yelp vs restaurant page
- HTML defines the structure of a webpage - the “nouns”/skeleton of a webpage - it’s mandatory
- CSS defines the style of HTML - the “adjectives”/skin of a webpage
- JS adds logic and interactivity to a webpage = the “verbs”/actions on a webpage

# Introduction to HTML
HyperText Mark up Language - it allowed to create hyper links (1990)
We tag the content: <tagName> some content </tagName>
MDN - resource for HTML, CSS, JS
Every HTML doc will start with this boilerplate - html + tab:
<!DOCTYPE html> - to define that page uses HTML5
<html> - it’s html and we then need one head and one body
<head> - metadata, everything not displayed in the browser
	<title></title>
</head>
<body>

</body>
</html>
To add comment: <!-- text --> - cmd + /
Title is important for linking to page or googling it etc
h tag is a block element (gets its own line), not inline element like strong
Ordered list has numbers, unordered has bullet points
div - way of grouping things together (like a generic container) - block level element
span - generic container, but inline

attributes - add additional info to html elements - key value pair (link html attributes in MDN) - <tag attributename = "value"></tag>

src & href - two important attributes

a (anchor) tag is how we create links to other webpages or internal ones - href is the url and between > and </a> we put the text for the link - for internal link use # and the id of the element we want to link to

relative path - add a link to a page that is relative to the one I am at (e.g page 2.html)

# Intermediate HTML
Tables - tr table row element, td element/cell inside row, th for heading in a tr OR thead and tbody

Forms
- the form tag is a container for all the inputs of a form eg the fb sign up form (all of it, so the items are submitted together): <form action = "/my-form-submitting-page" method="post"> all in puts here </form>
action: A form is going to send data to a server somewhere and this is the URL to send form data to, method: they type of HTTP request
- the input tag is what goes inside of our forms, and has the type attribute that we can create the different types
- button can be added with an input type submit (text goes to the value attribute) or a button tag
- placeholder attribute is adding the temp text in a field so a user knows what to fill it in with
- name attribute in input tags is to give name to data so we can pass the value from the form and retrieve it later or send it to where the form sends the data to - if the same name is given, then the two things are connected
- labels are really important, as they let us add captions in a form; screenreading software will use those for ppls that need accessibility tools etc
when labels are used, the input tag goes in the label, and after the text we want the label to show OR use the same id/name in the for attribute for the label and the id for the input
- Validations to enforce rules and structure to the fields in a form (in an input) - two main things we can do with HTML, required fields (called: presence validation and we do we required) and validate the type of data that the user puts in a field eg an email does look like an email and we do with changing the type to email (for this example)
- further inputs.. Radio buttons/checkboxes, select tags (dropdown menus), textarea tag
- to tell hmtl that two radio buttons are linked we use the name attribute - we give them the same name
- to submit a form we can use either input type submit or the button tag but it needs to be the last line in the form
- value gives the name attribute an actual value to pass on so we know what was chosen by the user
- for dropdowns, use select tag and option tag in it (name and value can again be used to track data)
- textarea is like text, but for multiple lines - it's a tag
- to group things we can put them in p or div (for blocks)

# Introduction to CSS6
- Stands for Cascading Style Sheets
- Seperate documents that we then include in our html file
- the General CSS rule:
  <!-- selector is where we reference existing html elements -->
  selector {
    <!-- and then we apply some style to it -->  
    property: value;
    anotherProperty: value;
  }
- we want our html and css (structure & style) to be separate
- we connect the css file with a link element and the href attribute (type needs to be there as well, text/css)
- Colours: Hexadecimal eg black #000000 first 2 correspond to how much red, next how much green, next how much blue OR RGB, ranges from 0-255 rgb(0, 255, 0) OR RGBA with transparency (0.0-1.0)
- background can be color or image (url())
- for boarder we need color, width, style
- CSS basic selectors: Element, ID, Class
  - Element selector is h1, div etc
  - ID selector when we want to single out one instance of a wider group - id="anynameIwant" and then #anynameIwant as a selector in CSS (hook) - ids need to be unique, we can have multiple but each can appear just once
  - Class is like the id but can be applied to multiple elements .anynameIwantclass
  - Text decoration to add strikethroughs, underlines etc
  - checked makes a checkbox checked by default
- CSS advanced selectors:
  - Star (applies something on everything in a page),
  - Descendant Selector (groups tags together that are nested in the same way in the page ie give me all anchors in lists -> li a),
  - Adjacent Selector (select elements that come after another element eg all uls that come after h4s - h4s and uls are equals),
  - Attribute Selector (select elements based on any attribute)
  - nth of type (select the nth of something eg 3rd ul) or an even number (even in the ())
- Inheritance & Specificity
  - inheritance is ul being coloured cause a style has been applied to body, and specificity applying that style that is the most specific to an element
  - in the console, we can see the style that is not applied to be crossed out
  - specificity order: inline, id, classes/attributes, elements

# Intermediate CSS7
- For default fonts, we can use css to define the font-family for an element
  - font size can be in px or em: which is a relative font size, em is equal to the size of the parent of the font that applies to the element in question eg 2.0em would make the element double the size of the parent (enclosing) element - it's best to set a value for the body, even if it's not used, so then all ems are relative to that and we control it fully
  - when applying a default font, you can tell the browser to dregrade to another when the first one is not available
  - google fonts, just put link in html head
- remember: to visualise changes we can make them in the console and try out how they look
- The Box Model: every element is represented as a rectangular box; each box has four edges: the margin edge, border edge, padding edge and content edge
    - to define width we can use px or %; if we say 50%, then p is 50% width of its parent element (in this case the body)
- float property to position elements left or right in their container - usually used with width to specify how much width the element that has been floated needs
- we used float to remove the default white margin that html adds to an image
- rem is similar to em but relates always to the route element of the page - no need to worry of what's nested inside of what
- hr adds a line in
- when we absolutely need to be sure that an element has specific CSS, you can use !important eg .pink-text {color: pink !important;}
- var are declared in css and given a value - then can be used throughout the document to apply that value to properties
  - vars are usually created within the root element, so they can cascade to the whole doc
  - to override them in a specific element, we can declare them again in that element with a new value
- box-shadow property applies shadows to elements
- opacity property defines the transparency of an element (1 no transparent, 0 fully transparent)
- text-transform to change the appearance of a text (Uppercase, capitalised etc)
- line-height defines the line height
- a:hover property changes the hover state of an anchor tag
- position: relative moves something away from the normal flow to the specified size and direction eg bottom:10px would move something away from the bottom by 10px
- position: absolute or fix - main difference is that fix wont move the element when user scrolls
- z-index property specifies the order elements are stacked on top of one another - takes int
- background function linear-gradient gives color transitions
- set background to an image with url() background function
- transform property with scale() function scles an element eg scale(2) will double the size
- The transform property has a variety of functions that lets you scale, move, rotate, skew, etc., your elements. When used with pseudo-classes such as :hover that specify a certain state of an element, the transform property can easily add interactivity to your elements.
- transform with skewX()/skewY() to skew an elements







# Bootstrap (3)
- It's a single file of css and single file of js to easily create responsive web sites - main features are nav bar, grid system and overall responsiveness
- to override bootstrap, we can apply our own css to its classes/attributes etc eg btn-dan



















 - Introduction to JavaScript 9 - Javascript Basics: Control Flow 10 - Javascript Basics: Functions 11 - Javascript Basics: Arrays 12 - Javascript Basics: Objects 13 - DOM Manipulation 14 - Advanced DOM Manipulation 15 - Color Game Project 16 - Intro to jQuery 17 - Advanced jQuery 18 - Todo List Projects 19 - OPTIONAL Project: Patatap Clone 20 - Backend Basics 21 - The Command Line 22 - Node JS 23 - Server Side Frameworks 24 - Intermediate Express 25 - Working With API's 26 - YelpCamp: Basics 27 - Databases 28 - YelpCamp: Data Persistence 29 - RESTful Routing 30 - Data Associations 31 - YelpCamp: Comments 32 - Authentication 33 - YelpCamp: Adding Authentication 34 - YelpCamp: Cleaning Up 35 - YelpCamp: Update and Destroy 36 - YelpCamp: UI Improvements
37 - Git and Github 38 - Deploying 39 - JavaScript: The Tricky Stuff
