export interface SpaceEvent {
  id: string;
  date: string;
  year: number;
  title: string;
  description: string;
  category: "launch" | "landing" | "discovery" | "mission" | "milestone";
  importance: "high" | "medium" | "low";
  imageUrl?: string;
  details: string;
  participants: string[];
  location: string;
}

export const spaceEvents: SpaceEvent[] = [
  {
    id: "june-20-1994",
    date: "1994-06-20",
    year: 1994,
    title: "Delta Clipper (DC-X) Successful Vertical Landing",
    description:
      "DC-X experimental vehicle achieved successful vertical landing after reaching 870 meters altitude",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg",
    details:
      "The Delta Clipper (DC-X) was a one-third scale model of a single-stage-to-orbit vehicle developed by McDonnell Douglas for the Strategic Defense Initiative Organization. This successful test marked a significant advancement in reusable rocket technology.",
    participants: [
      "McDonnell Douglas",
      "Strategic Defense Initiative Organization",
    ],
    location: "White Sands Missile Range, New Mexico",
  },
  {
    id: "june-20-1996",
    date: "1996-06-20",
    year: 1996,
    title: "Space Shuttle Columbia STS-78 Launch",
    description:
      "Columbia launched with Life and Microgravity Spacelab conducting over 40 biological experiments",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "The STS-78 mission was a joint effort between NASA and several international space agencies, featuring the Life and Microgravity Spacelab with over 40 biological and microgravity experiments.",
    participants: ["NASA", "International Space Agencies"],
    location: "Kennedy Space Center, Florida",
  },
  {
    id: "june-20-1999",
    date: "1999-06-20",
    year: 1999,
    title: "QuikScat Satellite Launch",
    description:
      "NASA launched QuikScat satellite equipped with SeaWinds instrument to measure ocean winds",
    category: "launch",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg",
    details:
      "The Quick Scatterometer (QuikScat) satellite measured wind speed and direction over bodies of water. Although designed for a two-year mission, it proved invaluable for predicting hurricane paths and operated well beyond its design life.",
    participants: ["NASA"],
    location: "Vandenberg Air Force Base, California",
  },
  {
    id: "june-21-2004",
    date: "2004-06-21",
    year: 2004,
    title: "SpaceShipOne First Private Spaceflight",
    description:
      "Mike Melvill piloted SpaceShipOne past Earth's atmosphere, becoming first private pilot in space",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/8474724/pexels-photo-8474724.jpeg",
    details:
      "This historic flight marked the beginning of commercial spaceflight, with SpaceShipOne being the first privately-funded spacecraft to reach space.",
    participants: ["Scaled Composites", "Mike Melvill"],
    location: "Mojave Air and Space Port, California",
  },
  {
    id: "june-22-1960",
    date: "1960-06-22",
    year: 1960,
    title: "First Dual Satellite Launch",
    description:
      "Thor-Able rocket launched Transit 2-A and Solrad 1 satellites - first time two instrumented satellites launched together",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "This launch marked the first time two instrumented satellites were launched into orbit on the same rocket, establishing a precedent for multiple payload missions.",
    participants: ["U.S. Navy", "NASA"],
    location: "Cape Canaveral, Florida",
  },
  {
    id: "june-23-1976",
    date: "1976-06-23",
    year: 1976,
    title: "Salyut 5 Space Station Launch",
    description:
      "Soviet Union launched Salyut 5 space station on Proton rocket from Baikonur",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    details:
      "Salyut 5 was the final space station in the Soviet Union's Salyut program, serving as both a civilian research station and a military reconnaissance platform.",
    participants: ["Soviet Union"],
    location: "Baikonur Cosmodrome, Kazakhstan",
  },
  {
    id: "june-24-1966",
    date: "1966-06-24",
    year: 1966,
    title: "PAGEOS Satellite Launch",
    description:
      "100-foot diameter mylar balloon satellite launched for geodetic triangulation and Earth mapping",
    category: "launch",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/30596892/pexels-photo-30596892.png",
    details:
      "PAGEOS (Passive Geodetic Earth Orbiting Satellite) was a 100-foot diameter inflatable mylar balloon designed to serve as a visible reference point for geodetic triangulation, enabling more accurate mapping of Earth's landmasses.",
    participants: ["NASA"],
    location: "Vandenberg Air Force Base, California",
  },
  {
    id: "june-24-1983",
    date: "1983-06-24",
    year: 1983,
    title: "Sally Ride Returns from Historic Mission",
    description:
      "Sally Ride completed her mission as first American woman in space aboard Challenger",
    category: "landing",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    details:
      "Sally Ride's successful completion of the STS-7 mission marked a historic milestone in space exploration, breaking gender barriers and inspiring future generations of female astronauts.",
    participants: ["NASA", "Sally Ride"],
    location: "Edwards Air Force Base, California",
  },
  {
    id: "june-25-1965",
    date: "1965-06-25",
    year: 1965,
    title: "Kosmos 122 Weather Satellite",
    description:
      "Soviet Union launched its first weather satellite, Kosmos 122",
    category: "launch",
    importance: "medium",
    details:
      "Kosmos 122 marked the Soviet Union's entry into space-based meteorology, representing a significant advancement in weather monitoring capabilities.",
    participants: ["Soviet Union"],
    location: "Baikonur Cosmodrome, Kazakhstan",
  },
  {
    id: "june-25-2024",
    date: "2024-06-25",
    year: 2024,
    title: "Chang'e 6 Lunar Sample Return",
    description:
      "China's Chang'e 6 successfully returned lunar samples from Moon's far side",
    category: "landing",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/20068530/pexels-photo-20068530.jpeg",
    details:
      "Chang'e 6 collected 1,935.3 grams of lunar material from the Moon's far side, making China the first nation to bring back samples from the lunar far side.",
    participants: ["China National Space Administration"],
    location: "Inner Mongolia, China (landing site)",
  },
  {
    id: "june-26-1914",
    date: "1914-06-26",
    year: 1914,
    title: "Birth of Lyman Spitzer Jr. - Father of Space Telescopes",
    description:
      "Born the visionary who championed placing telescopes in space, paving the path to the Hubble Space Telescope",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "Lyman Spitzer Jr. was born on this day, becoming one of the most influential astrophysicists in history. In 1946, he published a groundbreaking paper proposing space-based telescopes that would revolutionize astronomy by avoiding atmospheric interference. His visionary ideas directly led to the development of the Hubble Space Telescope and established the foundation for modern space-based astronomy. Spitzer's work opened the universe to unprecedented observation and discovery.",
    participants: [
      "Lyman Spitzer Jr.",
      "Princeton University",
      "NASA (future collaboration)",
    ],
    location: "Toledo, Ohio, United States",
  },
  {
    id: "june-26-1925",
    date: "1925-06-26",
    year: 1925,
    title: "Birth of Pavel Belyayev - Voskhod 2 Commander",
    description:
      "Born the Soviet cosmonaut who would command the historic Voskhod 2 mission featuring the first spacewalk",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    details:
      "Pavel Ivanovich Belyayev was born on this day, destined to become a pioneering Soviet cosmonaut. He would later command the historic Voskhod 2 mission in March 1965, during which his crewmate Alexey Leonov performed humanity's first spacewalk. Belyayev's calm leadership during the mission was crucial when technical problems arose, including a manual landing that tested his exceptional piloting skills. His contributions helped establish the Soviet Union's early dominance in space exploration.",
    participants: [
      "Pavel Belyayev",
      "Soviet Space Program",
      "Alexey Leonov (future crewmate)",
    ],
    location: "Chelishchevo, Vologda Oblast, Russian Empire",
  },
  {
    id: "june-26-1965",
    date: "1965-06-26",
    year: 1965,
    title: "NASA Selects Scientist-Astronaut Class",
    description:
      "NASA chose six scientist-astronauts including future Apollo 17 astronaut Harrison H. Schmitt for training",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    details:
      "NASA selected six scientist-astronauts for training at the Manned Spacecraft Center, including Harrison H. Schmitt who would become the only scientist to walk on the Moon during Apollo 17. Other selections included Joseph P. Kerwin, Owen K. Garriott, and Edward G. Gibson, who would later fly on historic Skylab missions. This marked a pivotal shift toward including scientists in space exploration, not just test pilots.",
    participants: [
      "NASA",
      "Harrison H. Schmitt",
      "Joseph P. Kerwin",
      "Owen K. Garriott",
      "Edward G. Gibson",
      "Curtis Michel",
      "Duane Graveline",
    ],
    location: "Manned Spacecraft Center, Houston, Texas",
  },
  {
    id: "june-27-1978",
    date: "1978-06-27",
    year: 1978,
    title: "Soyuz 30 Launch to Salyut 6",
    description:
      "Soyuz 30 launched carrying Viktor Klimuk and first Polish cosmonaut Miroslaw Hermaszewski",
    category: "launch",
    importance: "medium",
    details:
      "This mission represented international cooperation in space exploration, with Poland's first cosmonaut participating in scientific experiments aboard the Salyut 6 space station.",
    participants: ["Soviet Union", "Poland"],
    location: "Baikonur Cosmodrome, Kazakhstan",
  },
  {
    id: "june-28-2022",
    date: "2022-06-28",
    year: 2022,
    title: "New Moon Lunar Phase",
    description:
      "New Moon occurred, marking the lunar phase when the Moon is completely shadowed and not visible from Earth",
    category: "discovery",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/20068530/pexels-photo-20068530.jpeg",
    details:
      "On this date, a New Moon phase occurred, representing the moment when the Moon is positioned between Earth and the Sun, making it completely invisible from Earth. This lunar phase marks the beginning of a new lunar cycle and is crucial for astronomical observations, as it provides the darkest skies for deep space observation. The Vatican Observatory highlighted this celestial event as part of ongoing lunar phase documentation.",
    participants: ["Vatican Observatory", "Astronomical Community"],
    location: "Observed from Earth",
  },
  {
    id: "june-28-2024",
    date: "2024-06-28",
    year: 2024,
    title: "Uranus Educational Fact Highlight",
    description:
      "Saint Louis Science Center shared that Uranus is the solar system's third-largest planet and hasn't completed a full orbit since discovery",
    category: "discovery",
    importance: "low",
    imageUrl:
      "https://images.pexels.com/photos/30596892/pexels-photo-30596892.png",
    details:
      "The Saint Louis Science Center featured an 'Astronomy Fact of the Day' highlighting fascinating details about Uranus. The ice giant, with a diameter of approximately 31,518 miles, is the solar system's third-largest planet. Remarkably, since its discovery in 1781 by William Herschel, Uranus has not yet completed a full solar orbit around the Sun - this milestone is expected to occur in 2033, marking 252 Earth years since its discovery. This educational highlight demonstrates the incredible scale of our solar system and the long-term nature of planetary observation.",
    participants: ["Saint Louis Science Center", "Educational Community"],
    location: "Saint Louis, Missouri, United States",
  },
  {
    id: "june-29-1971",
    date: "1971-06-29",
    year: 1971,
    title: "Soyuz 11 Tragic Mission Ending",
    description:
      "Soyuz 11 crew tragically died during re-entry due to capsule depressurization - the only crew to die in space itself",
    category: "mission",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    details:
      "The Soyuz 11 crew—cosmonauts Georgy Dobrovolsky, Vladislav Volkov, and Viktor Patsayev—had successfully completed a 23-day mission aboard the Salyut-1 space station, setting a new duration record. However, tragedy struck during their return to Earth when their spacecraft experienced a catastrophic depressurization during re-entry. The three cosmonauts became the only humans to die in the vacuum of space itself. This heartbreaking loss led to crucial safety improvements in spacecraft design, including mandatory pressure suits during launch and re-entry, ensuring that their sacrifice contributed to making future space travel safer.",
    participants: [
      "Georgy Dobrovolsky",
      "Vladislav Volkov",
      "Viktor Patsayev",
      "Soviet Space Program",
    ],
    location: "During re-entry over Soviet Union",
  },
  {
    id: "june-30-1908",
    date: "1908-06-30",
    year: 1908,
    title: "Tunguska Asteroid Airburst Event",
    description:
      "Massive asteroid exploded over Siberia at 07:15 AM, flattening 2,150 km² of forest - largest impact event in modern history",
    category: "discovery",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "At approximately 07:15 AM local time, a massive asteroid (bolide) exploded in the atmosphere over the Tunguska region of Siberia, creating the largest impact event in recorded modern history. The explosion flattened an estimated 2,150 square kilometers (530,000 acres) of forest and was witnessed by local Evenki people and later documented by scientific expeditions. The event released energy equivalent to 15 megatons of TNT, about 1,000 times more powerful than the Hiroshima bomb. This catastrophic event highlighted the real threat that near-Earth objects pose to our planet and became the foundation for modern planetary defense awareness.",
    participants: [
      "Evenki witnesses",
      "Leonid Kulik (1927 expedition leader)",
      "Soviet Academy of Sciences",
      "International scientific community",
    ],
    location: "Tunguska River region, Siberia, Russian Empire",
  },
  {
    id: "june-30-annual",
    date: "2015-06-30",
    year: 2015,
    title: "International Asteroid Day Established",
    description:
      "UN designated June 30 as International Asteroid Day to raise awareness about near-Earth object risks and planetary defense",
    category: "milestone",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/30596892/pexels-photo-30596892.png",
    details:
      "Since 2015, International Asteroid Day has been observed annually on June 30th, marking the anniversary of the Tunguska event. Officially designated by the United Nations in 2016, this global awareness campaign educates the public about near-Earth object risks and supports worldwide education programs on planetary defense. The initiative was founded by filmmakers, scientists, and astronauts including Brian Cox, Rusty Schweickart, and others who recognized the importance of asteroid awareness. The day features educational events, scientific presentations, and discussions about detection and deflection technologies that could protect Earth from future asteroid impacts.",
    participants: [
      "United Nations",
      "Asteroid Day Foundation",
      "Brian Cox",
      "Rusty Schweickart",
      "Global scientific community",
      "Educational institutions worldwide",
    ],
    location: "Global observance",
  },
  {
    id: "july-01-1957",
    date: "1957-07-01",
    year: 1957,
    title: "International Geophysical Year Begins",
    description:
      "18-month period of international scientific collaboration to study Earth's geophysical properties begins",
    category: "milestone",
    importance: "high",
    details:
      "The International Geophysical Year was a coordinated effort by scientists worldwide to study Earth's geophysical properties, leading to many space exploration initiatives including the launch of Sputnik.",
    participants: ["International Scientific Community"],
    location: "Worldwide",
  },
  {
    id: "july-02-1985",
    date: "1985-07-02",
    year: 1985,
    title: "Giotto Mission Launch",
    description:
      "ESA's first deep space mission launched to study Halley's Comet",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "The Giotto probe was designed to study Halley's Comet with 10 different scientific instruments, marking Europe's entry into deep space exploration.",
    participants: ["European Space Agency"],
    location: "Kourou, French Guiana",
  },
  {
    id: "july-03-1974",
    date: "1974-07-03",
    year: 1974,
    title: "Soyuz 14 Docks with Salyut 3",
    description:
      "Cosmonauts test Salyut 3 as military reconnaissance platform and conduct biomedical experiments",
    category: "mission",
    importance: "medium",
    details:
      "Cosmonauts Pavel Popovich and Yuri Artyukhin tested the space station as a possible military reconnaissance platform while conducting important biomedical experiments.",
    participants: ["Soviet Union"],
    location: "Low Earth Orbit",
  },
  {
    id: "july-03-1998",
    date: "1998-07-03",
    year: 1998,
    title: "Nozomi Mars Mission Launch",
    description:
      "Japan launched Nozomi spacecraft to study Mars' upper atmosphere and solar wind interaction",
    category: "launch",
    importance: "medium",
    details:
      "Nozomi was Japan's first Mars mission, designed to study the planet's upper atmosphere and its interaction with the solar wind.",
    participants: ["Japan Aerospace Exploration Agency"],
    location: "Kagoshima Space Center, Japan",
  },
  {
    id: "july-04-1997",
    date: "1997-07-04",
    year: 1997,
    title: "Mars Pathfinder Landing",
    description:
      "NASA's Mars Pathfinder successfully landed on Mars, deploying Sojourner rover",
    category: "landing",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/8474468/pexels-photo-8474468.jpeg",
    details:
      "Mars Pathfinder's successful landing marked a new era in Mars exploration, with the Sojourner rover providing valuable data about Mars' geology and atmosphere.",
    participants: ["NASA"],
    location: "Ares Vallis, Mars",
  },
  {
    id: "july-04-2005",
    date: "2005-07-04",
    year: 2005,
    title: "Deep Impact Comet Collision",
    description:
      "Deep Impact spacecraft releases impactor that collides with Comet Tempel 1",
    category: "mission",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "This was the first time a human-made object intentionally impacted a comet's surface, providing unprecedented insights into comet composition and structure.",
    participants: ["NASA"],
    location: "Deep Space",
  },
  {
    id: "july-05-1972",
    date: "1972-07-05",
    year: 1972,
    title: "Space Shuttle Development Contract",
    description:
      "NASA awards North American Rockwell $2.6 billion contract for space shuttle orbiter development",
    category: "milestone",
    importance: "high",
    details:
      "This contract marked a crucial step in the development of the Space Shuttle program, which would become NASA's primary means of human spaceflight for 30 years.",
    participants: ["NASA", "North American Rockwell"],
    location: "Washington, D.C.",
  },
  {
    id: "july-06-2024",
    date: "2024-07-06",
    year: 2024,
    title: "Moon Near Venus & New Moon Sky Event",
    description:
      "New Moon occurred with the Moon appearing 3° north of bright Venus - a treat for early-morning skywatchers",
    category: "discovery",
    importance: "low",
    imageUrl:
      "https://images.pexels.com/photos/20068530/pexels-photo-20068530.jpeg",
    details:
      "July 6, 2024, featured a spectacular celestial alignment for early-morning observers. The New Moon phase coincided with the Moon appearing approximately 3 degrees north of brilliant Venus, creating a beautiful conjunction in the pre-dawn sky. This close approach of the Moon and Venus provided an excellent opportunity for both amateur astronomers and casual skywatchers to observe two of the most prominent objects in our sky in close proximity. Such conjunctions remind us of the constant dance of celestial bodies and the predictable beauty of astronomical mechanics.",
    participants: [
      "Astronomy community",
      "Amateur astronomers",
      "Early-morning skywatchers",
    ],
    location: "Visible from Earth (global observation)",
  },
  {
    id: "july-07-1961",
    date: "1961-07-07",
    year: 1961,
    title: "Large Launch Vehicle Planning Group Formation",
    description:
      "NASA and Defense Department jointly study large launch vehicle development",
    category: "milestone",
    importance: "medium",
    details:
      "NASA Administrator James Webb and Defense Secretary Robert McNamara decided to jointly study large launch vehicle development, leading to the formation of the DOD-NASA Large Launch Vehicle Planning Group.",
    participants: ["NASA", "U.S. Department of Defense"],
    location: "Washington, D.C.",
  },
  {
    id: "july-08-1976",
    date: "1976-07-08",
    year: 1976,
    title: "Indonesia's First Communications Satellite Launch",
    description:
      "Palapa A1, Indonesia's first communications satellite, launched on Delta rocket from Cape Canaveral",
    category: "launch",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg",
    details:
      "Palapa A1 marked a significant milestone for Indonesia's entry into satellite communications. This geostationary communications satellite provided telephone, television, and data services across the Indonesian archipelago, connecting thousands of islands for the first time through space-based technology.",
    participants: ["Indonesia", "NASA", "Delta Launch Services"],
    location: "Cape Canaveral, Florida",
  },
  {
    id: "july-08-2003",
    date: "2003-07-08",
    year: 2003,
    title: "Mars Exploration Rover Opportunity Launch",
    description:
      "NASA launched Mars Exploration Rover-B (Opportunity) aboard Delta 2 rocket to explore the Red Planet",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/8474468/pexels-photo-8474468.jpeg",
    details:
      "Opportunity (MER-B) launched on its journey to Mars, where it would far exceed its planned 90-day mission and operate for nearly 15 years. The rover made groundbreaking discoveries about ancient water activity on Mars and transmitted over 217,000 images back to Earth.",
    participants: ["NASA", "Jet Propulsion Laboratory"],
    location: "Cape Canaveral, Florida",
  },
  {
    id: "july-09-1982",
    date: "1982-07-09",
    year: 1982,
    title: "Space Shuttle Columbia STS-4 Landing",
    description:
      "Space Shuttle Columbia completed its fourth test flight, demonstrating operational readiness",
    category: "landing",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg",
    details:
      "STS-4 was the final orbital test flight of the Space Shuttle program, successfully demonstrating that the shuttle system was ready for operational missions. The mission carried scientific experiments and marked the transition from test flights to operational space missions.",
    participants: ["NASA", "Thomas Mattingly", "Henry Hartsfield"],
    location: "Edwards Air Force Base, California",
  },
  {
    id: "july-09-1979",
    date: "1979-07-09",
    year: 1979,
    title: "Voyager 2 Jupiter Closest Approach",
    description:
      "Voyager 2 made its closest approach to Jupiter, capturing detailed images and scientific data",
    category: "mission",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "Voyager 2's Jupiter encounter provided unprecedented close-up images of the gas giant and its moons. The spacecraft discovered new moons, studied Jupiter's magnetosphere, and captured detailed images of the Great Red Spot, revolutionizing our understanding of the Jovian system.",
    participants: ["NASA", "Jet Propulsion Laboratory"],
    location: "Jupiter System",
  },
  {
    id: "july-10-1962",
    date: "1962-07-10",
    year: 1962,
    title: "Telstar 1 Communications Satellite Launch",
    description:
      "NASA launched first active communications satellite, enabling live transatlantic television broadcasts",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg",
    details:
      "Telstar 1 revolutionized global communications by successfully relaying live television signals between the United States and Europe. This groundbreaking satellite demonstrated the potential for space-based communications and paved the way for modern satellite television and telecommunications.",
    participants: ["NASA", "AT&T", "Bell Telephone Laboratories"],
    location: "Cape Canaveral, Florida",
  },
  {
    id: "july-10-2005",
    date: "2005-07-10",
    year: 2005,
    title: "Suzaku X-ray Observatory Launch",
    description:
      "Japan launched Suzaku (Astro-E2) X-ray space observatory from Uchinoura Space Center",
    category: "launch",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "Suzaku was designed to study high-energy phenomena in the universe, including black holes, galaxy clusters, and supernova remnants. The observatory carried advanced X-ray detectors and made significant contributions to our understanding of cosmic X-ray sources.",
    participants: ["Japan Aerospace Exploration Agency", "NASA"],
    location: "Uchinoura Space Center, Japan",
  },
  {
    id: "july-11-1960",
    date: "1960-07-11",
    year: 1960,
    title: "NASA Moon Landing Study Contracts Awarded",
    description:
      "NASA awarded contracts to study spacecraft designs for soft lunar landings to four companies",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/20068530/pexels-photo-20068530.jpeg",
    details:
      "NASA awarded contracts to North American, Hughes, McDonnell, and Space Technology Laboratory to study designs for spacecraft capable of performing soft landings on the Moon. This early planning laid the groundwork for the eventual Apollo lunar landing program.",
    participants: [
      "NASA",
      "North American",
      "Hughes",
      "McDonnell",
      "Space Technology Laboratory",
    ],
    location: "NASA Headquarters, Washington D.C.",
  },
  {
    id: "july-11-1979",
    date: "1979-07-11",
    year: 1979,
    title: "Skylab Space Station Reentry",
    description:
      "NASA's Skylab space station re-entered Earth's atmosphere, crashing into the Indian Ocean and Australia",
    category: "mission",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    details:
      "Due to unexpectedly high solar activity causing atmospheric expansion, Skylab's orbit decayed faster than planned. The 77-ton space station broke up during reentry, with debris scattered across the Indian Ocean and sparsely populated areas of western Australia. No injuries were reported.",
    participants: ["NASA"],
    location: "Indian Ocean and Western Australia",
  },
  {
    id: "july-12-1988",
    date: "1988-07-12",
    year: 1988,
    title: "Phobos 2 Mars Orbiter Launch",
    description:
      "Soviet Union launched Phobos 2 Mars orbiter on Proton rocket to study Mars and its moon Phobos",
    category: "launch",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/8474468/pexels-photo-8474468.jpeg",
    details:
      "Phobos 2 was designed to study Mars and its largest moon, Phobos. The mission successfully reached Mars orbit and transmitted valuable data about the planet's atmosphere and magnetic field. However, contact was lost two months later due to a computer failure just before the planned Phobos landing.",
    participants: ["Soviet Union", "Roscosmos"],
    location: "Baikonur Cosmodrome, Kazakhstan",
  },
  {
    id: "july-12-1957",
    date: "1957-07-12",
    year: 1957,
    title: "International Geophysical Year Peak Activities",
    description:
      "Peak of International Geophysical Year activities advancing space science and Earth studies",
    category: "milestone",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/30596892/pexels-photo-30596892.png",
    details:
      "The International Geophysical Year (1957-1958) reached its peak activities, with scientists worldwide collaborating on Earth and space studies. This international cooperation laid crucial groundwork for satellite launches and space exploration programs that would follow.",
    participants: ["International Scientific Community", "67 Countries"],
    location: "Worldwide",
  },
  {
    id: "july-13-1969",
    date: "1969-07-13",
    year: 1969,
    title: "Luna 15 Launch - Soviet Moon Sample Mission",
    description:
      "Soviet Union launched Luna 15 on Proton rocket to extract and return lunar soil samples",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/20068530/pexels-photo-20068530.jpeg",
    details:
      "Luna 15 was the Soviet Union's attempt to return lunar samples before Apollo 11. Launched just three days before Apollo 11, the unmanned spacecraft aimed to land on the Moon, collect samples, and return to Earth. However, it crashed onto the Moon's surface during descent, failing in its mission.",
    participants: ["Soviet Union", "OKB-1"],
    location: "Baikonur Cosmodrome, Kazakhstan",
  },
  {
    id: "july-13-1995",
    date: "1995-07-13",
    year: 1995,
    title: "Space Shuttle Discovery STS-70 Launch",
    description:
      "NASA's Discovery launched deploying TDRS-G satellite with new Block 1 main engine technology",
    category: "launch",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "STS-70 deployed the Tracking and Data Relay Satellite-G (TDRS-G) and marked the first flight of the new Block 1 orbiter main engine, designed to improve both engine performance and safety. The mission demonstrated advances in shuttle technology and satellite deployment capabilities.",
    participants: ["NASA", "Space Shuttle Discovery Crew"],
    location: "Kennedy Space Center, Florida",
  },
  {
    id: "july-14-1914",
    date: "1914-07-14",
    year: 1914,
    title: "Robert Goddard Liquid-Fueled Rocket Patent",
    description:
      "Rocket pioneer Robert Goddard was awarded patent for his revolutionary liquid-fueled rocket design",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg",
    details:
      "Robert Goddard received a patent for his liquid-fueled rocket design, laying the theoretical foundation for modern rocketry. His innovations would later enable all space exploration, earning him recognition as the 'Father of Modern Rocketry.'",
    participants: ["Robert Goddard", "U.S. Patent Office"],
    location: "Worcester, Massachusetts",
  },
  {
    id: "july-14-1965",
    date: "1965-07-14",
    year: 1965,
    title: "Mariner 4 Mars Flyby - First Close Mars Photos",
    description:
      "NASA's Mariner 4 performed first successful Mars flyby, capturing first close-up photographs of the Red Planet",
    category: "mission",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/8474468/pexels-photo-8474468.jpeg",
    details:
      "Mariner 4's historic flyby of Mars captured the first close-up photographs of another planet, revealing a cratered, Moon-like surface that challenged previous assumptions about Mars. The 22 images transmitted back to Earth revolutionized our understanding of the Red Planet.",
    participants: ["NASA", "Jet Propulsion Laboratory"],
    location: "Mars",
  },
  {
    id: "july-15-1975",
    date: "1975-07-15",
    year: 1975,
    title: "Apollo-Soyuz Test Project Launch",
    description:
      "Historic joint US-Soviet space mission launched, marking first international human spaceflight cooperation",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "The Apollo-Soyuz Test Project launched both American and Soviet spacecraft for the first international human spaceflight mission. This historic cooperation during the Cold War demonstrated that space exploration could unite nations and paved the way for future international space partnerships.",
    participants: ["NASA", "Soviet Union", "Thomas Stafford", "Alexey Leonov"],
    location:
      "Kennedy Space Center, Florida and Baikonur Cosmodrome, Kazakhstan",
  },
  {
    id: "july-15-2020",
    date: "2020-07-15",
    year: 2020,
    title: "NASA's Perseverance Rover Launch to Mars",
    description:
      "NASA launched Mars 2020 Perseverance rover to search for signs of ancient microbial life on Mars",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/8474468/pexels-photo-8474468.jpeg",
    details:
      "The Mars 2020 mission launched Perseverance rover and Ingenuity helicopter to Mars. Perseverance would search for signs of ancient microbial life, collect rock samples for future return to Earth, and demonstrate oxygen production on Mars, marking a new era in Mars exploration.",
    participants: ["NASA", "Jet Propulsion Laboratory"],
    location: "Cape Canaveral, Florida",
  },
  {
    id: "july-16-1965",
    date: "1965-07-16",
    year: 1965,
    title: "Zond 3 Launch - First Far Side Moon Photos",
    description:
      "Soviet Union launched Zond 3 spacecraft which transmitted first photographs of Moon's far side to Earth",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/20068530/pexels-photo-20068530.jpeg",
    details:
      "Zond 3 was launched to photograph the Moon's far side and test deep space communication systems. Nine days later, it successfully transmitted the first high-quality photographs of the Moon's far side back to Earth, revealing previously unseen lunar terrain.",
    participants: ["Soviet Union", "OKB-1"],
    location: "Baikonur Cosmodrome, Kazakhstan",
  },
  {
    id: "july-16-1969",
    date: "1969-07-16",
    year: 1969,
    title: "Apollo 11 Launch - Journey to the Moon Begins",
    description:
      "NASA launched Apollo 11 carrying Neil Armstrong, Buzz Aldrin, and Michael Collins on historic moon landing mission",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "Apollo 11 launched from Kennedy Space Center, beginning humanity's first journey to land on the Moon. The Saturn V rocket carried astronauts Neil Armstrong, Buzz Aldrin, and Michael Collins on the most watched and celebrated space mission in history.",
    participants: ["NASA", "Neil Armstrong", "Buzz Aldrin", "Michael Collins"],
    location: "Kennedy Space Center, Florida",
  },
  {
    id: "july-17-1929",
    date: "1929-07-17",
    year: 1929,
    title: "Goddard's Instrumented Rocket Flight",
    description:
      "Robert Goddard launched rocket carrying scientific instruments - barometer and camera in Auburn, Massachusetts",
    category: "milestone",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg",
    details:
      "This was Robert Goddard's fourth rocket launch and first to carry scientific instruments including a barometer and camera. The flight demonstrated the potential for rockets to carry scientific payloads, laying groundwork for future space-based research and satellite technology.",
    participants: ["Robert Goddard"],
    location: "Auburn, Massachusetts",
  },
  {
    id: "july-17-1984",
    date: "1984-07-17",
    year: 1984,
    title: "Svetlana Savitskaya's Historic Spacewalk",
    description:
      "Soviet cosmonaut Svetlana Savitskaya became first woman to perform spacewalk during Soyuz T-12 mission",
    category: "mission",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    details:
      "Svetlana Savitskaya made history by becoming the first woman to perform a spacewalk (EVA) and the first woman to make a second spaceflight. Her achievements broke significant gender barriers in space exploration and demonstrated women's capabilities in all aspects of space missions.",
    participants: [
      "Soviet Union",
      "Svetlana Savitskaya",
      "Vladimir Dzhanibekov",
      "Igor Volk",
    ],
    location: "Salyut 7 Space Station",
  },
  {
    id: "july-18-1966",
    date: "1966-07-18",
    year: 1966,
    title: "Gemini 10 Mission Launch and Docking",
    description:
      "NASA's Gemini 10 launched with astronauts Young and Collins, successfully docking with Agena target vehicle",
    category: "launch",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "Gemini 10, piloted by John Young and Michael Collins, successfully demonstrated orbital rendezvous and docking procedures essential for the upcoming Apollo lunar missions. The mission included multiple EVAs and advanced maneuvering techniques.",
    participants: ["NASA", "John Young", "Michael Collins"],
    location: "Cape Kennedy, Florida",
  },
  {
    id: "july-18-1980",
    date: "1980-07-18",
    year: 1980,
    title: "India's First Satellite Rohini 1 Launch",
    description:
      "India launched Rohini 1, its first indigenously built satellite, marking major milestone in Indian space program",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg",
    details:
      "Rohini 1 was India's first indigenously built and launched satellite, demonstrating India's growing capabilities in space technology. The successful launch marked India's entry into the exclusive club of nations capable of building and launching their own satellites.",
    participants: ["Indian Space Research Organisation"],
    location: "Sriharikota Range, India",
  },
  {
    id: "july-19-2020",
    date: "2020-07-19",
    year: 2020,
    title: "UAE's Hope Mars Orbiter Launch",
    description:
      "United Arab Emirates launched Hope Orbiter (Al-Amal) to study Mars atmosphere and climate",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/8474468/pexels-photo-8474468.jpeg",
    details:
      "The UAE's Hope Orbiter launched to study Mars' atmosphere and climate patterns. This historic mission made the UAE the first Arab nation to reach Mars and represented a major step in the region's space exploration capabilities.",
    participants: [
      "United Arab Emirates Space Agency",
      "Mohammed bin Rashid Space Centre",
    ],
    location: "Tanegashima Space Center, Japan",
  },
  {
    id: "july-19-1963",
    date: "1963-07-19",
    year: 1963,
    title: "X-15 Record-Breaking Altitude Flight",
    description:
      "NASA's X-15 rocket plane reached record altitude of 106 km, touching the edge of space",
    category: "milestone",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg",
    details:
      "The X-15 rocket plane, piloted by Joseph Walker, reached an altitude of 106 kilometers, officially crossing the boundary of space. This achievement demonstrated the potential for rocket-powered aircraft and contributed valuable data for future spacecraft design.",
    participants: ["NASA", "Joseph Walker", "North American Aviation"],
    location: "Edwards Air Force Base, California",
  },
  {
    id: "july-20-1969",
    date: "1969-07-20",
    year: 1969,
    title: "Apollo 11 Moon Landing - First Humans on the Moon",
    description:
      "Neil Armstrong and Buzz Aldrin became first humans to land on and walk on the Moon's surface",
    category: "landing",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/20068530/pexels-photo-20068530.jpeg",
    details:
      "At 4:17 PM EDT, the Eagle lunar module touched down in the Sea of Tranquility. At 10:56 PM, Neil Armstrong became the first human to step on the Moon, declaring 'That's one small step for man, one giant leap for mankind.' This achievement fulfilled President Kennedy's goal and marked humanity's greatest exploration milestone.",
    participants: ["NASA", "Neil Armstrong", "Buzz Aldrin", "Michael Collins"],
    location: "Sea of Tranquility, Moon",
  },
  {
    id: "july-20-1976",
    date: "1976-07-20",
    year: 1976,
    title: "Viking 1 Mars Lander Touchdown",
    description:
      "NASA's Viking 1 lander successfully touched down on Mars, beginning extensive surface operations",
    category: "landing",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/8474468/pexels-photo-8474468.jpeg",
    details:
      "Viking 1 lander achieved the first successful US landing on Mars, transmitting detailed images of the Martian surface and conducting biological experiments to search for signs of life. The mission revolutionized our understanding of Mars and operated far beyond its planned lifetime.",
    participants: ["NASA", "Jet Propulsion Laboratory"],
    location: "Chryse Planitia, Mars",
  },
  {
    id: "july-21-1961",
    date: "1961-07-21",
    year: 1961,
    title: "Gus Grissom's Mercury-Redstone 4 Flight",
    description:
      "Astronaut Gus Grissom completed second US human spaceflight in Liberty Bell 7 capsule",
    category: "mission",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "Gus Grissom's suborbital flight in Liberty Bell 7 lasted 15 minutes and reached an altitude of 190 kilometers. Though the mission was successful, the capsule was lost when the hatch blew prematurely after splashdown, nearly resulting in Grissom's drowning.",
    participants: ["NASA", "Gus Grissom"],
    location: "Cape Canaveral, Florida",
  },
  {
    id: "july-21-1969",
    date: "1969-07-21",
    year: 1969,
    title: "Apollo 11 Lunar Surface EVA",
    description:
      "Armstrong and Aldrin conducted 21.5-hour stay on Moon including 2.5-hour moonwalk collecting samples",
    category: "mission",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/20068530/pexels-photo-20068530.jpeg",
    details:
      "During their historic lunar surface operations, Armstrong and Aldrin spent 21.5 hours on the Moon, including a 2.5-hour EVA during which they collected 21.5 kg of lunar samples, planted an American flag, and conducted scientific experiments that would transform our understanding of the Moon.",
    participants: ["NASA", "Neil Armstrong", "Buzz Aldrin"],
    location: "Sea of Tranquility, Moon",
  },
  {
    id: "july-22-1995",
    date: "1995-07-22",
    year: 1995,
    title: "Space Shuttle Discovery STS-70 Landing",
    description:
      "Space Shuttle Discovery successfully landed at Kennedy Space Center completing 8-day TDRS deployment mission",
    category: "landing",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg",
    details:
      "Discovery's STS-70 mission concluded with a successful landing at Kennedy Space Center at 8:02 AM EDT after an 8-day mission deploying the TDRS-G communications satellite and testing new shuttle engine technology.",
    participants: ["NASA", "Space Shuttle Discovery Crew"],
    location: "Kennedy Space Center, Florida",
  },
  {
    id: "july-22-2011",
    date: "2011-07-22",
    year: 2011,
    title: "Final Space Shuttle Atlantis Landing",
    description:
      "Space Shuttle Atlantis completed STS-135, the final Space Shuttle mission, ending 30-year program",
    category: "landing",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg",
    details:
      "Atlantis touched down at Kennedy Space Center, completing STS-135 and marking the end of NASA's 30-year Space Shuttle program. The final mission delivered supplies to the International Space Station and brought an era of American human spaceflight to a close.",
    participants: [
      "NASA",
      "Christopher Ferguson",
      "Douglas Hurley",
      "Sandra Magnus",
      "Rex Walheim",
    ],
    location: "Kennedy Space Center, Florida",
  },
  {
    id: "july-23-1965",
    date: "1965-07-23",
    year: 1965,
    title: "First Live TV Images from Moon by Ranger 8",
    description:
      "NASA's Ranger 8 transmitted first live television images of lunar surface before impact",
    category: "mission",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/20068530/pexels-photo-20068530.jpeg",
    details:
      "Ranger 8 successfully transmitted over 7,000 high-quality television images of the Moon's surface as it approached for impact in the Sea of Tranquility. These were the first live TV images from the Moon, providing crucial data for future Apollo landing site selection.",
    participants: ["NASA", "Jet Propulsion Laboratory"],
    location: "Sea of Tranquility, Moon",
  },
  {
    id: "july-23-1999",
    date: "1999-07-23",
    year: 1999,
    title: "Chandra X-ray Observatory Launch",
    description:
      "NASA launched Chandra X-ray Observatory to study high-energy phenomena in universe",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "The Chandra X-ray Observatory was deployed by Space Shuttle Columbia to study X-ray emissions from hot regions of the universe such as exploded stars, clusters of galaxies, and matter around black holes. It became one of NASA's most productive space telescopes.",
    participants: ["NASA", "Smithsonian Astrophysical Observatory"],
    location: "Kennedy Space Center, Florida",
  },
  {
    id: "july-24-1969",
    date: "1969-07-24",
    year: 1969,
    title: "Apollo 11 Splashdown - Safe Return from Moon",
    description:
      "Apollo 11 crew safely splashed down in Pacific Ocean, completing historic first Moon landing mission",
    category: "landing",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    details:
      "Apollo 11 command module Columbia splashed down in the Pacific Ocean southwest of Hawaii, successfully completing humanity's first Moon landing mission. The crew was recovered by USS Hornet and placed in quarantine as a precaution against possible lunar contamination.",
    participants: [
      "NASA",
      "Neil Armstrong",
      "Buzz Aldrin",
      "Michael Collins",
      "USS Hornet",
    ],
    location: "Pacific Ocean, Southwest of Hawaii",
  },
  {
    id: "july-24-1975",
    date: "1975-07-24",
    year: 1975,
    title: "Apollo-Soyuz Test Project Splashdown",
    description:
      "Apollo CSM from joint US-Soviet mission splashed down, concluding first international crewed space cooperation",
    category: "landing",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    details:
      "The Apollo Command/Service Module from the Apollo-Soyuz Test Project splashed down in the Pacific Ocean at 5:18 PM, concluding the first international crewed space mission and demonstrating successful cooperation between the US and Soviet space programs during the Cold War.",
    participants: [
      "NASA",
      "Soviet Union",
      "Thomas Stafford",
      "Vance Brand",
      "Donald Slayton",
    ],
    location: "Pacific Ocean, West of Hawaii",
  },
  {
    id: "july-25-1984",
    date: "1984-07-25",
    year: 1984,
    title: "Svetlana Savitskaya's Second Spacewalk",
    description:
      "First woman cosmonaut completed second spacewalk, demonstrating welding and cutting in space",
    category: "mission",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    details:
      "Svetlana Savitskaya performed her second spacewalk, conducting welding, cutting, and soldering experiments outside Salyut 7. These tests were crucial for future space construction and maintenance operations.",
    participants: [
      "Soviet Union",
      "Svetlana Savitskaya",
      "Vladimir Dzhanibekov",
    ],
    location: "Salyut 7 Space Station",
  },
  {
    id: "july-25-1973",
    date: "1973-07-25",
    year: 1973,
    title: "Skylab 3 Mission Launch",
    description:
      "NASA launched second crewed mission to Skylab space station for 59-day duration record",
    category: "launch",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "Skylab 3 launched with astronauts Alan Bean, Owen Garriott, and Jack Lousma for a 59-day mission that set a new American space endurance record. The crew conducted extensive scientific experiments and demonstrated long-duration human spaceflight capabilities.",
    participants: ["NASA", "Alan Bean", "Owen Garriott", "Jack Lousma"],
    location: "Kennedy Space Center, Florida",
  },
  {
    id: "july-26-1971",
    date: "1971-07-26",
    year: 1971,
    title: "Apollo 15 Launch - First J-Mission to Moon",
    description:
      "NASA launched Apollo 15 with first lunar rover and extended scientific exploration capabilities",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "Apollo 15 launched as the first 'J-mission' featuring extended lunar surface operations, the first lunar rover vehicle, and enhanced scientific capabilities. The mission would demonstrate advanced exploration techniques and conduct the most extensive lunar geological survey to date.",
    participants: ["NASA", "David Scott", "Alfred Worden", "James Irwin"],
    location: "Kennedy Space Center, Florida",
  },
  {
    id: "july-26-2000",
    date: "2000-07-26",
    year: 2000,
    title: "Comet LINEAR C/1999 S4 Breakup Observed",
    description:
      "ESA's SOHO spacecraft observed Comet LINEAR breaking apart during closest approach to Sun",
    category: "discovery",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "The SWAN instrument on ESA's SOHO spacecraft had been monitoring Comet LINEAR C/1999 S4 for two months when it began fragmenting during its closest approach to the Sun. This rare observation provided valuable data about comet composition and behavior under solar heating.",
    participants: ["European Space Agency", "SOHO Mission Team"],
    location: "Solar System",
  },
  {
    id: "july-27-1953",
    date: "1953-07-27",
    year: 1953,
    title: "Korean War Armistice - Impact on Space Race",
    description:
      "Korean War armistice freed resources and focus for both US and Soviet space programs",
    category: "milestone",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/30596892/pexels-photo-30596892.png",
    details:
      "The end of active Korean War hostilities allowed both the United States and Soviet Union to redirect military research and rocket technology toward space exploration programs, accelerating the development of ballistic missiles that would become launch vehicles.",
    participants: ["United Nations", "United States", "Soviet Union"],
    location: "Panmunjom, Korea",
  },
  {
    id: "july-27-2012",
    date: "2012-07-27",
    year: 2012,
    title: "London Olympics Space Celebration",
    description:
      "London Olympics opening ceremony celebrated space exploration with cosmic themes and astronaut participation",
    category: "milestone",
    importance: "low",
    imageUrl:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    details:
      "The London Olympics opening ceremony featured space-themed segments celebrating human achievement in exploration, with messages from astronauts aboard the International Space Station and tributes to space exploration milestones.",
    participants: [
      "International Olympic Committee",
      "NASA",
      "ESA",
      "ISS Crew",
    ],
    location: "London, United Kingdom",
  },
  {
    id: "july-28-1964",
    date: "1964-07-28",
    year: 1964,
    title: "Ranger 7 Moon Impact Mission",
    description:
      "NASA's Ranger 7 transmitted over 4,000 images before successful impact on Moon's surface",
    category: "mission",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/20068530/pexels-photo-20068530.jpeg",
    details:
      "Ranger 7 successfully transmitted 4,316 high-quality television images of the Moon's surface before impacting in the Sea of Clouds. These were the first successful close-up images of the lunar surface, providing crucial data for Apollo landing site planning.",
    participants: ["NASA", "Jet Propulsion Laboratory"],
    location: "Mare Nubium (Sea of Clouds), Moon",
  },
  {
    id: "july-28-1973",
    date: "1973-07-28",
    year: 1973,
    title: "Skylab 3 Space Station Arrival",
    description:
      "Skylab 3 crew docked with space station beginning 59-day mission to study long-duration spaceflight effects",
    category: "mission",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    details:
      "The Skylab 3 crew successfully docked with the Skylab space station to begin their record-setting 59-day mission, conducting extensive medical experiments to understand the effects of long-duration spaceflight on the human body.",
    participants: ["NASA", "Alan Bean", "Owen Garriott", "Jack Lousma"],
    location: "Skylab Space Station",
  },
  {
    id: "july-29-1958",
    date: "1958-07-29",
    year: 1958,
    title: "NASA Establishment Signed into Law",
    description:
      "President Eisenhower signed National Aeronautics and Space Act, officially creating NASA",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/30596892/pexels-photo-30596892.png",
    details:
      "President Dwight D. Eisenhower signed the National Aeronautics and Space Act into law, officially establishing NASA as the United States' civilian space agency. This landmark legislation unified American space efforts and set the stage for the Space Race.",
    participants: ["President Dwight D. Eisenhower", "U.S. Congress"],
    location: "Washington, D.C.",
  },
  {
    id: "july-29-1995",
    date: "1995-07-29",
    year: 1995,
    title: "Space Shuttle Atlantis Docks with Mir",
    description:
      "NASA's Atlantis (STS-71) docked with Russian Mir station, beginning shuttle-Mir cooperation program",
    category: "mission",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    details:
      "Space Shuttle Atlantis successfully docked with the Russian Mir Space Station, marking the first of seven planned shuttle-Mir missions between 1995-1997. This cooperation represented a major step toward international space collaboration and ISS development.",
    participants: ["NASA", "Roscosmos", "Atlantis Crew", "Mir Crew"],
    location: "Mir Space Station, Low Earth Orbit",
  },
  {
    id: "july-30-1971",
    date: "1971-07-30",
    year: 1971,
    title: "Apollo 15 Lunar Landing at Hadley-Apennine",
    description:
      "Apollo 15 successfully landed at Hadley-Apennine site, beginning first use of lunar rover on Moon",
    category: "landing",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/20068530/pexels-photo-20068530.jpeg",
    details:
      "Apollo 15's Falcon lunar module successfully landed at the Hadley-Apennine site near the Moon's Apennine Mountains. This mission marked the first use of the lunar rover vehicle, enabling extended exploration and the most comprehensive geological survey of the Moon to date.",
    participants: ["NASA", "David Scott", "James Irwin", "Alfred Worden"],
    location: "Hadley-Apennine, Moon",
  },
  {
    id: "july-30-1969",
    date: "1969-07-30",
    year: 1969,
    title: "Apollo 11 Crew Completes Quarantine",
    description:
      "Apollo 11 astronauts completed 21-day quarantine period after successful Moon landing mission",
    category: "milestone",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    details:
      "Neil Armstrong, Buzz Aldrin, and Michael Collins completed their 21-day quarantine at the Lunar Receiving Laboratory, ensuring they carried no lunar pathogens. This precautionary measure marked the safe conclusion of humanity's first Moon landing mission.",
    participants: ["NASA", "Neil Armstrong", "Buzz Aldrin", "Michael Collins"],
    location: "Lunar Receiving Laboratory, Houston, Texas",
  },
];

export function getEventsForDate(date: Date): SpaceEvent[] {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return spaceEvents
    .filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getMonth() + 1 === month && eventDate.getDate() === day;
    })
    .sort((a, b) => b.year - a.year);
}

export function getAllEventsInDateRange(
  startDate: Date,
  endDate: Date,
): SpaceEvent[] {
  return spaceEvents
    .filter((event) => {
      const eventDate = new Date(event.date);
      const eventMonthDay = eventDate.getMonth() * 100 + eventDate.getDate();
      const startMonthDay = startDate.getMonth() * 100 + startDate.getDate();
      const endMonthDay = endDate.getMonth() * 100 + endDate.getDate();

      if (startMonthDay <= endMonthDay) {
        return eventMonthDay >= startMonthDay && eventMonthDay <= endMonthDay;
      } else {
        // Handle year boundary crossing
        return eventMonthDay >= startMonthDay || eventMonthDay <= endMonthDay;
      }
    })
    .sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      const aMonthDay = aDate.getMonth() * 100 + aDate.getDate();
      const bMonthDay = bDate.getMonth() * 100 + bDate.getDate();

      if (aMonthDay !== bMonthDay) {
        return aMonthDay - bMonthDay;
      }
      return b.year - a.year;
    });
}

export function getTodaysEvents(): SpaceEvent[] {
  return getEventsForDate(new Date());
}
