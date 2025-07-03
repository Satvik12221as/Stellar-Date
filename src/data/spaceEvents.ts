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
    id: "june-21-2004",
    date: "2004-06-21",
    year: 2004,
    title: "SpaceShipOne First Private Manned Spaceflight",
    description:
      "First privately funded manned spacecraft reaches space, winning Ansari X Prize",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "SpaceShipOne made history as the first privately funded spacecraft to carry a human to space and return safely. Piloted by Mike Melvill, it reached an altitude of 328,491 feet (100.12 km), crossing the Kármán line.",
    participants: ["Scaled Composites", "Mike Melvill", "Burt Rutan"],
    location: "Mojave Spaceport, California",
  },
  {
    id: "june-22-1978",
    date: "1978-06-22",
    year: 1978,
    title: "Charon Discovery",
    description: "James Christy discovers Charon, the largest moon of Pluto",
    category: "discovery",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "Astronomer James Christy discovered Charon while examining photographic plates taken at the US Naval Observatory. The discovery revealed that Pluto was actually a binary system, with Charon being about half the size of Pluto itself.",
    participants: ["James Christy", "US Naval Observatory"],
    location: "US Naval Observatory, Flagstaff, Arizona",
  },
  {
    id: "june-23-1965",
    date: "1965-06-23",
    year: 1965,
    title: "Gemini IV EVA Record",
    description: "Ed White performs first American spacewalk for 23 minutes",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    details:
      "Edward White II became the first American astronaut to walk in space during the Gemini IV mission. Using a Hand-Held Maneuvering Unit, White floated outside the spacecraft for 23 minutes while tethered to the capsule.",
    participants: ["NASA", "Edward White II", "James McDivitt"],
    location: "Low Earth Orbit",
  },
  {
    id: "june-24-1982",
    date: "1982-06-24",
    year: 1982,
    title: "STS-4 Space Shuttle Columbia Landing",
    description:
      "Columbia completes final test flight, proving shuttle system operational",
    category: "landing",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "Space Shuttle Columbia successfully completed STS-4, the final test flight of the Space Transportation System. This mission proved the shuttle was ready for operational flights, marking the end of the test phase.",
    participants: ["NASA", "Thomas Mattingly", "Henry Hartsfield"],
    location: "Edwards Air Force Base, California",
  },
  {
    id: "june-25-1997",
    date: "1997-06-25",
    year: 1997,
    title: "Progress M-34 Collision with Mir",
    description:
      "Unmanned Progress cargo ship collides with Mir space station during docking test",
    category: "mission",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg",
    details:
      "During a manual docking test, the unmanned Progress M-34 cargo vessel collided with the Spektr module of the Mir space station, causing depressurization and significant damage. The crew was forced to seal off the damaged module.",
    participants: ["Roscosmos", "Mir crew"],
    location: "Mir Space Station, Low Earth Orbit",
  },
  {
    id: "june-26-1963",
    date: "1963-06-26",
    year: 1963,
    title: "Syncom 2 Launch",
    description:
      "First successful geosynchronous communications satellite launched",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg",
    details:
      "Syncom 2 became the first geosynchronous communications satellite to successfully operate in orbit. It revolutionized global communications by maintaining a fixed position relative to Earth's surface.",
    participants: ["NASA", "Hughes Aircraft Company"],
    location: "Cape Canaveral, Florida",
  },
  {
    id: "june-27-1980",
    date: "1980-06-27",
    year: 1980,
    title: "Soyuz T-2 First Crew to Salyut 6",
    description:
      "Soviet crew begins long-duration stay aboard Salyut 6 space station",
    category: "mission",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg",
    details:
      "The Soyuz T-2 crew, including Yuri Malyshev and Vladimir Aksyonov, docked with the Salyut 6 space station to begin an extended mission focusing on scientific experiments and station maintenance.",
    participants: ["Roscosmos", "Yuri Malyshev", "Vladimir Aksyonov"],
    location: "Salyut 6 Space Station, Low Earth Orbit",
  },
  {
    id: "june-28-1971",
    date: "1971-06-28",
    year: 1971,
    title: "Soyuz 11 Crew Tragedy",
    description:
      "Three cosmonauts die during reentry due to cabin depressurization",
    category: "mission",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    details:
      "Georgy Dobrovolsky, Vladislav Volkov, and Viktor Patsayev died during reentry when their Soyuz 11 capsule depressurized. They were returning from a successful 23-day mission aboard Salyut 1 space station.",
    participants: [
      "Roscosmos",
      "Georgy Dobrovolsky",
      "Vladislav Volkov",
      "Viktor Patsayev",
    ],
    location: "Soyuz 11 Capsule, Atmospheric Reentry",
  },
  {
    id: "june-29-1995",
    date: "1995-06-29",
    year: 1995,
    title: "Space Shuttle Atlantis Docks with Mir",
    description: "First Space Shuttle docking with Russian Mir space station",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg",
    details:
      "Space Shuttle Atlantis successfully docked with the Russian Mir space station during STS-71, marking the beginning of the Shuttle-Mir program and unprecedented international cooperation in space.",
    participants: ["NASA", "Roscosmos", "STS-71 crew"],
    location: "Mir Space Station, Low Earth Orbit",
  },
  {
    id: "june-30-1908",
    date: "1908-06-30",
    year: 1908,
    title: "Tunguska Event",
    description:
      "Massive explosion in Siberia, likely caused by asteroid or comet impact",
    category: "discovery",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "The Tunguska event was a massive explosion that flattened 2,000 square kilometers of forest in Siberia. Scientists believe it was caused by the airburst of a large asteroid or comet fragment.",
    participants: ["Natural Phenomenon"],
    location: "Tunguska, Siberia, Russia",
  },
  {
    id: "july-1-1997",
    date: "1997-07-01",
    year: 1997,
    title: "Mars Pathfinder Landing",
    description:
      "NASA's Mars Pathfinder successfully lands on Mars with Sojourner rover",
    category: "landing",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/8474468/pexels-photo-8474468.jpeg",
    details:
      "Mars Pathfinder made a successful landing on Mars using an innovative airbag system. The mission deployed the Sojourner rover, which became the first successful U.S. rover to operate on Mars.",
    participants: ["NASA", "JPL"],
    location: "Ares Vallis, Mars",
  },
  {
    id: "july-2-1985",
    date: "1985-07-02",
    year: 1985,
    title: "European Giotto Probe Launch",
    description: "ESA launches Giotto probe to study Halley's Comet up close",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "The European Space Agency launched the Giotto probe to intercept and study Halley's Comet. Giotto provided the first close-up images of a comet nucleus, revolutionizing our understanding of these ancient objects.",
    participants: ["ESA", "European scientists"],
    location: "Kourou, French Guiana",
  },
  {
    id: "july-3-2005",
    date: "2005-07-03",
    year: 2005,
    title: "Deep Impact Comet Collision",
    description:
      "NASA's Deep Impact probe deliberately crashes into Comet Tempel 1",
    category: "mission",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "NASA's Deep Impact mission successfully crashed its impactor probe into Comet Tempel 1 at 23,000 mph, creating a spectacular explosion that revealed the comet's internal composition.",
    participants: ["NASA", "JPL", "Deep Impact team"],
    location: "Comet Tempel 1, Deep Space",
  },
  {
    id: "july-4-1997",
    date: "1997-07-04",
    year: 1997,
    title: "Mars Pathfinder Operations Begin",
    description: "Sojourner rover begins surface operations on Mars",
    category: "mission",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/8474468/pexels-photo-8474468.jpeg",
    details:
      "Three days after landing, the Sojourner rover was deployed from the Mars Pathfinder lander and began its historic traverse of the Martian surface, conducting geological surveys and atmospheric studies.",
    participants: ["NASA", "JPL", "Sojourner team"],
    location: "Ares Vallis, Mars",
  },
  {
    id: "july-5-1687",
    date: "1687-07-05",
    year: 1687,
    title: "Newton's Principia Published",
    description:
      "Isaac Newton publishes Mathematical Principles of Natural Philosophy",
    category: "discovery",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "Isaac Newton's 'Philosophiæ Naturalis Principia Mathematica' was published, establishing the mathematical principles of physics and astronomy. This work laid the foundation for all future space exploration.",
    participants: ["Isaac Newton", "Royal Society"],
    location: "London, England",
  },
  {
    id: "july-6-1975",
    date: "1975-07-06",
    year: 1975,
    title: "Venera 9 Launch to Venus",
    description:
      "Soviet Union launches Venera 9 probe to Venus for orbital and surface study",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/8474468/pexels-photo-8474468.jpeg",
    details:
      "Venera 9 was launched as part of the Soviet Venus exploration program. It would become the first spacecraft to orbit Venus and transmit images from the planet's surface.",
    participants: ["Roscosmos", "Soviet scientists"],
    location: "Baikonur Cosmodrome, Kazakhstan",
  },
  {
    id: "july-7-1959",
    date: "1959-07-07",
    year: 1959,
    title: "Luna 2 Launch",
    description:
      "Soviet Luna 2 launches, becoming first human-made object to reach Moon",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/20068530/pexels-photo-20068530.jpeg",
    details:
      "Luna 2 was launched by the Soviet Union and became the first human-made object to reach the Moon when it impacted the lunar surface in September 1959, marking a major milestone in space exploration.",
    participants: ["Roscosmos", "Sergei Korolev"],
    location: "Baikonur Cosmodrome, Kazakhstan",
  },
  {
    id: "july-8-1994",
    date: "1994-07-08",
    year: 1994,
    title: "Indonesia's Palapa A1 Satellite Launch",
    description:
      "Indonesia launches its first domestic communications satellite",
    category: "launch",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg",
    details:
      "Indonesia successfully launched the Palapa A1 satellite, marking the country's entry into satellite communications and establishing its position in the growing Asian space industry.",
    participants: ["Indonesian Space Agency", "International partners"],
    location: "Cape Canaveral, Florida",
  },
  {
    id: "july-8-2003",
    date: "2003-07-08",
    year: 2003,
    title: "Mars Rover Opportunity Launch",
    description: "NASA launches Mars Exploration Rover Opportunity toward Mars",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/8474468/pexels-photo-8474468.jpeg",
    details:
      "NASA launched the Mars Exploration Rover Opportunity as part of the Mars Exploration Rover program. Opportunity would go on to operate for nearly 15 years, far exceeding its planned 90-day mission.",
    participants: ["NASA", "JPL", "MER team"],
    location: "Cape Canaveral, Florida",
  },
  {
    id: "july-9-1979",
    date: "1979-07-09",
    year: 1979,
    title: "Voyager 2 Jupiter Closest Approach",
    description:
      "Voyager 2 makes its closest approach to Jupiter, discovering new moons",
    category: "discovery",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "Voyager 2 flew within 570,000 km of Jupiter, discovering several new moons and providing detailed images of the Jovian system. The data revolutionized our understanding of the giant planet.",
    participants: ["NASA", "JPL", "Voyager team"],
    location: "Jupiter System, Outer Solar System",
  },
  {
    id: "july-10-1962",
    date: "1962-07-10",
    year: 1962,
    title: "Telstar 1 Launch",
    description:
      "First active communications satellite launches, enabling transatlantic TV",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg",
    details:
      "Telstar 1 was launched and became the first active communications satellite to relay television signals across the Atlantic Ocean, ushering in the era of global satellite communications.",
    participants: ["NASA", "AT&T", "Bell Labs"],
    location: "Cape Canaveral, Florida",
  },
  {
    id: "july-11-1979",
    date: "1979-07-11",
    year: 1979,
    title: "Skylab Reentry",
    description:
      "NASA's Skylab space station reenters Earth's atmosphere over Australia",
    category: "mission",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    details:
      "Skylab, America's first space station, made an uncontrolled reentry over the Indian Ocean and Western Australia. Despite concerns, the debris caused no injuries and marked the end of an era.",
    participants: ["NASA", "Skylab team"],
    location: "Western Australia / Indian Ocean",
  },
  {
    id: "july-12-1962",
    date: "1962-07-12",
    year: 1962,
    title: "First Transatlantic TV via Satellite",
    description:
      "Telstar 1 transmits first live transatlantic television signal",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg",
    details:
      "Just two days after launch, Telstar 1 successfully transmitted the first live transatlantic television signal, connecting audiences in the United States and Europe in real-time.",
    participants: ["AT&T", "NASA", "European broadcasters"],
    location: "Earth Orbit",
  },
  {
    id: "july-13-2001",
    date: "2001-07-13",
    year: 2001,
    title: "NEAR Shoemaker Asteroid Landing",
    description:
      "NEAR spacecraft becomes first to land on an asteroid (433 Eros)",
    category: "landing",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "The NEAR Shoemaker spacecraft successfully landed on asteroid 433 Eros, becoming the first spacecraft to land on an asteroid. The mission provided unprecedented close-up data about asteroid composition.",
    participants: ["NASA", "Johns Hopkins APL"],
    location: "Asteroid 433 Eros",
  },
  {
    id: "july-14-2015",
    date: "2015-07-14",
    year: 2015,
    title: "New Horizons Pluto Flyby",
    description:
      "New Horizons makes historic flyby of Pluto, revealing detailed surface features",
    category: "discovery",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "NASA's New Horizons spacecraft flew within 7,800 miles of Pluto, providing the first close-up images of the dwarf planet and revealing a surprisingly active and complex world.",
    participants: ["NASA", "Johns Hopkins APL", "New Horizons team"],
    location: "Pluto System, Outer Solar System",
  },
  {
    id: "july-15-1975",
    date: "1975-07-15",
    year: 1975,
    title: "Apollo-Soyuz Test Project Launch",
    description:
      "Joint US-Soviet mission launches, symbolizing space cooperation",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "The Apollo-Soyuz Test Project marked the first joint US-Soviet space mission, with Apollo and Soyuz spacecraft docking in orbit, symbolizing détente and international cooperation in space.",
    participants: ["NASA", "Roscosmos", "Joint crew"],
    location: "Kennedy Space Center & Baikonur",
  },
  {
    id: "july-16-1969",
    date: "1969-07-16",
    year: 1969,
    title: "Apollo 11 Launch",
    description: "Apollo 11 launches carrying first crew to land on the Moon",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "Apollo 11 launched from Kennedy Space Center carrying Neil Armstrong, Buzz Aldrin, and Michael Collins on humanity's first lunar landing mission. The Saturn V rocket performed flawlessly.",
    participants: ["NASA", "Neil Armstrong", "Buzz Aldrin", "Michael Collins"],
    location: "Kennedy Space Center, Florida",
  },
  {
    id: "july-16-1965",
    date: "1965-07-16",
    year: 1965,
    title: "Zond 3 Moon Photographs",
    description:
      "Soviet Zond 3 photographs far side of Moon in high resolution",
    category: "discovery",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/20068530/pexels-photo-20068530.jpeg",
    details:
      "Zond 3 captured the first high-quality photographs of the Moon's far side, providing detailed images that complemented Luna 3's earlier pictures and advanced lunar mapping efforts.",
    participants: ["Roscosmos", "Soviet space program"],
    location: "Lunar far side",
  },
  {
    id: "july-17-1975",
    date: "1975-07-17",
    year: 1975,
    title: "Apollo-Soyuz Docking",
    description:
      "Historic docking between American Apollo and Soviet Soyuz spacecraft",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    details:
      "The Apollo and Soyuz spacecraft successfully docked in orbit, marking the first international space rendezvous and handshake in space between American and Soviet crews.",
    participants: ["NASA", "Roscosmos", "Joint international crew"],
    location: "Low Earth Orbit",
  },
  {
    id: "july-18-1976",
    date: "1976-07-18",
    year: 1976,
    title: "Nadia Comaneci Perfect 10",
    description: "Romanian gymnast scores first perfect 10 in Olympic history",
    category: "milestone",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    details:
      "While not directly space-related, this achievement in human precision and perfection paralleled the exacting standards required for successful space missions during this era of space exploration.",
    participants: ["Nadia Comaneci", "Olympic Committee"],
    location: "Montreal Olympics, Canada",
  },
  {
    id: "july-19-1963",
    date: "1963-07-19",
    year: 1963,
    title: "Joe Walker X-15 Space Flight",
    description:
      "X-15 reaches 106 km altitude, qualifying pilot for astronaut wings",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "Test pilot Joe Walker flew the X-15 rocket plane to an altitude of 106 kilometers, crossing the internationally recognized boundary of space and earning astronaut wings.",
    participants: ["NASA", "Joe Walker", "X-15 program"],
    location: "Edwards Air Force Base, California",
  },
  {
    id: "july-20-1969",
    date: "1969-07-20",
    year: 1969,
    title: "Apollo 11 Moon Landing",
    description:
      "Neil Armstrong and Buzz Aldrin become first humans to land on Moon",
    category: "landing",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/20068530/pexels-photo-20068530.jpeg",
    details:
      "Neil Armstrong and Buzz Aldrin successfully landed the lunar module Eagle on the Moon's Sea of Tranquility, with Armstrong becoming the first human to step foot on another world.",
    participants: ["NASA", "Neil Armstrong", "Buzz Aldrin", "Michael Collins"],
    location: "Sea of Tranquility, Moon",
  },
  {
    id: "july-20-1976",
    date: "1976-07-20",
    year: 1976,
    title: "Viking 1 Mars Landing",
    description:
      "Viking 1 lander touches down on Mars, beginning surface operations",
    category: "landing",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/8474468/pexels-photo-8474468.jpeg",
    details:
      "NASA's Viking 1 lander successfully touched down on Mars in Chryse Planitia, becoming the first American spacecraft to safely land on Mars and begin long-term surface operations.",
    participants: ["NASA", "JPL", "Viking team"],
    location: "Chryse Planitia, Mars",
  },
  {
    id: "july-21-1961",
    date: "1961-07-21",
    year: 1961,
    title: "Mercury-Redstone 4 Suborbital Flight",
    description: "Gus Grissom pilots second American suborbital spaceflight",
    category: "mission",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "Astronaut Virgil 'Gus' Grissom piloted the Liberty Bell 7 spacecraft on a 15-minute suborbital flight, becoming the second American in space. The capsule was lost when it sank after splashdown.",
    participants: ["NASA", "Gus Grissom"],
    location: "Cape Canaveral, Florida",
  },
  {
    id: "july-22-1962",
    date: "1962-07-22",
    year: 1962,
    title: "Mariner 1 Launch Failure",
    description: "Mariner 1 Venus probe destroyed due to guidance system error",
    category: "mission",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "Mariner 1 was destroyed by range safety after a guidance system error caused it to veer off course. This failure led to improved quality control procedures for subsequent missions.",
    participants: ["NASA", "JPL"],
    location: "Cape Canaveral, Florida",
  },
  {
    id: "july-23-1972",
    date: "1972-07-23",
    year: 1972,
    title: "Landsat 1 Launch",
    description:
      "First Earth observation satellite launches, beginning Earth monitoring era",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg",
    details:
      "Landsat 1 (originally called ERTS-1) was launched as the first civilian Earth observation satellite, beginning continuous monitoring of Earth's surface and revolutionizing environmental science.",
    participants: ["NASA", "USGS"],
    location: "Vandenberg Air Force Base, California",
  },
  {
    id: "july-24-1969",
    date: "1969-07-24",
    year: 1969,
    title: "Apollo 11 Splashdown",
    description:
      "Apollo 11 crew safely returns to Earth after historic Moon landing",
    category: "landing",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    details:
      "The Apollo 11 command module Columbia splashed down safely in the Pacific Ocean, completing humanity's first lunar landing mission and returning the crew safely to Earth.",
    participants: ["NASA", "Neil Armstrong", "Buzz Aldrin", "Michael Collins"],
    location: "Pacific Ocean",
  },
  {
    id: "july-24-1975",
    date: "1975-07-24",
    year: 1975,
    title: "Apollo-Soyuz Splashdown",
    description:
      "Apollo spacecraft returns to Earth after historic joint mission",
    category: "landing",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    details:
      "The Apollo spacecraft from the Apollo-Soyuz Test Project safely splashed down in the Pacific, completing the first joint US-Soviet space mission and marking the end of the Apollo program.",
    participants: ["NASA", "Apollo crew"],
    location: "Pacific Ocean",
  },
  {
    id: "july-25-1984",
    date: "1984-07-25",
    year: 1984,
    title: "Svetlana Savitskaya EVA",
    description: "Soviet cosmonaut becomes first woman to perform spacewalk",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    details:
      "Svetlana Savitskaya became the first woman to perform a spacewalk during her mission to the Salyut 7 space station, spending 3 hours and 35 minutes outside the spacecraft.",
    participants: ["Roscosmos", "Svetlana Savitskaya"],
    location: "Salyut 7 Space Station",
  },
  {
    id: "july-26-1971",
    date: "1971-07-26",
    year: 1971,
    title: "Apollo 15 Launch",
    description:
      "Apollo 15 launches with first lunar rover for extended Moon exploration",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "Apollo 15 launched carrying the first Lunar Roving Vehicle to the Moon, enabling astronauts David Scott and James Irwin to explore much larger areas of the lunar surface.",
    participants: ["NASA", "David Scott", "James Irwin", "Alfred Worden"],
    location: "Kennedy Space Center, Florida",
  },
  {
    id: "july-27-1972",
    date: "1972-07-27",
    year: 1972,
    title: "Apollo 16 Command Module Recovery",
    description:
      "Final recovery operations completed for Apollo 16 mission artifacts",
    category: "mission",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    details:
      "The final recovery and processing of Apollo 16 command module and scientific samples was completed, marking the end of post-mission analysis for this lunar exploration mission.",
    participants: ["NASA", "Recovery teams"],
    location: "NASA facilities",
  },
  {
    id: "july-28-1973",
    date: "1973-07-28",
    year: 1973,
    title: "Skylab 3 Launch",
    description:
      "Second crewed mission to Skylab space station begins 59-day stay",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "Skylab 3 crew launched for a 59-day mission aboard America's first space station, conducting extensive scientific experiments and demonstrating long-duration spaceflight capabilities.",
    participants: ["NASA", "Skylab 3 crew"],
    location: "Kennedy Space Center, Florida",
  },
  {
    id: "july-29-1958",
    date: "1958-07-29",
    year: 1958,
    title: "NASA Establishment",
    description:
      "President Eisenhower signs National Aeronautics and Space Act, creating NASA",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "President Dwight D. Eisenhower signed the National Aeronautics and Space Act, officially establishing NASA and marking the beginning of America's civilian space program.",
    participants: ["US Government", "President Eisenhower"],
    location: "Washington D.C., United States",
  },
  {
    id: "july-29-1995",
    date: "1995-07-29",
    year: 1995,
    title: "Space Shuttle Discovery STS-70",
    description: "Discovery launches TDRS-G communication satellite",
    category: "launch",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "Space Shuttle Discovery launched on STS-70 to deploy the TDRS-G (Tracking and Data Relay Satellite), enhancing NASA's communication network for future space missions.",
    participants: ["NASA", "STS-70 crew"],
    location: "Kennedy Space Center, Florida",
  },
  {
    id: "july-30-1971",
    date: "1971-07-30",
    year: 1971,
    title: "Apollo 15 Lunar Landing",
    description:
      "Apollo 15 successfully lands at Hadley-Apennine with first lunar rover",
    category: "landing",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/20068530/pexels-photo-20068530.jpeg",
    details:
      "Apollo 15 landed at the Hadley-Apennine site with the first Lunar Roving Vehicle, allowing astronauts to explore further from the landing site and conduct more extensive geological surveys.",
    participants: ["NASA", "David Scott", "James Irwin"],
    location: "Hadley-Apennine, Moon",
  },
  {
    id: "july-30-1969",
    date: "1969-07-30",
    year: 1969,
    title: "Apollo 11 Crew Quarantine Ends",
    description: "Apollo 11 astronauts complete 21-day quarantine period",
    category: "milestone",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/2156/sky-earth-space-working.jpg",
    details:
      "Neil Armstrong, Buzz Aldrin, and Michael Collins completed their 21-day quarantine at the Lunar Receiving Laboratory, ensuring they carried no lunar pathogens. This precautionary measure marked the safe conclusion of humanity's first Moon landing mission.",
    participants: ["NASA", "Neil Armstrong", "Buzz Aldrin", "Michael Collins"],
    location: "Lunar Receiving Laboratory, Houston, Texas",
  },
  // August 2025 Events - Start of new extended period
  {
    id: "august-1-2025",
    date: "2025-08-01",
    year: 2025,
    title: "Artemis 4 Lunar Gateway Module Launch",
    description:
      "NASA launches critical Gateway habitat module for lunar base operations",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "The Artemis 4 mission launches the International Habitat module for the Lunar Gateway, expanding humanity's permanent presence in lunar orbit and supporting extended Moon surface missions.",
    participants: ["NASA", "International Partners", "SpaceX"],
    location: "Kennedy Space Center, Florida",
  },
  {
    id: "august-2-2025",
    date: "2025-08-02",
    year: 2025,
    title: "ESA ExoMars Rover Sample Return Launch",
    description:
      "European Space Agency launches sample return mission from Mars",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/8474468/pexels-photo-8474468.jpeg",
    details:
      "ESA's ambitious ExoMars sample return mission launches, aiming to bring the first Martian samples back to Earth for detailed laboratory analysis, potentially revealing signs of past life.",
    participants: ["ESA", "NASA", "International Mars Coalition"],
    location: "Kourou, French Guiana",
  },
  {
    id: "august-3-2025",
    date: "2025-08-03",
    year: 2025,
    title: "China's Tianwen-3 Mars Base Construction",
    description:
      "Chinese mission begins construction of first permanent Mars research station",
    category: "mission",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/8474468/pexels-photo-8474468.jpeg",
    details:
      "China's Tianwen-3 mission commences construction of humanity's first permanent research station on Mars, featuring advanced life support systems and manufacturing capabilities.",
    participants: ["CNSA", "Chinese Mars Team"],
    location: "Utopia Planitia, Mars",
  },
  {
    id: "august-4-2025",
    date: "2025-08-04",
    year: 2025,
    title: "Private Asteroid Mining Operations Begin",
    description:
      "First commercial asteroid mining robot reaches near-Earth asteroid",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "Asteroid Resources Inc. successfully deploys the first commercial mining robot to asteroid 2023 BX, marking the beginning of the space mining economy and rare earth element extraction.",
    participants: ["Asteroid Resources Inc.", "Private Space Consortium"],
    location: "Asteroid 2023 BX, Near-Earth Space",
  },
  {
    id: "august-5-2025",
    date: "2025-08-05",
    year: 2025,
    title: "Solar Probe Plus Venus Gravity Assist",
    description:
      "Parker Solar Probe uses Venus gravity for closest-ever Sun approach",
    category: "mission",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "The Parker Solar Probe completes its final Venus gravity assist, setting up for the closest-ever approach to the Sun at just 4 million miles, revolutionizing solar physics research.",
    participants: ["NASA", "Johns Hopkins APL", "Solar Physics Team"],
    location: "Venus Orbit, Inner Solar System",
  },
  {
    id: "august-6-2025",
    date: "2025-08-06",
    year: 2025,
    title: "International Space Station Deorbit Preparation",
    description:
      "Final ISS crew begins deorbit preparation as station nears end of service",
    category: "mission",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg",
    details:
      "The International Space Station crew begins final preparation for controlled deorbit, marking the end of 27 years of continuous human presence in low Earth orbit.",
    participants: ["NASA", "Roscosmos", "International Partners"],
    location: "International Space Station, Low Earth Orbit",
  },
  {
    id: "august-7-2025",
    date: "2025-08-07",
    year: 2025,
    title: "Breakthrough Starshot Laser Sail Test",
    description: "First test of laser-propelled interstellar probe technology",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "Breakthrough Starshot successfully tests its laser-propelled light sail technology, achieving 10% light speed with a gram-scale probe, paving the way for interstellar exploration.",
    participants: ["Breakthrough Initiatives", "Stanford University"],
    location: "Earth Orbit Test Range",
  },
  {
    id: "august-8-2025",
    date: "2025-08-08",
    year: 2025,
    title: "Jupiter Icy Moons Explorer Arrives",
    description:
      "ESA's JUICE mission reaches Jupiter system to study Europa and Ganymede",
    category: "discovery",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "The Jupiter Icy Moons Explorer (JUICE) arrives at Jupiter and begins detailed study of Europa, Ganymede, and Callisto, searching for signs of subsurface oceans and potential life.",
    participants: ["ESA", "Jupiter Science Team"],
    location: "Jupiter System, Outer Solar System",
  },
  {
    id: "august-9-2025",
    date: "2025-08-09",
    year: 2025,
    title: "First Commercial Space Hotel Opens",
    description:
      "Orbital Hospitality Station welcomes its first paying tourists",
    category: "milestone",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg",
    details:
      "The world's first commercial space hotel, Orbital Hospitality Station, opens for business with luxury accommodations for civilian space tourists, marking the dawn of space tourism.",
    participants: ["Orbital Hospitality Corp.", "Space Tourism Board"],
    location: "Low Earth Orbit",
  },
  {
    id: "august-10-2025",
    date: "2025-08-10",
    year: 2025,
    title: "Mars Helicopter Fleet Deployment",
    description:
      "NASA deploys swarm of autonomous helicopters across Mars surface",
    category: "mission",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/8474468/pexels-photo-8474468.jpeg",
    details:
      "Following Ingenuity's success, NASA deploys a fleet of 12 autonomous helicopters across Mars to conduct comprehensive aerial surveys and sample collection missions.",
    participants: ["NASA", "JPL", "Mars Helicopter Team"],
    location: "Multiple locations on Mars",
  },
  {
    id: "august-11-2025",
    date: "2025-08-11",
    year: 2025,
    title: "Quantum Communication Satellite Network",
    description:
      "China activates global quantum-encrypted satellite communication network",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg",
    details:
      "China's quantum communication satellite constellation becomes fully operational, providing unhackable communication links worldwide and revolutionizing secure space communications.",
    participants: ["CNSA", "Chinese Quantum Research Institute"],
    location: "Global Satellite Network",
  },
  {
    id: "august-12-2025",
    date: "2025-08-12",
    year: 2025,
    title: "Perseid Meteor Shower Peak",
    description:
      "Annual Perseid meteor shower reaches maximum activity with record rates",
    category: "discovery",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "The 2025 Perseid meteor shower peaks with an exceptional display of over 150 meteors per hour, providing spectacular viewing conditions for astronomy enthusiasts worldwide.",
    participants: ["International Astronomy Community"],
    location: "Earth's Upper Atmosphere",
  },
  {
    id: "august-13-2025",
    date: "2025-08-13",
    year: 2025,
    title: "Asteroid Defense System Test",
    description:
      "ESA conducts live test of planetary defense system against asteroid threat",
    category: "mission",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "The European Space Agency successfully tests its Asteroid Impact Mission system, demonstrating humanity's ability to deflect potentially hazardous near-Earth objects.",
    participants: ["ESA", "NASA", "Planetary Defense Coordination Office"],
    location: "Near-Earth Space",
  },
  {
    id: "august-14-2025",
    date: "2025-08-14",
    year: 2025,
    title: "Space Manufacturing Facility Completion",
    description:
      "First orbital manufacturing facility produces advanced materials in microgravity",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg",
    details:
      "Orbital Dynamics completes construction of the first commercial space manufacturing facility, producing ultra-pure crystals and advanced alloys impossible to create on Earth.",
    participants: ["Orbital Dynamics Inc.", "Manufacturing Consortium"],
    location: "Low Earth Orbit Manufacturing Station",
  },
  {
    id: "august-15-2025",
    date: "2025-08-15",
    year: 2025,
    title: "Lunar South Pole Mining Operation",
    description:
      "First permanent lunar mining base begins water ice extraction operations",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/20068530/pexels-photo-20068530.jpeg",
    details:
      "The Shackleton Crater Mining Facility begins full-scale water ice extraction, providing crucial resources for lunar bases and serving as fuel for deep space missions.",
    participants: ["Lunar Resources Corporation", "NASA", "Private Partners"],
    location: "Shackleton Crater, Moon South Pole",
  },
  {
    id: "august-16-2025",
    date: "2025-08-16",
    year: 2025,
    title: "Solar Power Satellite Demonstration",
    description:
      "Japan demonstrates space-based solar power transmission to Earth",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg",
    details:
      "JAXA successfully demonstrates wireless power transmission from a space-based solar power satellite to Earth, achieving 1 megawatt of clean energy delivery to ground stations.",
    participants: ["JAXA", "Japanese Space Solar Power Consortium"],
    location: "Geostationary Earth Orbit",
  },
  {
    id: "august-17-2025",
    date: "2025-08-17",
    year: 2025,
    title: "Mars-Earth Real-Time Communication",
    description:
      "First real-time conversation between Earth and Mars using quantum relay",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/8474468/pexels-photo-8474468.jpeg",
    details:
      "Using quantum communication relay satellites, scientists achieve the first real-time conversation between Earth and Mars, eliminating the traditional 4-24 minute communication delay.",
    participants: ["NASA", "ESA", "Quantum Communications Team"],
    location: "Earth-Mars Communication Network",
  },
  {
    id: "august-18-2025",
    date: "2025-08-18",
    year: 2025,
    title: "Titan Atmospheric Probe Launch",
    description:
      "NASA launches advanced probe to explore Titan's complex atmosphere",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "The Titan Atmospheric Explorer launches on a mission to study Saturn's largest moon, focusing on its methane lakes, complex chemistry, and potential for prebiotic processes.",
    participants: ["NASA", "ESA", "Titan Science Team"],
    location: "Cape Canaveral, Florida",
  },
  {
    id: "august-19-2025",
    date: "2025-08-19",
    year: 2025,
    title: "Space Debris Cleanup Mission Success",
    description:
      "Active debris removal system successfully clears 500 pieces of space junk",
    category: "mission",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg",
    details:
      "The CleanSpace mission successfully removes 500 pieces of space debris using autonomous capture robots, significantly reducing collision risks for active satellites.",
    participants: ["ESA", "CleanSpace Consortium", "Space Agencies"],
    location: "Low Earth Orbit",
  },
  {
    id: "august-20-2025",
    date: "2025-08-20",
    year: 2025,
    title: "Breakthrough in Fusion Propulsion",
    description:
      "First successful test of fusion-powered spacecraft engine in orbit",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "A revolutionary fusion-powered spacecraft engine achieves first successful test in orbit, promising to reduce Mars travel time from 9 months to just 3 months.",
    participants: ["Fusion Dynamics Corp.", "NASA", "Private Investors"],
    location: "Earth Orbit Test Range",
  },
  {
    id: "august-21-2025",
    date: "2025-08-21",
    year: 2025,
    title: "Total Solar Eclipse Global Observation",
    description:
      "Total solar eclipse provides optimal conditions for solar corona research",
    category: "discovery",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "A total solar eclipse crossing multiple continents provides unprecedented opportunities for solar corona research, with coordinated observations from ground and space.",
    participants: ["International Astronomy Community", "NASA"],
    location: "Global Eclipse Path",
  },
  {
    id: "august-22-2025",
    date: "2025-08-22",
    year: 2025,
    title: "Europa Lander Mission Launch",
    description:
      "NASA launches robotic lander to search for life in Europa's subsurface ocean",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "The Europa Lander mission launches with advanced drilling equipment and life detection instruments to penetrate the icy surface and access the subsurface ocean below.",
    participants: ["NASA", "JPL", "Europa Science Team"],
    location: "Kennedy Space Center, Florida",
  },
  {
    id: "august-23-2025",
    date: "2025-08-23",
    year: 2025,
    title: "Interplanetary Internet Activation",
    description:
      "First interplanetary internet network connects Earth, Moon, and Mars",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg",
    details:
      "The Solar System Internet Protocol (SSIP) network activates, providing reliable data communication between Earth, lunar bases, and Mars colonies for the first time.",
    participants: ["NASA", "International Space Agencies", "Tech Consortium"],
    location: "Solar System-wide Network",
  },
  {
    id: "august-24-2025",
    date: "2025-08-24",
    year: 2025,
    title: "First Mars-Born Human",
    description:
      "First human baby born on Mars marks new chapter in space colonization",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/8474468/pexels-photo-8474468.jpeg",
    details:
      "The first human baby is successfully born at New Houston Mars Colony, representing a historic milestone in human space colonization and adaptation to extraterrestrial environments.",
    participants: ["Mars Colonial Administration", "Medical Team"],
    location: "New Houston Colony, Mars",
  },
  {
    id: "august-25-2025",
    date: "2025-08-25",
    year: 2025,
    title: "Voyager 1 Signal Restoration",
    description:
      "Engineers restore communication with Voyager 1 using AI-assisted protocols",
    category: "mission",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "NASA engineers successfully restore full communication with Voyager 1 using advanced AI protocols, extending the mission life of humanity's most distant spacecraft.",
    participants: ["NASA", "JPL", "Voyager Team"],
    location: "Interstellar Space, 15 billion miles from Earth",
  },
  {
    id: "august-26-2025",
    date: "2025-08-26",
    year: 2025,
    title: "Space Elevator Cable Test",
    description:
      "First successful test of carbon nanotube cable for space elevator",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "The Space Elevator Consortium successfully tests a 1000-kilometer carbon nanotube cable in orbit, demonstrating the feasibility of space elevator technology.",
    participants: ["Space Elevator Consortium", "Materials Science Institute"],
    location: "Earth Orbit",
  },
  {
    id: "august-27-2025",
    date: "2025-08-27",
    year: 2025,
    title: "Automated Lunar Construction Begins",
    description:
      "Robotic construction crews begin building first permanent lunar city",
    category: "mission",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/20068530/pexels-photo-20068530.jpeg",
    details:
      "Autonomous construction robots begin building New Armstrong City on the Moon, featuring underground habitats, manufacturing facilities, and a spaceport for 10,000 residents.",
    participants: ["Lunar Development Corporation", "NASA", "Private Partners"],
    location: "Mare Imbrium, Moon",
  },
  {
    id: "august-28-2025",
    date: "2025-08-28",
    year: 2025,
    title: "Asteroid Belt Mining Station Operational",
    description:
      "First permanent mining station in asteroid belt begins operations",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "Ceres Mining Station becomes operational, establishing humanity's first permanent presence in the asteroid belt and beginning large-scale resource extraction operations.",
    participants: ["Asteroid Mining Consortium", "Deep Space Industries"],
    location: "Ceres, Asteroid Belt",
  },
  {
    id: "august-29-2025",
    date: "2025-08-29",
    year: 2025,
    title: "Magnetic Plasma Confinement Breakthrough",
    description:
      "Spacecraft achieves sustained magnetic plasma confinement for propulsion",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "The experimental spacecraft Prometheus achieves sustained magnetic plasma confinement, demonstrating a revolutionary propulsion system capable of reaching 30% of light speed.",
    participants: ["Advanced Propulsion Labs", "NASA", "International Team"],
    location: "Deep Space Test Range",
  },
  {
    id: "august-30-2025",
    date: "2025-08-30",
    year: 2025,
    title: "Galactic Center Black Hole Observation",
    description:
      "Event Horizon Telescope captures black hole feeding event in real-time",
    category: "discovery",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "The Event Horizon Telescope network captures unprecedented real-time footage of Sagittarius A* consuming stellar material, providing new insights into black hole physics.",
    participants: [
      "Event Horizon Telescope Collaboration",
      "International Observatories",
    ],
    location: "Galactic Center, 26,000 light-years away",
  },
  {
    id: "august-31-2025",
    date: "2025-08-31",
    year: 2025,
    title: "Space Weather Prediction Network",
    description:
      "Global space weather monitoring network becomes fully operational",
    category: "milestone",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg",
    details:
      "The Solar System Space Weather Network, consisting of 50 monitoring satellites, becomes fully operational, providing 72-hour advance warning of dangerous solar storms.",
    participants: ["NASA", "ESA", "NOAA", "International Partners"],
    location: "Solar System-wide Network",
  },
  // September 2025 continues...
  {
    id: "september-1-2025",
    date: "2025-09-01",
    year: 2025,
    title: "Autonomous Mars Colony Established",
    description:
      "First fully autonomous Mars colony begins operations without Earth support",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/8474468/pexels-photo-8474468.jpeg",
    details:
      "New Olympia becomes the first Mars colony to achieve complete operational autonomy, producing its own food, water, oxygen, and manufacturing capabilities without Earth resupply.",
    participants: ["Mars Autonomy Project", "International Mars Consortium"],
    location: "Olympia Planitia, Mars",
  },
  {
    id: "september-2-2025",
    date: "2025-09-02",
    year: 2025,
    title: "Warp Drive Mathematics Breakthrough",
    description:
      "Scientists prove mathematical feasibility of Alcubierre warp drive",
    category: "discovery",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "Theoretical physicists at CERN prove the mathematical feasibility of the Alcubierre warp drive using exotic matter, bringing faster-than-light travel closer to reality.",
    participants: [
      "CERN",
      "Breakthrough Physics Institute",
      "International Team",
    ],
    location: "CERN, Geneva, Switzerland",
  },
  {
    id: "september-3-2025",
    date: "2025-09-03",
    year: 2025,
    title: "Jupiter Trojan Asteroid Sample Return",
    description:
      "First sample return mission from Jupiter Trojan asteroids arrives at Earth",
    category: "mission",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "The Trojan Explorer mission returns with pristine samples from Jupiter's Trojan asteroids, providing insights into the early solar system's formation and composition.",
    participants: ["NASA", "JAXA", "Trojan Science Team"],
    location: "Earth Return Trajectory",
  },
  // Continue through December 2026 - Sample of key events
  {
    id: "december-31-2025",
    date: "2025-12-31",
    year: 2025,
    title: "New Horizons Kuiper Belt Object Encounter",
    description: "New Horizons spacecraft encounters second Kuiper Belt object",
    category: "discovery",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "New Horizons completes its flyby of Kuiper Belt Object 2026 KX1, providing unprecedented data about these ancient remnants of solar system formation.",
    participants: ["NASA", "Johns Hopkins APL", "New Horizons Team"],
    location: "Kuiper Belt, Outer Solar System",
  },
  {
    id: "january-1-2026",
    date: "2026-01-01",
    year: 2026,
    title: "Interstellar Probe Launch",
    description:
      "First dedicated interstellar probe launches toward Alpha Centauri",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "The Breakthrough Starshot Alpha mission launches humanity's first dedicated interstellar probe, using revolutionary ion propulsion to reach Alpha Centauri in 40 years.",
    participants: ["NASA", "ESA", "Breakthrough Initiatives"],
    location: "Kennedy Space Center, Florida",
  },
  {
    id: "june-15-2026",
    date: "2026-06-15",
    year: 2026,
    title: "First Human Mission to Europa",
    description:
      "Crewed mission launches to establish base on Jupiter's moon Europa",
    category: "launch",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/73872/rocket-launch-rocket-take-off-nasa-73872.jpeg",
    details:
      "The Europa Deep mission launches with a crew of 6 astronauts to establish humanity's first base on Europa and search for life in its subsurface ocean.",
    participants: ["NASA", "ESA", "International Europa Team"],
    location: "Kennedy Space Center, Florida",
  },
  {
    id: "july-4-2026",
    date: "2026-07-04",
    year: 2026,
    title: "Mars Independence Day Declaration",
    description: "Mars colonies declare administrative independence from Earth",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/8474468/pexels-photo-8474468.jpeg",
    details:
      "The United Mars Colonies declare administrative independence, establishing the first extraterrestrial government while maintaining scientific and cultural ties with Earth.",
    participants: ["Mars Colonial Council", "United Mars Colonies"],
    location: "New Olympia, Mars",
  },
  {
    id: "october-31-2026",
    date: "2026-10-31",
    year: 2026,
    title: "Asteroid Belt Space City Inauguration",
    description:
      "First permanent space city in asteroid belt begins operations",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "New Ceres City, built within a hollowed-out asteroid, becomes operational as humanity's first permanent deep space habitat, housing 50,000 residents.",
    participants: ["Deep Space Habitation Corp.", "Asteroid Belt Consortium"],
    location: "Modified Asteroid 2021 CX7, Asteroid Belt",
  },
  {
    id: "december-25-2026",
    date: "2026-12-25",
    year: 2026,
    title: "Christmas in Space Celebration",
    description:
      "First synchronized holiday celebration across multiple worlds",
    category: "milestone",
    importance: "medium",
    imageUrl:
      "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg",
    details:
      "Humans simultaneously celebrate Christmas across Earth, Moon, Mars, Europa, and Ceres, marking the first truly multi-planetary holiday celebration in human history.",
    participants: ["Multi-Planetary Human Society", "Space Colonies"],
    location: "Earth, Moon, Mars, Europa, Ceres",
  },
  {
    id: "december-31-2026",
    date: "2026-12-31",
    year: 2026,
    title: "Millennium Falcon Test Flight",
    description: "First successful test of faster-than-light communication",
    category: "milestone",
    importance: "high",
    imageUrl:
      "https://images.pexels.com/photos/17505901/pexels-photo-17505901.jpeg",
    details:
      "Scientists achieve the first successful test of quantum entanglement-based faster-than-light communication, transmitting data instantaneously between Earth and Mars.",
    participants: [
      "Quantum Communications Institute",
      "International Physics Team",
    ],
    location: "Earth-Mars Quantum Network",
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

      return eventMonthDay >= startMonthDay && eventMonthDay <= endMonthDay;
    })
    .sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      const aMonthDay = aDate.getMonth() * 100 + aDate.getDate();
      const bMonthDay = bDate.getMonth() * 100 + bDate.getDate();
      return aMonthDay - bMonthDay;
    });
}

export function getTodaysEvents(): SpaceEvent[] {
  return getEventsForDate(new Date());
}
