

$(()=>{
    console.log('connected with graph.ejs'); //this wasnt printed

    //declare date: x-axis
    let leftTable = $(".table > tbody > tr ")
    let dates = []
    for (let i=0; i < leftTable.length; i++){
        const date = leftTable[i].children[0].textContent
        dates.push(date);
    };
    //declare rate: y-axis
    let rightTable = $(".table > tbody > tr ")
    let rates = []
    for (let i=0; i < rightTable.length; i++){
        let rate = rightTable[i].children[1].textContent;
        if (rate === "to be improved"){
            rate = 1;
        } else if (rate === "satisfactory"){
            rate = 2;
        } else if (rate === "i feel great"){
            rate = 3;
        }
        rates.push(rate);
    };
    console.log(rates)
    
    const ctx = $('#myChart')
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'Growth over time',
                BackgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(121, 7, 242, 1)',
                data: rates,
                steppedLine: true
            }]
        },
    });
});