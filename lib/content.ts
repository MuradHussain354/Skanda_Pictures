export const studio = {
  name: "Skanda Pictures",
  category: "Independent film production, based in Chennai.",
  founderName: "Sushant Prasad",
  address: {
    line1: "No. 7, New No. 19",
    line2: "Akbarbad 1st Street, Kodambakkam",
    line3: "Chennai – 600024",
    landmark: "Landmark: Baba Matriculation School",
  },
  // TODO: replace with the real inbox + handles once confirmed.
  email: "",
  social: [] as { label: string; href: string }[],
  // Example once you have them:
  // social: [
  //   { label: "Instagram", href: "https://instagram.com/skandapictures" },
  //   { label: "X", href: "https://x.com/skandapictures" },
  // ],
};

export const home = {
  heroLines: ["Stories meet", "strategy."],
  heroSub:
    "Distinctive Tamil cinema, developed with creative conviction and built to connect across markets.",
  primaryCta: { label: "See what we're filming", href: "/production" },
  secondaryCta: { label: "Meet the founder", href: "/founder" },
  nowFilmingKicker: "Now filming",
  closing: {
    heading: "Have a story worth telling?",
    body: "We read scripts, meet writers and back films we believe belong on a big screen.",
    cta: { label: "Get in touch", href: "/contact" },
  },
};

export const about = {
  heading: "Stories Meet Strategy",
  paragraphs: [
    "Skanda Pictures is an independent film production company based in Chennai, founded by producer Sushant Prasad. We make Tamil films for the big screen, combining compelling stories with audience appeal and strong box-office potential.",
    "Drawing on our founder's 17 years across production, distribution, financing, and content sales, we back established filmmakers and emerging talent with creative commitment and sound business planning.",
    "Our ambition is to make films audiences love watching and recommending — and deliver commercial success for the people who back them.",
  ],
};

export type Production = {
  slug: string;
  status: string;
  title: string;
  writerDirector: string;
  music: string;
  cast: string[];
  producers: string[];
  coProducer: string;
  presenter: string;
  synopsis: string;
  note: string;
  // Set once the approved key art is available.
  poster: string | null;
  // A secondary first-look image, e.g. a title-reveal card.
  firstLook: string | null;
  // Set once the launch video file is available (path under /public or an
  // external embed URL, e.g. YouTube/Vimeo).
  launchVideo: string | null;
};

export const productions: Production[] = [
  {
    slug: "manjanathi",
    status: "In Production",
    title: "Manjanathi",
    writerDirector: "Mari Selvaraj",
    music: "Ilaiyaraaja",
    cast: ["Kathir", "Kayadu Lohar", "Priyanka Mohan"],
    producers: ["Divya Mari Selvaraj", "Mari Selvaraj", "Sushant Prasad"],
    coProducer: "Harsh Lalwani",
    presenter: "Navvi Studios & Fortune Entertainment",
    synopsis:
      "A Tamil folklore drama exploring love, belief, and the weight of a village's past.",
    note: "With its roots in the landscape and culture of rural Tamil Nadu, Manjanathi is being developed as an immersive theatrical experience, bringing its world to life through character, music, and powerful storytelling.",
    poster: "/images/manjanathi-poster.jpg",
    firstLook: "/images/manjanathi-firstlook.jpg",
    launchVideo: null,
  },
];

export const founder = {
  role: "Founder & Producer, Skanda Pictures",
  name: "Sushant Prasad",
  lead: "A film producer and film business professional with 17 years of experience across production, distribution, financing, content sales, and rights management.",
  // Set once the approved photograph is available.
  photo: null as string | null,
  paragraphs: [
    "He began his journey in 2009 at Cloud Nine Movies, working across production and operations on Tamizh Padam, Thoonga Nagaram, Mankatha, and Thagararu, including serving as Executive Producer on Mankatha. He was also involved in the distribution of Paiyaa, Naan Mahaan Alla, Azhagarsamiyin Kudhirai, and Ratha Charithram. He later moved into independent production with Pugazh.",
    "Over the years, Sushant has negotiated major film deals involving titles starring Ajith Kumar, Kamal Haasan, and Sivakarthikeyan. His work across OTT and television sales has brought together producers, broadcasters, and streaming platforms, guided by an understanding of both a film's creative strengths and its commercial potential. Alongside these larger films, he has also supported smaller films such as Love Today and Youth, reflecting his interest in promising stories and new talent.",
    "He has also helped secure financing deals for major Tamil productions, supporting companies including Dream Warrior Pictures, Vels Film International Limited, and Prince Pictures. His involvement has included connecting production houses with financing partners and helping put funding arrangements in place.",
    "Before founding Skanda Pictures, Sushant worked as a consultant and served as a Director at Vels Film International Limited, helping put together projects including Mookuthi Amman 2, Dyangaram, Unkill, and Gatta Kusthi 2. His work drew on his experience in project development, industry relationships, and film business to help bring these productions together.",
    "These experiences shape his approach as a producer. From evaluating a script and assembling a team to arranging finance and planning a film's release, he stays closely involved in the decisions that help a project reach its audience.",
    "Skanda Pictures is the next chapter in Sushant's journey — a company built on his belief in the producer's role as a filmmaker's closest ally. His ambition is to back films with a distinct identity and the power to draw audiences into theatres, bringing together the right talent, resources, and commercial vision for each story. Drawing on 17 years across the industry, he aims to build lasting creative partnerships and a body of work that earns the trust of filmmakers and audiences alike.",
  ],
};

export const contact = {
  heading: "Let's talk",
  lead: "For scripts, partnerships and press, reach the Skanda Pictures office.",
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Production", href: "/production" },
  { label: "Founder", href: "/founder" },
  { label: "Contact", href: "/contact" },
];
