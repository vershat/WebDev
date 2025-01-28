
import React from "react";
import ReactDOM from "react-dom/client";

const Title=()=>(
    <a href="/">
    <img className="logo"
    alt="logo" src="https://www.foodiesfeed.com/wp-content/uploads/2023/08/grilled-crispy-pork-with-rice.jpg">
    </img>
    </a>
);
const Header=()=>{
    return(
       <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>

       </div>
    );
};


// const RestrauntCard=()=>{
//   return(
//   <div className="card">
//     <img
//      src={ +
//       restrauntList[0].data?.cloudinaryImageId}
    
//     />
//     <h2>{restrauntList[0].data?.name}</h2>
//     <h3>{restrauntList[0].data?.cuisines.join(",")}</h3>
//     <h4>{restrauntList[0].data?.lastMileTravelString}minutes</h4>
//   </div>
//   );
// };

// const Body=()=>{
//   return(

//     <div className="restaurant-list">
//       <RestrauntCard/>
//       <RestrauntCard/>

//     </div>
//   );
// };
const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "73011",
      name: "KFC",
      uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
      city: "22",
      area: "Anand Vihar Colony",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["American", "Snacks", "Biryani"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 6.199999809265137,
      slugs: {
        restaurant: "kfc-chukkuwala-chukkuwala",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
      locality: "Clock Tower",
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5698075~p=1~eid=00000185-8b09-7c92-0e51-a04b00dc0124",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "73011",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 6.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "542132",
      name: "Domnik Pizza",
      image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAyVBMVEX////7+/vkBCwAAAAFBQX8///jACPqZ3Ojo6PkACbqcHyoqKjjAA/209alpaXy8vLiAAC4uLjnSFn09PTh4eHBwcGwsLC2trbDw8Po6Oibm5vOzs7d3d3X19eVlZXs7OzjABt2dnZra2uGhoZWVlZISEg/Pz9hYWE1NTUuLi4TExN+fn48PDxnZ2cmJiZzc3MeHh7oU2JZWVnnPlLsf4nwnqX33N756+zpW2rxrbPuk5vsfYfzvMH1zNDlETPtiZLlJD7mM0nxqa/KI/3IAAAO30lEQVR4nO1da5ubNhMVr0zrhMSEYmNjbFgb3/Ham821TdOk/f8/qjMSN4MEbN9NgOfR+ZBkWZt4zkozc2ZGLCEKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj8Ji+nUcRyDY2SMAMNmGGUw8nBSTFNYHJPJZDZbtm1yDYId/fk4uG2bXYWA0qlp27aGeOZ7awnsGGaMCaXjZ/6/nhMHauc+/E8C0U4PbRsux5LOgBFdiv/D8KqbEo96bZsuxZDiIvny9u1vIrx7LyMldwsZJd/e3d7sbYKX+H46b83mOsyBE/3Lqxdi3P0q4gTeZs/m693heN7chxNTTIv+8k5y11cvdeBk2LbpUjjIydtf/ifGLwJOCHHnt6Fq64hY0V9K7/oZOZm2bboUE2pWffoSJ4RYW6BhP5y5bL0sjT3SMi+zUnHXL7pmgh/rKjwIivq3u8ac2CdKTxP21mQfac4FrnlFUuSc3H3TyZh2N29bwGfTPzTmBPbagB6vyxsCYO0AU36BlApOPugQ77qboASwhvXfm3JCXNwo96U1QUgIl2+vVnDyu05m1GzbdCk06hD9z1dNOIFXW+hR47S8wMoSnAxpxsmrP3Uypa2aXQ2IifrXRpxcN7hIDOJac39uFSMwMR9oSJpx8lXHvKi7AEP0j004IREFXxIalzgCb5YFUmzKcuIGnHzUid9lTo4ron96U88JQZ8xGHA+BgP8V3S7VMBf00br5M0nnawObRtegQ16gXpOyGIehifkY22NfUbKgJ61W1L8/O6p4AReut+0bXgF1jtIZGv3DrpQxMk3SbBPM9iHwvahEE3qObmDNHZ3bdvwCoQn4OSvWk6m4EAiY0Ew86VHK9DshXGG3XPLiZ/LUuSc/AWcPIRtG14BJgLfvajdO1sawKtR5FP8ETMHMy4G5DGl9Zy8eKd3WhbHIvCz5OPnOJnFviKfm5U0DnmgaT4n5YRLQKdtwyswgZ+//ONnnIzphfCALCuY8G/79Zy8RAk4advwClSKwBwn95imwmqBpE1CycrWiEG3tZxwCdjdMhthn04qAjMfu8GQgv6VihmBl6xDZJjWc8Ik4KJtwyuAq1gqAhNOkIwRwVhL19Ktc6UsZAekjhMmAYO2Da9ClQhMOQHxZ+POGdBpBScGBh6vjhOUgA597r7JswKiov66jhMWZMGDDmgx/macLOgOX3cx6zjpugSsFoGZP2Hu5EjlUQdeE1JzAazFTljOCUjAsNucnK9yEZhxssf6KRi8qeDEpI4HL/FqOOm8BCTkcSMXgRknI0g8XEpDKSP4osN+lq0kOSfwyscuS0CCPzJNr43F6CyWVauEb55dVm2Txx1IY89dloBYFQFOvtdwgg5Fm8FayRBfT/9NUCfkApOUE5SAgy5LQN4d1X8Ti8AcJ2s6XWdtrsve4kQE4SG9uNth0cnWqjnpvgQkZApW6L+KP3+2d8ZbVp7e0FNae4xXBsMRmLmOL7BMqFuzTlACap2WgAQSMZfoX+o4QSbA4JMJScrI1lY0rkLC3wdruV8RkMTHObsSVMcdkIAk6LQExGmLJdH/EDvZfH7iW2B/5NEV8aL9BnfJ1mechGFozo/eZQcJzM7dJYVqGScoARedloAEIqxcBOY5IWTLFsfqlCyQBfjnLf9iOMRGILmMiF+Xn6AE9DrcBUTY1ALBU8fJjiIvrG4fuuOZ4x2RpSX1NWs+t7xHSllS54PqGddwAhJw0uEuIAMoXlnXK+MkhB8/UkIi7h1tijUmYsSSXzM2KBJPLriVGh/LJWCL9jYB/HBlIjDjZALR8wD7ZZ4kI7xqkKUp1y37MkjzOiknr3UsAncblwgETw0nED23sC1g69wHaPoS/MgkS2qJGXI3ApF9XsdJ9yUguE7Ixm2x4MnlbBsK2R2IvA1EjDNr9SQDKLwKxxkC3pY1nKAEXJ/bNroG97Dq9VpODDrzwL8S5CAITtZ1xUnwcHArcJMRnfraI0rAzWPbRtcgegBOanP7MX1cJosDYinZ8yIkpHxHmyRdDXjVfR0nKAGP3ZaABFv8mv63kJR8D33AQjF4DUKsI/Xm8fDVFHRO1vAxIGmv4eQ7yp1uS0ACduDoYy0na2yc04tGlhdM2IAif+HO9vjvtKfDuoXVnLz4rduDoByWfPQxz8konrC48NQtloIHz0jLjZjDnet6oygB7Q4PgnKwrtd7YSKb58SNBywYI9sxMa9sagn3Hopk7KAPWMejhpMvOtyqu4OgHCjIJCLwZk5pz+i4HMDTWthNB6nEog1kYAPQB3jCI98Rk3CCEnDZ4UFQDhTu+j+1nGiav8fKIpgeV9c8I1a3Y7ZgLLoNXVLLyQfseHVbAlaOPt5yAq/EihGshscojDZ8rjyKrjtYJw766ll+mEvGCUhAC8/HdBvY9RKLwMJ8LBZlWYOUT9k706kzfGDjbbgZfHozNyvhBCXgqOupfVXXq8jJFtYJllGYr51bzjw681IKhBtI6xdNOHnd8aFHjoO061XkZI57JEwCEB9pC2crVm8kl9seoYwTkIBRhw95xdhIu15FTlzIWXEGhaVvM80OAuZu6ZVgF3DXhJM3NkSwbdsm1+J6kI0+lubtN1hIpQ8rdCFHjDrczUBCT5zCKQQZJ5DGghLvOljXSzj6WOJkTo/wemOJnGySdUG2uHXOt+5Emtvj0GPUtsm1kI8+ljjxKO8Fol910wFhPg95aXIu48XfKHf8uo/UOhyIsOLRx/L5HcqqR6zkdhN5ybE46Cbh5C1yMmrb5FrMpKOPZU6wrTUlbGIpyHGAoqfRmSa8o4lKoOPAgTvx6KPgPOAJ2HicOPRmq2AVxWnGyfuuDz1yyEcfBZwseZNnkBw3YNX6kWD2T8zJ3R/Y8eq6BMTRR0sy+ig4S4snAlnKFtdMILEdg/R5bHhu9O4fnXWoOw+wTywCheeLHZ6y8WyE7O+34glRMSc9GHrkkHa9RJywYWrghJ9TIUweh2VKZJx87UHHCwE5lFgECjmB/XKh8eYhONRHLdFIl4STPnS8ENt7oglFoJgTWPmrePrGhkVyDkSUSDjBjtf12LbBDbCXdb0k62S8GGPSNjAxLdlNprMncGJ3fuiRg3W9GuVsjJJTfEySUo+PpGSHMeo5gTT2sG7b4AZgXa/vAsEj5oSfG+UlFP73oTEnf/Wh44UwZKOPEk4GBYBYbshJH4YeOVjXSzT6WM9JPObXlJM+DD1y8K5Xc06SkUfMUo7YEBTNV4s56cHQI4e06yWLO+NxYGqojU/s/bbgRWJO+jD0yCHteknzE6wi7TFxkx7nkXDSg6FHDt71as4J4yVge0d67EvCCet4dXzokUPW9arihD20QKh0KjhBCWj0IbWXd72qOBmwIRT56RUxJ1970fFCyLpeck5Y9RGfiPJETrDjNWjb3EaQdb0qONng87eAl6dxghLwvutDjxygVIUiUMoJTuhQf1KoVDfgROtFxwsh63rJOcFjta7FDiI8hRMcenxYtW1uIwwlXS8pJ1g32RGr2OWp5eR7PzpeCAfPegm6XjJOcLYAUpMp/Dl7Cif9GHrkYGe9BDbIOMFlQgnjZPIUTnjHq+tDjxzsrNf7N6+KePNZnNsblPWNncp18qvgfl+w49X1oUcO/Jzap9dlfJTsHc052pwauT/5KLjfp350vBA20y1PefYyO44xpJeDKXuF+NnLeBKoBx0vRG7W9wmw/8PjvdGft21tM5SedPrD0I+OF+Ih+mmc9KLjhdjuhZzkXnH7pSbs+Mred3PLXnS8EPc7ESdkYiW/5cJjjdD468lM0/AXX1g5TCYzNzkNZ8+G4Xq/30fziVu8L+rNfiA6CTjhTxWOQTR+yIAjmNEyhuxEgj085y+uCjfuR8cL4Ys0P+qZpGXxyMb40k4X8UtNHpwvh8QlpMmjVPlfxUJcPzpeCEP42DVIQGJzmWVxuZH6qIWj5FtpYwOX0jLpmtLjll8szhz0o+OFsMR1EDxmnfb5iHtCI09jfmonXjTr8WKxWFp4zok9r5pdHDjoZj02MVq8by86XghPXAfBib5kmTATB/jYE/YtO+YkttBHAZRsrsc4TDm0NA0JPqoPHS/EQqhbiBkbaREmbgbZRFJqP2/w4HlsL26up1MGeNbpvsjJshcdL0Qg1PxYiGZWumwKJz+RFLuadB0QyPPD+FL2rOG5X1x+Pel4IbTSeCszwE8N3zJKMgv50dp8LwMPgBUjDSnlbH3peCHSRy/cGLDnVl5N5l0Pds7amIAkiGSRmy5Fnil9Xw/OeCUQNvQSw/c8wOaT9yAm4HS8XC7H45o/DTK/mySc9KTjhTgLJlyTI8WDmJqcdiaT2/QEOYnPxAlVQvbG6NS2qY3xKBhJS3dDYn+2K5IDcEkKaxB8FnXBwwg56cEZrwSri4CTOJBsk2f8Z8luvCjSLHZM0o0mmlnK3XN337apjREK3ADZJYEkmeVL10CSxQ7dMcDFJJic42vCCZ30nqfun/FKMBS5xjRjGyW7ZxiXA5ZpxsaB11bxNVEEyzjpSccLMS3/eHOpauwrBkkrFJLaUoxJ3C6tmF1Cno22TW2MWdmSXMaW0IMuha2J620WH2+LhBSmaHixrXjPfgz4cSzLqVYiADG4JhsjdinJt24CeI64s7EMbNdz1sUI35MBPw632NAjqX9g+yXbPVgmS7ThbSUAheBN1iKQgP2RO2XBwysDmYPAwmO6ChJtOKC3Xoj9ToCbvKXob/skd0qCh1xzNVV2wdwkX57Yo3GSMu3Nu+zwtkRb3JB9GfDjKAgeYkXRanW9rlZRNIwbGWPDDyO4YuE3r+v1dRWVRkHBW/uP+Mz3027tT0yB3ybEiTyH9CH8HK9Ff5KheEkrfav6jblvMrkTktC//FhzngWbap3yTMCHBiIn82kfKtVXgeD5AZwwuTMkDulDpXpOS5v/B1Bi9yi1x2C8/cG/Fx3/l01fBi04ZvTgmSb+dvvMhP+OhAibwUQEgXfuUWbPsHwQ9ICfGf1J7BMsp45jAEbGaDQaNsdIAqOA/jGioKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCg0H/8Cy45LkLf4eybAAAAAElFTkSuQmCC",
      uuid: "f2ee37f5-9ab0-4903-9420-6cae020b0a38",
      city: "22",
      area: "Majra    Bansal Home",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "sboh9oor0cvp6ztsyhvj",
      cuisines: ["Pizzas", "Italian", "Fast Food", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: "33 MINS",
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: "domnik-pizza-patel-nagar-patel-nagar-2",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand",
      locality: "Patel Nagar",
      parentId: 22321,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "542132",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "321517",
      name: "FOOD PLANET RESTAURANT",
      uuid: "899d5dd4-200a-48b2-a321-391bb9486ec2",
      city: "22",
      area: "Majra",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "ykboewqeoxnne8fgrnui",
      cuisines: ["Indian", "Chinese", "Tandoor", "Thalis", "Fast Food"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 0.699999988079071,
      slugs: {
        restaurant: "food-planet-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "157/11, Chandra Parisar Chandra Bani Rd, Ekta Enclave, Doon Enclave, Majra, Dehradun, Uttarakhand 248171",
      locality: "Patel Nagar",
      parentId: 81850,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "321517",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 0.699999988079071,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "2.8",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "311806",
      name: "Burger King",
      uuid: "162a4dc4-50de-452a-82cf-751e18ac9952",
      city: "22",
      area: "Anand Vihar Colony",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "iqh7ew5ldfgvpd5dpz60",
      cuisines: ["Burgers", "American"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 39,
      minDeliveryTime: 39,
      maxDeliveryTime: 39,
      slaString: "39 MINS",
      lastMileTravel: 6.300000190734863,
      slugs: {
        restaurant: "burger-king-chakrata-road-ballupur",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "5/5,4/4 & 3/3, GROUND FLOOR, CHAKRATA ROAD, DEHRADUN, UTTRAKHAND",
      locality: "CHAKRATA ROAD",
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5700193~p=4~eid=00000185-8b09-7c92-0e51-a04c00dc0405",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "311806",
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        lastMileTravel: 6.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "132460",
      name: "Annapurna Andhra Mess",
      uuid: "c6460418-904b-4371-9e04-0ce8b1b46cae",
      city: "22",
      area: "Dehradun",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "zw4qx2szsy9kbszk9n3d",
      cuisines: ["South Indian", "Biryani", "North Indian"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant: "annapurna-andhra-mess-subhash-nagar-subhash-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "keshav enclave sewla khurd chandrabani road behind uttranchal PG college",
      locality: "Patel Nagar",
      parentId: 33997,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "132460",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "496677",
      name: "Uncle Ji Restaurant",
      uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
      city: "22",
      area: "Patel Nagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "kx2ghnwagcnqjtmd5jbc",
      cuisines: ["North Indian", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address: "348 santosh tower, majra road gram majra dehradun 248001",
      locality: "Patel Nagar",
      parentId: 298209,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "496677",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
];

// const RestrauntCard=(props)=>{
//   return(
//   <div className="card">
//     <img
//      src={props.restaurant.data?.image}
//     />
//     <h2>{props.restaurant.data?.name}</h2>
//     <h3>{props.restaurant.data?.cuisines.join(",")}</h3>
//     <h4>{props.restaurant.data?.lastMileTravelString}minutes</h4>
//   </div>
//   );
// };

// const RestrauntCard=({restaurant})=>{
//   const{name,image,lastMileTravelString}=restaurant.data
//   return(
//   <div className="card">
//     <img src={image} />
//     <h2>{name}</h2>
//     <h4>{lastMileTravelString}minutes</h4>
//   </div>
//   );
// };

//this is like a function call ,argumnets passed in as props
// const Body=()=>{
//  return(   <div className="restaurant-list">
//  <RestrauntCard restaurant={restaurant[0]}/>
//  <RestrauntCard restaurant={restaurant[1]}/>
//  <RestrauntCard restaurant={restaurant[2]}/>
//  <RestrauntCard restaurant={restaurant[3]}/>
//  <RestrauntCard restaurant={restaurant[4]}/>
//  <RestrauntCard restaurant={restaurant[5]}/>
//  </div>
//  );
// };

// const RestrauntCard=({
//   name,
//   image,
//   lastMileTravelString
// })=>{
//   return(
//   <div className="card">
//     <img src={image} />
//     <h2>{name}</h2>
//     <h4>{lastMileTravelString}minutes</h4>
//   </div>
//   );
// };

// const Body=()=>{
//   return(   <div className="restaurant-list">
//   <RestrauntCard {...restaurant[0].data}/>
//   <RestrauntCard {...restaurant[1].data}/>
//   <RestrauntCard {...restaurant[2].data}/>
//   <RestrauntCard {...restaurant[3].data}/>
//   <RestrauntCard {...restaurant[4].data}/>
//spread operator
//   </div>
//   );
//  };
const RestrauntCard=({
  name,
  image,
  lastMileTravelString
})=>{
  return(
  <div className="card">
    <img src={image} />
    <h2>{name}</h2>
    <h4>{lastMileTravelString}minutes</h4>
  </div>
  );
};

const Body=()=>{
  return(   <div className="restaurant-list">
       {
        restaurantList.map(
             (restaurant)=>{
              return <RestrauntCard {...restaurant.data}/> 
             }
        )
       }
  </div>
  );
 };
const Footer=()=>{
return(
<h4>Footer</h4>
);
};
const AppLayout=()=>{
    return(
        <>
   <Header/>
   <Body/>
   <Footer/>
   </>
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);