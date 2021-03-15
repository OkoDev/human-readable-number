module.exports = function toReadable(num) {

    const a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let n = ('000' + num)
        .substr(-3)
        .match(/^(\d{1})(\d{2})$/)
    ;
    let str = '';
    str += (n[0] != 0) ? '' : 'zero';
    str += (n[1] != 0) ? a[Number(n[1])]  + 'hundred ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) : '';
    return str.trimRight();
};
