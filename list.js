window.onload = function () {
    let passengers = [
        {
            name: '1',
            gender: '1'
        },
        {
            name: '2',
            gender: '2'
        }
    ];

    let passengerList = document.querySelector("#passengerList");

    let list = {passengers};

    rivets.bind(passengerList, {
        list
    });

    setTimeout(updatePassengers, 1000 * 3);
    setTimeout(removePassengers, 1000 * 5);
    setTimeout(modifyPassengers, 1000 * 7);

    function updatePassengers () {
        passengers.push({
            name: '3',
            gender: '1'
        });
    }

    function removePassengers () {
        passengers.splice(1, 1);
    }

    function modifyPassengers () {
        passengers[0].name = 'modified';
    }
}
