$(document).ready(() => {
    const navItems = $("span");

    for (let i = 0; i < navItems.length; i++) {
        const itemCode = navItems[i].innerHTML.toUpperCase();
        navItems[i].innerHTML = itemCode;
    }
})
