export interface ServiceData {
  slug: string;
  title: string;
  group: 'home' | 'business';
  desc: string;
  details: string;
  img?: string;
  bannerImg?: string;
}

export const services: ServiceData[] = [
  // For Homes and Individuals
  {
    slug: 'home-office-storage-removals',
    title: 'Home/Office/Storage Removals',
    group: 'home',
    desc: 'Professional removals for homes, offices, and storage units.',
    details: 'Safe, reliable, and stress-free removals for your home, office, or storage needs. Our team handles everything from packing to transport, ensuring your belongings arrive safely.',
    img: '/service-icons/home-office.svg',
    bannerImg: '/banners/home-office-storage.jpg',
  },
  {
    slug: 'end-of-tenancy-clearance',
    title: 'End of Tenancy Clearance',
    group: 'home',
    desc: 'Full clean-up, waste removal, and property checks.',
    details: 'We leave your property spotless and ready for inspection. Includes deep cleaning, waste removal, and a final property check for peace of mind.',
    img: '/service-icons/clearance.svg',
    bannerImg: '/banners/end-of-tenancy.jpg',
  },
  {
    slug: 'student-accommodation-relocations',
    title: 'Student Accommodation Relocations',
    group: 'home',
    desc: 'Affordable, flexible moves for students.',
    details: 'Special rates and flexible scheduling for students moving into or out of accommodation. Quick, efficient, and budget-friendly.',
    img: '/service-icons/student.svg',
    bannerImg: '/banners/student-relocations.jpg',
  },
  {
    slug: 'man-and-van',
    title: 'Man & Van Collection/Delivery',
    group: 'home',
    desc: 'Hire a van and skilled mover for collection or delivery.',
    details: 'Perfect for single items, small moves, or when you need an extra pair of hands. Fast, friendly, and fully insured.',
    img: '/service-icons/man-van.svg',
    bannerImg: '/banners/man-and-van.jpg',
  },
  {
    slug: 'self-drive-van-hire',
    title: 'Self-Drive Van Hire',
    group: 'home',
    desc: 'Flexible van hire for DIY moves and tasks.',
    details: 'Choose from a range of van sizes for your own DIY move or project. Flexible hire periods and competitive rates.',
    img: '/service-icons/van-hire.svg',
    bannerImg: '/banners/self-drive-van.jpg',
  },

  // For Businesses (B2B Solutions)
  {
    slug: 'office-warehouse-relocations',
    title: 'Office & Warehouse Relocations',
    group: 'business',
    desc: 'Seamless relocations for offices and warehouses.',
    details: 'Minimise downtime with our expert business relocation services. We handle everything from planning to execution.',
    img: '/service-icons/office-warehouse.svg',
    bannerImg: '/banners/office-warehouse.jpg',
  },
  {
    slug: 'construction-site-logistics',
    title: 'Construction Site Logistics',
    group: 'business',
    desc: 'Transport of heavy machinery, tools, and materials.',
    details: 'Specialist logistics for construction sites, including delivery and removal of equipment, tools, and materials.',
    img: '/service-icons/construction.svg',
    bannerImg: '/banners/construction-logistics.jpg',
  },
  {
    slug: 'on-demand-breezyeers',
    title: 'On-Demand Breezyeers',
    group: 'business',
    desc: 'Hire skilled teams for loading, packing, or labour-intensive tasks.',
    details: 'Flexible, skilled teams available for short-term or project-based support. Ideal for loading, packing, or any labour-intensive business needs.',
    img: '/service-icons/breezyeers.svg',
    bannerImg: '/banners/on-demand-breezyeers.jpg',
  },
];

export function getServicesByGroup(group: 'home' | 'business'): ServiceData[] {
  return services.filter((s) => s.group === group);
}

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
