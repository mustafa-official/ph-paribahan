const seats = document.getElementsByClassName('seats');
let count = 1;
let reduce = 0;
let totalPrice = 550;
for (let seat of seats) {
    seat.addEventListener('click', function () {
        // seat count
        const seatCount = document.getElementById('seat-count');
        const countSeat = count++
        seatCount.innerText = countSeat;

        // seat name
        const seatName = seat.innerText;
        const seatId = document.getElementById(seatName);
        const getInnerText = seatId.innerText;
        const seatInfo = document.getElementById('seat-info');
        const li = document.createElement('li');
        li.classList.add('info-li');
        const p = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        p.innerText = getInnerText;
        p2.innerText = 'Economy';
        p3.innerText = 550;
        li.appendChild(p)
        li.appendChild(p2)
        li.appendChild(p3);
        seatInfo.appendChild(li);

        // total price
        const totalPrice = document.getElementById('total-price');
        const getText = totalPrice.innerText
        const convertTotalPrice = parseInt(getText);
        totalPrice.innerText = convertTotalPrice + 550;


        // grand total
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = totalPrice.innerText;

        //reduce available-seat
        const availableSeat = document.getElementById('available-seat').innerText;
        const convertSeat = parseInt(availableSeat);
        const reduceValue = convertSeat - 1;
        document.getElementById('available-seat').innerText = reduceValue

        // set background seat
        seatId.style.background = '#1DD100';
        seatId.style.color = 'white';




























    })

}
