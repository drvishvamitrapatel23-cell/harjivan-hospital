export const SITE = {
  name: "Harjivan Hospital",
  doctor: "Dr. Vishvamitra Patel",
  doctorQualifications: "B.A.M.S, D.A.K, P.G.D.I.P",
  doctorRegistration: "GBI-11609",
  tagline: "Advanced Piles & Ano-Rectal Treatment in Gandhinagar",
  phone: "+91 96240 44999",
  phoneHref: "tel:+919624044999",
  ambulance: "+91 96240 44999",
  ambulanceHref: "tel:+919624044999",
  whatsapp: "919624044999",
  email: "contact@harjivanhospital.com",
  address:
    "3rd Floor, Sharan Business, Nr. D-Mart, Sector-26, Gandhinagar, Gujarat 382028",
  city: "Gandhinagar",
  state: "Gujarat",
  pinCode: "382028",
  landmark: "Sector 26, Gandhinagar",
  hours: "10AM to 2PM · All Days",
  url: "https://harjivanhospital.com",
  since: 1994,
  beds: 15,
  operationalBeds: 15,
  coveredArea: 6000,
  areaPerBed: 66,
  therapyRooms: 2,
  operationTheaters: 1,
  registrationAuthority: "Gandhinagar Municipal Corporation",
  bookPdf: "/book-by-dr-vishvamitra-patel.pdf",
  nabh: true,
  googleMapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.123!2d72.6369848!3d23.256086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b8abd6dd0ed%3A0x987bfa3a17c99e9!2sHarjivan%20Hospital%2C%20Dr%20Vishwamitra%20Patel%2C%20First%20NABH%20certified%20hospital%20in%20Gandhinagar%2C%20Piles%20and%20Fistula%20Hospital!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  vision:
    "To Make Ayurveda The First Choice Solution Rather Than Last Remedy And Create A More Comprehensive Understanding Of General Health Among The Society, Hence Making Preventive Health Care More Valuable Among Than It Is Today.",
  mission:
    "To Provide High Quality Ayurvedic Solutions And Panchkarma Treatment To The General Public At Affordable Costs. Providing High Quality Treatment And Results Is Of Utter Importance To Us. In Order To Achieve This, We Use The Absolute Best Quality Herbs And Herbal Products. Using High Quality Ayurvedic Medicines And With The Expertise Of Our Skilled Ayurveda Professionals We Strive To Create A High Standard Of Ayurvedic Excellence.",
}

export const CONSULTANTS = [
  {
    name: "Dr. Vishvamitra Patel",
    qualification: "B.A.M.S, D.A.K, P.G.D.I.P",
    specialization: "D.A.K, P.G.D.I.P",
    registrationNo: "GBI-11609",
  },
]

export const RMOS = [
  {
    name: "Dr. Hetal Patel",
    qualification: "B.N.Y.S",
    specialization: "Naturopathy & Yoga",
  },
  {
    name: "Dr. Niharika Patel",
    qualification: "B.A.M.S",
    specialization: "Panchkarma",
  },
  {
    name: "Dr. Krunal Patel",
    qualification: "B.A.M.S",
    specialization: "Panchkarma",
  },
]

export const GENERAL_SURGEONS = [
  {
    name: "Dr. P.K. Patel",
    qualification: "M.S",
    specialization: "General Surgeon",
  },
  {
    name: "Dr. Khyati A Patel",
    qualification: "M.S",
    specialization: "General Surgeon",
  },
]

export const ORG_CHART = {
  role: "Director",
  children: [
    {
      role: "Medical Superintendent",
      children: [
        {
          role: "Compliance Doctor",
          children: [
            { role: "Panchkarma Technician" },
            { role: "MRD" },
            { role: "Pharmacy" },
          ],
        },
        {
          role: "Compliance Doctor",
          children: [
            { role: "Front Office" },
            { role: "Maintenance" },
            { role: "Outsource Services" },
          ],
        },
      ],
    },
  ],
}
