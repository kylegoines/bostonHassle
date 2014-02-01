

  var source   = jQuery("#some-template").html();
  var template = Handlebars.compile(source);






/////////////////////////////////////////////////
///to whom it may concern!!
///heed my warning mortal and tremble at the data object before ye
/// follow the pattern closely or be BANSIHED TO A BROKEN TEMPLATE
/// a comma after every closing curely brace!! working data will turn YELLOW!!!
/// whitespace or spacing matteres NOT!! but it helps for readabliy
///
/// hows my driving?? Quesitons?? thirteenotherslikeme@gmail.com
///
/// i believe in ye!!
/////////////////////////////////////////////////







    var context = { events: [

      
      {
        name: 'The Series on Monday w/ Long Blonde Wig',
        time: '8:00',
        location: 'Weirdo Records',
        ages: 'All Ages',
        month: 'jan',
        date: '6',
        price: 'Donate',
        url: '',
        cat: 'music'
      },

      {
        name: 'Fast Apple: The Fagettes, Miami Doritos and The Televibes ',
        time: '9:00',
        location: 'Charlie’s Kitchen',
        ages: '21+',
        month: 'jan',
        date: '6',
        price: '$5',
        url: '',
        cat: 'music'
      },

      {
        name: 'Free Pizza, Dylan Ewen, Lava Pillow',
        time: '9:00',
        location: 'Feeding Tube Records (Northampton, MA)',
        ages: 'All Ages',
        month: 'jan',
        date: '6',
        price: 'Donate',
        url: '',
        cat: 'music'
      },

      {
        name: 'Rad Castle: Steep Leans, Foam Castles, Soft Pyramids ',
        time: '9:00',
        location: 'ZuZu',
        ages: '21+',
        month: 'jan',
        date: '6',
        price: 'Free',
        url: '',
        cat: 'music'
      },

      {
        name: 'WFR Presents: Fume Hood, Moontower and Saga Genesis ',
        time: '9:00',
        location: 'Midway Cafe',
        ages: '21+',
        month: 'jan',
        date: '7',
        price: '$5',
        url: '',
        cat: 'music'
      },

      {
        name: 'SVVIM: ROBOKID, Dudley Disco and Brad Mood ',
        time: '9:00',
        location: 'Middlesex',
        ages: '21+',
        month: 'jan',
        date: '7',
        price: 'Free',
        url: '',
        cat: 'music'
      },

      {
        name: 'Fucking Invincible (RI), Lords of Death (NYC), Mad Diesel (NYC) and Rash Tongue',
        time: '7:00',
        location: 'Roggies',
        ages: 'All Ages',
        month: 'jan',
        date: '8',
        price: 'Donate',
        url: '',
        cat: 'music'
      },

      {
        name: 'pRIMORDIAL sOUNDS: Bent Shapes, Half Sour, Steep Leans',
        time: '9:00',
        location: 'Middlesex',
        ages: '21+',
        month: 'jan',
        date: '8',
        price: '$3',
        url: '',
        cat: 'music'
      },

      {
        name: 'Hyena, Greg Jamie, Butcher Boy and Cantaloupe Head',
        time: '8:30',
        location: 'JP Drizzy',
        ages: 'All Ages',
        month: 'jan',
        date: '9',
        price: 'Donate',
        url: '',
        cat: 'music'
      },

      {
        name: 'Streight Angular, Friendly People, Summer of Aden, Frank & Dependant ',
        time: '9:00',
        location: 'Great Scott',
        ages: '18+',
        month: 'jan',
        date: '9',
        price: '$8',
        url: '',
        cat: 'music'
      },

      {
        name: 'Doug Tuttle, Gary War, Endless Caverns ',
        time: '10:00',
        location: 'Lilypad',
        ages: 'All Ages',
        month: 'jan',
        date: '10',
        price: '$5-7 Donation',
        url: '',
        cat: 'music'
      },

      {
        name: 'UWE 60D, Planning for Burial, My Mountain, FRKSE',
        time: '10:00',
        location: 'SBC',
        ages: 'All Ages',
        month: 'jan',
        date: '10',
        price: 'Donate',
        url: '',
        cat: 'music'
      },

      {
        name: 'Video Nasties, Caethua, Synthetiv Vision, The Asthmatic',
        time: '8:00',
        location: 'The Oak and The Ax (Biddeford, Maine)',
        ages: 'TBA',
        month: 'jan',
        date: '11',
        price: '$ome cost',
        url: '',
        cat: 'music'
      },
      {
        name: 'Carinae, Future Days and Great Smokey',
        time: '9:00',
        location: 'The Crossroads (Hadley MA)',
        ages: 'All Ages',
        month: 'jan',
        date: '11',
        price: 'Donate',
        url: '',
        cat: 'music'
      },

      {
        name: 'Designer, Bbigpigg, Downtown Boys, Fat Attitude, SHTKNF',
        time: '9:00',
        location: 'A Spot in Burlington, VT',
        ages: 'All Ages',
        month: 'jan',
        date: '11',
        price: 'Donate',
        url: '',
        cat: 'music'
      },

      {
        name: 'Kal Marks, Warped Forest, Nashoba and Littlefoot',
        time: '9:00',
        location: 'Mill No. 5 (Lowell MA)',
        ages: 'All Ages',
        month: 'jan',
        date: '12',
        price: '$ome cost',
        url: '',
        cat: 'music'
      },

      {
        name: 'Sophie DIckenson, EDT, Vio/Mire, Tooms',
        time: '7:00',
        location: 'Washington Street Art Center',
        ages: 'All Ages',
        month: 'jan',
        date: '12',
        price: '$5',
        url: '',
        cat: 'music'
      },

      {
        name: 'Designer, Bbigpigg, Watermelon (CT), TBA',
        time: '7:00',
        location: 'Funky Jungle (Providence, RI)',
        ages: 'All Ages',
        month: 'jan',
        date: '12',
        price: 'Donate',
        url: '',
        cat: 'music'
      },

      {
        name: 'Mutual Benefit, Frankie Cosmos and Krill',
        time: '9:00',
        location: 'Great Scott',
        ages: '18+',
        month: 'jan',
        date: '13',
        price: '$10',
        url: '',
        cat: 'music'
      },

      {
        name: 'The Series on Monday w/ Chris Braiotta',
        time: '8:00',
        location: 'Weirdo Records',
        ages: 'All Ages',
        month: 'jan',
        date: '13',
        price: 'Donate',
        url: '',
        cat: 'music'
      },

      {
        name: 'Fast Apple: Bbigpigg(NYC), Designer and Lair',
        time: '9:00',
        location: 'Charlie’s Kitchen',
        ages: '21+',
        month: 'jan',
        date: '13',
        price: '$5',
        url: '',
        cat: 'music'
      },

      {
        name: 'Rad Castle: Ancient Filth, Future Spa',
        time: '10:00',
        location: 'Great Scott',
        ages: '21+',
        month: 'jan',
        date: '13',
        price: 'Free',
        url: '',
        cat: 'music'
      },

      {
        name: 'The Sediment Club and (New England) Patriots tour kick-off w/ Finished, Mincemeat or Tenspeed',
        time: '10:00',
        location: 'Kristina’s World (PVD)',
        ages: 'ALL AGES',
        month: 'jan',
        date: '14',
        price: 'Donate',
        url: '',
        cat: 'music'
      },

      {
        name: 'Shredded Nerve, Deceiver, A Snake In The Garden and Vehement Caress',
        time: '8:00',
        location: 'O’Brien’s',
        ages: '21+',
        month: 'jan',
        date: '14',
        price: '$10',
        url: '',
        cat: 'music'
      },

      {
        name: 'Freak Flag Presents: Video Nasties and Teacher Mother Secret Lover',
        time: '10:00',
        location: 'ZuZu',
        ages: '21+',
        month: 'jan',
        date: '15',
        price: '$5',
        url: '',
        cat: 'music'
      },

      {
        name: 'Guillermo Sexo, Slowdim, Lindsey Starr and Confessions',
        time: '8:00',
        location: 'Great Scott',
        ages: '18+',
        month: 'jan',
        date: '15',
        price: '$8',
        url: '',
        cat: 'music'
      },

      {
        name: 'Saintseneca, LVL UP, Ovlov and Fleabite',
        time: '9:00',
        location: 'Great Scott',
        ages: '18+',
        month: 'jan',
        date: '16',
        price: '$9',
        url: '',
        cat: 'music'
      },

      {
        name: 'Earthquake Party!, Infinity Girl, Thunders and Chandeliers',
        time: '8:00',
        location: 'Middle East Up',
        ages: '18+',
        month: 'jan',
        date: '16',
        price: '$9',
        url: '',
        cat: 'music'
      },

      {
        name: 'Little Spoon, Spooky Dangerfield, Via App, couples counseling, soar pelvis and Lord Nathaniel',
        time: '8:00',
        location: 'Middle East Up',
        ages: 'ALL AGES',
        month: 'jan',
        date: '17',
        price: 'Donate',
        url: '',
        cat: 'music'
      },

      {
        name: 'Park Slug presents Gondoliers, Z*L and Royal Wedding',
        time: '9:00',
        location: 'Lilypad',
        ages: 'ALL AGES',
        month: 'jan',
        date: '18',
        price: '$8',
        url: '',
        cat: 'music'
      },

      {
        name: 'Community Service, Nice Guys, Idiot Genes and Vundabar',
        time: '8:00',
        location: 'O’Brien’s',
        ages: '21+',
        month: 'jan',
        date: '18',
        price: '$5',
        url: '',
        cat: 'music'
      },

      {
        name: 'CFL Anniversary/ Bub send off birthday party w/ Skinny Bones, Horse Jumper of Love, Najee & Gibson, IAN, Like Me and Mark Buffalo',
        time: '7:00',
        location: 'Mr. Dickens’ Holy Palace',
        ages: 'ALL AGES',
        month: 'jan',
        date: '18',
        price: 'Donate',
        url: '',
        cat: 'music'
      },

      {
        name: 'Patrick Emm, Good Area, The Greys and one more TBA',
        time: '8:00',
        location: 'SBC',
        ages: 'ALL AGES',
        month: 'jan',
        date: '18',
        price: 'Donate',
        url: '',
        cat: 'music'
      },
      {
        name: 'Pixies w/ FIDLAR',
        time: '7:30',
        location: 'Orpheum',
        ages: 'ALL AGES',
        month: 'jan',
        date: '18',
        price: '$ome Cost',
        url: '',
        cat: 'music'
      },
      {
        name: 'Designer, Bbigpigg BRISTOL BARNSTOMERS AND THE FURNSSS',
        time: '8:30',
        location: 'Willmantic Records',
        ages: 'ALL AGES',
        month: 'jan',
        date: '18',
        price: '$ome Cost',
        url: '',
        cat: 'music'
      },
      {
        name: 'Man Forever, Nurse And Soldier and Chris Strunk',
        time: '8:00',
        location: 'Deep Thoughts',
        ages: 'ALL AGES',
        month: 'jan',
        date: '19',
        price: '$5-10 Sliding Scale Donation',
        url: '',
        cat: 'music'
      },
      {
        name: 'IAN, SPONCH! and Lemon Meringue Die',
        time: '8:00',
        location: 'Roggies',
        ages: '18+',
        month: 'jan',
        date: '19',
        price: '$5',
        url: '',
        cat: 'music'
      },
      {
        name: 'Big Buck Hunter, Free Pizza, Holy Vex and The Monsieurs',
        time: '10:00',
        location: 'Lilypad',
        ages: 'ALL AGES',
        month: 'jan',
        date: '19',
        price: '$5-10 Sliding Scale Donation',
        url: '',
        cat: 'music'
      },
      {
        name: 'The Sediment Club, (New England) Patriots, Skimask and Dog',
        time: '9:00',
        location: 'Charlie’s Kitchen',
        ages: '21+',
        month: 'jan',
        date: '20',
        price: '$5',
        url: '',
        cat: 'music'
      },
      {
        name: 'The Series on Monday w/ Morgan Evans-Weiler',
        time: '8:00',
        location: 'Weirdo Records',
        ages: 'ALL AGES',
        month: 'jan',
        date: '20',
        price: '$5 Donation',
        url: '',
        cat: 'music'
      },
      {
        name: 'Rad Castle Presents: Pure Sunray, Let’s Wait and Disco Yo',
        time: '10:00',
        location: 'ZuZu',
        ages: '21+',
        month: 'jan',
        date: '20',
        price: 'FREE',
        url: '',
        cat: 'music'
      },
      {
        name: 'White Hinterland (Brendan Canning of Broken Social Scene) and Eksi Esko',
        time: '9:00',
        location: 'Great Scott',
        ages: '18+',
        month: 'jan',
        date: '21',
        price: '$15',
        url: '',
        cat: 'music'
      },
      {
        name: 'sHrYmPrOv NyTe #2 w/ Perry, Tadeyeske, Margolis, Wright, Norton, Phelan, Adams, Foam and MORE',
        time: '8:00',
        location: 'Holy JP Spot',
        ages: 'ALL AGES',
        month: 'jan',
        date: '21',
        price: '$5-10 Sliding Scale Donation',
        url: '',
        cat: 'music'
      },
      {
        name: 'Bonfide Blue, brave elephant, Licious and Skinny Bones',
        time: '8:00',
        location: 'Middle East Up',
        ages: '18+',
        month: 'jan',
        date: '21',
        price: '$8',
        url: '',
        cat: 'music'
      },
      {
        name: 'Speedy Ortiz w/ Los Campensinos',
        time: '8:00',
        location: 'Paradise',
        ages: '18+',
        month: 'jan',
        date: '21',
        price: '$20',
        url: '',
        cat: 'music'
      },
      {
        name: 'Waxahatchee, Potty Mouth, All Dogs and Cayetana',
        time: '9:00',
        location: 'Paradise',
        ages: '18+',
        month: 'jan',
        date: '22',
        price: '$12',
        url: '',
        cat: 'music'
      },
      {
        name: 'BOW Shows Presents...  MALPORTADO KIDS (MEMS DOWNTOWN BOYS), OLIVIA NEUTRON-JOHN (LA/PHOENIX), FUNERAL CONE',
        time: '8:00',
        location: 'Club Bohemia',
        ages: 'All Ages',
        month: 'jan',
        date: '23',
        price: '$5-10 Sliding Scale',
        url: '',
        cat: 'music'
      },
      {
        name: 'Etal, Nice Guys, Black Beach and Safety Tested',
        time: '8:00',
        location: 'Club Bohemia',
        ages: '21+',
        month: 'jan',
        date: '23',
        price: '$8',
        url: '',
        cat: 'music'
      },
      {
        name: 'Debo Band Monthly Residency',
        time: '10:00',
        location: 'Lizard Lounge',
        ages: '21+',
        month: 'jan',
        date: '23',
        price: '$10',
        url: '',
        cat: 'music'
      },
      {
        name: 'Tan Vampires, Bent Shapes and Sun Club',
        time: '8:30',
        location: 'TT the Bear’s',
        ages: '18+',
        month: 'jan',
        date: '24',
        price: '$ome Cost',
        url: '',
        cat: 'music'
      },
      {
        name: 'Beehive Mystic Social Presents: Solid State Entity, Huff Daddy and Angela Sawyer w/ visuals by LSDV',
        time: '9:00',
        location: 'SBC',
        ages: 'ALL AGES',
        month: 'jan',
        date: '24',
        price: 'Donate',
        url: '',
        cat: 'music'
      },
      {
        name: 'Average C*ck, Pile, Fax Holiday, Bad History Month, Kal Marks and Flat Swamp',
        time: '7:00',
        location: 'Middle East Up',
        ages: '18+',
        month: 'jan',
        date: '24',
        price: '$9',
        url: '',
        cat: 'music'
      },
      {
        name: 'BOW Shows Presents... Woodsman (Brooklyn), Herbcraft (Portland, ME), QUILT (Boston Record Release Show!) and ZZ Throb (Mems. Soft Healer from Austin)',
        time: '11:00',
        location: 'Video Underground',
        ages: 'ALL AGES',
        month: 'jan',
        date: '25',
        price: '$5-10 Sliding Scale',
        url: '',
        cat: 'music'
      },
      {
        name: 'Lesser Knowns, Thee Legendary Rockin’ Prophets and Tigerman, WOAH!',
        time: '7:30',
        location: 'The Engineer’s Mansion',
        ages: 'ALL AGES',
        month: 'jan',
        date: '25',
        price: '$7 Suggested Donation',
        url: '',
        cat: 'music'
      },
      {
        name: '"Punk Rock, Mental Illness and Recovery" a talk with Craig Lewis',
        time: '6:00-9:00pm',
        location: 'Democracy Center, Cambridge',
        ages: 'ALL AGES',
        month: 'jan',
        date: '26',
        price: 'Donation',
        url: 'https://www.facebook.com/events/236680319839521/?ref_dashboard_filter=calendar',
        cat: 'art'
      },
      {
        name: "Boston Hassle and Open Loop Present... SCANNERS featuring SAMANTHA VACATION (live set), VIA APP (live set), CORALCOLA (dj set), DJ WON'T (dj set), LSDV (vj set)",
        time: '7:30',
        location: '$ome Location',
        ages: '21+',
        month: 'jan',
        date: '28',
        price: '$5',
        url: '',
        cat: 'music'
      },
      {
        name: 'Doug Tuttle, Caustic Rainbow, Ghost Box Orchestra and Doug Wartman',
        time: '9:00',
        location: 'Middlesex',
        ages: '21+',
        month: 'jan',
        date: '29',
        price: '$8',
        url: '',
        cat: 'music'
      },
      {
        name: 'Boston Hassle Presents...  GUERILLA TOSS (GAY DISCO RECORD RELEASE SHOW!!!), RYAN POWER, DOG, CAVE BEAR',
        time: '8:00',
        location: 'Cambridge Elks Lodge',
        ages: 'ALL AGES',
        month: 'jan',
        date: '31',
        price: '$7',
        url: '',
        cat: 'music'
      },
      {
        name: "Boston Hassle Night w/ Great Valley (Brattleboro, VT), The Needy Visions (Tape Release Show), Fume Hood and Free Pizza DJing",
        time: "10:00",
        location: "Lilypad",
        ages: "ALL AGES",
        month: "feb",
        date: "1",
        price: "$5-10 Sliding Scale",
        url: '',
        cat: "music"
      },
      {
        name: "Quilt, Doug Tuttle, Creaturos, Rick Rude",
        time: "9:00",
        location: "The Press Room (Portsmouth, NH)",
        ages: "ALL AGES",
        month: "feb",
        date: "1",
        price: "$ome cost",
        url: 'https://www.facebook.com/events/337410506397424',
        cat: "music"
      },
      {
        name: "ACLU Benefit, Wicked Rot, People Live Here, Hoonah",
        time: "8:30",
        location: "Deep Thoughts",
        ages: "All Ages",
        month: "feb",
        date: "1",
        price: "Donate",
        url: 'https://www.facebook.com/events/639704409420857',
        cat: "music"
      },
      {
        name: "Bedroom Eyes, Strange Mangers, Jonesing, Paths, The Lonely Machines",
        time: "7:00",
        location: "Democracy Center",
        ages: "All Ages",
        month: "feb",
        date: "1",
        price: "$7-10 sliding scale doantion",
        url: 'https://www.facebook.com/events/239560596222150',
        cat: "music"
      },
      {
        name: "Guerilla Toss, Ryan Power, Palberta, Bomp Treb",
        time: "8:00",
        location: "Flywheel Arts Collective (Easthampton, MA)",
        ages: "All Ages",
        month: "feb",
        date: "1",
        price: "$7-10 sliding scale doantion",
        url: 'https://www.facebook.com/events/585765261502204',
        cat: "music"
      },
      {
        name: "Ed Schrader’s Music Beat, SaraLee, Skimask",
        time: "9:00",
        location: "Deep Thoughts",
        ages: "All Ages",
        month: "feb",
        date: "2",
        price: "Donate",
        url: 'https://www.facebook.com/events/258095804350096/',
        cat: "music"
      },
      {
        name: "Suicide Magnets, Witch Wolf, Dog, Great Valley",
        time: "9:00",
        location: "Kristina's World (Providence, RI)",
        ages: "All Ages",
        month: "feb",
        date: "2",
        price: "Donate",
        url: 'https://www.facebook.com/events/258095804350096/',
        cat: "music"
      },
      {
        name: "Papercut Zine Library Indoor Sale",
        time: "11:00am",
        location: "Democracy Center",
        ages: "All Ages",
        month: "feb",
        date: "2",
        price: "Free",
        url: 'https://www.facebook.com/events/689139087774042',
        cat: "music"
      },
      {
        name: "Christine An",
        time: "8:00",
        location: "Weirdo Records",
        ages: "All Ages",
        month: "feb",
        date: "3",
        price: "$5 sugg. donation",
        url: 'https://www.facebook.com/events/689139087774042',
        cat: "music"
      },
      {
        name: "Fast Apple: Tsons of Tsunami, Littlefoot, Black Beach",
        time: "9:00",
        location: "Charlie’s",
        ages: "18+",
        month: "feb",
        date: "3",
        price: "$5",
        url: 'https://www.facebook.com/events/236435329859408',
        cat: "music"
      },
      {
        name: "Rad Castle: Streight Angular, Anubis Pop, Harmoos",
        time: "8:00",
        location: "ZuZu",
        ages: "21+",
        month: "feb",
        date: "3",
        price: "Free",
        url: 'https://www.facebook.com/events/187220204822148',
        cat: "music"
      },
      {
        name: "Sophie Dickinson, Greg Sun, Peg House",
        time: "9:00",
        location: "Midway",
        ages: "21+",
        month: "feb",
        date: "3",
        price: "$5",
        url: 'https://www.facebook.com/events/817213461627509',
        cat: "music"
      },
      {
        name: "Ed Schrader’s Music Beat, Skimask, Designer, Houseboy",
        time: "10:00",
        location: "Kristina's World",
        ages: "All Ages",
        month: "feb",
        date: "3",
        price: "$5 sugg. donation",
        url: 'https://www.facebook.com/events/689139087774042',
        cat: "music"
      },
      {
        name: "Bass Drums of Death, Thunderbloods, Vundabar",
        time: "9:00",
        location: "Great Scott",
        ages: "18+",
        month: "feb",
        date: "3",
        price: "$10",
        url: '',
        cat: "music"
      },
      {
        name: "WFR Presents: Saralee, Free Pizza, Sun Young, Con Tex, DJ Dayglow",
        time: "9:00",
        location: "Midway",
        ages: "21+",
        month: "feb",
        date: "4",
        price: "$5",
        url: 'https://www.facebook.com/events/577874162305332',
        cat: "music"
      },
      {
        name: "Nobunny, The Hussy, Fagettes, Banditas, Gangbang Gordon",
        time: "9:00",
        location: "Middle East Upstairs",
        ages: "18+",
        month: "feb",
        date: "4",
        price: "$10adv/ $13dos",
        url: 'https://www.facebook.com/events/618944141504531',
        cat: "music"
      },
      {
        name: "Ed Schrader’s Music Beat, Black Norse, Soft Eye",
        time: "8:00",
        location: "The Red Door (Portsmouth, NH)",
        ages: "21+",
        month: "feb",
        date: "4",
        price: "$ome cost",
        url: 'https://www.facebook.com/events/625547894170085',
        cat: "music"
      },
      {
        name: "Mind Yeti, Hummingbird (Chicago), Hard Shrugs, Uncle Frank",
        time: "9:00",
        location: "O'Brien's",
        ages: "21+",
        month: "feb",
        date: "4",
        price: "$7",
        url: 'https://www.facebook.com/events/1396301680625644',
        cat: "music"
      },
      {
        name: "pRIMORDIAL sOUNDS: Blinders, Beach Toys, DJ set from E Dorsey of Soulelujah",
        time: "9:00",
        location: "Middlesex",
        ages: "21+",
        month: "feb",
        date: "5",
        price: "$3",
        url: 'https://www.facebook.com/events/660144604032254',
        cat: "music"
      },
      {
        name: "Grass is Green, Comma, Idiot Genes",
        time: "9:00",
        location: "The Red Door (Portsmouth, NH)",
        ages: "21+",
        month: "feb",
        date: "6",
        price: "$5",
        url: '',
        cat: "music"
      },
      {
        name: "Interactive Sampling Workshop with Ali Berger",
        time: "6:00",
        location: "Mmmmmaven",
        ages: "All Ages",
        month: "feb",
        date: "7",
        price: "Free",
        url: 'https://www.facebook.com/events/416877588444467',
        cat: "music"
      },
      {
        name: "Smash It Dead Benefit: Sun Young, Fleabite, Wet Dress, Big Buck Hunter",
        time: "9:00",
        location: "SBC",
        ages: "All Ages",
        month: "feb",
        date: "7",
        price: "Donate",
        url: 'https://www.facebook.com/events/603553126392016',
        cat: "music"
      },
      {
        name: "Muyassar Kurdi Raajmahal, Samara Lubelski",
        time: "10:00",
        location: "Lilypad",
        ages: "All Ages",
        month: "feb",
        date: "7",
        price: "Free",
        url: 'https://www.facebook.com/events/584556241637094',
        cat: "music"
      },
      {
        name: "Weirdo Records 5th Birthday: Tredici Bacci, Ken Reid, Shawn Armistead, Katie McCarthy, Christine An, Chris Braiotta, Andrew Durso, Ryan Douglass, Ben Dryer, Patrick Bryant, more",
        time: "8:00",
        location: "Lilypad",
        ages: "All Ages",
        month: "feb",
        date: "8",
        price: "$7",
        url: 'https://www.facebook.com/events/338196449651555',
        cat: "music"
      },
      {
        name: "Boston Hassle: Speedy Ortiz (record release), The Channels, Sneeze (rec release), Idiot Genes",
        time: "8:00",
        location: "Tasty Burger",
        ages: "All Ages",
        month: "feb",
        date: "8",
        price: "$5-10 sliding scale",
        url: 'https://www.facebook.com/events/246485715520004',
        cat: "music"
      },
      {
        name: "Open Sound: Orlando Cela, Bats from Pogo (Walter Wright,Andrea Pensado, Doug Van Nort) more TBA",
        time: "8:00",
        location: "Third Life Studios",
        ages: "All Ages",
        month: "feb",
        date: "8",
        price: "Donate",
        url: '',
        cat: "music"
      },
      {
        name: "Kilslug, Bugs & Rats, Power Masters",
        time: "9:00",
        location: "Bathaus",
        ages: "All Ages",
        month: "feb",
        date: "8",
        price: "Donate",
        url: 'https://www.facebook.com/events/551961934897620',
        cat: "music"
      },
      {
        name: "Applejam: Dylan Ewen & the Sulk Scouts, Indian Twin, TBA",
        time: "9:00",
        location: "Crabs Haus (Davis)",
        ages: "All Ages",
        month: "feb",
        date: "8",
        price: "Free",
        url: 'https://www.facebook.com/events/443203885809210',
        cat: "music"
      },
      {
        name: "Cibo Matto, Salt Cathedral",
        time: "9:00",
        location: "Sinclair",
        ages: "18+",
        month: "feb",
        date: "8",
        price: "$20adv / $22dos",
        url: '',
        cat: "music"
      },


      //the last object doesnt need a comma
      ]

    }











///////////////////////////////////////////////////////////////////////////////////
//do not edit past this point
// -the management
//////////////////////////////////////////////////////////////////////////////////













jQuery("#content-placeholder").html(template(context));


var art = jQuery('.sort-art');
var film = jQuery('.sort-film');
var music = jQuery('.sort-music');
var all = jQuery('.sort-all');

var allMusic = jQuery('.music');
var allFilm = jQuery('.film');
var allArt = jQuery('.art');

function sortArt(){
  allFilm.css('display','none');
  allMusic.css('display','none');
  allArt.css('display','block');
}

function sortFilm(){
  allFilm.css('display','block');
  allMusic.css('display','none');
  allArt.css('display','none');
}

function sortMusic(){
  allFilm.css('display','none');
  allMusic.css('display','block');
  allArt.css('display','none');
}


function sortAll(){
  allFilm.css('display','block');
  allMusic.css('display','block');
  allArt.css('display','block');
}

jQuery(art).on('click',sortArt);
jQuery(film).on('click',sortFilm);
jQuery(music).on('click',sortMusic);
jQuery(all).on('click',sortAll);




var numkeep = jQuery('.dateNum');
var keepDate = new Date()
var dynamicDate = keepDate.getDate();



numkeep.each(function(){
  //console.log(jQuery(this).text());
  var temptext= jQuery(this).text();
  if(temptext == dynamicDate){
    var instance =jQuery(this).parent().parent().parent();
    var keep = instance.remove();
    //jQuery(keep).insertAfter('.tonight');
    //console.log(keep+ ' aaaaaaa');
    jQuery(keep).appendTo( ".tonight" );

  }

  if(temptext < dynamicDate){
    var instance =jQuery(this).parent().parent();
    instance.hide();
  }

})

////this has to be removed tomorrow! uhgugh 1 31 14

var quickFix  = jQuery('.monthName');

quickFix.each(function(){
    if(jQuery(this).text()==='feb'){
        jQuery(this).parent().parent().show();
    }
})
////////////////////////


var d = new Date();
var dayofweek=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()],
date = d.getDate(),
month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()];

var dateString = [month,date].join(' ');

jQuery('.dateString').text(dateString);
