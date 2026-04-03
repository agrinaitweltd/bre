export interface ServiceData {
  slug: string
  title: string
  img: string
  desc: string
  category: 'removals' | 'specialist' | 'support'
  fullDesc: string
  features: string[]
}

export const services: ServiceData[] = [
  {
    slug: 'self-vehicle-hire',
    title: 'Self-Vehicle Hire',
    img: '/service-vehicle.jpg',
    desc: 'Rent a vehicle and move at your own pace with our affordable self-hire options.',
    category: 'support',
    fullDesc: 'Our self-vehicle hire service gives you the freedom to manage your move independently. Choose from a range of clean, well-maintained vans and trucks suited to moves of all sizes. Whether you need a compact van for a few boxes or a large truck for a full house, we have you covered at competitive daily and weekly rates across London.',
    features: ['Range of vehicle sizes available', 'Competitive daily and weekly rates', 'Clean and well-maintained fleet', 'Flexible pick-up and drop-off locations', 'Insurance options included', 'No hidden mileage charges'],
  },
  {
    slug: 'man-and-van',
    title: 'Man and Van',
    img: '/service-manvan.jpg',
    desc: 'Professional movers with a van for quick, efficient small-to-medium moves.',
    category: 'support',
    fullDesc: 'Our man and van service pairs you with experienced, professional movers and a fully equipped van for fast, efficient relocations. Ideal for smaller moves, single-item deliveries, or when you need an extra pair of hands. Available at short notice across London and surrounding areas.',
    features: ['Experienced and vetted movers', 'Available at short notice', 'Ideal for small-to-medium moves', 'Single item deliveries welcome', 'Evening and weekend availability', 'Fully insured service'],
  },
  {
    slug: 'house-removals',
    title: 'House Removals',
    img: '/service-house.jpg',
    desc: 'Full-service house removals across London, handled with care from start to finish.',
    category: 'removals',
    fullDesc: 'Moving house is one of life\'s biggest events, and our complete house removal service takes the stress away. From initial survey to final box placement, our trained team manages every step. We handle packing, loading, transport, and unloading with meticulous care, ensuring your belongings arrive safely at your new home.',
    features: ['Free pre-move survey and quote', 'Professional packing and unpacking', 'Dismantling and reassembly of furniture', 'Full contents insurance', 'Dedicated move coordinator', 'London-wide and national coverage'],
  },
  {
    slug: 'office-removals',
    title: 'Office Removals',
    img: '/service-office.jpg',
    desc: 'Minimise downtime with our seamless office relocation services.',
    category: 'removals',
    fullDesc: 'Office moves require precision timing and minimal disruption to your business. Our commercial removal team specialises in relocating offices of all sizes, from small studios to multi-floor operations. We work around your schedule — including evenings and weekends — to keep your business running smoothly.',
    features: ['Minimal business downtime', 'IT equipment handling specialists', 'Out-of-hours and weekend moves', 'Workspace planning support', 'Secure document transportation', 'Crate hire available'],
  },
  {
    slug: 'student-removals',
    title: 'Student Removals',
    img: '/service-student.jpg',
    desc: 'Budget-friendly moving solutions tailored for students across London.',
    category: 'removals',
    fullDesc: 'We understand student budgets, which is why we offer affordable, reliable removal services designed specifically for students. Whether you\'re moving into halls, between shared houses, or heading home for the holidays, our student-friendly service makes the process quick and painless.',
    features: ['Special student rates', 'Quick and efficient service', 'Halls of residence experience', 'Shared load options to save costs', 'Term-time scheduling flexibility', 'Storage options between terms'],
  },
  {
    slug: 'furniture-removals',
    title: 'Furniture Removals',
    img: '/service-furniture.jpg',
    desc: 'Safe handling and transport of all furniture types, big or small.',
    category: 'removals',
    fullDesc: 'From a single wardrobe to a full house of furniture, our team has the expertise and equipment to move your items safely. We use professional wrapping, blankets, and strapping to protect every piece during transit, whether it\'s flat-pack or a heavy solid-wood dining set.',
    features: ['Professional protective wrapping', 'Heavy item specialists', 'Dismantling and reassembly', 'Stair and tight-access experience', 'Same-day delivery options', 'Scratch and damage protection'],
  },
  {
    slug: 'piano-removals',
    title: 'Piano Removals',
    img: '/service-piano.jpg',
    desc: 'Specialist piano movers with the equipment and expertise to move safely.',
    category: 'specialist',
    fullDesc: 'Pianos require specialist handling due to their size, weight, and delicate internal mechanisms. Our trained piano movers use purpose-built equipment including piano skids, ramps, and hoisting gear to relocate uprights, baby grands, and concert grands safely across any distance.',
    features: ['Specialist piano moving equipment', 'Trained and experienced handlers', 'Uprights, grands, and concert pianos', 'Staircase and crane lifting available', 'Climate awareness during transport', 'Full specialist insurance'],
  },
  {
    slug: 'antique-removals',
    title: 'Antique Removals',
    img: '/service-antique.jpg',
    desc: 'Delicate handling for your prized antiques with full insurance coverage.',
    category: 'specialist',
    fullDesc: 'Antique items are irreplaceable, and we treat them that way. Our antique removal specialists use custom packing methods, acid-free materials, and climate-controlled vehicles to ensure your valuable pieces are transported with the highest level of care and protection.',
    features: ['Custom packing and crating', 'Acid-free wrapping materials', 'Climate-controlled vehicles', 'Comprehensive specialist insurance', 'White-glove handling service', 'Valuation support available'],
  },
  {
    slug: 'art-removals',
    title: 'Art Removals',
    img: '/service-art.jpg',
    desc: 'Professional transport for paintings, sculptures, and gallery pieces.',
    category: 'specialist',
    fullDesc: 'From private collections to gallery installations, our art removal service provides secure, careful transportation for works of all sizes and media. We build custom crates, use vibration-dampening materials, and offer climate-controlled transport to protect your art throughout the journey.',
    features: ['Custom crating and packaging', 'Climate-controlled transport', 'Gallery and exhibition experience', 'Insurance for high-value works', 'Installation and hanging services', 'International art shipping'],
  },
  {
    slug: 'packaging-services',
    title: 'Packaging Services',
    img: '/service-packaging.jpg',
    desc: 'Expert packing using premium materials to keep your belongings secure.',
    category: 'support',
    fullDesc: 'Our professional packing service saves you hours of preparation. Our trained packers use high-quality materials — bubble wrap, tissue paper, sturdy boxes, wardrobe cartons — to ensure everything from kitchenware to electronics is securely packed and clearly labelled for easy unpacking.',
    features: ['Premium packing materials', 'Trained professional packers', 'Fragile item specialists', 'Wardrobe box service', 'Clear labelling system', 'Partial or full packing options'],
  },
  {
    slug: 'storage-services',
    title: 'Storage Services',
    img: '/service-storage.jpg',
    desc: 'Short and long-term secure storage facilities when you need extra space.',
    category: 'support',
    fullDesc: 'Whether you need temporary storage during a move or a long-term solution, our clean, secure storage facilities across London offer flexible options. All units are alarmed, CCTV-monitored, and climate-controlled, with easy access so you can retrieve your items whenever you need them.',
    features: ['Short and long-term options', '24/7 CCTV and alarm security', 'Climate-controlled units', 'Flexible access hours', 'Various unit sizes', 'Collection and delivery service'],
  },
  {
    slug: 'international-removals',
    title: 'International Removals',
    img: '/service-international.jpg',
    desc: 'Worldwide relocation services with customs support and door-to-door delivery.',
    category: 'removals',
    fullDesc: 'Relocating abroad is complex, but we make it straightforward. Our international removal service covers everything from professional packing and customs documentation to sea freight, air freight, and door-to-door delivery. We work with trusted partners worldwide to ensure your belongings arrive safely, wherever you\'re headed.',
    features: ['Door-to-door worldwide service', 'Sea and air freight options', 'Customs documentation support', 'Professional export packing', 'Tracking throughout transit', 'Destination unpacking available'],
  },
  {
    slug: 'pet-transportation',
    title: 'Pet Transportation',
    img: '/service-pet.jpg',
    desc: 'Safe, comfortable transportation for your furry family members.',
    category: 'specialist',
    fullDesc: 'Your pets are part of the family, and we move them with the same care. Our pet transportation service uses climate-controlled, ventilated vehicles with experienced handlers to keep your animals calm and comfortable during the journey. We cover local moves and longer-distance relocations.',
    features: ['Climate-controlled vehicles', 'Experienced animal handlers', 'Comfortable and ventilated transport', 'Regular comfort breaks on long trips', 'All pet types accommodated', 'Veterinary liaison support'],
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug)
}

export function getServicesByCategory(category: ServiceData['category']): ServiceData[] {
  return services.filter((s) => s.category === category)
}
