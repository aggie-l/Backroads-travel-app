import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
import tour5 from './images/tour-5.jpeg';
import tour6 from './images/tour-6.jpeg';

export const pageLinks = [
    {id: 1, href: "#home", text: "Home"},
    {id: 2, href: "#about", text: "About"},
    {id: 3, href: "#services", text: "Services"},
    {id: 4, href: "#tours", text: "Tours"}
];

export const socialLinks = [
    {id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook"},
    {id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter"},
    {id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace"}
]


export const services = [
    {
        id: 1, 
        icon: "fas fa-wallet fa-fw", 
        title: "saving money", 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
    },
    {
        id: 2, 
        icon: "fas fa-tree fa-fw", 
        title: "endless hiking", 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
    },
    {
        id: 3, 
        icon: "fas fa-socks fa-fw", 
        title: "amazing comfort", 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
    }
]


export const tours = [
    {
        id: 1,
        image: tour1,
        date: "august 26th, 2023",
        title: "Tibet Adventure",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location: "China", 
        duration: 6,
        price: 2100
    },
    {
        id: 2,
        image: tour2,
        date: "october 1th, 2023",
        title: "Best of Java",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location: "Indonesia", 
        duration: 11,
        price: 1400
    },
    {
        id: 3,
        image: tour3,
        date: "september 15th, 2023",
        title: "explore hong kong",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location: "Hong Kong", 
        duration: 8,
        price: 5000
    },
    {
        id: 4,
        image: tour4,
        date: "december 5th, 2023",
        title: "kenya highlights",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location: "Kenya", 
        duration: 20,
        price: 3300
    },
    {
        id: 5,
        image: tour5,
        date: "september 26th, 2023",
        title: "Around Africa",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location: "west Africa", 
        duration: 26,
        price: 12100
    },
    {
        id: 6,
        image: tour6,
        date: "march 20th, 2023",
        title: "Royal Adventure",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        location: "India", 
        duration: 21,
        price: 14100
    },
]