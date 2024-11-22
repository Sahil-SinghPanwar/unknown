
document.addEventListener("DOMContentLoaded", () => {
    // Change navbar styles on scroll
    let nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('window-scroll', window.scrollY > 0);
    });


    // Show/hide FAQ answer
    let faqs = document.querySelectorAll('.faq');
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('open');



            // Change icon
            let icon = faq.querySelector('.faq_icon i');
            if (icon.className === 'uil uil-plus') {
                icon.className = 'uil uil-minus';
            } else {
                icon.className = 'uil uil-plus';
            }
        });     
    });



    // Swiper JS (take from swiper website)
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // When window width is >= 600px
        breakpoints: {
            600: {
                slidesPerView: 2,
            }
        }
    });



    // Open and close menu button
    let menu = document.querySelector(".nav__menu");
    let openbtn = document.querySelector("#open-menu-btn");
    let closebtn = document.querySelector("#close-menu-btn");

    openbtn.addEventListener('click', () => {
        menu.style.display = "flex";
        closebtn.style.display = "inline-block";
        openbtn.style.display = "none";
    });



       //   we can manage closebtn with help of fuction -> addEventListener and other is direct use addEventListener
  
    // let closenav = () => {
    // menu.style.display = "none";
    // closebtn.style.display = "none";
    // openbtn.style.display = "inline-block";
    //   }
    //   closebtn.addEventListener('click', closenav);
    

                        //   or

    closebtn.addEventListener('click', () => {
        menu.style.display = "none";
        closebtn.style.display = "none";
        openbtn.style.display = "inline-block";
    });






    // =========chart.js start here===========
    // Left side for circle chart
//     var ctx = document.getElementById('myChart').getContext('2d');

//     var earning = document.getElementById('earning').getContext('2d');
//     var myChart = new Chart(ctx, {
//         type: 'polarArea',
//         data: {
//             labels: ['GitHub Copilot', 'Data Analysis', 'Next.js 15 & React'],
//             datasets: [{
//                 label: '# of Votes',
//                 data: [1200, 1900, 300],
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 206, 86, 0.2)',
//                 ],
//                 borderColor: [
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)'
//                 ],
//             }]
//         },
//         options: {
//             responsive: true,
//         }
//     });

//     // Right side for graph
//     var myChart = new Chart(earning, {
//         type: 'bar',
//         data: {
//             labels: ['jan', 'feb', 'march', 'april', 'may', 'june'],
//             datasets: [{
//                 label: 'courses',
//                 data: [1200, 1900, 3000, 5000, 2000, 3000],
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(153, 102, 255, 1)',
//                     'rgba(255, 159, 64, 1)'
//                 ],
//             }]
//         },
//         options: {
//             responsive: true,
//         }
//     });
 });