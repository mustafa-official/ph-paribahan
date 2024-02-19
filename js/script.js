const seats = document.getElementsByClassName('seats');
let count = 1;
let reduce = 0;
let totalPrice = 550;
let btnCount = 0;
for (let seat of seats) {
    seat.addEventListener('click', function () {
        if (btnCount < 4) {
            btnCount++;
            // seat count
            const seatCount = document.getElementById('seat-count');
            const countSeat = count++
            seatCount.innerText = countSeat;
            seat.setAttribute('disabled', true);


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
            console.log(seatId);

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

            // next button
            const nextBtn = document.getElementById('next-btn');
            if (seat.innerHTML === seatId.innerText) {
                nextBtn.removeAttribute('disabled');
            }
            // modal 

            const seatInformation = document.getElementById('seat-information');
            const continueBtn = document.getElementById('continue');
            const modal = document.getElementById('modal');
            const body = document.getElementById('body');
            nextBtn.addEventListener('click', function () {
                modal.classList.remove('hidden');
                body.classList.add('body');

            })
            continueBtn.addEventListener('click', function () {
                location.reload();
                modal.classList.add('hidden');
                body.classList.remove('body');
            })


            // coupon-apply btn 
            const couponApply = document.getElementById('coupon-apply');
            const couponCode = document.getElementById('coupon-code');
            const convertGrandTotal = parseInt(grandTotal.innerText);
            const inputApply = document.getElementById('input-apply');
            if (btnCount === 4) {
                couponApply.addEventListener('click', function () {

                    if (couponCode.value === 'NEW15') {
                        const discountTotal = convertGrandTotal * 0.15;
                        grandTotal.innerText = parseInt(convertGrandTotal - discountTotal);
                        inputApply.classList.add('hidden');

                    } else if (couponCode.value === 'Couple 20') {
                        const discountTotal = convertGrandTotal * 0.20;
                        grandTotal.innerText = parseInt(convertGrandTotal - discountTotal);
                        inputApply.classList.add('hidden');
                    } else {
                        alert('Invalid Coupon Code');
                    }

                })
            } 
        } else {
            alert("You can't select more than 4 seat")
        }

    })

}
