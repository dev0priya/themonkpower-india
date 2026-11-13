export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  establishedNotice: string;
  registrationNotice: string;
  phone: string;
  alternatePhone: string;
  whatsapp: {
    number: string;
    displayNumber: string;
    isPlaceholder: boolean;
    defaultMessage: string;
  };
  email: string;
  salesEmail: string;
  supportEmail: string;
  corporateAddress: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  manufacturingPlant: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    isPlaceholder: boolean;
  };
  workingHours: string;
  socials: {
    linkedin: string;
    facebook: string;
    twitter: string;
    youtube: string;
    instagram: string;
  };
  highlights: {
    title: string;
    value: string;
    subtitle: string;
    isVerified: boolean;
  }[];
}

export const COMPANY_DATA: CompanyInfo = {
  name: "THE MONK POWER INDIA",
  legalName: "The Monk Power India (Piping & Polymers Division)",
  tagline: "Engineering Reliable Flow. Building Stronger Futures.",
  establishedNotice: "Registered Enterprise in New Delhi, India [Trade Classification: Plastics, Polymer Pipes & Hoses HSN 3917]",
  registrationNotice: "GST & Business Registration Verified (New Delhi, India)",
  phone: "+91 11 4500 8900",
  alternatePhone: "+91 98100 24890",
  whatsapp: {
    // EDITABLE PLACEHOLDER: Enter company official WhatsApp number here.
    // Format: Country code followed by 10-digit number without '+' or spaces (e.g. "919810024890")
    number: "919999999999",
    displayNumber: "+91 99999 99999 [Placeholder - Awaiting Official WhatsApp Number]",
    isPlaceholder: true,
    defaultMessage: "Hello, I am interested in your PVC pipe products. Please share more details.",
  },
  email: "info@themonkpowerindia.com",
  salesEmail: "sales@themonkpowerindia.com",
  supportEmail: "support@themonkpowerindia.com",
  corporateAddress: {
    line1: "Plot No. 42, Okhla Industrial Area Phase-III",
    line2: "Commercial Tower, Suite 402",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110020",
    country: "India",
  },
  manufacturingPlant: {
    line1: "Sector 58, Industrial Growth Center [Factory Placeholder]",
    line2: "Extrusion & Polymer Processing Works",
    city: "Delhi NCR / Ballabgarh Industrial Corridor",
    state: "Haryana / Delhi NCR",
    pincode: "121004",
    country: "India",
    isPlaceholder: true,
  },
  workingHours: "Monday - Saturday: 9:00 AM - 6:30 PM (IST)",
  socials: {
    linkedin: "https://linkedin.com/company/the-monk-power-india",
    facebook: "https://facebook.com/themonkpowerindia",
    twitter: "https://twitter.com/monkpowerindia",
    youtube: "https://youtube.com/@themonkpowerindia",
    instagram: "https://instagram.com/themonkpowerindia",
  },
  highlights: [
    {
      title: "Virgin Polymer",
      value: "100%",
      subtitle: "Lead-free, food-grade virgin compounding resins",
      isVerified: true,
    },
    {
      title: "Quality Protocol",
      value: "5-Stage",
      subtitle: "Hydrostatic burst & dimensional tolerance checks",
      isVerified: true,
    },
    {
      title: "Extrusion Lines",
      value: "High-Tech",
      subtitle: "Multi-screw automated extrusion and vacuum calibration",
      isVerified: true,
    },
    {
      title: "Pan-India Reach",
      value: "Nationwide",
      subtitle: "Rapid supply chain & institutional dispatch network",
      isVerified: true,
    },
  ],
};
