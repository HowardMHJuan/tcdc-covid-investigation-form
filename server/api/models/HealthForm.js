import mongoose, { Schema } from 'mongoose';

const HealthFormSchema = new Schema({
  id: String,
  information: {
    report_date: String, // yyyy-mm-dd
    name: String,
    gender: String, // 男 / 女
    birth_date: String, // yyyy-mm-dd
    nationality: String,
    address: String,
    contact: String,
    occupation: String,
    med_title: String, // ("" if false)
    onset: String,
    pregnant_weeks: Number, // (0 if false)
    married: String,
  }
//     nationality: string,
//     address: string,
//     occupation: string,
//     med_title: string ("" if false),
//     onset: "YYYY-MM-DD",
//     pregnant_weeks: int (0 if false),
//     married: T/F
// },
// "health_condition":
// {
//     "symptoms": 
//         [
//             {"name": string, "date": "YYYY-MM-DD"},
//             {"name": string, "date": "YYYY-MM-DD"}
//         ] ([] if none), 
//     "seeing_doctor":
//         [
//             {"type": 0,1,2 (門診、急診、住院), "name": string, "date":"YYYY-MM-DD"},
//             {"type": 0,1,2 (門診、急診、住院), "name": string, "date":"YYYY-MM-DD"}
//         ] ([] if none),
//     "chronic_disease":
//         [
//             "name": string,
//             "name": string
//         ] ([] if none)
// },
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
