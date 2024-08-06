// talukas.js

const talukasByDistrict = {
  Ahmedabad: [
    "Ahmedabad",
    "Bavia",
    "Daskroi",
    "Detroj-Rampura",
    "Dhandhuka",
    "Dholera",
    "Dholka",
    "Mandal",
    "Sanand",
    "Viramgam",
  ],
  Amreli: [
    "Amreli",
    "Jafrabad",
    "Babra",
    "Kunkavav",
    "Dhari",
    "Khambha",
    "Kunkavav vadia",
    "Lathi",
    "Lilia",
    "Rajula",
    "Savarkundla",
  ],
  Anand: [
    "Anand",
    "Anklav",
    "Borsad",
    "Petlad",
    "Khambhat",
    "Sojitra",
    "Tarapur",
    "Umreth",
  ],
  Aravalli: [
    "Aravali",
    "Modasa",
    "Dhansura",
    "Malpur",
    "Meghraj",
    "Bhiloda",
    "Bayad",
  ],
  Banaskantha: [
    "Banaskantha",
    "Palanpur",
    "Amirgadh",
    "Bhabhar",
    "Danta",
    "Dantiwada",
    "Deesa",
    "Deodar",
    "Dhanera",
    "Kankrej",
    "Lakhani",
    "Palanpur",
    "Suigam",
    "Tharad",
    "Vadgam",
    "Vav",
  ],
  Bharuch: [
    "Bharuch",
    "Amod",
    "Ankleshwar",
    "Hansot",
    "Jambusar",
    "Jhagadia",
    "Netrang",
    "Vagra",
    "Valia",
  ],
  Bhavnagar: [
    "Bhavnagar",
    "Gariadhar",
    "Ghogha",
    "Jesar",
    "Mahuva",
    "Palitana",
    "Sihor",
    "Talaja",
    "Umrala",
    "Vallabhipur",
  ],
  Botad: ["Botad", "Ranpur", "Barvala", "Gadhada"],
  "Chhota Udaipur": [
    "Chhota Udaipur",
    "Bodeli",
    "Jetpur pavi",
    "Kavant",
    "Nasvadi",
    "Sankheda",
  ],
  Dahod: [
    "Dahod",
    "Devgadh Baria",
    "Dhanpur",
    "Fatepura",
    "Garbada",
    "Limkheda",
    "Sanjeli",
    "Jhalod",
    "Singvad",
  ],
  Dang: ["Dang", "Ahwa", "Subir", "Waghai"],
  "Devbhoomi Dwarka": [
    "Devbhoomi Dwarka",
    "Khambhalia",
    "Dwarka",
    "Kalyanpur",
    "Bhanvad",
  ],
  Gandhinagar: ["Gandhinagar", "Mansa", "Kalol", "Dehgam"],
  "Gir Somnath": [
    "Gir Somnath",
    "Veraval",
    "Gir-Gadhada",
    "Kodinar",
    "Sutrapada",
    "Talala",
    "Una",
    "Patan-Veraval",
  ],
  Jamnagar: ["Jamnagar", "Dhrol", "Jamjodhpur", "Jodiya", "Kalavad", "Lalpur"],
  Junagadh: [
    "Junagadh City",
    "Bhesana",
    "Junagadh Rural",
    "Keshod",
    "Malia",
    "Manavadar",
    "Mangrol",
    "Mendarda",
    "Vanthali",
    "Visavadar",
  ],
  Kheda: [
    "Kheda",
    "Nadiad",
    "Galteshwar",
    "Kapadvanj",
    "Kathlal",
    "Mahudha",
    "Matar",
    "Mehmedabad",
    "Nadiad",
    "Thasra",
    "Vaso",
  ],
  Kutch: [
    "Bhuj",
    "Abdasa",
    "Anjar",
    "Bhachau",
    "Bhuj",
    "Gandhidham",
    "Lakhpat",
    "Mandvi",
    "Mundra",
    "Nakhatrana",
    "Rapar",
  ],
  Mahisagar: [
    "Lunawada",
    "Balasinor",
    "Kadana",
    "Khanpur",
    "Lunawada",
    "Santrampur",
    "Virpur",
  ],
  Mehsana: [
    "Mehsana",
    "Becharaji",
    "Jotana",
    "Kadi",
    "Kheralu",
    "Satlasana",
    "Unjha",
    "Vadnagar",
    "Vijapur",
    "Visnagar",
  ],
  Morbi: ["Morbi", "Halvad", "Maliya", "Morbi", "Tankara", "Wankaner"],
  Narmada: [
    "Rajpipla",
    "Dediapada",
    "Garudeshwar",
    "Nandod",
    "Sagbara",
    "Tilakwada",
  ],
  Navsari: ["Navsari", "Vansda", "Chikhli", "Gandevi", "Jalalpore", "Khergam"],
  Panchmahal: [
    "Godhra",
    "Ghoghamba",
    "Godhra",
    "Halol",
    "Jambughoda",
    "Kalol",
    "Morwa Hadaf",
    "Shehera",
  ],
  Patan: [
    "Patan",
    "Chanasma",
    "Harij",
    "Radhanpur",
    "Sami",
    "Sankheswar",
    "Santalpur",
    "Sarasvati",
    "Sidhpur",
  ],
  Porbandar: ["Porbandar", "Kutiyana", "Ranavav"],
  Rajkot: [
    "Rajkot",
    "Dhoraji",
    "Gondal",
    "Jamkandorna",
    "Jasdan",
    "Jetpur",
    "Kotada Sangani",
    "Lodhika",
    "Paddhari",
    "Upleta",
    "Vinchchiya",
  ],
  Sabarkantha: [
    "Himatnagar",
    "Idar",
    "Khedbrahma",
    "Poshina",
    "Prantij",
    "Talod",
    "Vadali",
    "Vijaynagar",
  ],
  Surat: [
    "Surat",
    "Bardoli",
    "Choryasi",
    "Kamrej",
    "Mahuva",
    "Mandvi",
    "Mangrol",
    "Olpad",
    "Palsana",
    "Umarpada",
  ],
  Surendranagar: [
    "Surendranagar",
    "Chotila",
    "Chuda",
    "Dasada",
    "Dhrangadhra",
    "Lakhtar",
    "Limbdi",
    "Muli",
    "Sayla",
    "Thangadh",
    "Wadhwan",
  ],
  Tapi: [
    "Vyara",
    "Nizar",
    "Songadh",
    "Uchhal",
    "Valod",
    "Vyara",
    "Kukarmunda",
    "Dolvan",
  ],
  Vadodara: [
    "Vadodara",
    "Dabhoi",
    "Desar",
    "Karjan",
    "Padra",
    "Savli",
    "Sinor",
    "Waghodia",
  ],
  Valsad: ["Valsad", "Dharampur", "Kaprada", "Pardi", "Umbergaon", "Vapi"],
};

export default talukasByDistrict;