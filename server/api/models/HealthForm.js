import mongoose, { Schema } from 'mongoose';

const HealthFormSchema = new Schema({
  id: String,
  timestamp: Number,
  information: {
    inv_date: String, // yyyy-mm-dd
    inv_person: String,
    inv_institution: String,
    report_date: String, // yyyy-mm-dd
    name: String,
    gender: String, // 男 / 女
    birth_date: String, // yyyy-mm-dd
    nationality: String,
    address_city: String,
    address_area: String,
    address_detail: String,
    contact: String,
    occupation: String,
    med_title: String,
    onset: String,
    pregnant_week: String,
    married: String,
  },
  health_condition: {
    symptoms: Array, // { name: String, date: "yyyy-mm-dd" }
    seeing_doctor: Array, // { type: 門診 / 急診 / 住院, name: String, date:"yyyy-mm-dd" }
    chronic_disease: Array, // String
  },
  source: {
    nation_and_location: Array,
    contact_fever: Array,
    contact_patient: Array,
    contact_secretion: Array,
    infect: String,
    market: String,
    hospital: String,
    pet: String,
    bird: String,
    farm: String,
    shamble: String,
    wild: String,
    other: String,
  },
  contactor: {
    public_area: Array,
    close_contactor: Array,
  },
  activity: {
    activity_detail: Array,
  },
  orig_state: String,
});

const HealthForm = mongoose.model('form', HealthFormSchema);

module.exports = HealthForm;
