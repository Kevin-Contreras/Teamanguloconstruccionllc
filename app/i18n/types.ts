export type Locale = "en" | "es";

export type ServiceItem = {
  title: string;
  description: string;
};

export type NamedService = {
  demolition: string;
  structural: string;
  hardieVinyl: string;
  pvcTrim: string;
  metalRoofing: string;
};

export type ValueItem = {
  title: string;
  body: string;
};

export type ServiceDetail = {
  number: string;
  title: string;
  titleAccent: string;
  caption: string;
  body: string;
  tagline: string;
  imageAlt: string;
};

export type Translations = {
  nav: {
    services: string;
    residential: string;
    commercial: string;
    aboutUs: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    switchToSpanish: string;
    switchToEnglish: string;
    langEs: string;
    langEn: string;
  };
  common: {
    moreInfo: string;
    getAQuote: string;
    getInTouch: string;
    whoWeAre: string;
    viewAllServices: string;
    seeResidentialProjects: string;
    seeCommercialProjects: string;
    seeHardieProjects: string;
    ourResidentialWork: string;
    ourCommercialWork: string;
    send: string;
    close: string;
  };
  cta: {
    line1: string;
    accent: string;
    line2: string;
    subtext: string;
    subtextBold: string;
  };
  footer: {
    tagline: string;
    taglineLine1: string;
    taglineLine2: string;
    taglineLine3: string;
    services: string;
    contact: string;
    followUs: string;
    location: string;
    copyright: string;
    socialAlt: string;
  };
  serviceNames: NamedService;
  home: {
    hero: {
      line1: string;
      line2: string;
      accent: string;
      subtext: string;
    };
    about: {
      welcomeBefore: string;
      welcomeTeam: string;
      headlineMobileBefore: string;
      headlineMobileAccent: string;
      headlineDesktop1: string;
      headlineDesktop2: string;
      headlineDesktop3: string;
      headlineDesktop4: string;
      headlineDesktop5: string;
      bodyMobile: string;
      bodyDesktop: string;
      statYears: string;
      statProjects: string;
    };
    values: ValueItem[];
    hardie: {
      accent: string;
      title: string;
      body: string;
      imageAlt: string;
    };
    ourWork: {
      title: string;
      subtitle: string;
      description: string;
      galleryAlts: string[];
    };
    services: {
      discover: string;
      our: string;
      exterior: string;
      solutions: string;
      description: string;
      items: ServiceItem[];
    };
    residentialCommercial: {
      residentialLabel: string;
      residentialTitle: string;
      residentialBodyMobile: string;
      residentialBodyDesktop: string;
      commercialLabel: string;
      commercialTitle: string;
      commercialBodyMobile: string;
      commercialBodyDesktop: string;
      residentialImageAlt: string;
      commercialImageAlt: string;
    };
    quality: {
      line1: string;
      line2: string;
      subtext: string;
    };
    faq: {
      headingBefore: string;
      headingAccent: string;
      questions: string[];
    };
  };
  about: {
    heroTitle: string;
    heroAccent: string;
    philosophyTitle: string;
    philosophyHeading: string;
    philosophyHeadingBold: string;
    philosophyBody: string;
    philosophyBodyMobile: string;
    differenceTitle: string;
    differenceAccent: string;
    differenceIntro: string;
    values: ValueItem[];
    residentialHeading: string;
    residentialAccent: string;
    residentialSubtext: string;
    residentialButton: string;
    commercialHeading: string;
    commercialAccent: string;
    commercialSubtext: string;
    commercialButton: string;
    storyTitle: string;
    storyHeading: string;
    storyHeadingBold: string;
    storyBody: string;
    storyBodyMobile: string;
    philosophyImageAlt: string;
  };
  servicesPage: {
    heroTitle: string;
    heroAccent: string;
    heroAccentMobile: string;
    heroSubtitle: string;
    heroSubtitleMobile: string;
    items: ServiceDetail[];
    itemsMobile: Omit<ServiceDetail, "titleAccent" | "tagline" | "imageAlt">[];
    bannerLine1: string;
    bannerLine2: string;
    bannerLine3: string;
  };
  residentialPage: {
    heroLine1: string;
    heroLine2: string;
    heroTitle: string;
    heroAccent: string;
    introLines: string[];
    introAccentLines: string[];
    introBody: string;
    introHeadingMobile: string;
    introAccentMobile: string;
    introBodyMobile: string;
    values: ValueItem[];
    portfolioTitle: string;
    portfolioSubtitle: string;
    portfolioSubtitleBold: string;
    portfolioDescription: string;
    galleryAlt: string;
  };
  commercialPage: {
    heroLine1: string;
    heroLine2: string;
    heroLine3: string;
    heroTitle: string;
    heroAccent: string;
    introLines: string[];
    introAccentLines: string[];
    introBody: string;
    introHeadingMobile: string;
    introAccentMobile: string;
    values: ValueItem[];
    portfolioTitle: string;
    portfolioSubtitle: string;
    portfolioSubtitleBold: string;
    portfolioDescription: string;
    galleryAlt: string;
  };
  contact: {
    heroLine1: string;
    heroAccent: string;
    heroSubtext: string;
    heroSubtextMobile: string;
    form: {
      name: string;
      phone: string;
      email: string;
      entryDate: string;
      departureDate: string;
      message: string;
    };
    successTitle: string;
    successAccent: string;
    successBody: string;
    successBodyBold: string;
  };
  metadata: {
    title: string;
    description: string;
  };
};
