// data source
// const airlines_data = "../assests/airlines_1.json";
const airlines_names = ['United Air Lines Inc.',
'American Airlines Inc.',
'US Airways Inc.',
'Frontier Airlines Inc.',
'JetBlue Airways',
'Skywest Airlines Inc.',
'Alaska Airlines Inc.',
'Spirit Air Lines',
'Southwest Airlines Co.',
'Delta Air Lines Inc.',
'Atlantic Southeast Airlines',
'Hawaiian Airlines Inc.',
'American Eagle Airlines Inc.',
'Virgin America'];
const airline_codes = ['UA',
'AA',
'US',
'F9',
'B6',
'OO',
'AS',
'NK',
'WN',
'DL',
'EV',
'HA',
'MQ',
'VX'];
const airports_code =['ABE', 'ABI', 'ABQ', 'ABR', 'ABY', 'ACK', 'ACT', 'ACV', 'ACY',
'ADK', 'ADQ', 'AEX', 'AGS', 'AKN', 'ALB', 'ALO', 'AMA', 'ANC',
'APN', 'ASE', 'ATL', 'ATW', 'AUS', 'AVL', 'AVP', 'AZO', 'BDL',
'BET', 'BFL', 'BGM', 'BGR', 'BHM', 'BIL', 'BIS', 'BJI', 'BLI',
'BMI', 'BNA', 'BOI', 'BOS', 'BPT', 'BQK', 'BQN', 'BRD', 'BRO',
'BRW', 'BTM', 'BTR', 'BTV', 'BUF', 'BUR', 'BWI', 'BZN', 'CAE',
'CAK', 'CDC', 'CDV', 'CEC', 'CHA', 'CHO', 'CHS', 'CID', 'CIU',
'CLD', 'CLE', 'CLL', 'CLT', 'CMH', 'CMI', 'CMX', 'CNY', 'COD',
'COS', 'COU', 'CPR', 'CRP', 'CRW', 'CSG', 'CVG', 'CWA', 'DAB',
'DAL', 'DAY', 'DBQ', 'DCA', 'DEN', 'DFW', 'DHN', 'DIK', 'DLG',
'DLH', 'DRO', 'DSM', 'DTW', 'DVL', 'EAU', 'ECP', 'EGE', 'EKO',
'ELM', 'ELP', 'ERI', 'ESC', 'EUG', 'EVV', 'EWN', 'EWR', 'EYW',
'FAI', 'FAR', 'FAT', 'FAY', 'FCA', 'FLG', 'FLL', 'FNT', 'FSD',
'FSM', 'FWA', 'GCC', 'GCK', 'GEG', 'GFK', 'GGG', 'GJT', 'GNV',
'GPT', 'GRB', 'GRI', 'GRK', 'GRR', 'GSO', 'GSP', 'GST', 'GTF',
'GTR', 'GUC', 'GUM', 'HDN', 'HIB', 'HLN', 'HNL', 'HOB', 'HOU',
'HPN', 'HRL', 'HSV', 'HYA', 'HYS', 'IAD', 'IAG', 'IAH', 'ICT',
'IDA', 'ILG', 'ILM', 'IMT', 'IND', 'INL', 'ISN', 'ISP', 'ITH',
'ITO', 'JAC', 'JAN', 'JAX', 'JFK', 'JLN', 'JMS', 'JNU', 'KOA',
'KTN', 'LAN', 'LAR', 'LAS', 'LAW', 'LAX', 'LBB', 'LBE', 'LCH',
'LEX', 'LFT', 'LGA', 'LGB', 'LIH', 'LIT', 'LNK', 'LRD', 'LSE',
'LWS', 'MAF', 'MBS', 'MCI', 'MCO', 'MDT', 'MDW', 'MEI', 'MEM',
'MFE', 'MFR', 'MGM', 'MHK', 'MHT', 'MIA', 'MKE', 'MKG', 'MLB',
'MLI', 'MLU', 'MMH', 'MOB', 'MOT', 'MQT', 'MRY', 'MSN', 'MSO',
'MSP', 'MSY', 'MTJ', 'MVY', 'MYR', 'OAJ', 'OAK', 'OGG', 'OKC',
'OMA', 'OME', 'ONT', 'ORD', 'ORF', 'ORH', 'OTH', 'OTZ', 'PAH',
'PBG', 'PBI', 'PDX', 'PHF', 'PHL', 'PHX', 'PIA', 'PIB', 'PIH',
'PIT', 'PLN', 'PNS', 'PPG', 'PSC', 'PSE', 'PSG', 'PSP', 'PUB',
'PVD', 'PWM', 'RAP', 'RDD', 'RDM', 'RDU', 'RHI', 'RIC', 'RKS',
'RNO', 'ROA', 'ROC', 'ROW', 'RST', 'RSW', 'SAF', 'SAN', 'SAT',
'SAV', 'SBA', 'SBN', 'SBP', 'SCC', 'SCE', 'SDF', 'SEA', 'SFO',
'SGF', 'SGU', 'SHV', 'SIT', 'SJC', 'SJT', 'SJU', 'SLC', 'SMF',
'SMX', 'SNA', 'SPI', 'SPS', 'SRQ', 'STC', 'STL', 'STT', 'STX',
'SUN', 'SUX', 'SWF', 'SYR', 'TLH', 'TOL', 'TPA', 'TRI', 'TTN',
'TUL', 'TUS', 'TVC', 'TWF', 'TXK', 'TYR', 'TYS', 'UST', 'VEL',
'VLD', 'VPS', 'WRG', 'WYS', 'XNA', 'YAK', 'YUM'];

airports_names = ['Lehigh Valley International Airport', 'Abilene Regional Airport',
'Albuquerque International Sunport', 'Aberdeen Regional Airport',
'Southwest Georgia Regional Airport', 'Nantucket Memorial Airport',
'Waco Regional Airport', 'Arcata Airport',
'Atlantic City International Airport', 'Adak Airport',
'Kodiak Airport', 'Alexandria International Airport',
'Augusta Regional Airport(Bush Field)', 'King Salmon Airport',
'Albany International Airport', 'Waterloo Regional Airport',
'Rick Husband Amarillo International Airport',
'Ted Stevens Anchorage International Airport',
'Alpena County Regional Airport', 'Aspen-Pitkin County Airport',
'Hartsfield-Jackson Atlanta International Airport',
'Appleton International Airport',
'Austin-Bergstrom International Airport',
'Asheville Regional Airport',
'Wilkes-Barre/Scranton International Airport',
'Kalamazoo/Battle Creek International Airport',
'Bradley International Airport', 'Bethel Airport', 'Meadows Field',
'Greater Binghamton Airport', 'Bangor International Airport',
'Birmingham-Shuttlesworth International Airport',
'Billings Logan International Airport',
'Bismarck Municipal Airport', 'Bemidji Regional Airport',
'Bellingham International Airport',
'Central Illinois Regional Airport at Bloomington-Normal',
'Nashville International Airport',
'Boise Airport(Boise Air Terminal)',
'Gen. Edward Lawrence Logan International Airport',
'Jack Brooks Regional Airport(Southeast Texas Regional)',
'Brunswick Golden Isles Airport', 'Rafael Hernández Airport',
'Brainerd Lakes Regional Airport',
'Brownsville/South Padre Island International Airport',
'Wiley Post-Will Rogers Memorial Airport', 'Bert Mooney Airport',
'Baton Rouge Metropolitan Airport',
'Burlington International Airport',
'Buffalo Niagara International Airport',
'Bob Hope Airport(Hollywood Burbank Airport)',
'Baltimore-Washington International Airport',
'Bozeman Yellowstone International Airport(Gallatin Field Airport)',
'Columbia Metropolitan Airport', 'Akron-Canton Regional Airport',
'Cedar City Regional Airport', 'Merle K. (Mudhole) Smith Airport',
'Del Norte County Airport(Jack McNamara Field)',
'Chattanooga Metropolitan Airport(Lovell Field)',
'Charlottesville-Albemarle Airport',
'Charleston International Airport/Charleston AFB',
'The Eastern Iowa Airport',
'Chippewa County International Airport',
'McClellan-Palomar Airport',
'Cleveland Hopkins International Airport', 'Easterwood Airport',
'Charlotte Douglas International Airport',
'Port Columbus International Airport',
'University of Illinois - Willard Airport',
'Houghton County Memorial Airport', 'Canyonlands Field',
'Yellowstone Regional Airport',
'City of Colorado Springs Municipal Airport',
'Columbia Regional Airport',
'Natrona County International Airport',
'Corpus Christi International Airport', 'Yeager Airport',
'Columbus Metropolitan Airport',
'Cincinnati/Northern Kentucky International Airport',
'Central Wisconsin Airport', 'Daytona Beach International Airport',
'Dallas Love Field', 'James M. Cox Dayton International Airport',
'Dubuque Regional Airport',
'Ronald Reagan Washington National Airport',
'Denver International Airport',
'Dallas/Fort Worth International Airport',
'Dothan Regional Airport',
'Dickinson Theodore Roosevelt Regional Airport',
'Dillingham Airport', 'Duluth International Airport',
'Durango-La Plata County Airport',
'Des Moines International Airport', 'Detroit Metropolitan Airport',
'Devils Lake Regional Airport', 'Chippewa Valley Regional Airport',
'Northwest Florida Beaches International Airport',
'Eagle County Regional Airport', 'Elko Regional Airport',
'Elmira/Corning Regional Airport', 'El Paso International Airport',
'Erie International Airport', 'Delta County Airport',
'Eugene Airport(Mahlon Sweet Field)',
'Evansville Regional Airport',
'Coastal Carolina Regional Airport(Craven County Regional)',
'Newark Liberty International Airport',
'Key West International Airport',
'Fairbanks International Airport', 'Hector International Airport',
'Fresno Yosemite International Airport',
'Fayetteville Regional Airport',
'Glacier Park International Airport', 'Flagstaff Pulliam Airport',
'Fort Lauderdale-Hollywood International Airport',
'Bishop International Airport', 'Sioux Falls Regional Airport',
'Fort Smith Regional Airport', 'Fort Wayne International Airport',
'Gillette-Campbell County Airport', 'Garden City Regional Airport',
'Spokane International Airport',
'Grand Forks International Airport', 'East Texas Regional Airport',
'Grand Junction Regional Airport(Walker Field)',
'Gainesville Regional Airport',
'Gulfport-Biloxi International Airport',
'Green Bay-Austin Straubel International Airport',
'Central Nebraska Regional Airport',
'Killeen-Fort Hood Regional Airport',
'Gerald R. Ford International Airport',
'Piedmont Triad International Airport',
'Greenville-Spartanburg International Airport', 'Gustavus Airport',
'Great Falls International Airport',
'Golden Triangle Regional Airport',
'Gunnison-Crested Butte Regional Airport',
'Guam International Airport',
'Yampa Valley Airport(Yampa Valley Regional)',
'Range Regional Airport(Chisholm-Hibbing Airport)',
'Helena Regional Airport', 'Honolulu International Airport',
'Lea County Regional Airport', 'William P. Hobby Airport',
'Westchester County Airport', 'Valley International Airport',
'Huntsville International Airport', 'Barnstable Municipal Airport',
'Hays Regional Airport', 'Washington Dulles International Airport',
'Niagara Falls International Airport',
'George Bush Intercontinental Airport',
'Wichita Dwight D. Eisenhower National Airport(Wichita Mid-Continent Airport)',
'Idaho Falls Regional Airport', 'Wilmington Airport',
'Wilmington International Airport', 'Ford Airport',
'Indianapolis International Airport',
'Falls International Airport',
'Sloulin Field International Airport',
'Long Island MacArthur Airport',
'Ithaca Tompkins Regional Airport', 'Hilo International Airport',
'Jackson Hole Airport', 'Jackson-Evers International Airport',
'Jacksonville International Airport',
'John F. Kennedy International Airport(New York International Airport)',
'Joplin Regional Airport', 'Jamestown Regional Airport',
'Juneau International Airport',
'Kona International Airport at Keahole',
'Ketchikan International Airport',
'Capital Region International Airport( Lansing Capital City)',
'Laramie Regional Airport', 'McCarran International Airport',
'Lawton-Fort Sill Regional Airport',
'Los Angeles International Airport',
'Lubbock Preston Smith International Airport',
'Arnold Palmer Regional Airport', 'Lake Charles Regional Airport',
'Blue Grass Airport', 'Lafayette Regional Airport',
'LaGuardia Airport (Marine Air Terminal)',
'Long Beach Airport(Daugherty Field)', 'Lihue Airport',
'Bill and Hillary Clinton National Airport(Adams Field)',
'Lincoln Airport(Lincoln Municipal)',
'Laredo International Airport', 'La Crosse Regional Airport',
'Lewiston-Nez Perce County Airport',
'Midland International Airport', 'MBS International Airport',
'Kansas City International Airport',
'Orlando International Airport',
'Harrisburg International Airport',
'Chicago Midway International Airport',
'Meridian Regional Airport', 'Memphis International Airport',
'McAllen-Miller International Airport(McAllen Miller International)',
'Rogue Valley International Airport',
'Montgomery Regional Airport', 'Manhattan Regional Airport',
'Manchester-Boston Regional Airport',
'Miami International Airport',
'General Mitchell International Airport',
'Muskegon County Airport', 'Melbourne International Airport',
'Quad City International Airport', 'Monroe Regional Airport',
'Mammoth Yosemite Airport', 'Mobile Regional Airport',
'Minot International Airport', 'Sawyer International Airport',
'Monterey Regional Airport(Monterey Peninsula Airport)',
'Dane County Regional Airport', 'Missoula International Airport',
'Minneapolis-Saint Paul International Airport',
'Louis Armstrong New Orleans International Airport',
'Montrose Regional Airport', "Martha's Vineyard Airport",
'Myrtle Beach International Airport', 'Albert J. Ellis Airport',
'Oakland International Airport', 'Kahului Airport',
'Will Rogers World Airport', 'Eppley Airfield', 'Nome Airport',
'Ontario International Airport',
"Chicago O'Hare International Airport",
'Norfolk International Airport', 'Worcester Regional Airport',
'Southwest Oregon Regional Airport(North Bend Municipal)',
'Ralph Wien Memorial Airport', 'Barkley Regional Airport',
'Plattsburgh International Airport',
'Palm Beach International Airport',
'Portland International Airport',
'Newport News/Williamsburg International Airport',
'Philadelphia International Airport',
'Phoenix Sky Harbor International Airport',
'General Wayne A. Downing Peoria International Airport',
'Hattiesburg-Laurel Regional Airport',
'Pocatello Regional Airport', 'Pittsburgh International Airport',
'Pellston Regional Airport of Emmet County',
'Pensacola International Airport(Pensacola Gulf Coast Regional Airport)',
'Pago Pago International Airport (Tafuna Airport)',
'Tri-Cities Airport', 'Mercedita Airport',
'Petersburg James A. Johnson Airport',
'Palm Springs International Airport', 'Pueblo Memorial Airport',
'Theodore Francis Green State Airport',
'Portland International Jetport', 'Rapid City Regional Airport',
'Redding Municipal Airport',
'Redmond Municipal Airport(Roberts Field)',
'Raleigh-Durham International Airport',
'Rhinelander-Oneida County Airport',
'Richmond International Airport',
'Rock Springs-Sweetwater County Airport',
'Reno/Tahoe International Airport',
'Roanoke Regional Airport(Woodrum Field)',
'Greater Rochester International Airport',
'Roswell International Air Center',
'Rochester International Airport',
'Southwest Florida International Airport',
'Santa Fe Municipal Airport',
'San Diego International Airport(Lindbergh Field)',
'San Antonio International Airport',
'Savannah/Hilton Head International Airport',
'Santa Barbara Municipal Airport(Santa Barbara Airport)',
'South Bend International Airport(South Bend Regional)',
'San Luis Obispo County Regional Airport(McChesney Field)',
'Deadhorse Airport(Prudhoe Bay Airport)',
'University Park Airport',
'Louisville International Airport(Standiford Field)',
'Seattle-Tacoma International Airport',
'San Francisco International Airport',
'Springfield-Branson National Airport',
'St. George Regional Airport', 'Shreveport Regional Airport',
'Sitka Rocky Gutierrez Airport',
'Norman Y. Mineta San José International Airport',
'San Angelo Regional Airport(Mathis Field)',
'Luis Muñoz Marín International Airport',
'Salt Lake City International Airport',
'Sacramento International Airport',
'Santa Maria Public Airport(Capt G. Allan Hancock Field)',
'John Wayne Airport(Orange County Airport)',
'Abraham Lincoln Capital Airport',
'Wichita Falls Municipal Airport/Sheppard AFB',
'Sarasota-Bradenton International Airport',
'St. Cloud Regional Airport',
'St. Louis International Airport at Lambert Field',
'Cyril E. King Airport', 'Henry E. Rohlsen Airport',
'Friedman Memorial Airport', 'Sioux Gateway Airport',
'Stewart International Airport',
'Syracuse Hancock International Airport',
'Tallahassee International Airport', 'Toledo Express Airport',
'Tampa International Airport', 'Tri-Cities Regional Airport',
'Trenton Mercer Airport', 'Tulsa International Airport',
'Tucson International Airport', 'Cherry Capital Airport',
'Magic Valley Regional Airport(Joslin Field)',
'Texarkana Regional Airport(Webb Field)',
'Tyler Pounds Regional Airport', 'McGhee Tyson Airport',
'Northeast Florida Regional Airport(St. Augustine Airport)',
'Valdez Airport', 'Valdosta Regional Airport',
'Destin-Fort Walton Beach Airport/Eglin AFB', 'Wrangell Airport',
'Westerly State Airport', 'Northwest Arkansas Regional Airport',
'Yakutat Airport', 'Yuma International Airport'];

const days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthes= ["January","February","March","April","May","June","July",
"August","September","October","November","December"]; 

month_31 = ["January", "March", "May", "July", "August", "October","December"]
month_30 =["April","June","September","November"]
// Airlines dropdown
// let selector = d3.select('#selAirlines');
// selector.html("")

// for (let i=0; i<airlines_names.length; i++){
//     // console.log(airlines_names[i]);
//     let selOptions = selector.append("option")
//     selOptions.property("value", airlines_names[i]);
//     selOptions.text(`${airlines_names[i]}`);

// }

// From Airport dropdown

// let selector_1 = d3.select('#selAirports1');
// selector_1.html("")

// for (let i=0; i<airports_names.length; i++){
//     // console.log(airports_names[i]);
//     let selOptions = selector_1.append("option")
//     selOptions.property("value", airports_names[i]);
//     selOptions.text(`${airports_names[i]}`);

// }


// destiniaton airports

// let selector_2 = d3.select('#selAirports2');
// selector_2.html("");

// for (let i=0; i<airports_names.length; i++){
//     // console.log(airports_names[i]);
//     let selOptions = selector_2.append("option")
//     selOptions.property("value", airports_names[i]);
//     selOptions.text(`${airports_names[i]}`);

// }


// Time and date
// Day
let selector_3 = d3.select('#selDay');
selector_3.html("");

for (let i=0; i<days.length; i++){
    // console.log(airports_names[i]);
    let selOptions = selector_3.append("option")
    selOptions.property("value", days[i]);
    selOptions.text(`${days[i]}`);

}
// Month
let selector_4 = d3.select('#selMonth');
selector_4.html("");

for (let i=0; i<monthes.length; i++){
    // console.log(airports_names[i]);
    let selOptions = selector_4.append("option")
    selOptions.property("value", monthes[i]);
    selOptions.text(`${monthes[i]}`);

}
// if (month_31.includes(selMonth.value))


// const date = new Date();
// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();
Date.prototype.today = function () { 
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"-"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"-"+ this.getFullYear();
}   

// For the time now
Date.prototype.timeNow = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}
var newDate = new Date();
var datetime = newDate.today() + " @ " + newDate.timeNow();

todayDate = newDate.today()

// const dayValue=todayDate.split("-")
// temp = dayValue[2]+"-"+dayValue[1]+"-"+dayValue[0]
// console.log(temp)
// document.getElementById('flightDate').innerHTML = temp;


console.log(newDate);

const birthday = new Date('August 19, 1975 23:15:30');
const day1 = newDate.getDay();
console.log(day1)


// let selector = d3.select('#selDataset');
// selector.html("")