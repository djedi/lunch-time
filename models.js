var mongoose = require('mongoose'),
    db = mongoose.connect('mongodb://localhost/lunch-time'),
    Schema = mongoose.Schema;

var TierSchema = new Schema({
    name: {type: String, required: true},
    delay_seconds: {type: Number, required: true, default: 60}
});

var DepartmentSchema = new Schema({
    name: {type: String, required: true},
    default_tier: {type: Schema.ObjectId, ref: 'TierSchema'}
});

var UserSchema = new Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    sms_phone: {type: String},
    role: {type: String, default: 'employee', enum: ['superadmin', 'admin', 'employee']},
    department: {type: Schema.ObjectId, ref: 'DepartmentSchema'},
    tier: {type: Schema.ObjectId, ref: 'TierSchema'}
});

var VendorSchema = new Schema({
    name: {type: String, required: true},
    address: String,
    phone: String,
    notes: String,
    tags: [String]
});

var MealSchema = new Schema({
    vendor: {type: Schema.ObjectId, ref: 'VendorSchema'},
    cost: Number,
    notes: String,
    birthday_request: {type: Boolean, default: false},
    requested_by: {type: Schema.ObjectId, ref: 'UserSchema'}
});

var VoteSchema = new Schema({
    employee: {type: Schema.ObjectId, ref: 'UserSchema'},
    meal: {type: Schema.ObjectId, ref: 'MealSchema'},
    vote: {type: Number, min: 1, max: 3}
});