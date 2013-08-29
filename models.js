var TierSchema = new Schema({
    name: {type: String, required: true},
    delay_seconds: {type: Number, required: true, default: 60}
});

var DepartmentSchema = new Schema({
    name: {type: String, required: true},
    default_tier: TierSchema
});

var UserSchema = new Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    sms_phone: {type: String},
    role: {type: String, default: 'employee', enum: ['superadmin', 'admin', 'employee']},
    department: [DepartmentSchema],
    tier: TierSchema
});

var Vendor = new Schema({
    name: {type: String, required: true},
    address: String,
    phone: String,
    notes: String,
    tags: [String],
    notes: String
});

var MealSchema = new Schema({
    vendor: Vendor,
    cost: Number,
    notes: String,
    birthday_request: {type: Boolean, default: false},
    requested_by: UserSchema
});

var VoteSchema = new Schema({
    employee: UserSchema,
    meal: MealSchema,
    vote: {type: Number, min: 1, max: 3}
});