
function test()
{
    let statistics = {
            redCars : 21,
            blueCars: 45,
            greenCars: 12,
            raceCars: 5,
            blackCars: 40,
            rareCars: 2
    };

    for (var key in statistics) {

        if ( key.startsWith('r')){
          console.log(' name=' + key + ' value=' + statistics[key]);
        } 
        else if ( ! isNaN(statistics[key])  &&  statistics[key] % 2 == 1){
            console.log(' name=' + key + ' value=' + statistics[key]);
        } 
    };
};

test();

/* output:
 name=redCars value=21
 name=blueCars value=45
 name=raceCars value=5
 name=rareCars value=2
*/