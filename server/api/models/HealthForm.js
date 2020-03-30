import mongoose, { Schema } from 'mongoose';

const HealthFormSchema = new Schema({
  id: String,
  information: {
    inv_date: String, // yyyy-mm-dd
    inv_person: String,
    report_date: String, // yyyy-mm-dd
    name: String,
    gender: String, // 男 / 女
    birth_date: String, // yyyy-mm-dd
    nationality: String,
    address: String,
    contact: String,
    occupation: String,
    med_title: String,
    onset: String,
    pregnant_weeks: Number,
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
});

const HealthForm = mongoose.model('form', HealthFormSchema);

module.exports = HealthForm;
