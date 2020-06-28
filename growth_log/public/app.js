

$(()=>{
    console.log('connected with graph.ejs') //this wasnt printed

    //declare graph variables (date and rate)
    const rateGraph = []; //nothing render cuz i dont know how to pass data here
    console.log(dateGraph)

    const ctx = $('#myChart')
    let timeGraph = new Chart(ctx, {
        type: 'line',
        data: [{
            x: new Date(),
            y: 1
        }]
    })
});