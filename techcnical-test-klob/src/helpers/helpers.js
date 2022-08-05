function currencyFormat(num) {
    let formatter = new Intl.NumberFormat('id-ID');
    return formatter.format(num);
}      

function dateFormat(date) {
    let tempDate = date.split('/').join('-')
    let newDate = new Date(tempDate)
    const diffTime = Math.abs(Date.now() - newDate);
    const diffMonth = Math.ceil(diffTime / (1000 * 30 * 60 * 60 * 24))
    return diffMonth
    
}
 

export {currencyFormat, dateFormat}