document.querySelector('body').classList.remove("no-js");

const exchangeTable = $('.js-exchangeTable');
const FIXER_URL = 'http://data.fixer.io/api/latest';
const FIXER_KEY = '?access_key=3cfb8390e58aaf20f3ff0e49e6c55ad6';
const mobileSearch = $('.js-mobile-search');
const mobileMenu = $('.js-toggleMenu');
const metaEL = $('.js-meta');
const mobileNavList = $('.header__nav__list');

$(document).ready(function() {
    $.get(FIXER_URL+FIXER_KEY, function (data) {
        const usdValue = data.rates.USD.toString();
        const eurValue = data.rates.EUR.toString();
        const gbpValue = data.rates.GBP.toString();
        const rubValue = data.rates.RUB.toString();
        const usdRub = rubValue/usdValue;
        const eurRub = rubValue/eurValue;
        const gbpRub = rubValue/gbpValue;

        exchangeTable.append(`
        <tr class="exchange-table_item">
            <td class="currency usd js-usd">USD</td>
            <td class="value">${usdRub.toFixed(2)}</td>
        </tr>
        
        <tr class="exchange-table_item">
            <td class="currency eur js-eur">EUR</td>
            <td class="value">${eurRub.toFixed(2)}</td>
        </tr>
        
        <tr class="exchange-table_item">
            <td class="currency gbp js-gbp">GBP</td>
            <td class="value">${gbpRub.toFixed(2)}</td>
        </tr>`
        );
    });
});

$(document).ready(function(){
    mobileMenu.click(function() {
        mobileNavList.toggleClass('active');
        mobileMenu.toggleClass('active');
        $('.meta__time-cont, .meta__temp',).slideToggle();
    })
});

