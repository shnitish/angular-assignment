## Licious Assignment Architecture Doc

## Pages

1. Homepage(Pages/home)
   - This component act as a wrapper for all the other components that were part of the homepage
   - Route '/home'
   - There is <router-outlet> in the template of home component becuase there is a dynamic rendering that is needed based on the current route. When user clicks on `Shop By Category` items they are redirected to different page but only some part of the homepage requires re-rendering, the other part of the page stays same.
   - So I dynamically rendered two different components using angular routing

## Components

They are reuseable components mostly

1. `add-button` component is the counter component that is used to add/remove items from the cart. It is used in 3 places
   - On Homepage Bestsellers carousel of cards
   - On Category page
   - On Cart page
2. `card` component is the component used to render the bestsellers carousel of cards on homepage.
   - It is reused again on the category page to show grid of selected category cards. It is conditionally rendered based on the type of input data that is passed to render eg: `Item` or `Category`
3. `cart` component is the component that is shown on the cart overlay drawer. It shows items in cart, total value of cart.
4. `category` component is rendered when we click the item from `Shop by category` it acts as a wrapper component.
5. `drawer` component is the overlay drawer which is show on login and cart. It acts as a wrapper to conditionally show login or cart component and toggle the drawer.
6. `login` component is used in the `drawer` wrapper component with form fields.
7. `search` is the wrapper housing component to show on `/search` route when user clicks on search field. The search input field and the wrapper components are present on different level so to have communication between both I used a global service to store the search text.
8. `search-card` is responsible for rendering the search results, it takes in the data that needs to be rendered in form of a card on the `/search` page.

## Sections

Sections are just part of the whole app that display static data and are used inside the homepage wrapper component

1. `hero` section displays the "Shop by Category" and "Bestsellers" menu
2. `city` section display the list of cities
3. `claims` is just a section which displays the commitments of the licious company
4. `contact`, `footer`, `menu` and `navbar` are just what they describe.

## Services

1. `GlobalService` is used app-wide and it is the central repository for the app, data that is needed to be shared between multiple components or storing data for frontend is kept here.
   - `store` keeps the track of items, total number of items and total price of the cart
   - `activeDrawer` is used to dynamically load `login` or `cart` component in the overlay drawer, it holds the value.
   - `searchInputSubject` is used to multicast the input value to the `search` component for inter component communication
   - `cartSubject` is used to multicast the items present in the cart
   - `totalItemsSubject` and `totalPriceSubject` is used to multicast the total number of unique items and total cost of the cart. They are used to update values on the navbar when item gets added/removed.
   - `addItemsToCart()` method just used to calculate price and update the `store`.
   - `toggleDrawer()` method sets the current active component in drawer using a service variable `activeDrawer`
   - `updateSearchInput()` method is used by the `navbar` component to update the `searchInputSubject` in the service.

## Interfaces

1. `Item` interface is used for data binding in the home page carousel component which is the `BestSellers` section.
2. `CartItem` interface is used to typecast the items that were present in the cart in the service.
3. `Store` interface is just a type for the `store` variable which holds are the varaibles related to the cart.
4. `Category` interface is used in the category page when the grid of cards is shown when user clicks a category.

I have used static image files and logos throughout the UI which are stored under the `assets`.
