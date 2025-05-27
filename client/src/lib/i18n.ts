export interface Translation {
  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
    arabic: string;
    english: string;
  };
  hero: {
    title: string;
    subtitle: string;
    exploreServices: string;
    getConsultation: string;
  };
  stats: {
    projectsCompleted: string;
    gccCountries: string;
    monitoring: string;
    uptime: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
  };
  services: {
    title: string;
    subtitle: string;
    perimeter: {
      title: string;
      description: string;
      features: string[];
    };
    operational: {
      title: string;
      description: string;
      features: string[];
    };
    asset: {
      title: string;
      description: string;
      features: string[];
    };
    learnMore: string;
  };
  technology: {
    title: string;
    subtitle: string;
    features: {
      aiVision: { title: string; description: string };
      thermal: { title: string; description: string };
      drone: { title: string; description: string };
      analytics: { title: string; description: string };
      intelligence: { title: string; description: string };
    };
  };
  testimonials: {
    title: string;
    items: Array<{
      text: string;
      name: string;
      position: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    mainOffice: string;
    mainOfficeAddress: string;
    regionalOffice: string;
    regionalOfficeAddress: string;
    contactLine: string;
    phone: string;
    email: string;
    form: {
      title: string;
      fullName: string;
      company: string;
      email: string;
      phone: string;
      serviceInterest: string;
      projectDetails: string;
      submit: string;
      sending: string;
      sent: string;
      error: string;
    };
    services: string[];
  };
  footer: {
    description: string;
    services: string;
    contact: string;
    copyright: string;
  };
}

export const translations: Record<'en' | 'ar', Translation> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      arabic: "العربية",
      english: "English",
    },
    hero: {
      title: "Critical Infrastructure Protection for the GCC Region",
      subtitle: "Advanced physical security solutions tailored for Gulf Cooperation Council markets. Protecting critical assets with cutting-edge technology and cultural expertise.",
      exploreServices: "Explore Services",
      getConsultation: "Get Consultation",
    },
    stats: {
      projectsCompleted: "Projects Completed",
      gccCountries: "GCC Countries",
      monitoring: "Monitoring",
      uptime: "Uptime",
    },
    about: {
      title: "Securing the Future of Critical Infrastructure",
      subtitle: "Critical Infrastructure",
      description: "Maverick Security Solutions specializes in comprehensive physical security consulting for the GCC region. Our expertise combines advanced technology with deep understanding of regional requirements and cultural considerations.",
      features: [
        "GCC-compliant security frameworks",
        "Cultural adaptation of security protocols",
        "Advanced threat detection systems",
        "24/7 monitoring and response",
      ],
    },
    services: {
      title: "Comprehensive Security Solutions",
      subtitle: "Tailored physical security services delivered by US military-trained professionals, designed specifically for the unique challenges and operational requirements of GCC infrastructure.",
      perimeter: {
        title: "Asset Protection Teams",
        description: "Specialized teams safeguard high-value assets and critical infrastructure with secure transport, site escorts, and protection of cultural and religious sites.",
        features: [
          "High-Value Cargo Escort",
          "Heritage & Religious Site Security",
          "Critical Infrastructure Patrols",
        ],
      },
      operational: {
        title: "Perimeter Security Teams",
        description: "Disciplined security professionals conduct continuous patrols, manage access points, and enforce strict perimeter protocols—ensuring your facility's first line of defense is always mission-ready.",
        features: [
          "Infantry-Style Patrols & Checkpoints",
          "Majlis-Adapted Access Control",
          "24/7 Perimeter Surveillance",
        ],
      },
      asset: {
        title: "Advanced Technology & Anti-UAV Solutions",
        description: "Integrating the latest in security technology to enhance on-ground operations, including advanced sensor fusion, UAV detection, and real-time analytics for critical sites.",
        features: [
          "Sabotage Prevention & Intrusion Countermeasures",
          "Anti-UAV Detection & Mitigation",
          "Smart Surveillance & Predictive Analytics",
        ],
      },
      learnMore: "Learn More",
    },
    technology: {
      title: "Elite Physical Security Operations",
      subtitle: "Mission-ready protection and risk mitigation, delivered by security professionals with US military infantry experience and proven performance in high-threat environments.",
      features: {
        aiVision: {
          title: "Tactical Site Protection",
          description: "Comprehensive on-ground security protocols, perimeter patrols, and rapid response teams, expertly adapted to the unique demands of GCC facilities and infrastructure.",
        },
        thermal: {
          title: "Infantry-Trained Threat Response",
          description: "Veteran-led teams skilled in real-time threat identification, escalation management, and coordinated defense—honed through multiple overseas deployments and complex operational scenarios.",
        },
        drone: {
          title: "24/7 Perimeter Patrols",
          description: "Disciplined foot and vehicle patrols, checkpoint operations, and access control, ensuring continuous vigilance and fast incident response in all conditions.",
        },
        analytics: {
          title: "Critical Incident Management",
          description: "Battle-tested professionals trained to lead evacuations, manage emergencies, and neutralize threats with military precision and composure under pressure.",
        },
        intelligence: {
          title: "Situational Awareness & Intelligence Gathering",
          description: "Proactive risk assessment, detailed site surveys, and ongoing intelligence collection—delivering actionable insights to prevent security breaches before they occur.",
        },
      },
    },
    testimonials: {
      title: "Trusted by Leading Organizations",
      items: [
        {
          text: "Maverick Security's understanding of GCC requirements and cultural sensitivities made them the perfect partner for our critical infrastructure protection.",
          name: "Ahmed Al-Rashid",
          position: "Security Director, Major GCC Corp",
        },
        {
          text: "The integration of advanced technology with local expertise exceeded our expectations. Their 24/7 monitoring has been flawless.",
          name: "Sarah Al-Mahmoud",
          position: "Operations Manager, Infrastructure Co",
        },
        {
          text: "Maverick's expertise in GCC building codes and cultural requirements made our project implementation seamless and compliant.",
          name: "Omar Al-Zahra",
          position: "Facilities Director, Energy Sector",
        },
      ],
    },
    contact: {
      title: "Secure Your Critical Infrastructure",
      subtitle: "Get expert consultation on your physical security requirements. Our team is ready to assess your needs and provide tailored solutions.",
      mainOffice: "Main Office",
      mainOfficeAddress: "270 Cumberland Forest Dr\nMAGNOLIA, TX 77354",
      regionalOffice: "Regional Office", 
      regionalOfficeAddress: "Riyadh, KSA",
      contactLine: "Contact Line",
      phone: "+966-53-558-7551",
      email: "security@mavericksecsolutions.com",
      form: {
        title: "Request Consultation",
        fullName: "Full Name",
        company: "Company",
        email: "Email",
        phone: "Phone",
        serviceInterest: "Service Interest",
        projectDetails: "Project Details",
        submit: "Send Consultation Request",
        sending: "Sending...",
        sent: "Request Sent!",
        error: "Failed to send request",
      },
      services: [
        "Perimeter Security Solutions",
        "Operational Continuity Frameworks",
        "Asset Protection Protocols",
        "Comprehensive Security Assessment",
      ],
    },
    footer: {
      description: "Leading physical security consulting firm specializing in critical infrastructure protection for the GCC region. Advanced technology meets cultural expertise.",
      services: "Services",
      contact: "Contact",
      copyright: "© 2025 Maverick Security Solutions. All rights reserved. | Privacy Policy | Terms of Service",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن الشركة",
      services: "الخدمات",
      contact: "اتصل بنا",
      arabic: "العربية",
      english: "English",
    },
    hero: {
      title: "حماية البنية التحتية الحيوية لمنطقة دول مجلس التعاون الخليجي",
      subtitle: "حلول أمنية مادية متقدمة مصممة خصيصاً لأسواق مجلس التعاون الخليجي. حماية الأصول الحيوية بتكنولوجيا متطورة وخبرة ثقافية.",
      exploreServices: "استكشف الخدمات",
      getConsultation: "احصل على استشارة",
    },
    stats: {
      projectsCompleted: "مشروع مكتمل",
      gccCountries: "دول خليجية",
      monitoring: "مراقبة",
      uptime: "وقت التشغيل",
    },
    about: {
      title: "تأمين مستقبل البنية التحتية الحيوية",
      subtitle: "البنية التحتية الحيوية",
      description: "تختص شركة مافريك للحلول الأمنية في الاستشارات الأمنية الشاملة للمنطقة الخليجية. خبرتنا تجمع بين التكنولوجيا المتقدمة والفهم العميق للمتطلبات الإقليمية والاعتبارات الثقافية.",
      features: [
        "أطر أمنية متوافقة مع دول الخليج",
        "تكييف البروتوكولات الأمنية ثقافياً",
        "أنظمة كشف التهديدات المتقدمة",
        "مراقبة واستجابة على مدار الساعة",
      ],
    },
    services: {
      title: "حلول أمنية شاملة",
      subtitle: "خدمات أمنية مادية مصممة خصيصاً يقدمها محترفون مدربون عسكرياً أمريكياً، مُصممة للتحديات الفريدة والمتطلبات التشغيلية للبنية التحتية الخليجية.",
      perimeter: {
        title: "فرق حماية الأصول",
        description: "فرق متخصصة لحماية الأصول عالية القيمة والبنية التحتية الحيوية مع النقل الآمن ومرافقة المواقع وحماية المواقع الثقافية والدينية.",
        features: [
          "مرافقة البضائع عالية القيمة",
          "أمن المواقع التراثية والدينية",
          "دوريات البنية التحتية الحيوية",
        ],
      },
      operational: {
        title: "فرق أمن المحيط",
        description: "محترفو أمن منضبطون يقومون بدوريات مستمرة وإدارة نقاط الوصول وتطبيق بروتوكولات محيطية صارمة—ضماناً أن خط الدفاع الأول لمنشأتك جاهز دائماً للمهمة.",
        features: [
          "دوريات ونقاط تفتيش على النمط العسكري",
          "نظام التحكم في الوصول المتكيف مع المجالس",
          "مراقبة المحيط على مدار الساعة",
        ],
      },
      asset: {
        title: "التكنولوجيا المتقدمة وحلول مكافحة الطائرات بدون طيار",
        description: "دمج أحدث التقنيات الأمنية لتعزيز العمليات الأرضية، بما في ذلك دمج أجهزة الاستشعار المتقدمة وكشف الطائرات بدون طيار والتحليلات الفورية للمواقع الحيوية.",
        features: [
          "منع التخريب والتدابير المضادة للاختراق",
          "كشف الطائرات بدون طيار والتخفيف منها",
          "المراقبة الذكية والتحليلات التنبؤية",
        ],
      },
      learnMore: "اعرف المزيد",
    },
    technology: {
      title: "عمليات الأمن المادي النخبوية",
      subtitle: "حماية جاهزة للمهام وتخفيف المخاطر، يقدمها محترفو أمن ذوو خبرة عسكرية أمريكية وأداء مُثبت في البيئات عالية التهديد.",
      features: {
        aiVision: {
          title: "حماية المواقع التكتيكية",
          description: "بروتوكولات أمنية شاملة على الأرض، دوريات محيطية وفرق استجابة سريعة، مُكيَّفة بخبرة لمتطلبات مرافق دول الخليج الفريدة.",
        },
        thermal: {
          title: "استجابة التهديدات المدربة عسكرياً",
          description: "فرق يقودها محاربون قدامى ماهرون في تحديد التهديدات الفورية وإدارة التصعيد والدفاع المنسق.",
        },
        drone: {
          title: "دوريات المحيط على مدار الساعة",
          description: "دوريات منضبطة سيراً وبالمركبات، عمليات نقاط تفتيش ومراقبة الوصول مع استجابة سريعة للحوادث.",
        },
        analytics: {
          title: "إدارة الحوادث الحرجة",
          description: "محترفون مُختبرون في المعارك مدربون على قيادة عمليات الإخلاء وإدارة الطوارئ",
        },
        intelligence: {
          title: "الوعي الظرفي وجمع المعلومات",
          description: "تقييم استباقي للمخاطر ومسوحات مفصلة للمواقع وجمع مستمر للمعلومات",
        },
      },
    },
    testimonials: {
      title: "موثوقة من قبل المؤسسات الرائدة",
      items: [
        {
          text: "فهم مافريك سيكيورتي لمتطلبات دول الخليج والحساسيات الثقافية جعلهم الشريك المثالي لحماية البنية التحتية الحيوية لدينا.",
          name: "أحمد الراشد",
          position: "مدير الأمن، شركة خليجية كبرى",
        },
        {
          text: "دمج التكنولوجيا المتقدمة مع الخبرة المحلية فاق توقعاتنا. مراقبتهم على مدار الساعة كانت مثالية.",
          name: "سارة المحمود",
          position: "مديرة العمليات، شركة البنية التحتية",
        },
        {
          text: "خبرة مافريك في أكواد البناء الخليجية والمتطلبات الثقافية جعلت تنفيذ مشروعنا سلساً ومتوافقاً.",
          name: "عمر الزهراء",
          position: "مدير المرافق، قطاع الطاقة",
        },
      ],
    },
    contact: {
      title: "أمّن بنيتك التحتية الحيوية",
      subtitle: "واحصل على استشارة خبراء حول متطلباتك الأمنية المادية. فريقنا جاهز لتقييم احتياجاتك وتقديم حلول مخصصة تناسبك.",
      mainOffice: "المكتب الرئيسي",
      mainOfficeAddress: "270 Cumberland Forest Dr\nMAGNOLIA, TX 77354",
      regionalOffice: "المكتب الإقليمي",
      regionalOfficeAddress: "الرياض، المملكة العربية السعودية",
      contactLine: "خط الاتصال",
      phone: "+966-53-558-7551",
      email: "security@mavericksecsolutions.com",
      form: {
        title: "طلب استشارة",
        fullName: "الاسم الكامل",
        company: "الشركة",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        serviceInterest: "الخدمة المطلوبة",
        projectDetails: "تفاصيل المشروع",
        submit: "إرسال طلب الاستشارة",
        sending: "جاري الإرسال...",
        sent: "تم إرسال الطلب!",
        error: "فشل في إرسال الطلب",
      },
      services: [
        "حلول أمن المحيط",
        "أطر الاستمرارية التشغيلية",
        "بروتوكولات حماية الأصول",
        "تقييم أمني شامل",
      ],
    },
    footer: {
      description: "شركة استشارات أمنية مادية رائدة متخصصة في حماية البنية التحتية الحيوية لمنطقة الخليج. التكنولوجيا المتقدمة تلتقي بالخبرة الثقافية.",
      services: "الخدمات",
      contact: "اتصل بنا",
      copyright: "© 2025 مافريك للحلول الأمنية. جميع الحقوق محفوظة. | سياسة الخصوصية | شروط الخدمة",
    },
  },
};
