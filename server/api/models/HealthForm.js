import mongoose, { Schema } from 'mongoose';

const HealthFormSchema = new Schema({
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
  }

// "source":
//     {
//         "abroad":
//         {
//             "nation_and_location":
//                 [
//                     {"name": string, "start_time": "YYYY-MM-DD", "end_time": "YYYY-MM-DD", "type": string, "companion_num": int, "companion_health": T/F, "companion_symptoms": string, "transport_and_flight_code"： string},
//                     {"name": string, "start_time": "YYYY-MM-DD", "end_time": "YYYY-MM-DD", "type": string, "companion_num": int, "companion_health": T/F, "companion_symptoms": string, "transport_and_flight_code"： string}
//                 ] 
//         } ({} if none),
//         "contact":
//         {
//             "fever_location": string ("" if false),
//             "patient_location": string ("" if false),
//             "patient_time_start": "YYYY-MM-DD" ("" if false),
//             "patient_time_end": "YYYY-MM-DD" ("" if false),
//             "secretion_time_start": "YYYY-MM-DD" ("" if false),
//             "secretion_time_end": "YYYY-MM-DD" ("" if false),
//         },
//         "activity":
//         [
//             {"location": string, "time": "YYYY-MM-DD"},
//             {"location": string, "time": "YYYY-MM-DD"}
//         ], ([] if none)
//         "animal_contact":
//         [
//             {"name": string, "time": "YYYY-MM-DD"},
//             {"name": string, "time": "YYYY-MM-DD"},
//         ] ([] if none)
//     }
// "contactor":
// {
//     "public_area":
//     [
//         {"time": "YYYY-MM-DD", "city": string, "location": string, "transportation": string},
//         {"time": "YYYY-MM-DD", "city": string, "location": string, "transportation": string}
//     ], ([] if none)
//     "close_contactor":
//     [
//         {"type": string, "apply": T/F, "number": int, "symptom count": int, "fever count": int, "note": string}
//     ] ([] if none)
// }
});

const HealthForm = mongoose.model('form', HealthFormSchema);

module.exports = HealthForm;
