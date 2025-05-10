import { NavItem, Event, Achievement, Faculty, Building, CarouselItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'School Achievements', path: '/school-achievements' },
  { label: 'Academic Achievements', path: '/academic-achievements' },
  { label: 'Events', path: '/events' },
  { label: 'About', path: '/about' },
];

export const carouselItems: CarouselItem[] = [
  {
    id: '1',
    imageUrl: 'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/2%20SCHOOL%20BUILDING%20PHOTOS/upcoming%20IIT%20block.jpg?updatedAt=1746513020076',
   
   
  },
  {
    id: '2',
    imageUrl: 'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/4%20acadamic%20achievements/3.2.jpg?updatedAt=1746513010348',
   
   
  },
  {
    id: '3',
    imageUrl: 'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/4%20acadamic%20achievements/IMG-20181228-WA0046.jpg?updatedAt=1746515904817',
    
    
  },
];

export const events: Event[] = [
  {
    id: '1',
    title: 'Annual Day Celebration',
    date: '2024-12-15',
    
    imageUrl: 'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/compressed_TRR06976.JPG?updatedAt=1746887316287',
    category: 'cultural',
    year: 2023,
  },
  {
    id: '2',
    title: 'Field Trip',
    date: '2024-08-25',
   
    imageUrl: 'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/1000006511.jpg?updatedAt=1746556406400',
    category: 'academic',
    year: 2023,
  },
  {
    id: '3',
    title: 'Sports',
    date: '2024-11-10',
    
    imageUrl: 'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/IMG-20241113-WA0016%20(1).jpg?updatedAt=1746556406350',
    category: 'sports',
    year: 2023,
  },
  {
    id: '4',
    title: 'Tour',
    date: '2024-08-15',
    
    imageUrl: 'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/d76e9eb5-5afd-4381-b856-3fba56caeadc.jpg?updatedAt=1746556406691',
    category: 'cultural',
    year: 2023,
  },
  {
    id: '5',
    title: "Teacher's Day",
    date: '2024-09-05',
    imageUrl: 'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/20220905_170430%20(1).jpg?updatedAt=1746783032542',
    category: 'cultural',
    year: 2023,
    
    
  },

  {
    id:'6',
    title:'Republic Day Celebration',
    date:'2024-01-26',
    imageUrl:'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/IMG-20250126-WA0081.jpg?updatedAt=1746783538484',
    category:'cultural',
    year:2024,
  },

  {
    id:'7',
    title:'Independence Day Celebration',
    date:'2024-08-15',
    imageUrl:'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/6cbe2d79-9c08-4ba5-9489-14b8f0d4c6e2%205%20(1).JPG?updatedAt=1746783851753',
    category:'cultural',
    year:2024,
  },

  {
    id:'8',
    title:'Sankranti Celebrations',
    date:'2024-01-14',
    
   
    imageUrl:'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/IMG-20250110-WA0136.jpg?updatedAt=1746784191210',
    category:'cultural',
    year:2024,
  },

  {
    id:'9',
    title:'SriRama Navami Celebrations',
    date:'2024-04-10',
    imageUrl:'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/IMG-20250406-WA0008.jpg?updatedAt=1746784380274',
    category:'cultural',
    year:2024,
  },
  {
    id:'10',
    title:'krishna Janmashtami Celebrations',
    date:'2024-09-07',
    imageUrl:'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/PHOTO-2024-08-26-19-09-05.jpg?updatedAt=1746784607043',
    category:'cultural',
    year:2024,
  },

  {
    id:'11',
    title:'Bathukamma Celebrations',
    date:'2024-10-01',
    
    imageUrl:'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/PHOTO-2024-10-03-19-16-27.jpg?updatedAt=1746784778833',
    category:'cultural',
    year:2024,
  },
 



  
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Digital satellite school award',
    description: 'Proud moment for PadmalayaHighSchool! Our school has been awarded the prestigious Digital Satellite School Award! Recognizing our commitment to innovative learning and technology integration. Kudos to our dedicated teachers, students, and staff!',
    year:2024,
    imageUrl: 'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/3%20SCHOOL%20ACHIEVEMENTS/1.jpg?updatedAt=1746513013742',
    category: 'school',
  },
  {
    id: '2',
    title: 'Quiz Competition 2nd Place',
    description: '"Our quiz team makes us proud again!Congratulations to our students for achieving 2nd place in the quiz competition organized by Yashoda Hospitals!',
   year:2024,
    imageUrl: 'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/4%20acadamic%20achievements/1.3.jpg?updatedAt=1746513001265',
    category: 'academic',
  },
  {
    id: '3',
    title: 'Education Excellence Award',
    description: 'We are OVER THE MOON to announce that PADMALAYA HIGH SCHOOL has been awarded for Outstanding Dedication to Education Excellence! Our commitment to setting benchmarks in quality education and promoting holistic development in students has been recognized. A huge thank you to our amazing team, students, and parents for their tireless efforts!'
,
   year:2024,
    imageUrl: 'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/3%20SCHOOL%20ACHIEVEMENTS/2.jpg?updatedAt=1746513017965',
    category: 'school',
  },
  {
    id: '4',
    title: 'Srinivasa Ramanujan Talent Test',
    description: '"Congratulations to Our Young Math Whizzes!Were thrilled to announce that our school has achieved excellence in the Srinivasa Ramanujan Talent Test!Hard work, dedication, and a passion for math have led to this outstanding achievement!',
   year:2024,
    imageUrl: 'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/4%20acadamic%20achievements/2.3.jpg?updatedAt=1746513006681',
    category: 'academic',
  },

  {
    id: '5',
    title: 'District-level Abacus Competition',
    description: '"District-level Abacus Competition hosted by viswam Edutech at our school campus! Students from all schools participated, showcasing their mental math skills! Huge congratulations to our Padmalaya High School students for their outstanding performance!',
    year:2024,
    imageUrl: 'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/4%20acadamic%20achievements/3.2.jpg?updatedAt=1746513010348',
    category: 'academic',
  },


  {
    id: '6',
    title: 'Quiz Competition by Eenadu Media',
    description: 'Congratulations to our students!Winners of the Quiz Competition conducted by @EenaduMedia #EenaduQuizCompetition',
   year:2024,
    imageUrl: 'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/4%20acadamic%20achievements/4.1.jpg?updatedAt=1746513006264',
    category: 'academic',
  },


  {
    id:'7',
    title:'Badminton Tournament',
    description:'CHAMPION ALERT! Huge congratulations to our very own M.D. Armaan for winning the Sub Junior CM Cup Badminton tournament in Mahabubnagar district! We are beaming with pride! Armaan, your dedication and hard work have paid off. Keep shining!'
,
year:2024,
imageUrl:'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/4%20acadamic%20achievements/6.1.jpg?updatedAt=1746513018658',
category:'academic'
  },
];

export const faculty: Faculty[] = [
  {
    id: '1',
    name: 'G.Vamshi Mohan Reddy',
    position: 'Principal',
    imageUrl: 'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/WhatsApp%20Image%202025-05-06%20at%2013.16.30_e4355685.jpg?updatedAt=1746536204655',
  },
  {
    id: '2',
    name: 'G.Swaroopa Rani',
    position: 'Correspondent',
    imageUrl: 'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/WhatsApp%20Image%202025-05-06%20at%2013.18.03_48904177.jpg?updatedAt=1746536205010',
    
  }
];

export const buildings: Building[] = [
  {
    id: '1',
    name: 'Main Academic Block',
    description: 'A three-story building with modern classrooms equipped with smart boards and multimedia facilities.',
    imageUrl: 'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/2%20SCHOOL%20BUILDING%20PHOTOS/Main%20branch%20.JPG?updatedAt=1746513018516',
    features: ['16 Classrooms', 'Administrative Offices', 'Staff Room', 'Labs'],
  },
  {
    id: '2',
    name: 'Second Branch',
    description: 'Our second branch, designed to accommodate more students and provide additional facilities.',
    imageUrl: 'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/2%20SCHOOL%20BUILDING%20PHOTOS/New%20branch%20.JPG?updatedAt=1746513020571',
    features: ['20 Classrooms', 'Staff Room', 'Computer Lab', 'Science Lab'],
  },
  {
    id: '3',
    name: 'Upcoming IIT Block',
    description: 'A new block under construction, designed to provide specialized coaching for IIT aspirants.',
    imageUrl: 'https://ik.imagekit.io/scmp79fg7/SCHOOL%20WEBSITE%20PHOTOS%20(2)/SCHOOL%20WEBSITE%20PHOTOS/2%20SCHOOL%20BUILDING%20PHOTOS/upcoming%20IIT%20block.jpg?updatedAt=1746513020076',
    features: ['IIT/NEET Classes', 'Advanced Labs', 'Science Lab', 'Staff Room'],
  },
  
];