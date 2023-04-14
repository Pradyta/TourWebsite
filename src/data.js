import Location1 from './assets/1.jpg';
import Location2 from './assets/2.jpg';
import Location3 from './assets/3.jpg';

import House1Lg from './assets/house1lg.png';
import House2Lg from './assets/house2lg.png';
import House3Lg from './assets/house3lg.png';

import Agent1 from './assets/agent1.png';
import Agent2 from './assets/agent2.png';
import Agent3 from './assets/agent3.png';

import place1 from "./assets/img1.webp";
import place2 from "./assets/img2.webp";
import place3 from "./assets/img3.webp";
import place4 from "./assets/img4.webp";
import place5 from "./assets/img5.jpg";
import place6 from "./assets/img6.webp";
import place7 from "./assets/img7.webp";
import place8 from "./assets/img8.webp";
import place9 from "./assets/img9.webp";
import place10 from "./assets/img10.webp";

export const housesData = [
    {
        id: 1,
        type: 'House',
        name: 'House 1',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
        image : Location1,
        imageLg: House1Lg,
        link:'https://www.stayvista.com/villa/the-cincin',
        country: 'United States',
        address: '7240C Argyle St. Lawndale, CA 90260',
        bedrooms: '2',
        bathrooms: '2',
        surface: '4200 sq ft',
        year: '2016',
        price: '1100',
        agent: {
          image: Agent1,
          name: 'Patricia Tullert',
          phone: '0123 456 78910',
        },
      },
      {
        id: 2,
        type: 'House',
        name: 'House 2',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
          image: Location2,
        imageLg: House2Lg,
        country: 'Canada',
        link:'https://www.stayvista.com/villa/hamptons-charm',
        address: '798 Talbot St. Bridgewater, NJ 08807',
        bedrooms: '3',
        bathrooms: '3',
        surface: '4200 sq ft',
        year: '2016',
        price: '14000',
        agent: {
          image: Agent2,
          name: 'Daryl Hawker',
          phone: '0123 456 78910',
        },
      },
      {
        id: 3,
        type: 'House',
        name: 'House 3',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
          image: Location3,
        imageLg: House3Lg,
        country: 'United States',
        address: '2 Glen Creek St. Alexandria, VA 22304',
        bedrooms: '2',
        link:'https://www.stayvista.com/villa/chalet-windflower',
        bathrooms: '2',
        surface: '4200 sq ft',
        year: '2016',
        price: '1700',
        agent: {
          image: Agent3,
          name: 'Amado Smith',
          phone: '0123 456 78910',
        },
      },
];

export const placesAPI = [
  { "placeImg": place1, "location": "Nainital", "distance": "3.0 hour dirve", "link": "https://www.holidify.com/places/nainital/"},
  { "placeImg": place2, "location": "Auli", "distance": "2.5 hour dirve","link": "https://www.holidify.com/places/auli/" },
  { "placeImg": place3, "location": "Rishikesh", "distance": "4.7 hour drive","link": "https://www.holidify.com/places/rishikesh/"  },
  { "placeImg": place4, "location": "Coorg", "distance": "4 hour drive","link": "https://www.holidify.com/places/coorg"  },
  { "placeImg": place5, "location": "Andaman", "distance": "4.9 hour drive","link": "https://www.holidify.com/places/andaman-nicobar-islands"  },
  { "placeImg": place6, "location": "Leh Ladakh", "distance": "4.5 hour drive","link": "https://www.holidify.com/places/ladakh/"  },
  { "placeImg": place7, "location": "Dalhousie", "distance": "5.5 hour drive","link": "https://www.holidify.com/places/dalhousie/"  },
  { "placeImg": place8, "location": "Darjeeling", "distance": "5.1 hour drive","link": "https://www.holidify.com/places/darjeeling/"  },
  { "placeImg": place9, "location": "West Sikkim", "distance": "5.1 hour drive","link": "https://www.holidify.com/places/west-sikkim/"  },
  { "placeImg": place10, "location": "Wayanad", "distance": "5.1 hour drive","link": "https://www.holidify.com/places/wayanad/"  },
];

export const searchLink =
[ 
  {
    "name": "Afghanistan",
    "link": "https://en.wikipedia.org/wiki/Afghanistan"
  }, 
  {
    "name": "India",
    "link": "https://en.wikipedia.org/wiki/India"
  }, 
  {
    "name": "London",
    "link": "https://en.wikipedia.org/wiki/London"
  }, 

  {
    "name": "Suriname",
    "link": "https://en.wikipedia.org/wiki/Suriname"
  }, 
  {
    "name": "Belgium",
    "link": "https://en.wikipedia.org/wiki/Belgium"
  }, 
  {
    "name": "Albania",
    "link": "https://en.wikipedia.org/wiki/Albania"
  }, 
  {
    "name": "Bahrain",
    "link": "https://en.wikipedia.org/wiki/Bahrain"
  }, 
  {
    "name": "Angola",
    "link": "https://en.wikipedia.org/wiki/Angola"
  }, 
  {
    "name": "Spain",
    "link": "https://en.wikipedia.org/wiki/Spain"
  }, 
  {
    "name": "Angola",
    "link": "https://en.wikipedia.org/wiki/Angola"
  }, 
  {
    "name": "Angola",
    "link": "https://en.wikipedia.org/wiki/Angola"
  }, 

  {
    "name": "Swaziland",
    "link": "https://en.wikipedia.org/wiki/Swaziland"
  }, 
  {
    "name": "Bhutan",
    "link": "https://en.wikipedia.org/wiki/Bhutan"
  }, 
  {
    "name": "Turkey",
    "link": "https://en.wikipedia.org/wiki/Turkey"
  }, 
  {
    "name": "Togo",
    "link": "https://en.wikipedia.org/wiki/Togo"
  }, 
  {
    "name": "Tokelau",
    "link": "https://en.wikipedia.org/wiki/Tokelau"
  }
]
