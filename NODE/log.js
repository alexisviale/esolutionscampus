/* var log = {
    info: function (info){
        console.log('Info: ' + info);
    },
    warning: function (warning){
        console.log('Warning: ' + warning);
    },
    error: function (error){
        console.log('Error: ' + error);
    }
}

module.exports = log */

module.exports = {
    firstName: 'Homero',
    lastName: 'Simpson'
}

module.exports = function(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = function() {
        console.log(this.firstName + ' ' + this.lastName);
    }
}