/*
 * SHREYA TRANSPORT — SINGLE SOURCE OF TRUTH
 * ------------------------------------------
 * Update business information and website content here.
 * The pages read from this object automatically.
 */
const siteData = {
  company: {
    name: "Shreya Transport",
    shortName: "Shreya",
    tagline: "Trailer Transportation Across India",
    description:
      "Reliable trailer transportation for businesses and individuals across India. We connect customers with authorized and reliable trailer operators according to cargo and route requirements.",
    phone: "+91 99810 67510",
    phoneHref: "tel:+919981067510",
    whatsapp: "+91 97532 27510",
    whatsappNumber: "919753227510",
    email: "info@shreyatransport.example",
    address: "Patel Market, Kelod Kartal, Rau Bypass, Indore, Madhya Pradesh 452020",
    serviceArea: "All India",
    hours: "Monday – Sunday, 8:00 AM – 8:00 PM"
  },

  seo: {
    homeTitle: "Shreya Transport | Trailer Transportation Across India",
    homeDescription:
      "Shreya Transport arranges reliable trailer transportation for all types of goods across India through a network of authorized trailer operators.",
    servicesTitle: "Trailer Transport Services | Shreya Transport",
    aboutTitle: "About Shreya Transport | Trailer Transportation",
    contactTitle: "Contact Shreya Transport | Get a Transport Quote",
    galleryTitle: "Transport Gallery | Shreya Transport"
  },

  nav: [
    { label: "Home", href: "index.html" },
    { label: "Services", href: "services.html" },
    { label: "About Us", href: "about.html" },
    { label: "Gallery", href: "gallery.html" },
    { label: "Contact", href: "contact.html" }
  ],

  hero: {
    eyebrow: "PAN-INDIA TRAILER TRANSPORTATION",
    title: "The right trailer.<br><span>For the right cargo.</span>",
    text:
      "Tell us what you need to move, where it needs to go and when. We help arrange a suitable trailer through our network of authorized transport operators.",
    primaryButton: "Get a Transport Quote",
    secondaryButton: "Call Us",
    trustItems: [
      ["Pan India", "Service coverage"],
      ["Reliable", "Transport partners"],
      ["Flexible", "Cargo solutions"]
    ]
  },

  stats: [
    ["01", "Pan-India", "Transportation support"],
    ["02", "Reliable", "Trailer operator network"],
    ["03", "Flexible", "Cargo-based solutions"],
    ["04", "Simple", "Booking coordination"]
  ],

  services: [
    {
      title: "Trailer Transportation",
      short: "Suitable trailers for commercial and industrial goods.",
      description:
        "We help arrange trailer vehicles based on the cargo type, dimensions, weight, pickup location and destination.",
      bullets: ["Route-based trailer arrangement", "Cargo requirement assessment", "Pickup and destination coordination"],
      icon: "truck"
    },
    {
      title: "Heavy & Industrial Cargo",
      short: "Transport support for machinery, equipment and structures.",
      description:
        "For heavy or oversized cargo, we coordinate with transport operators who can provide an appropriate trailer for the requirement.",
      bullets: ["Industrial machinery", "Steel and structures", "Heavy equipment and project cargo"],
      icon: "crane"
    },
    {
      title: "General Goods",
      short: "Flexible trailer solutions for commercial goods.",
      description:
        "We can help arrange transportation for a wide range of commercial and general goods across Indian routes.",
      bullets: ["Commercial goods", "Packed cargo", "Business-to-business movement"],
      icon: "box"
    },
    {
      title: "Pan-India Movement",
      short: "Connect origin and destination across India.",
      description:
        "Share the route with us and we coordinate with our transport network to help arrange a suitable trailer.",
      bullets: ["Interstate transportation", "Long-distance routes", "Origin-to-destination coordination"],
      icon: "route"
    }
  ],

  about: {
    eyebrow: "ABOUT SHREYA TRANSPORT",
    title: "A transport partner focused on <span>getting your cargo moving.</span>",
    paragraphs: [
      "Shreya Transport is a commission-based trailer transport agent serving businesses and individuals across India.",
      "Our role is simple: understand your cargo and route requirement, coordinate with suitable authorized trailer operators, and help make the transportation arrangement easier.",
      "Whether you are moving machinery, industrial equipment, structures, commercial goods or other cargo, we help connect you with a suitable transport solution."
    ],
    highlights: [
      "Authorized and reliable transport partners",
      "Pan-India trailer transportation support",
      "Cargo and route based vehicle selection",
      "Simple coordination from enquiry to dispatch"
    ]
  },

  process: [
    {
      number: "01",
      title: "Share your requirement",
      text: "Tell us the cargo, pickup location, destination, approximate weight/dimensions and preferred date.",
      icon: "message"
    },
    {
      number: "02",
      title: "We arrange a trailer",
      text: "We coordinate with suitable trailer operators and discuss availability and transport requirements.",
      icon: "search"
    },
    {
      number: "03",
      title: "Confirm the movement",
      text: "Once the arrangement is confirmed, the trailer is coordinated for pickup and transportation.",
      icon: "check"
    }
  ],

  coverage: {
    title: "Transportation support across India",
    text:
      "We coordinate trailer requirements for routes across major cities, industrial areas and interstate destinations. Availability depends on the route, cargo and required vehicle.",
    regions: [
      "Madhya Pradesh", "Maharashtra", "Gujarat", "Rajasthan",
      "Delhi NCR", "Uttar Pradesh", "Bihar", "Assam",
      "Punjab", "Haryana", "West Bengal", "South India"
    ]
  },

  gallery: [
    { image: "images/transport-collage.png", title: "Trailer Transportation", text: "Illustrative project and transport imagery" },
    { image: "images/transport-collage.png", title: "Heavy Cargo", text: "Industrial and oversized cargo support" },
    { image: "images/transport-collage.png", title: "Pan-India Service", text: "Long-distance goods movement" }
  ],

  testimonials: [
    {
      quote: "Dummy customer feedback will be added here after we collect real customer reviews.",
      name: "Customer Name",
      role: "Business / City"
    },
    {
      quote: "Dummy testimonial placeholder. Replace this with a genuine customer experience later.",
      name: "Customer Name",
      role: "Business / City"
    },
    {
      quote: "Dummy review placeholder for future use. Only publish genuine customer feedback.",
      name: "Customer Name",
      role: "Business / City"
    }
  ],

  faq: [
    {
      question: "What type of goods can you transport?",
      answer: "We can help arrange trailers for many types of commercial, industrial, heavy and general goods, subject to the cargo and transport requirements."
    },
    {
      question: "Do you provide trailers across India?",
      answer: "Yes. We coordinate trailer transportation requirements for routes across India. Availability depends on the route, cargo and vehicle requirement."
    },
    {
      question: "How do I request a trailer?",
      answer: "Send us your pickup location, destination, cargo details, approximate weight/dimensions and required date. We will coordinate the requirement with suitable transport operators."
    },
    {
      question: "Are you a transport company or a transport agent?",
      answer: "We operate as a commission-based transport agent and coordinate transportation through authorized and reliable trailer operators."
    }
  ],

  footer: {
    note: "Trailer transportation coordination for businesses and individuals across India.",
    disclaimer: "Information on this website is for general service enquiries. Final vehicle availability, pricing and transportation terms are confirmed for each requirement."
  }
};
