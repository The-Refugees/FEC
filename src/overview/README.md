The Overview Widget is responsible for communicating the factual informatino about the product of choice and its various styles. It is currently using the react Image Gallery npm package to display the images and its matching styling package. The Overview and its children Components are all react based and using react hooks.

OverView -
  State: current style, a list of all available styles, and the products rating
  Props: current product object.
  Functionality: rerenders on new style selection or new product selection

The Overview component is comprised of 4 components

1) Gallery -
  State: a full screen identifier
  Props: List of Product images
  Functionality: Renders a completely functional carousel from npm React-image gallery. this image gallery manages the current image index within it.
2) Product Info
  State: No State
  Props: takes in the current product information,, the current style information and the rating information
  Functionality: only looks to see if the product is on sales and if so it renders slytly differentely otherwise this component has limited custom functionality.
3) Style Selector
  State: current style
  Props: the current product, a list of all the styles, and a style update handler
  Functionality: upon clicking on a new style the style update handler will be called which is defined in the overview application. this function will update the state of the overview application, update the state in overview and initiate a rerender with the new style information to the other children components.
4) AddToCart
  State: current size selected, current quantity selected and an activity boolean
  Props: only passes in the style information (which also holds all the skus, sizes and quantities available)
  Functionality: thie component has a couple of functional items
    a. if there are no sizes and quantities available, the add to cart button will go inactive.
    b. if there are sizes and quantities available but the user has not selected them, the add to cart button will prompt the user to select a size by opening up the size drop down.
    c. Once a size is selected the default quantity is 1 so the user does not have to select a quantity as one will be appointed to them .
    d. the quantities avaiable to select are the the maximum of what that sku has available or 15. which ever is smaller.
    e. upon selecting a size and the optional quantity, pressing the add to cart button will log the style, size and quantity. 

