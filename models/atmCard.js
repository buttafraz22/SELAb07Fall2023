const mongoose = require('mongoose');

const atmSchema = new mongoose.Schema({
    atmCardNo : {
        type : String,
        required : true,
        unique : true,
        minlength : 16,
        maxlength : 16
    },
    cardIssuer : {
        type : String,
        required : true,
        enum : ['Mastercard', 'Visa', 'Stripe']
    },
    bankName : {
        type : String,
        required : true
    },
    cardHolderName : {
        type : String,
        required : true
    },
    cardType : {
        type : String,
        required : true,
        enum : ['debit', 'credit']
    },
    issueDate : {
        type : String,
        required : true
    },
    expiryDate : { 
        type : String,
        required : true,
        /* validate: {
            validator: function (value) {
              return this.issueDate < value;
            },
            message: 'Expiry date must be greater than the issue date.',
        }, */
    },
    cvc : {
        type : Number,
        required : true,
        minlength : 3,
        maxlength : 3
    }
},{
    timestamps : true
});

module.exports = mongoose.model("AtmCard", atmSchema);