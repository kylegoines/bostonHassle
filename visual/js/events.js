

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
