make all code *codeIneedtoSeeEasily*

# HTML [cleanup in progress]

?src & href - two important attributes

a (anchor) tag is how we create links to other webpages or internal ones - href is the url and between > and </a> we put the text for the link - for internal link use # and the id of the element we want to link to

relative path - add a link to a page that is relative to the one I am at (e.g page 2.html)

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

# CSS [cleanup in progress]
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
- ::before/after elements are used to add something before or after a specific element
- The animation properties control how the animation should behave and the @keyframes rule controls what happens during that animation

- to fix the issues with formatting use * {box-sizing: border-box;} at the very top

# Responsive Web Design is an approach to designing web content that responds to the constraints of different devices

    - Media Query: a new technique introduced in CSS3 that change the presentation of content based on different viewport sizes. The viewport is a user's visible area of a web page, and is different depending on the device used to access the site - consists of a media-type and if it matches they type of device, the styles are applied e.g. @media (max-width: 100px) { /* CSS Rules} for all devices with width up to 100px
    - Make an img responsive: img {max-width: 100%; display: block; height: auto;} - The max-width property of 100% scales the image to fit the width of its container, but the image won't stretch wider than its original width. Setting the display property to block changes the image from an inline element (its default), to a block element on its own line. The height property of auto keeps the original aspect ratio of the image.
    - Make an image look retina/optimise it for retina displays - set the width & height to half of the original size
    - Viewport units - Instead of using em or px to size text, you can use viewport units for responsive typography. Viewport units are relative to the viewport dimensions (width or height) of a device, and percentages are relative to the size of the parent container element.

	   -  The four different viewport units are:

    vw: 10vwwould be 10% of the viewport's width.
    vh: 3vhwould be 3% of the viewport's height.
    vmin: 70vminwould be 70% of the viewport's smaller dimension (height vs. width).
    vmax: 100vmaxwould be 100% of the viewport's bigger dimension (height vs. width).


# CSS Flexbox - create layouts for a dynamic UI

	- Container properties:
  	- Placing the CSS property *display: flex;* on an element allows you to use other flex properties to build a responsive page.

  	- Adding display: flex to an element turns it into a flex container. This makes it possible to align any children of that element into rows or columns. You do this by adding the *flex-direction* property to the parent item and setting it to row or column or row-reverse/column-reverse (reverses the order of the elements are displayed). Creating a row will align the children horizontally, and creating a column will align the children vertically.

  	-  There are several options for how to space the flex items along the line that is the main axis. One of the most commonly used is *justify-content*: center;, which aligns all the flex items to the center inside the flex container. Others options include:

      flex-start: aligns items to the start of the flex container. For a row, this pushes the items to the left of the container. For a column, this pushes the items to the top of the container.
      flex-end: aligns items to the end of the flex container. For a row, this pushes the items to the right of the container. For a column, this pushes the items to the bottom of the container.
      space-between: aligns items to the center of the main axis, with extra space placed between the items. The first and last items are pushed to the very edge of the flex container. For example, in a row the first item is against the left side of the container, the last item is against the right side of the container, then the other items between them are spaced evenly.
      space-around: similar to space-between but the first and last items are not locked to the edges of the container, the space is distributed around all the items

  - *align-items* property to align flex items along the cross axis. For a row, it tells CSS how to push the items in the entire row up or down within the container. And for a column, how to push all the items left or right within the container.
  The different values available for align-items include:

      flex-start: aligns items to the start of the flex container. For rows, this aligns items to the top of the container. For columns, this aligns items to the left of the container.
      flex-end: aligns items to the end of the flex container. For rows, this aligns items to the bottom of the container. For columns, this aligns items to the right of the container.
      center: align items to the center. For rows, this vertically aligns items (equal space above and below the items). For columns, this horizontally aligns them (equal space to the left and right of the items).
      stretch: stretch the items to fill the flex container. For example, rows items are stretched to fill the flex container top-to-bottom.
      baseline: align items to their baselines. Baseline is a text concept, think of it as the line that the letters sit on.

  - *flex-wrap* property, it tells CSS to wrap items. This means extra items move into a new row or column. The break point of where the wrapping happens depends on the size of the items and the size of the container.

    CSS also has options for the direction of the wrap:
      nowrap: this is the default setting, and does not wrap items.
      wrap: wraps items from left-to-right if they are in a row, or top-to-bottom if they are in a column.
      wrap-reverse: wraps items from bottom-to-top if they are in a row, or right-to-left if they are in a column.

	- Flex elements properties:

    - The first is the *flex-shrink* property. When it's used, it allows an item to shrink if the flex container is too small. Items shrink when the width of the parent container is smaller than the combined widths of all the flex items within it.

    The flex-shrink property takes numbers as values. The higher the number, the more it will shrink compared to the other items in the container. For example, if one item has a flex-shrink value of 1 and the other has a flex-shrink value of 3, the one with the value of 3 will shrink three times as much as the other.

    - opposite is *flex-grow*

    - The *flex-basis* property specifies the initial size of the item before CSS makes adjustments with flex-shrink or flex-grow.
      The units used by the flex-basis property are the same as other size properties (px, em, %, etc.). The value auto sizes items based on the content.

    - to set all three together use flex property flex: 1 0 10px will apply grow 1 shrink 0 and set basis to 10px

    - The *order* property is used to tell CSS the order of how flex items appear in the flex container.

    - *align-self* is to align flex items individually; once set, will override the align-items property; looks like it takes the same values as align-items

# CSS Grid helps you easily build complex web designs. It works by turning an HTML element into a grid container with rows and columns for you to place children elements where you want within the grid.

  - Turn any HTML element into a grid container by setting its display property to grid
  - For grid containers:
    - for columns use grid-template-columns property, for rows grid-template-rows. The number of parameters given to the property indicates the number of columns/rows in the grid, and the value of each parameter indicates the width of each column/height of each row
      - for the value, there are many options:
        - px
        - fr: sets the column or row to a fraction of the available space
        - auto: sets the column or row to the width or height of its content automatically
        - %: adjusts the column or row to the percent width of its container
        - e.g. grid-template-columns: auto 50px 10% 2fr 1fr; - creates 5 columns, first is as wide as its content, second 50px, third 10% of its container, and for the last two; the remaining space is divided into three sections, two are allocated for the fourth column, and one for the fifth
    - to create a grid with rows/columns of the same height/width use: repeat(no of rows, size) instead of individual sizes for the grid-template properties
      - You can also repeat multiple values with the repeat function!!
        - e.g. grid-template-columns: repeat(2, 1fr 50px) 20px; which will translates to rid-template-columns: 1fr 50px 1fr 50px 20px;
        - repeat function comes with option *auto-fill*, to be used instead of the number of repetitions
        - *auto-fit* is almost identical, the only difference is that when the container's size exceeds the size of all the items combined, auto-fill keeps inserting empty rows or columns and pushes your items to the side, while auto-fit collapses those empty rows or columns and stretches your items to fit the size of the container
    - to control the min & max size the items can have in a column/row use *minmax* for each item or in repeat:
      - e.g. minmax(50px, 200px)
    - To add gap between columns/rows use: *grid-gap*
      - if it has one value it will add it to both rows and columns
      - if it has two, first one will be for rows and the second for columns

  - For grid items:
    - To control the amount of columns/rows an item will consume, you can use the grid-column/grid-row properties in conjunction with the line numbers you want the item to start and stop at
      - e.g. grid-column: 1 / 3
    - In CSS Grid, the content of each item is located in a box which is referred to as a cell.
    - To align the content's position within its cell horizontally use the justify-self; to align the content vertically use align-self; both accept: stretch, start, center, end
      - we can also align all items with justify-items and align-items (these properties will need to exist in the container)
    - We can group cells into an area and give it a custom name with *grid-template-areas*
      - The code below merges the top three cells together into an area named header, the bottom three cells into a footer area, and it makes two areas in the middle row; advert and content. Note: Every word in the code represents a cell and every pair of quotation marks represent a row.
      - e.g. grid-template-areas:
              "header header header"
              "advert content content"
              "footer footer footer";
      - for empty cells, use (.) instead of custom label
    - To place an item in an area use *grid-area* e.g. grid-area: header;
      - grid-area can be used without a grid existing in the first place as per below
        - grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;
        - e.g. grid-area: 1/1/2/4; will consume the rows between lines 1 and 2, and the columns between lines 1 and 4  
    - Grid within a grid - we can create a grid within a grid item



# JavaScript

  - JavaScript provides seven different data types which are undefined, null, boolean (true or false), string ("blah"), symbol, number (1), and object
  - Declare a variable by putting *var* in front of it
  - Assignment operator assigns values to vars
    - e.g. myVariable = 5;
  - NaN means not a number - we get it if we perform an operation on an undefined var
  - To increment or add one to a variable use the *++* operator - to decrement use *--*
  - Decimal numbers are sometimes referred to as floating point numbers or floats
  - he remainder operator *%* gives the remainder of the division of two numbers - used to check if  number is even or odd by checking the remainder of the division of the number by 2
    - different to modulus as the remainder doesnt work well with negative numbers
  - there are operators that do both a math operation and assignment in one step like *+=* *-=* etc
  -  you can escape a quote or any other chars that cant be typed out, by placing a backslash (\) in front of the quote - This signals to JavaScript that the following char should instead appear inside the string
  - also "" and '' can be combined to avoid having to use the escape character
  - concatenate strings by using *+* / *+=*
  - *.length* to find the length of a string
  - *[]* is a way to get a character at a specific index within a string
    - to get to the the Nth-to-last character of a string use *.length - nth* e.g. to get the last letter, we can use .length - 1, 2nd to last .length - 2 etc
    - String values are immutable, which means that they cannot be altered once created - that doesnt mean that the var cannot be changed, just that the individual characters cant
  - With array variables, we can store several pieces of data in one place
    - Declare an array by *var arrayName = [firstEntry, secondEntry, ..];*
    - we can nest arrays in other arrays - called a Multi-dimensional Array
  - Indexes used to access the date inside an array
    - Unlike strings, the entries of arrays are mutable and can be changed freely - to change data in array, we can assign new value to any index
  - An easy way to append data to the end of an array is via the push() function. *.push()* takes one or more parameters and "pushes" them onto the end of the array - for the beginning of the array use *.unshift()*
  - To remove the last element from the array use *.pop()* / for the first use *.shift()* - it's used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable
  - Functions are reusable parts of code
    - Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments
  - Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code. Variables which are declared within a function, as well as the function parameters have local scope. That means, they are only visible within that function.
  - It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable
  - To send a value back out of a function use *return* statement
    - A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined
    - e.g. var sum = 0;
            function addSum(num) {
                sum = sum + num;
              }
              var returnedValue = addSum(3); // sum will be modified but returned value is undefined
  - When a return statement is reached, the execution of the current function stops and control returns to the calling location
    - we can stop a function from executing further by returning undefined if a certain condition is met
  - a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue
  - Comparison Operators - these operators return a boolean true or false value
    - the most basic, the equality operator *==*
      - to compare different types of data we need to convert one in the other (Type Coercion) which the eq operator attempts to do automatically
    - Strict equality operator *===* similar to equality one, however it does not perform a type conversion
    - *!=* not equal & strictly not equal *!==*
    - *>*, *<*, *>=*, *<=* (all perform type coercion)
    - logical and operator *&&*, logical or operator *||*
    - *switch* statements
      - switch is using === equality
      - might not be able to specify all possible values - Instead, you can add the *default* statement which will be executed if no matching case statements are found
      - if we have multiple inputs with the same output, the cases can be out one after the other and just one statement can be used
      - if we have main options, prefer switch vs if/else if
    - we dont need if statements to get true/false from a comparison! result of any comparison will return true/false as all comparison operators return boolean values
      - e.g. return a === b; will return the result of the comparison as true or false
  - Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties (like name, legs etc below)
    - e.g. var cat = {
            "name": "Whiskers",
            "legs": 4,
            "tails": 1,
            "enemies": ["Water", "Dogs"]
          };
    - e.g. var anotherObject = {
            make: "Ford",
            5: "five",
            "model": "focus"
          };
    - if your object has any non-string properties, JavaScript will automatically typecast them as strings
    - There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array
      - . for when we know the name of the property
      - [] If the property of the object you are trying to access has a space in its name, you will need to use bracket notation - note that property names will need to have ""
      - [] Another use of bracket notation on objects is to access a property which is stored as the value of a variable, by calling the variable in the []
    - to update the value of a property use .propertyName or ["propertyName"] and assign a new value (same as with vars)
    - to add a new property follow the same as above line
    - to delete a property use *delete object.propName;*
    - Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to "lookup" values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range
      - e.g. I want to return a value when a certain value is being passed - for a set range of data (like a disctionary), just set the object and then update var result with the obj[val]
    - to check if an object has a specific property use *.hasOwnProperty(propname)* method - it returns true or false
    - Objects hold data in a property, which has a key-value format. In the example above, "artist": "Daft Punk" is a property that has a key of "artist" and a value of "Daft Punk"
    - Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.
      - e.g. var ourMusic = [
              {
                "artist": "Daft Punk",
                "title": "Homework",
                "release_year": 1997,
                "formats": [
                  "CD",
                  "Cassette",
                  "LP"
                ],
                "gold": true
              }
            ];
    - Nested objects look like :
      - e.g. var ourStorage = {
              "desk": {
                "drawer": "stapler"
              },
              "cabinet": {
                "top drawer": {
                  "folder1": "a file",
                  "folder2": "secrets"
                },
                "bottom drawer": "soda"
              }
            };
    - if nested array as well as nested obj, then to access the arrray use [] (as any array) and to access the obj prop use either . or []
  - to increment a number by more than 1, use *i += 2, 3 etc...*
  - a *do...while* loop ensures that the code inside the loop will run at least once
  - Random num generators
    - to generate random fractions (decimal numbers) use *Math.random()* - it will generate a random number between 0 (inclusive) and 1 (exclusive)
    - to generate whole nums, use both random and *Math.floor()*
    - for num within a range use *Math.floor(math.random() * (max - min + 1)) + min*
  - *parseInt()* used to parse a string and return an integer
      - It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36
  - conditional operator *condition ? statement-if-true : statement-if-false;* can be used instead of if else statement

# Basic Data Structures

  - *splice()* method changes the contents of an array by removing or replacing existing elements and/or adding new elements - takes 3 parameters; first parameter represents the index at which to start changing the array, while the second parameter indicates the number of elements to delete, and third is the new item(s) to add
    - to just add something in the middle of an array use *splice(n, null, objects)*
  - *slice()* extracts a given number of elements to a new array, leaving the array it is called upon untouched. slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index) - Can be used for strings too!
  - spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: ... e.g. let thatArray = *[...thisArray]*; used just as another array object
    - Another huge advantage of the spread operator, is the ability to combine arrays, or to insert all the elements of one array into another, at any index
    - e.g. let thatArray = ['basil', 'cilantro', *...thisArray*, 'coriander'];
  - *indexOf()* takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array
  - to iterate through all the keys within an object use syntax *for...in*
    - e.g. for (let user in users) {
              console.log(user);
            };
    - In this statement, we defined a variable user, and this variable was reset during each iteration to each of the object's keys as the statement looped through the object, resulting in each user's name being printed to the console
    - To generate an array from the object data use *Object.keys()* and pass the object as an argument


# Basic Algorithm Scripting

  - The *join()* method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string
    - separator: Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (","). If separator is an empty string, all elements are joined without any characters in between them
  - The *split()* method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split
    - separator: Specifies the string which denotes the points at which each split should occur
  - To break a for loop use *break;* e.g. Finders Keepers challenge
  - *===* is called a strict comparison operator - In the case of "a === b" a and b must be the same value and also the same type for it to evaluate to true (== needs them to just be the same value)
  - methods like slice(), substr() etc have optional parameters as well - remember that these do not need to be filled, so e.g. end of extraction can be left blank to get to the end of the string


# Object Oriented Programming

  - Objects; Properties & Methods (properties that are functions); Values
  - when Methods are called they need to have (), same as a function
  - to access a property of an object in order to use it in a method we can do *objectName.propertyName*
    - if it's the same object our method is in, we can use *this.propertyName*
  - Constructors are functions that create new objects - the blueprints for the creation of new objects; they follow a few conventions:
      - Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
      - Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
      - Constructors define properties and behaviors instead of returning a value as other functions might.
    - to create an object using a constractor function follow syntax 
    *let newObjName = new Constructor()*
    - we can design our constructors to accept parameters instead of fixing the values of the properties
    - Anytime a constructor function creates a new object, that object is said to be an instance of its constructor - to verify this with the *instanceof* operator with *objName instanceof Constructor*
      - another way is to use the *constructor* propery which is a reference to the constructor function that created the instance - but not great as it can be overwritten.. 
    - to iterate through all the properties within an object use syntax *for...in*
      - e.g. for (let property in object){ do smth}
      - a different value is assigned to property in every iteration
    - To avoid having the same variable duplicated in all instances of a constructor, we can use Constructor's prototype - The prototype is an object that is shared among ALL instances of Constructor
      - to add a property to the prototype use *Constructor.prototype.propertyName = propertyValue*
      - a more efficient way tho, is to set the prototype to a new object and set multiple properties at once
        - e.g. Bird.prototype = {
                  numLegs: 2, 
                  eat: function() {
                    console.log("nom nom nom");
                  },
                  describe: function() {
                    console.log("My name is " + this.name);
                  }
                };
        - when manually setting the prototype to a new object we NEED to define the *constructor property*
      - all instances automatically have the properties on the prototype
      - Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it.
    - Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype
    - to check where a prototype is inherited from we can use *isPrototypeOf* method
      - e.g. Bird.prototype.isPrototypeOf(duck);
    - Prototype chain: cause prototype is an object, it has its own prototype.. the order is Object(supertype for all objects)->Constructor1->...->instance(subtype of constructor)
  - Don't Repeat Yourself (DRY)










































# QUESTIONS:

Q: flex shrink seems to shrink stuff even when container is large..?
Q: Auto and what size it gives to things; grid-template-columns: auto 50px 10% 2fr 1fr; why does the first item become as wide as it's content? is that what auto does? what about margin?
Q: let or var?
