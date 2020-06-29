

$(()=>{
    console.log('connected with graph.ejs'); //this wasnt printed

    //declare graph variables (date and rate)
    let leftTable = $(".table > tbody > tr ")
    //console.log(leftTable)
    let dates = []
    for (let i=0; i < leftTable.length; i++){
        const date = leftTable[i].children[0].textContent
        dates.push(date);
    }
    console.log(dates)
    //console.log(leftTable[0].children[0].textContent)
    // const date = $(dateList[0]).text();
    // const rate = $(dateList[0]).text();
    const ctx = $('#myChart')
    const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: dates,
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 1, 2, 3]
            }]
        },
    
        // Configuration options go here
        options: {}
    });
});