export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Plumbing & Piping" | "Irrigation & Farming" | "Electrical Safety" | "Polymer Engineering";
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featuredImage: string;
  tags: string[];
  content: {
    sectionHeading: string;
    bodyText: string[];
    keyTakeaway?: string;
  }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "choosing-upvc-vs-cpvc-plumbing-pipes",
    slug: "choosing-upvc-vs-cpvc-plumbing-pipes",
    title: "Engineering Comparison: UPVC vs CPVC Pipes for Modern Infrastructure Plumbing",
    excerpt: "An in-depth metallurgical and polymer analysis comparing unplasticized PVC with chlorinated PVC across pressure classes, temperature limits, and cost economics.",
    category: "Plumbing & Piping",
    readTime: "6 min read",
    publishedDate: "November 2, 2026",
    author: {
      name: "Er. Rajesh Nambiar",
      role: "Chief Polymer Technologist",
      avatar: "/images/about/company-team.jpg",
    },
    featuredImage: "/images/blog/blog-1.jpg",
    tags: ["UPVC", "Plumbing", "ASTM Standards", "Building Services"],
    content: [
      {
        sectionHeading: "Understanding Unplasticized Polyvinyl Chloride (UPVC)",
        bodyText: [
          "Unplasticized Polyvinyl Chloride (UPVC) represents one of the most chemically inert and durable thermoplastic piping materials manufactured today. By formulating PVC resin without liquid plasticizers, the resulting polymer matrix exhibits extreme rigidity, high tensile yield strength, and outstanding chemical resistance.",
          "In potable water plumbing, UPVC pipes conform strictly to ASTM D-1785 Schedule 40 and Schedule 80 standards. Because modern lead-free stabilization systems are employed, there is zero risk of heavy metal leaching into residential drinking water, making it the preferred specification for cold water delivery lines across high-rise residential towers and commercial campuses."
        ],
        keyTakeaway: "UPVC provides unmatched tensile durability and zero-calcification cold water transport at a highly competitive lifecycle cost."
      },
      {
        sectionHeading: "Operating Temperature and Pressure Thresholds",
        bodyText: [
          "The critical engineering differentiator between UPVC and CPVC lies in the chlorine concentration within the polymer backbone. Standard UPVC features approximately 56.7% chlorine by weight, providing an optimal operational ceiling of 60°C (140°F). For cold and ambient-temperature pressurized water distribution, UPVC is virtually invincible to pitting corrosion, scaling, and microbial biofilms.",
          "CPVC, having undergone post-chlorination to roughly 67% chlorine content, elevates the glass transition temperature, enabling continuous operation up to 93°C (200°F). Consequently, structural MEP consultants typically specify UPVC for central cold water risers, down-takes, and ring mains, while CPVC is reserved for internal hot water geyser loops."
        ]
      },
      {
        sectionHeading: "Solvent Weld Chemical Fusion vs Mechanical Jointing",
        bodyText: [
          "Both UPVC and CPVC utilize cold chemical solvent welding rather than mechanical threads or heat fusion. When solvent cement is applied across the pipe spigot and fitting socket, the solvent softens the outer polymer chains.",
          "Upon insertion and curing, the interlocking polymer chains fuse into a single monolithic plastic joint that exhibits higher burst pressure resistance than the virgin pipe barrel itself."
        ],
        keyTakeaway: "Proper chamfering and deburring of pipe ends prior to solvent cement application prevents premature wiping of cement and guarantees lifetime joint hermeticity."
      }
    ]
  },
  {
    id: "agricultural-irrigation-pvc-pipe-efficiency",
    slug: "agricultural-irrigation-pvc-pipe-efficiency",
    title: "Optimizing Agricultural Irrigation: Hydraulic Friction Loss & Energy Conservation in PVC Piping",
    excerpt: "How mirror-smooth PVC internal bores lower Hazen-Williams friction factors, curtail pump electrical power consumption, and elevate farm crop yields.",
    category: "Irrigation & Farming",
    readTime: "7 min read",
    publishedDate: "October 18, 2026",
    author: {
      name: "S. K. Verma",
      role: "Agricultural Systems Specialist",
      avatar: "/images/about/company-team.jpg",
    },
    featuredImage: "/images/blog/blog-2.jpg",
    tags: ["Irrigation", "Agriculture", "Energy Savings", "Hydraulics"],
    content: [
      {
        sectionHeading: "The Physics of Head Loss in Agricultural Pipelines",
        bodyText: [
          "Water conveyance across vast agricultural acreage involves severe dynamic friction losses. In traditional galvanized iron (GI) or mild steel pipes, surface roughness increases dramatically over time due to mineral oxidation, rust encrustation, and silt adhesion.",
          "This internal degradation drops the Hazen-Williams roughness coefficient 'C' from 120 down to below 90 within a few years of installation. Consequently, centrifugal pumps must expend exponentially greater electrical energy or diesel fuel simply to overcome line resistance rather than delivering discharge volume at the irrigation emitter."
        ],
        keyTakeaway: "Rigid PVC pipe maintains an ultra-smooth Hazen-Williams C-value of 150 across decades of agrarian service, eliminating friction surge."
      },
      {
        sectionHeading: "Pressure Surges and Water Hammer Mitigation",
        bodyText: [
          "Rapid valve closures or abrupt pump shutdowns generate instantaneous hydraulic shock waves known as water hammer. While brittle materials crack under these cyclical shock waves, precision-extruded PVC exhibits high elastic elongation.",
          "The modulus of elasticity of PVC (approximately 3,000 MPa) enables it to absorb pressure wave kinetics without structural rupture, protecting delicate micro-irrigation drippers, sprinkler nozzles, and pump check valves."
        ]
      },
      {
        sectionHeading: "Resistance to Agrochemicals and Soil Acidity",
        bodyText: [
          "Sub-surface farm pipelines are continuously exposed to corrosive soil minerals, microbial bacteria, and aggressive chemical fertilizers (urea, potash, nitrates) injected via fertigation venturi systems.",
          "Unlike metal conductors, virgin PVC is chemically inert to fertilizer solutions, ensuring zero pipe corrosion, zero pinhole pitting, and clean, sediment-free delivery directly to crop root zones."
        ],
        keyTakeaway: "Investing in certified rigid PVC pipelines pays for itself within three crop cycles through lower pump power bills and eliminated maintenance downtime."
      }
    ]
  },
  {
    id: "fire-retardant-electrical-conduit-safety",
    slug: "fire-retardant-electrical-conduit-safety",
    title: "Electrical Safety Engineering: Specifying Flame-Retardant Rigid PVC Conduits in Concrete Slabs",
    excerpt: "A technical examination of oxygen index parameters, compressive slab load resistance, and cold bending behavior in modern electrical conduit systems.",
    category: "Electrical Safety",
    readTime: "5 min read",
    publishedDate: "September 24, 2026",
    author: {
      name: "Er. Amitav Sen",
      role: "Electrical Infrastructure Advisor",
      avatar: "/images/about/company-team.jpg",
    },
    featuredImage: "/images/blog/blog-3.jpg",
    tags: ["Electrical Conduit", "Fire Safety", "Concrete Slabs", "IS 9537"],
    content: [
      {
        sectionHeading: "Crucial Demands on Slabs-Cast Electrical Conduits",
        bodyText: [
          "During multi-story concrete casting, electrical conduits laid across structural rebar are subjected to extreme mechanical stresses. Vibrating compaction needles, workers walking across reinforcement mesh, and wet concrete hydrostatic head can crush sub-standard pipes.",
          "Heavy Duty (HMS) rigid PVC conduits manufactured to IS 9537 Part 3 are formulated with specialized impact modifiers. They maintain circularity and resist compressive loads exceeding 1,250 Newtons, ensuring that wire pulling pathways remain completely clear after concrete curing."
        ],
        keyTakeaway: "Always mandate Heavy Duty (HMS) conduits for concealed slab casting to prevent costly slab breaking and conduit unblocking."
      },
      {
        sectionHeading: "Flame Retardancy and the Limiting Oxygen Index (LOI)",
        bodyText: [
          "Normal atmospheric air contains roughly 21% oxygen. Materials with a Limiting Oxygen Index (LOI) below 21% burn freely in ambient conditions. The Monk Power India electrical conduits are compounded with halogenated flame retardants that push the LOI beyond 30%.",
          "In the event of an electrical short-circuit or arc flash, the conduit will not support combustion. The moment the external ignition spark or flame source is removed, the conduit self-extinguishes within seconds, preventing electrical chases from acting as chimneys that spread fire across building floors."
        ]
      },
      {
        sectionHeading: "Cold Bending Capability without Structural Kinking",
        bodyText: [
          "Site efficiency demands rapid conduit routing around structural beams and columns. Utilizing a high-tensile internal bending spring, electricians can bend high-grade conduits up to 90 degrees at ambient room temperatures without applying torches or hot air guns.",
          "This preserves the polymer molecular orientation, preventing micro-fractures along the outer bend radius and ensuring effortless cable pulling."
        ],
        keyTakeaway: "Cold bending saves up to 40% on fitting costs and reduces installation time while guaranteeing fire safety compliance."
      }
    ]
  }
];
