$(document).ready(() => {
    // const navItems = $("nav span");
    const navItems = $("nav span, .heading-5, .heading-1, .heading-4");
    for (let i = 0; i < navItems.length; i++) {
        const itemCode = navItems[i].innerHTML.toUpperCase();
        navItems[i].innerHTML = itemCode;
    }

    $("nav span").addClass("nav-text");
})

