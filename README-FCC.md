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
  - animation-name, animation-duration ... [TBC]

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
  	- Placing the CSS property display: flex; on an element allows you to use other flex properties to build a responsive page.

  	- Adding display: flex to an element turns it into a flex container. This makes it possible to align any children of that element into rows or columns. You do this by adding the flex-direction property to the parent item and setting it to row or column or row-reverse/column-reverse (reverses the order of the elements are displayed). Creating a row will align the children horizontally, and creating a column will align the children vertically.

  	-  There are several options for how to space the flex items along the line that is the main axis. One of the most commonly used is justify-content: center;, which aligns all the flex items to the center inside the flex container. Others options include:

      flex-start: aligns items to the start of the flex container. For a row, this pushes the items to the left of the container. For a column, this pushes the items to the top of the container.
      flex-end: aligns items to the end of the flex container. For a row, this pushes the items to the right of the container. For a column, this pushes the items to the bottom of the container.
      space-between: aligns items to the center of the main axis, with extra space placed between the items. The first and last items are pushed to the very edge of the flex container. For example, in a row the first item is against the left side of the container, the last item is against the right side of the container, then the other items between them are spaced evenly.
      space-around: similar to space-between but the first and last items are not locked to the edges of the container, the space is distributed around all the items

  - align-items property to align flex items along the cross axis. For a row, it tells CSS how to push the items in the entire row up or down within the container. And for a column, how to push all the items left or right within the container.
  The different values available for align-items include:

      flex-start: aligns items to the start of the flex container. For rows, this aligns items to the top of the container. For columns, this aligns items to the left of the container.
      flex-end: aligns items to the end of the flex container. For rows, this aligns items to the bottom of the container. For columns, this aligns items to the right of the container.
      center: align items to the center. For rows, this vertically aligns items (equal space above and below the items). For columns, this horizontally aligns them (equal space to the left and right of the items).
      stretch: stretch the items to fill the flex container. For example, rows items are stretched to fill the flex container top-to-bottom.
      baseline: align items to their baselines. Baseline is a text concept, think of it as the line that the letters sit on.

  - flex-wrap property, it tells CSS to wrap items. This means extra items move into a new row or column. The break point of where the wrapping happens depends on the size of the items and the size of the container.

    CSS also has options for the direction of the wrap:
      nowrap: this is the default setting, and does not wrap items.
      wrap: wraps items from left-to-right if they are in a row, or top-to-bottom if they are in a column.
      wrap-reverse: wraps items from bottom-to-top if they are in a row, or right-to-left if they are in a column.

	- Flex elements properties:

    - The first is the flex-shrink property. When it's used, it allows an item to shrink if the flex container is too small. Items shrink when the width of the parent container is smaller than the combined widths of all the flex items within it.

    The flex-shrink property takes numbers as values. The higher the number, the more it will shrink compared to the other items in the container. For example, if one item has a flex-shrink value of 1 and the other has a flex-shrink value of 3, the one with the value of 3 will shrink three times as much as the other.

    - opposite is flex-grow

    - The flex-basis property specifies the initial size of the item before CSS makes adjustments with flex-shrink or flex-grow.
      The units used by the flex-basis property are the same as other size properties (px, em, %, etc.). The value auto sizes items based on the content.

    - to set all three together use flex property flex: 1 0 10px will apply grow 1 shrink 0 and set basis to 10px

    - The order property is used to tell CSS the order of how flex items appear in the flex container.

    - align-self is to align flex items individually; once set, will override the align-items property; looks like it takes the same values as align-items

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




# QUESTIONS:

Q: flex shrink seems to shrink stuff even when container is large..?
Q: Auto and what size it gives to things; grid-template-columns: auto 50px 10% 2fr 1fr; why does the first item become as wide as it's content? is that what auto does? what about margin?
