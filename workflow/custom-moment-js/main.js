// Mostly deals with interface and demonstrates the usage of OneMoment
// Can be discarded along with corresponding HTML and CSS

var moment = new OneMoment(new Date());

const instanceMilisecs = document.getElementById('instanceMilisecs');
const instance = document.getElementById('instance');

const parseDate = document.getElementById('parseDate');
const parseMask = document.getElementById('parseMask');
const parse = document.getElementById('parse');

const formatMask = document.getElementById('formatMask');
const format = document.getElementById('format');

const fromNow = document.getElementById('fromNow');

const toDate = document.getElementById('toDate');

// Console Output
var consoleLine = 1;
function render(what){
    const out = document.getElementById('output');
    out.innerHTML += `<br>` + consoleLine + "... " + what;
    consoleLine++;
}

instance.addEventListener('click', () => {
    moment = new OneMoment(parseInt(instanceMilisecs.value));
    render("Constructor: " + moment.toDate());
});

parse.addEventListener('click', () => {
    render ("Parser: " + OneMoment.parse(parseDate.value, parseMask.value).toDate());
});

format.addEventListener('click', () => {
    render("Formatter: " + moment.format(formatMask.value));
});

fromNow.addEventListener('click', () => {
    render("From Now: " + moment.fromNow());
});

toDate.addEventListener('click', () => {
    render("To Date: " + moment.toDate());
});


// Main
render(moment.toDate())