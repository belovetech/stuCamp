import { abuja, room1, people, review, instagram, twitter, facebook, linkedin } from "../components";


export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "apartments",
      title: "Apartments",
    },
    {
      id: "login",
      title: "Login",
    },
  ];

export const cities = [
    { name: 'Abuja', href: '#', img: abuja, sites: '3' },
    { name: 'Anambra', href: '#', img: abuja, sites: '3' },
    { name: 'Bayelsa', href: '#', img: abuja, sites: '3' },
    { name: 'Borno', href: '#', img: abuja, sites: '3' },
    { name: 'Delta', href: '#', img: abuja, sites: '3' },
    { name: 'Edo', href: '#', img: abuja, sites: '3' },
    { name: 'Enugu', href: '#', img: abuja, sites: '3'},
    { name: 'Imo', href: '#', img: abuja, sites: '3' },
    { name: 'Kano', href: '#', img: abuja, sites: '3' },
    { name: 'Lagos', href: '#', img: abuja, sites: '3' },
    { name: 'Ogun', href: '#', img: abuja, sites: '3' },
    { name: 'Ondo', href: '#', img: abuja, sites: '3' },
    { name: 'Osun', href: '#', img: abuja, sites: '3' },
    { name: 'Oyo', href: '#', img: abuja, sites: '3' },
    { name: 'Rivers', href: '#', img: abuja, sites: '3' },
    { name: 'Sokoto', href: '#', img: abuja, sites: '3' }
  ]

export const reviews = [
    {
      id: "reviews-1",
      content:
        "It was a home away from home experience",
      name: "Sultan",
      school: "ABU",
      title: "Postgraduate Student of Ahmadu Bello University",
      img: people,
      header: review,
      stars: "5",
      date: "16/02/2020"
    },
    {
      id: "reviews-2",
      content:
        "I had a great 4 years during my time at the apartment",
      name: "Abraham",
      school: "UNIBEN",
      title: "University of Benin student",
      img: people,
      header: review,
      stars: "5",
      date: "15/05/2022"
    },
    {
      id: "reviews-3",
      content:
        "The customer service and support was great, I recommend stuCamp.",
      name: "Omolola",
      school: "UNILAG",
      title: "University of Lagos student",
      img: people,
      header: review,
      stars: "5",
      date: "28/10/2022"
    },
  ];

export const stats = [
  {
    id: "stats-1",
    title: "Active Users",
    value: "+2700",
  },
  {
    id: "stats-2",
    title: "Positive customer reviews",
    value: "+10k",
  },
  {
    id: "stats-3",
    title: "5 star rating on Google reviews",
    value: "+15k",
  },
];

export const rooms = [
  {
    name: "En-Suite",
    title: "Users",
    img: room1
  },
  {
    name: "Studio",
    title: "Users",
    img: room1
  },
  {
    name: "Private room",
    title: "Users",
    img: room1
  },
  {
    name: "Shared room",
    title: "Users",
    img: room1
  },
]

  // export const socialMedia = [
  //   {
  //     id: "social-media-1",
  //     icon: instagram,
  //     name: "instagram",
  //     link: "https://www.instagram.com/",
  //   },
  //   {
  //     id: "social-media-2",
  //     icon: facebook,
  //     name: "facebook",
  //     link: "https://www.facebook.com/",
  //   },
  //   {
  //     id: "social-media-3",
  //     icon: twitter,
  //     name: "twitter",
  //     link: "https://www.twitter.com/",
  //   },
  //   {
  //     id: "social-media-4",
  //     icon: linkedin,
  //     name: "linkedin",
  //     link: "https://www.linkedin.com/",
  //   },
  // ];
