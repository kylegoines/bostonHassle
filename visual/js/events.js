

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
      {
        name: "Nice Guys, Dead Wives (mem Speedy Ortiz), Chandeliers, Flat Swamp",
        time: "9:00",
        location: "Great Scott",
        ages: "18+",
        month: "feb",
        date: "9",
        price: "$8",
        url: '',
        cat: "music"
      },
      {
        name: "Benefit for Somerville Local First: Mission of Burma, Bugs and Rats, Minibeast",
        time: "7:00",
        location: "Regent Theatre (Arlington, MA)",
        ages: "18+",
        month: "feb",
        date: "9",
        price: "$23-27",
        url: '',
        cat: "music"
      },
      {
        name: "Jack of Hearts (Slovenly), The Monsieurs, Gymshorts, Thick Shakes",
        time: "9:00",
        location: "O'Brien's",
        ages: "21+",
        month: "feb",
        date: "9",
        price: "$10",
        url: '',
        cat: "music"
      },
      {
        name: "Jenifer Gelinau",
        time: "8:00",
        location: "Weirdo Records",
        ages: "All Ages",
        month: "feb",
        date: "10",
        price: "$5 sugg. donation",
        url: '',
        cat: "music"
      },
      {
        name: "Rad Castle: Native Sun, DJ Howse",
        time: "10:00",
        location: "Zuzu",
        ages: "21+",
        month: "feb",
        date: "10",
        price: "Free",
        url: '',
        cat: "music"
      },
      {
        name: "Fast Apple: Miami Dorritos, Buttercup, IAN",
        time: "9:00",
        location: "Charlies Kitchen",
        ages: "18+",
        month: "feb",
        date: "10",
        price: "$5",
        url: '',
        cat: "music"
      },
      {
        name: "ACLU Benefit, Young & Old, Dying Falls, The Double Stops",
        time: "9:00",
        location: "TT the Bear's",
        ages: "18+",
        month: "feb",
        date: "10",
        price: "$7",
        url: '',
        cat: "music"
      },
      {
        name: "Andrea Gibson, Shira Erlichman",
        time: "9:00",
        location: "Middle East Downstairs",
        ages: "All Ages",
        month: "feb",
        date: "11",
        price: "$12adv/ $15dos",
        url: '',
        cat: "music"
      },
      {
        name: "Non-Event: Jonathan Zorn",
        time: "8:00",
        location: "Cafe Fixe",
        ages: "All Ages",
        month: "feb",
        date: "11",
        price: "$5",
        url: '',
        cat: "music"
      },
      {
        name: "Gallery w/ resident DJs Brenden Wesley, Will Martin, Matty Garvis",
        time: "9:00",
        location: "Middle East Downstairs",
        ages: "21+",
        month: "feb",
        date: "11",
        price: "Free",
        url: 'https://www.facebook.com/events/461982807261371/?ref=2&ref_dashboard_filter=upcoming',
        cat: "music"
      },
      {
        name: "Eye Design: Kid/Astro, Shakuksy, Rye Pines, Settler ",
        time: "8:00",
        location: "O'Brien's",
        ages: "21+",
        month: "feb",
        date: "12",
        price: "$6",
        url: '',
        cat: "music"
      },
      {
        name: "Daniel Francis Doyle, !Sponch!, IAN, Horse Jumper of Love",
        time: "8:00",
        location: "A Haus",
        ages: "21+",
        month: "feb",
        date: "13",
        price: "$6",
        url: '',
        cat: "music"
      },
      {
        name: "Egg Eggs, Full Color, Vehement Caress",
        time: "9:00",
        location: "The Red Door (Portsmouth, NH)",
        ages: "21+",
        month: "feb",
        date: "13",
        price: "$ome cost",
        url: '',
        cat: "music"
      },
      {
        name: "Krill (EP release), Ava Luna, Fat Creeps, Kal Marks, Bad History Month",
        time: "9:00",
        location: "Great Scott",
        ages: "18+",
        month: "feb",
        date: "13",
        price: "$7",
        url: 'https://www.facebook.com/events/571815499569079',
        cat: "music"
      },
      {
        name: "Dead Meadow, Ghostbox Orchestra, Sand Reckoner",
        time: "9:00",
        location: "Sinclair",
        ages: "18+",
        month: "feb",
        date: "13",
        price: "$12",
        url: '',
        cat: "music"
      },
      {
        name: "Hallelujah the Hills, The Dazies, Fagettes, Nice Guys",
        time: "10:00",
        location: "Lilypad",
        ages: "All Ages",
        month: "feb",
        date: "14",
        price: "$ome cost",
        url: '',
        cat: "music"
      },
      {
        name: "BOW Shows presents Cult & Leper (rec release), Bent Knees, Rabbit Rabbit (Northampton, MA), Acrid Fluff, Licious",
        time: "9:00",
        location: "SBC",
        ages: "All Ages",
        month: "feb",
        date: "14",
        price: "Donate",
        url: 'https://www.facebook.com/events/201270733408074',
        cat: "music"
      },
      {
        name: "Brain Trust: Emancipator  Ensemble, Odesza, Real Magic",
        time: "8:00",
        location: "Paradise",
        ages: "18+",
        month: "feb",
        date: "14",
        price: "$18",
        url: '',
        cat: "music"
      },
      {
        name: "Atlantic Thrills (PVD) (record release), White Pages, Nice Guys",
        time: "8:00",
        location: "Sinclair",
        ages: "18+",
        month: "feb",
        date: "15",
        price: "$18",
        url: 'https://www.facebook.com/events/254030581431595',
        cat: "music"
      },
      {
        name: "Non-Event: Heatsick (DE), Container, Dinners",
        time: "8:00",
        location: "Goethe Institut",
        ages: "All Ages",
        month: "feb",
        date: "15",
        price: "$10adv/ $15dos",
        url: 'https://www.facebook.com/events/660398550672564',
        cat: "music"
      },
      {
        name: "Downtown Boys (record release), Shady Hawkins, Power Masters, The Yabeautifuls, host Shey Riviera",
        time: "8:00",
        location: "Spark City (Providence, RI)",
        ages: "18+",
        month: "feb",
        date: "15",
        price: "$18",
        url: 'https://www.facebook.com/events/504535386334368',
        cat: "music"
      },
      {
        name: "Laurel Halo, Bill Kouligas (Berlin, PAN), Howse, student performers",
        time: "8:00",
        location: "Memorial Hall (Providence, RI)",
        ages: "18+",
        month: "feb",
        date: "15",
        price: "$ome cost (free w/ student ID)",
        url: 'https://www.facebook.com/events/288907547924047',
        cat: "music"
      },
      {
        name: "Together Pangea, Mozes and the Firstborn, Zip Tie Handcuffs",
        time: "9:00",
        location: "Great Scott",
        ages: "21+",
        month: "feb",
        date: "15",
        price: "$10",
        url: '',
        cat: "music"
      },
      {
        name: "Frankie Cosmos, Rick (of Pile), ACLU Benefit, We Can All Be Sorry and Aaron Maine (of Porches)",
        time: "9:00",
        location: "House that CD-r's Built",
        ages: "All Ages",
        month: "feb",
        date: "16",
        price: "Donate",
        url: 'https://www.facebook.com/events/694785917211379',
        cat: "music"
      },
      {
        name: "Home Comfort, P.G. Six, Old Pam",
        time: "9:00",
        location: "The Elevens (Northampton, MA)",
        ages: "21+",
        month: "feb",
        date: "16",
        price: "$ome cost",
        url: 'https://www.facebook.com/events/802629299763837',
        cat: "music"
      },
      {
        name: "Walter Wright, Jack Wright, Andrea Pensado",
        time: "8:00",
        location: "Weirdo Records",
        ages: "All Ages",
        month: "feb",
        date: "17",
        price: "$5 sugg. donation",
        url: '',
        cat: "music"
      },
      {
        name: "Rad Castle: Hands and Knees, Fleabite",
        time: "10:00",
        location: "Zuzu",
        ages: "21+",
        month: "feb",
        date: "17",
        price: "Free",
        url: 'https://www.facebook.com/events/647258761999066',
        cat: "music"
      },
      {
        name: "Fast Apple: Pile, Roomrunner, Multicult, Choke Up",
        time: "8:00",
        location: "Charlie's",
        ages: "18+",
        month: "feb",
        date: "17",
        price: "$5",
        url: 'https://www.facebook.com/events/646370798752552/',
        cat: "music"
      },
      {
        name: "Flaming Dragons of Middle Earth, Hurricanes of Love",
        time: "8:00",
        location: "UnCharted Studios (Lowell, MA) ",
        ages: "All Ages",
        month: "feb",
        date: "18",
        price: "Donate",
        url: 'https://www.facebook.com/events/619355591446994',
        cat: "music"
      },
      {
        name: "Mike Greensteen (record release), Utica Crib, Pragnus Gray Collective",
        time: "9:00",
        location: "Midway",
        ages: "21+",
        month: "feb",
        date: "18",
        price: "$ome cost",
        url: 'https://www.facebook.com/events/278117009012534',
        cat: "music"
      },
      {
        name: "Freak Flag: Buttercup, The Channels",
        time: "10:00",
        location: "ZuZu",
        ages: "21+",
        month: "feb",
        date: "19",
        price: "$5",
        url: 'https://www.facebook.com/events/701333946578079',
        cat: "music"
      },
      {
        name: "Ben and Eric Comedy Show",
        time: "8:00",
        location: "Middlesex",
        ages: "21+",
        month: "feb",
        date: "19",
        price: "Free",
        url: '',
        cat: "music"
      },
      {
        name: "SCANNERS: Form A Log, Unicorn Hard-On, DJ Won't ",
        time: "9:00",
        location: "Deep Thoughts",
        ages: "All Ages",
        month: "feb",
        date: "20",
        price: "$5-10 sugg. donation",
        url: 'https://www.facebook.com/events/1402404126679232',
        cat: "music"
      },
      {
        name: "Libyans, White Load, Funeral Cone",
        time: "8:00",
        location: "Spark City (Providence, RI)",
        ages: "21+",
        month: "feb",
        date: "20",
        price: "Free",
        url: 'https://www.facebook.com/events/242183129297496',
        cat: "music"
      },
      {
        name: "Kal Marks, New Turks, Dead Cat Dead Rat, Designer",
        time: "9:00",
        location: "O'Brien's",
        ages: "21+",
        month: "feb",
        date: "20",
        price: "$8",
        url: '',
        cat: "music"
      },
      {
        name: "Non-Event: Bhob Rainey, Bonnie Jones",
        time: "9:00",
        location: "Goethe Institut",
        ages: "All Ages",
        month: "feb",
        date: "20",
        price: "$10/$8 student",
        url: '',
        cat: "music"
      },
      {
        name: "B.O.W. Shows: Sun Club, Vundabar, Free Pizza, Acidosis, Muhhammad Ali (mem. Designer)",
        time: "9:00",
        location: "Womb",
        ages: "All Ages",
        month: "feb",
        date: "21",
        price: "$5-10 sliding scale",
        url: 'www.facebook.com/events/276524022498779',
        cat: "music"
      },
      {
        name: "Howse, Homeworld, Woody, Spoolhand, Los Greys",
        time: "9:00",
        location: "SBC",
        ages: "All Ages",
        month: "feb",
        date: "21",
        price: "Donate",
        url: 'https://www.facebook.com/events/1410885569160174',
        cat: "music"
      },
      {
        name: "Eye Design: Grass is Green, Alarms & Control (DC), Lady Bones, Horsehands",
        time: "8:00",
        location: "O’Brien’s",
        ages: "21+",
        month: "feb",
        date: "21",
        price: "$8",
        url: 'https://www.facebook.com/events/170904836451985',
        cat: "music"
      },
      {
        name: "The Takeaways, OTP, Poor Jeremy",
        time: "7:00",
        location: "Roggies",
        ages: "18+",
        month: "feb",
        date: "21",
        price: "$5 sugg. donation",
        url: '',
        cat: "music"
      },
      {
        name: "Parasol, Peeple Watchin', Paths, Ivy Neff, Crime and Punishment",
        time: "9:00",
        location: "Democracy Center",
        ages: "All Ages",
        month: "feb",
        date: "21",
        price: "$5-7 sugg. donation",
        url: '',
        cat: "music"
      },
      {
        name: "Something Sneaky, The Cattle Walk, Rye Pines, The Way Ways, Cousins",
        time: "9:00",
        location: "House that CD-r's Built",
        ages: "All Ages",
        month: "feb",
        date: "21",
        price: "Donate",
        url: '',
        cat: "music"
      },
      {
        name: "What Time Is It Mr. Fox? & Erich Haygun",
        time: "8:00",
        location: "Club Passim",
        ages: "All Ages",
        month: "feb",
        date: "21",
        price: "$ome cost",
        url: '',
        cat: "music"
      },
      {
        name: "Cult & Leper, Battle House, Pretty & Nice",
        time: "8:00",
        location: "Sound Fabrika (Fort Point)",
        ages: "21+",
        month: "feb",
        date: "22",
        price: "$5",
        url: 'https://www.facebook.com/events/250753908440933',
        cat: "music"
      },
      {
        name: "Sneeze, The Dirty Nil (Canada), Idiot Genes, Zip Tie Handcuffs",
        time: "9:00",
        location: "Tasty Burger",
        ages: "All Ages",
        month: "feb",
        date: "22",
        price: "$6",
        url: 'https://www.facebook.com/events/696164907090811',
        cat: "music"
      },
      {
        name: "Boston Comedy Chicks: Angela Sawyer standup",
        time: "8:00",
        location: "Doyle's (JP)",
        ages: "21+",
        month: "feb",
        date: "23",
        price: "$ome cost",
        url: '',
        cat: "music"
      },
      {
        name: "Great Western Plain, Bad Brains, IAN, Los Greys",
        time: "8:00",
        location: "House that CD-r's Built",
        ages: "All Ages",
        month: "feb",
        date: "23",
        price: "Donate",
        url: 'https://www.facebook.com/events/663656527024082',
        cat: "music"
      },
      {
        name: "Wes Hazard: "I Just Got Weirdo"",
        time: "8:00",
        location: "Weirdo Records",
        ages: "All Ages",
        month: "feb",
        date: "24",
        price: "$5 sugg. donation",
        url: '',
        cat: "music"
      },
      {
        name: "Temple of Doom & Fast Apple: Rozamov, Black Norse (NH), I Am Become Death",
        time: "9:00",
        location: "Charlie's Kitchen",
        ages: "18+",
        month: "feb",
        date: "24",
        price: "$5",
        url: 'https://www.facebook.com/events/494033874039573',
        cat: "music"
      },
      {
        name: "Rad Castle: Sun Lions, Moontowers, Abadabad",
        time: "10:00",
        location: "ZuZu",
        ages: "21+",
        month: "feb",
        date: "24",
        price: "Free",
        url: 'https://www.facebook.com/events/264070323758884',
        cat: "music"
      },
      {
        name: "Fat Creeps, Hunters, Bleeding Rainbow, Secret Lover",
        time: "10:00",
        location: "Hotel Vernon (Worcester, MA)",
        ages: "All Ages",
        month: "feb",
        date: "25",
        price: "$5 sugg. donation",
        url: 'https://www.facebook.com/events/1535132973377883/',
        cat: "music"
      },
      {
        name: "Shrymprov Knights #3: Lou Bunk, Martin Freeman, T.J. Borden, Jill Burton, Stephanie Lak, others",
        time: "8:00",
        location: "House that CD-r's Built",
        ages: "All Ages",
        month: "feb",
        date: "25",
        price: "Donate",
        url: 'https://www.facebook.com/events/1407828572791889',
        cat: "music"
      },
      {
        name: "Boston Hassle: Bleeding Rainbow, Hunters, Fat Creeps",
        time: "9:00",
        location: "Tasty Burger",
        ages: "All Ages",
        month: "feb",
        date: "26",
        price: "$5-10 sliding scale",
        url: 'https://www.facebook.com/events/360387830770443',
        cat: "music"
      },
      {
        name: "White Gold, The Grudges, Talchemist",
        time: "10:30",
        location: "Hotel Vernon (Worcester, MA)",
        ages: "All Ages",
        month: "feb",
        date: "26",
        price: "Donate",
        url: 'https://www.facebook.com/events/216085951920526',
        cat: "music"
      },
      {
        name: "The Coincidental Hour, Bengeorge7 (Ben Hersey + George W. Myers), Palberta",
        time: "9:00",
        location: "Deep Thoughts",
        ages: "All Ages",
        month: "feb",
        date: "27",
        price: "$5 sugg. donation",
        url: 'https://www.facebook.com/events/580451775378944',
        cat: "music"
      },
      {
        name: "Cheap Seats 14",
        time: "7:00",
        location: "Cambridge YMCA Theatre",
        ages: "All Ages",
        month: "feb",
        date: "27",
        price: "$5 sugg. donation",
        url: 'https://www.facebook.com/events/244548579051572',
        cat: "music"
      },
      {
        name: "Dirty Dirges, Couples Counseling, Free Pizza, Spooky Dangerfield, LSDV, The Greys",
        time: "10:00",
        location: "SBC",
        ages: "All Ages",
        month: "feb",
        date: "27",
        price: "Donate",
        url: 'https://www.facebook.com/events/594375537317852',
        cat: "music"
      },
      {
        name: "Boston Hassle and Eye Design present… Treat Yo Self: Guerilla Toss, Cloud Becomes Your Hand (Record Release), Flaming Dragons of Middle Earth",
        time: "9:00",
        location: "Tasty Burger",
        ages: "All Ages",
        month: "feb",
        date: "28",
        price: "$5-10 sliding scale",
        url: 'https://www.facebook.com/events/1458351424376544',
        cat: "music"
      },
      {
        name: "Boston Hassle & Eye Design: Liquor Store (NJ), Atlantic Thrills (record release) White Pages",
        time: "11:30",
        location: "Tasty Burger",
        ages: "All Ages",
        month: "feb",
        date: "28",
        price: "$5-10 sliding scale ($3 w/ stamp from earlier show)",
        url: 'https://www.facebook.com/events/1458351424376544',
        cat: "music"
      },
      {
        name: "Anubis Pop, Rubyluna, Jonathan Donaldson, Mind of Max",
        time: "8:00",
        location: "Aviary",
        ages: "All Ages",
        month: "feb",
        date: "28",
        price: "$5-10 sliding scale sugg. donation",
        url: 'https://www.facebook.com/events/280539932104650',
        cat: "music"
      },
      {
        name: "BUFU: Free Pizza, Dylan Ewen & the Sulk Scouts, IAN, Couples Counseling",
        time: "9:00",
        location: "JP Drizzle",
        ages: "All Ages",
        month: "feb",
        date: "28",
        price: "$5-10 sugg. donation",
        url: 'https://www.facebook.com/events/254435134724961',
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
/*
var quickFix  = jQuery('.monthName');

quickFix.each(function(){
    if(jQuery(this).text()==='feb'){
        jQuery(this).parent().parent().show();
    }
})

*/
////////////////////////


var d = new Date();
var dayofweek=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()],
date = d.getDate(),
month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()];

var dateString = [month,date].join(' ');

jQuery('.dateString').text(dateString);
