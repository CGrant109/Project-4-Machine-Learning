// data source
const airlines_data = "../assests/airlines_1.json";

// function that contains instructions at page load/refresh
// function does not run until called
// start of init
function init(){
   
    // this checks that our initial function runs.
    console.log("The Init() function ran")
    
    // loading data
    d3.json(airlines_data).then((data)=> {
        // check the data
        console.log(data.names)
        let selector = d3.select('#selDataset');
        selector.html("")

        // create dropdown/select
        for (let i=0; i<data.names.length; i++){
            let selOptions = selector.append("option")
            selOptions.property("value", data.names[i]);
            selOptions.text(`OTU ${data.names[i]}`);
        }
            
    })
}
// end of init function