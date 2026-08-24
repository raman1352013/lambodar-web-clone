export type ServiceItem = {
  id: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  fullDescription?: string;
  iconUrl?: string;
  imageUrl?: string;
  features?: string[];
  benefits?: string[];
};

export type ProductItem = {
  id: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  fullDescription?: string;
  imageUrl?: string;
};

export type TimelineMilestone = {
  year: string;
  title: string;
  subtitle?: string;
  location?: string;
};

export type InternshipJob = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
};

export type SiteContent = {
  branding: {
    brandName: string;
    tagline: string;
    logoUrl: string;
  };
  navigation: {
    topPhone: string;
    topEmail: string;
    topAddress: string;
    links: Array<{ label: string; href: string }>;
    productsMegaMenu: {
      cloudWeb: Array<{ label: string; href: string }>;
      networkSecurity: Array<{ label: string; href: string }>;
      erpSoftware: Array<{ label: string; href: string }>;
      telecom: Array<{ label: string; href: string }>;
      vehicleTracking: Array<{ label: string; href: string }>;
      hardware: Array<{ label: string; href: string }>;
    };
    brandDropdown: Array<{ label: string; href: string }>;
    aboutDropdown: Array<{ label: string; href: string }>;
    loginDropdown: Array<{ label: string; href: string }>;
  };
  hero: {
    bannerImageUrl: string;
    mobileBannerImageUrl: string;
    ctaHref: string;
  };
  journey: {
    eyebrow: string;
    title: string;
    description: string;
    milestones: TimelineMilestone[];
  };
  offerings: {
    eyebrow: string;
    title: string;
    items: Array<{
      id: string;
      title: string;
      slug: string;
      description: string;
      imageUrl: string;
      ctaLabel: string;
    }>;
  };
  strength: {
    eyebrow: string;
    title: string;
    description: string;
    imageUrl: string;
    highlights: string[];
    stats: Array<{ value: string; label: string }>;
  };
  excellence: {
    title: string;
    pillars: Array<{
      title: string;
      description: string;
      iconUrl: string;
    }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    leftImageUrl: string;
    items: Array<{ q: string; a: string }>;
  };
  supportBanner: {
    eyebrow: string;
    title: string;
    whatsappPhone: string;
    buttonImage: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: Array<{
      name: string;
      role: string;
      serviceUsed: string;
      text: string;
      imageUrl: string;
    }>;
  };
  awards: {
    eyebrow: string;
    title: string;
    items: Array<{
      title: string;
      caption: string;
      imageUrl: string;
    }>;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    mapEmbedUrl: string;
  };
  footer: {
    logoUrl: string;
    copyrightText: string;
    webSolutionLinks: Array<{ label: string; href: string }>;
    networkLinks: Array<{ label: string; href: string }>;
    erpLinks: Array<{ label: string; href: string }>;
  };
  serviceList: ServiceItem[];
  internshipsList: InternshipJob[];
};

export const defaultSiteContent: SiteContent = {
  branding: {
    brandName: "Lambodra Group",
    tagline: "Best IT Solution in Ghana",
    logoUrl: "https://lambodragroup.com/wp-content/uploads/2025/12/logo.png"
  },
  navigation: {
    topPhone: "+233 55 11 222 33",
    topEmail: "info@lambodragroup.com",
    topAddress: "#213,1st Floor, Shell Sign Board, Spintex Rd, Accra, Ghana",
    links: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/#products" },
      { label: "Brand", href: "/brand" },
      { label: "About Us", href: "/about" },
      { label: "Internship", href: "/internship" },
      { label: "Contact Us", href: "/contact" },
      { label: "Login", href: "#login" }
    ],
    productsMegaMenu: {
      cloudWeb: [
        { label: "Web Solution", href: "/services/web-solution" },
        { label: "Digital Marketing", href: "/services/digital-marketing" }
      ],
      networkSecurity: [
        { label: "Sophos", href: "/services/sophos" },
        { label: "FortiGate", href: "/services/fortigate" },
        { label: "CCTV Solution", href: "/services/cctv-solution" }
      ],
      erpSoftware: [
        { label: "Fugen Erp", href: "/services/customized-erp-solution" },
        { label: "Microsoft Solution", href: "/services/microsoft-solution" },
        { label: "Google Workspace", href: "/services/google-workspace" },
        { label: "Tally Solutions", href: "/services/tally-solutions" },
        { label: "Custom Software Solutions", href: "/services/custom-software-solutions" }
      ],
      telecom: [
        { label: "Cloud Calling Solution", href: "/services/cloud-calling-solution" }
      ],
      vehicleTracking: [
        { label: "GPS Tracking Solution", href: "/services/fleet-hunt" },
        { label: "Fuel Management Solution", href: "/services/fleet-hunt" },
        { label: "Fleet Management Solution", href: "/services/fleet-hunt" }
      ],
      hardware: [
        { label: "IT Hardware", href: "/products/it-hardware" },
        { label: "Accessories", href: "/products/accessories" }
      ]
    },
    brandDropdown: [
      { label: "Fleethunt", href: "/services/fleet-hunt" },
      { label: "NetOnWay ISP", href: "/brand/netonway" },
      { label: "Fugen", href: "/services/customized-erp-solution" }
    ],
    aboutDropdown: [
      { label: "About Us", href: "/about" },
      { label: "Media", href: "/about#media" },
      { label: "Corporate Social Responsibility", href: "/about#csr" }
    ],
    loginDropdown: [
      { label: "ERP Portal", href: "http://erp.lambodragroup.com/" },
      { label: "POS Portal", href: "https://pos.fugen.in/" },
      { label: "HRM Portal", href: "https://hrm.lambodragroup.com/" },
      { label: "Fleethunt Portal", href: "https://app.fleethunt.ca/" }
    ]
  },
  hero: {
    bannerImageUrl: "https://lambodragroup.com/wp-content/uploads/2026/05/Final_Hero_Section-banner.png",
    mobileBannerImageUrl: "https://lambodragroup.com/wp-content/uploads/2026/05/Hero_Section_Banner_Mobile_Banner.png",
    ctaHref: "/contact"
  },
  journey: {
    eyebrow: "Our Journey",
    title: "Our Global Growth Journey",
    description: "Our journey began in 2011 with the establishment of Lavanya Incorporation in Ghana. Through strategic planning and disciplined expansion, Lambodra Group evolved into a multi-national enterprise with diversified operations across trading, technology, and enterprise services.",
    milestones: [
      { year: "2011", title: "Lavanya Incorporation – India" },
      { year: "2016", title: "Lambodra Enterprises (GH) Limited – Ghana" },
      { year: "2023", title: "Lambodra Enterprises Nigeria Limited – Nigeria" },
      { year: "2024", title: "Kshipra Fugen Pvt Ltd – Zambia" },
      { year: "2024", title: "Kshipra General Trading FZCO – UAE" },
      { year: "2025", title: "Lambodra Traders & Services Pvt Ltd – New Delhi, India" },
      { year: "2025", title: "Lambodra Incorporation – Canada" },
      { year: "2025", title: "Srilanya Traders & Services INC" },
      { year: "2026", title: "AdepTraders Solution and Media LTD – Ghana" }
    ]
  },
  offerings: {
    eyebrow: "Our Offerings",
    title: "Products and Services That Power Businesses",
    items: [
      {
        id: "offering-cloud-web",
        title: "Cloud & Web Solution",
        slug: "web-solution",
        description: "Designing and deploying scalable digital platforms for modern businesses.",
        imageUrl: "https://lambodragroup.com/wp-content/uploads/2025/12/cloud-and-web-solution-1.png",
        ctaLabel: "Get a Quote"
      },
      {
        id: "offering-network",
        title: "Network & Security",
        slug: "sophos",
        description: "Protecting infrastructure, data, and communication with enterprise-grade security.",
        imageUrl: "https://lambodragroup.com/wp-content/uploads/2025/12/network-and-security-solution-1.png",
        ctaLabel: "Get a Quote"
      },
      {
        id: "offering-erp",
        title: "Erp & Software Solution",
        slug: "customized-erp-solution",
        description: "Streamlining business operations with reliable software and collaboration tools.",
        imageUrl: "https://lambodragroup.com/wp-content/uploads/2025/12/erp-1.png",
        ctaLabel: "Get a Quote"
      },
      {
        id: "offering-telecom",
        title: "Telecommunication Solution",
        slug: "cloud-calling-solution",
        description: "Ensuring seamless business communication and connectivity.",
        imageUrl: "https://lambodragroup.com/wp-content/uploads/2025/12/telecomunication-solution-1.png",
        ctaLabel: "Get a Quote"
      },
      {
        id: "offering-vehicle",
        title: "Vehicle Tracking Solution",
        slug: "fleet-hunt",
        description: "Real-time tracking and intelligent fleet management systems.",
        imageUrl: "https://lambodragroup.com/wp-content/uploads/2025/12/GPS_Tracking.png",
        ctaLabel: "Get a Quote"
      },
      {
        id: "offering-hardware",
        title: "Computer Hardware",
        slug: "it-hardware",
        description: "Supplying dependable IT hardware and infrastructure for business operations.",
        imageUrl: "https://lambodragroup.com/wp-content/uploads/2025/12/icon-01.png",
        ctaLabel: "Get a Quote"
      }
    ]
  },
  strength: {
    eyebrow: "Our Strength",
    title: "Trusted Technology Partner Across Markets",
    description: "With years of hands-on experience and a growing global footprint, we help businesses implement reliable technology solutions that deliver measurable results.",
    imageUrl: "https://lambodragroup.com/wp-content/uploads/2026/05/Trusted-Technology-partner-new.png",
    highlights: [
      "Industry-focused technology solutions",
      "Long-term client partnerships"
    ],
    stats: [
      { value: "10+", label: "Years Experience" },
      { value: "700+", label: "Global Clients" },
      { value: "200+", label: "Projects Completed" }
    ]
  },
  excellence: {
    title: "Committed to Excellence",
    pillars: [
      {
        title: "The Solution Architecture",
        description: "We excel in crafting tailored solution architectures, ensuring that each client's needs are defined, described, and delivered with precision.",
        iconUrl: "https://lavanyademo.co.in/lambodra/wp-content/uploads/2025/12/The-Solution-Architecture.png"
      },
      {
        title: "Long-Term Tenure",
        description: "Lambodra Group is dedicated to fostering long-term partnerships, offering unwavering support and reliability throughout the journey.",
        iconUrl: "https://lavanyademo.co.in/lambodra/wp-content/uploads/2025/12/Long-Term-Tenure.png"
      },
      {
        title: "Exceptional Services",
        description: "Our commitment to delivering exceptional services ensures that businesses thrive with innovative and customer-focused solutions.",
        iconUrl: "https://lavanyademo.co.in/lambodra/wp-content/uploads/2025/12/Exceptional-Services.png"
      },
      {
        title: "Operational Excellence",
        description: "We strive for operational excellence, setting benchmarks in quality and efficiency to achieve superior outcomes.",
        iconUrl: "https://lavanyademo.co.in/lambodra/wp-content/uploads/2025/12/Operational-Excellence.png"
      },
      {
        title: "Building Relationships",
        description: "At Lambodra Group, great business is built on strong and enduring relationships. Trust and collaboration are the cornerstones of our success.",
        iconUrl: "https://lavanyademo.co.in/lambodra/wp-content/uploads/2025/12/Building-Relationships.png"
      }
    ]
  },
  faq: {
    eyebrow: "Need Help?",
    title: "Frequently Asked Questions",
    leftImageUrl: "https://lambodragroup.com/wp-content/uploads/2026/05/faqleftsidepic-new.png",
    items: [
      {
        q: "Do you provide customized technology solutions?",
        a: "Yes. All solutions are tailored to match specific business requirements, operational needs, and growth objectives."
      },
      {
        q: "What kind of post-deployment support do you offer?",
        a: "We provide ongoing technical support, system maintenance, updates, and performance monitoring after deployment."
      },
      {
        q: "Are your solutions scalable for growing businesses?",
        a: "Yes. Our solutions are designed to scale easily as business operations expand and requirements evolve."
      },
      {
        q: "How do you ensure data security and system reliability?",
        a: "We follow industry-standard security practices, reliable infrastructure design, and continuous monitoring to protect systems and data."
      },
      {
        q: "What industries does Lambodra Group serve?",
        a: "We serve multiple industries including logistics, manufacturing, retail, healthcare, education, finance, and service-based businesses."
      }
    ]
  },
  supportBanner: {
    eyebrow: "Contact Us",
    title: "24/7 Expert Hosting Support Our Customers Love",
    whatsappPhone: "233551122233",
    buttonImage: "https://lambodragroup.com/wp-content/uploads/2025/12/letstalkbtn.png"
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "Our Latest Client Feedback",
    items: [
      {
        name: "Kwame Mensah",
        role: "Client",
        serviceUsed: "Network Security & IT Infrastructure – Ghana",
        text: "Lambodra Group delivered a complete IT infrastructure and network security solution in Ghana for our corporate office. Their Fortigate firewall and network setup improved system stability and ensured 99.8% uptime. A reliable IT partner for growing businesses.",
        imageUrl: "https://lambodragroup.com/wp-content/uploads/2026/02/03.jpg"
      },
      {
        name: "Chinedu Okafor",
        role: "Client",
        serviceUsed: "VOIP & Telecommunication Solutions – Nigeria",
        text: "We implemented Lambodra Group's VOIP and IP PBX cloud calling solution in Nigeria, and the results were immediate. Call quality improved, downtime reduced, and we achieved nearly 30% cost savings on our communication expenses.",
        imageUrl: "https://lambodragroup.com/wp-content/uploads/2026/02/01.jpg"
      },
      {
        name: "Ahmed Al Maktoum",
        role: "Client",
        serviceUsed: "ERP & Microsoft Solutions – Dubai",
        text: "Lambodra Group's ERP and Microsoft business solutions in Dubai helped us streamline finance, inventory, and reporting. Manual errors reduced by over 40%, and management visibility improved significantly.",
        imageUrl: "https://lambodragroup.com/wp-content/uploads/2026/02/02.jpg"
      },
      {
        name: "Jason Miller",
        role: "Client",
        serviceUsed: "Cloud & Web Solutions – Canada",
        text: "For our expansion in Canada, Lambodra Group delivered secure cloud computing and web solutions tailored to our business needs. Their DevOps support ensured scalability, security, and smooth deployment.",
        imageUrl: "https://lambodragroup.com/wp-content/uploads/2026/02/04.jpg"
      },
      {
        name: "Anna Kowalska",
        role: "Client",
        serviceUsed: "CCTV & Security Solutions – Poland",
        text: "Lambodra Group installed a robust CCTV and security surveillance system in Poland for our warehouse operations. Monitoring efficiency improved, incidents reduced, and their support team is highly responsive.",
        imageUrl: "https://lambodragroup.com/wp-content/uploads/2026/02/05.jpg"
      }
    ]
  },
  awards: {
    eyebrow: "Our Achievement",
    title: "Awards and certifications",
    items: [
      {
        title: "13th Ghana Entrepreneurs & Corporate Executives Awards & Summit 2023",
        caption: "13th Ghana Entrepreneurs & Corporate Executives Awards & Summit | Lambodra Group",
        imageUrl: "https://lambodragroup.com/wp-content/uploads/2026/01/13th-Ghana-Entrepreneurs-Corporate-Executives-Awards-Summit-2023.png"
      },
      {
        title: "Ghana Business Standard Awards 2023",
        caption: "Ghana-Business-Standard-Awards-2023 | Lambodra Group",
        imageUrl: "https://lambodragroup.com/wp-content/uploads/2026/01/Ghana-Business-Standard-Awards-2023.png"
      },
      {
        title: "CEO Of The Year 2022 (Technology)",
        caption: "CEO Of The Year 2022 (Technology) | Lambodra Group",
        imageUrl: "https://lambodragroup.com/wp-content/uploads/2026/01/CEO-Of-The-Year-2022-Technology.png"
      },
      {
        title: "GBSA-2022",
        caption: "GBSA-2022 | Lambodra Group",
        imageUrl: "https://lambodragroup.com/wp-content/uploads/2026/01/GBSA-2022.png"
      },
      {
        title: "GIMA -2024 AWARD BEST SOFTWARE COMPANY OF THE YEAR",
        caption: "GIMA-2024-AWARD-BEST-SOFTWARE-COMPANY-OF-THE | Lambodra Group",
        imageUrl: "https://lambodragroup.com/wp-content/uploads/2026/01/GIMA-2024-AWARD-BEST-SOFTWARE-COMPANY-OF-THE-YEAR.png"
      },
      {
        title: "Innovative CEO of the Year 2025",
        caption: "Innovative-CEO-of-the-Year-2025 | Lambodra Group",
        imageUrl: "https://lambodragroup.com/wp-content/uploads/2026/01/Innovative-CEO-of-the-Year-2025.png"
      },
      {
        title: "Ghana International Product Awards 2022",
        caption: "Ghana-International-Product-Awards | Lambodra Group",
        imageUrl: "https://lambodragroup.com/wp-content/uploads/2026/01/Ghana-International-Product-Awards-2022.png"
      },
      {
        title: "Ghana Industries and Manufacturing Award | Oct 2024",
        caption: "Ghana Industries and Manufacturing Award | Oct 2024",
        imageUrl: "https://lambodragroup.com/wp-content/uploads/2026/03/N_01.jpg"
      }
    ]
  },
  contact: {
    phone: "+233 55 11 222 33",
    email: "info@lambodragroup.com",
    address: "#213,1st Floor, Shell Sign Board, Spintex Rd, Accra, Ghana",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.612087!2d-0.1030!3d5.6234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzcnMjQuMiJOIDDCsDA2JzEwLjgiVw!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
  },
  footer: {
    logoUrl: "https://lambodragroup.com/wp-content/uploads/2025/12/ftrlogo.png",
    copyrightText: "© 2026 Lambodra Group, All Rights Reserved.",
    webSolutionLinks: [
      { label: "Web Solution", href: "/services/web-solution" },
      { label: "Digital Marketing", href: "/services/digital-marketing" }
    ],
    networkLinks: [
      { label: "Sophos", href: "/services/sophos" },
      { label: "FortiGate", href: "/services/fortigate" },
      { label: "CCTV Solution", href: "/services/cctv-solution" }
    ],
    erpLinks: [
      { label: "Fugen Erp", href: "/services/customized-erp-solution" },
      { label: "Microsoft Solution", href: "/services/microsoft-solution" },
      { label: "Google Workspace", href: "/services/google-workspace" },
      { label: "Tally Solutions", href: "/services/tally-solutions" },
      { label: "Custom Software Solutions", href: "/services/custom-software-solutions" }
    ]
  },
  serviceList: [
    {
      id: "web-solution",
      title: "Web Solution",
      slug: "web-solution",
      category: "Cloud & Web Solution",
      shortDescription: "Designing and deploying scalable digital platforms for modern businesses.",
      fullDescription: "Lambodra Group offers complete web solutions including responsive design, custom web application development, domain registration, e-commerce applications, and secure cloud hosting.",
      imageUrl: "https://lambodragroup.com/wp-content/uploads/2025/12/cloud-and-web-solution-1.png",
      features: ["Custom Responsive Websites", "E-Commerce Platforms", "Domain & Hosting Infrastructure", "SEO & Digital Optimization"]
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      slug: "digital-marketing",
      category: "Cloud & Web Solution",
      shortDescription: "Targeted digital marketing campaigns, search engine optimization (SEO), and social management.",
      fullDescription: "Boost your enterprise online visibility with performance marketing, search rankings, content strategy, and social media brand presence.",
      imageUrl: "https://lambodragroup.com/wp-content/uploads/2025/12/cloud-and-web-solution-1.png",
      features: ["Search Engine Optimization (SEO)", "Social Media Marketing", "Content & Email Campaigns", "Analytics & Conversion Reports"]
    },
    {
      id: "sophos",
      title: "Sophos Security",
      slug: "sophos",
      category: "Network & Security",
      shortDescription: "Next-gen firewall protection, endpoint threat defense, and centralized cloud security.",
      fullDescription: "Protect your corporate network and user endpoints against malware, ransomware, and unauthorized intrusions with certified Sophos firewall appliances.",
      imageUrl: "https://lambodragroup.com/wp-content/uploads/2025/12/network-and-security-solution-1.png",
      features: ["Next-Gen Firewall Hardware", "Intercept X Endpoint Defense", "Central Cloud Management", "24/7 Security Incident Alerts"]
    },
    {
      id: "fortigate",
      title: "FortiGate Firewalls",
      slug: "fortigate",
      category: "Network & Security",
      shortDescription: "High-throughput Fortinet FortiGate hardware firewalls and secure branch SD-WAN.",
      fullDescription: "Enterprise-grade FortiGate firewalls delivering deep packet inspection, site-to-site VPNs, intrusion prevention (IPS), and threat protection.",
      imageUrl: "https://lambodragroup.com/wp-content/uploads/2025/12/network-and-security-solution-1.png",
      features: ["FortiGate NGFW Hardware", "Secure Site-to-Site VPN", "SD-WAN Routing", "Intrusion Prevention (IPS)"]
    },
    {
      id: "cctv-solution",
      title: "CCTV Solution",
      slug: "cctv-solution",
      category: "Network & Security",
      shortDescription: "HD IP surveillance camera systems, biometric access control, and video monitoring.",
      fullDescription: "Secure your commercial premises, warehouses, and offices with high-definition CCTV security cameras, NVR recording, and biometric access doors.",
      imageUrl: "https://lambodragroup.com/wp-content/uploads/2025/12/network-and-security-solution-1.png",
      features: ["HD IP & Night Vision Cameras", "Biometric Access Control", "Remote Phone Live Stream", "Annual Maintenance (AMC)"]
    },
    {
      id: "fleet-hunt",
      title: "GPS Vehicle Tracking & Fleet Management",
      slug: "fleet-hunt",
      category: "Vehicle Tracking Solution",
      shortDescription: "Real-time vehicle tracking, fuel level sensor telemetry, and intelligent fleet management.",
      fullDescription: "Ghana's leading GPS vehicle tracking solution. Monitor live map location, engine ignition state, fuel levels, remote engine cutoff, and trip reports.",
      imageUrl: "https://lambodragroup.com/wp-content/uploads/2025/12/GPS_Tracking.png",
      features: ["Live Real-Time Location Map", "Ultrasonic Fuel Level Sensors", "Remote Engine Cutoff / Disable", "Mobile App & Web Dashboard"]
    },
    {
      id: "customized-erp-solution",
      title: "Fugen Erp Solution",
      slug: "customized-erp-solution",
      category: "ERP & Software Solution",
      shortDescription: "Integrated ERP software for inventory, accounting, retail POS, and HR payroll.",
      fullDescription: "Streamline operations with Fugen ERP. Designed for modern enterprises, Fugen unifies inventory, sales, procurement, accounting, and HR into one cloud portal.",
      imageUrl: "https://lambodragroup.com/wp-content/uploads/2025/12/erp-1.png",
      features: ["Inventory & Warehouse Control", "Accounting & VAT Invoicing", "Point of Sale (POS)", "HR & Payroll Management"]
    },
    {
      id: "microsoft-solution",
      title: "Microsoft Solution",
      slug: "microsoft-solution",
      category: "ERP & Software Solution",
      shortDescription: "Official Microsoft 365 licensing, Exchange email migration, and Teams setup.",
      fullDescription: "Empower your corporate workforce with Microsoft 365 enterprise licenses, Exchange corporate email setup, Teams video conferencing, and Azure server cloud migration.",
      imageUrl: "https://lambodragroup.com/wp-content/uploads/2025/12/erp-1.png",
      features: ["Microsoft 365 Licensing", "Exchange Email Migration", "Teams & SharePoint Setup", "Azure Cloud Infrastructure"]
    },
    {
      id: "google-workspace",
      title: "Google Workspace",
      slug: "google-workspace",
      category: "ERP & Software Solution",
      shortDescription: "Custom domain Gmail setup, Google Drive storage, and security controls.",
      fullDescription: "Professional Google Workspace deployment for your team with custom domain emails (you@company.com), shared Drive cloud storage, and Google Meet.",
      imageUrl: "https://lambodragroup.com/wp-content/uploads/2025/12/erp-1.png",
      features: ["Custom Domain Gmail Accounts", "Google Drive Cloud Storage", "Google Meet Integration", "Admin Security Policies"]
    },
    {
      id: "tally-solutions",
      title: "Tally Solutions",
      slug: "tally-solutions",
      category: "ERP & Software Solution",
      shortDescription: "Official Tally Prime software deployment, multi-user licenses, and VAT configuration.",
      fullDescription: "Simplify corporate accounting, VAT returns, inventory control, and audit financial statements with official Tally Prime software setup.",
      imageUrl: "https://lambodragroup.com/wp-content/uploads/2025/12/erp-1.png",
      features: ["Tally Prime Multi-User Setup", "Custom Invoice Printing", "VAT Return Reports", "Data Backup & AMC Support"]
    },
    {
      id: "custom-software-solutions",
      title: "Custom Software Solutions",
      slug: "custom-software-solutions",
      category: "ERP & Software Solution",
      shortDescription: "Bespoke desktop, mobile, and web software built for unique business workflows.",
      fullDescription: "Digitize custom operating procedures with bespoke software engineering. We build desktop apps, cross-platform mobile apps, and enterprise web portals.",
      imageUrl: "https://lambodragroup.com/wp-content/uploads/2025/12/erp-1.png",
      features: ["Custom Web & Mobile Apps", "Database Architecture", "Third-Party API Integration", "Dedicated Support & Maintenance"]
    },
    {
      id: "cloud-calling-solution",
      title: "Cloud Calling Solution",
      slug: "cloud-calling-solution",
      category: "Telecommunication Solution",
      shortDescription: "Virtual PABX, hosted VoIP calling, IVR menus, and SIP trunking.",
      fullDescription: "Modernize office telephony with Cloud Calling VOIP. Connect multiple branches, set up smart IVR phone trees, call recording, and virtual extension lines.",
      imageUrl: "https://lambodragroup.com/wp-content/uploads/2025/12/telecomunication-solution-1.png",
      features: ["Virtual PABX & Hosted IP PBX", "Interactive Voice Response (IVR)", "Call Recording & Analytics", "SIP Trunking & Virtual Extensions"]
    }
  ],
  internshipsList: [
    {
      id: "intern-1",
      title: "Software Engineering Intern",
      department: "Technology",
      location: "Accra, Ghana",
      type: "Full-Time",
      experience: "Fresh Graduate / Student",
      description: "Work on web application development, ERP customization, and API integrations.",
      requirements: ["HTML, CSS, JavaScript, React / Node.js basics", "Problem solving mindset"]
    },
    {
      id: "intern-2",
      title: "IT & Network Security Intern",
      department: "Infrastructure",
      location: "Accra, Ghana",
      type: "Full-Time",
      experience: "IT / Networking Diploma",
      description: "Assist engineers with Sophos firewalls, CCTV deployments, and network rack installations.",
      requirements: ["Networking fundamentals (TCP/IP, DNS)", "Hardware troubleshooting skills"]
    }
  ]
};

export function mergeSiteContent(sanityData?: Partial<SiteContent> | null): SiteContent {
  if (!sanityData) return defaultSiteContent;
  return {
    ...defaultSiteContent,
    ...sanityData,
    branding: { ...defaultSiteContent.branding, ...(sanityData.branding || {}) },
    navigation: { ...defaultSiteContent.navigation, ...(sanityData.navigation || {}) },
    hero: { ...defaultSiteContent.hero, ...(sanityData.hero || {}) },
    journey: { ...defaultSiteContent.journey, ...(sanityData.journey || {}) },
    offerings: { ...defaultSiteContent.offerings, ...(sanityData.offerings || {}) },
    strength: { ...defaultSiteContent.strength, ...(sanityData.strength || {}) },
    excellence: { ...defaultSiteContent.excellence, ...(sanityData.excellence || {}) },
    faq: { ...defaultSiteContent.faq, ...(sanityData.faq || {}) },
    supportBanner: { ...defaultSiteContent.supportBanner, ...(sanityData.supportBanner || {}) },
    testimonials: { ...defaultSiteContent.testimonials, ...(sanityData.testimonials || {}) },
    awards: { ...defaultSiteContent.awards, ...(sanityData.awards || {}) },
    contact: { ...defaultSiteContent.contact, ...(sanityData.contact || {}) },
    footer: { ...defaultSiteContent.footer, ...(sanityData.footer || {}) }
  };
}

export const siteContentQuery = `*[_type == "siteSettings"][0]`;
export const brandingQuery = `*[_type == "branding"][0]`;
export const navigationQuery = `*[_type == "navigation"][0]`;
export const footerQuery = `*[_type == "footer"][0]`;
export const servicesListQuery = `*[_type == "service"]`;
export const testimonialsListQuery = `*[_type == "testimonial"]`;
export const faqListQuery = `*[_type == "faq"]`;
export const brandPartnersListQuery = `*[_type == "brandPartner"]`;
export const milestonesListQuery = `*[_type == "milestone"] | order(order asc, year asc)`;
export const internshipsListQuery = `*[_type == "internship"]`;
export const awardsListQuery = `*[_type == "award"]`;
export const postsListQuery = `*[_type == "post"] | order(publishedAt desc)`;



