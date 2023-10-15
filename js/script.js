// custom dropdown menu function
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.ooddb')) {
        var dropdown = document.getElementById("myDropdown");
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
}

window.onload = function () {
    // Le document HTML est complètement chargé
    // Add active class on navigation sidebar
    let menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(function (item) {
        const url = window.location.pathname;
        const link = item.querySelector('a');

        if (null !== link && (link.getAttribute('href') === url || url.match(link.getAttribute('href')))) {
            link.classList.add('active');
        }
    });
};

// window.onclick = function (event) {
//     if (!event.target.matches('.menu-header-dropdown')) {
//         var dropdown = document.getElementById("myDropdown");
//         // var i;
//         // for (i = 0; i < dropdowns.length; i++) {
//             // var openDropdown = dropdowns[i];
//             // if (openDropdown.classList.contains('show')) {
//             //     openDropdown.classList.remove('show');
//             // }
//         // }
//         if (dropdown.classList.contains('show')) {
//             dropdown.classList.remove('show');
//         }
//     }
// }

// custom toggle function