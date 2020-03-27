import React from 'react';
import { Form, Col } from 'react-bootstrap';

const StringColumn = props => (
  <Form.Group as={Col} controlId={props.id}>
    <Form.Label>{props.name}</Form.Label>
    <Form.Control
      type="text"
      name={props.id}
      onChange={props.handleChange}
    />
  </Form.Group>
);

const DateColumn = props => (
  <Form.Group as={Col} controlId={props.id}>
    <Form.Label>{props.name}</Form.Label>
    <Form.Control
      type="date"
      name={props.id}
      onChange={props.handleChange}
    />
  </Form.Group>
);

const SelectColumn = props => (
  <Form.Group as={Col} controlId={props.id}>
    <Form.Label>{props.name}</Form.Label>
    <Form.Control as="select" name={props.id} onChange={props.handleChange}>
      <option>{null}</option>
      {props.options.map(option => <option>{option}</option>)}
    </Form.Control>
  </Form.Group>
);

const TFcheckbox1 = props => (
  <Form.Group as={Col} controlId={props.id}>
      <Form.Label>{props.name}</Form.Label>
      &nbsp; &nbsp; &nbsp;
      <Form.Check inline label={props.options[0]} type={"checkbox"} id={"inline-checkbox-1"} onChange={props.handleChange}/>
      <Form.Check inline label={props.options[1]} type={"checkbox"} id={"inline-checkbox-2"} onChange={props.handleChange}/>
  </Form.Group>
);

const TFcheckbox2 = props => (
  <Form.Group as={Col} controlId={props.id}>
      <Form.Label>{props.name}</Form.Label>
      &nbsp; &nbsp; &nbsp;
      <Form.Check inline label={props.options[0]} type={"checkbox"} id={"inline-checkbox-1"} onChange={props.handleChange}/>
      <Form.Check inline label={props.options[1]} type={"checkbox"} id={"inline-checkbox-2"} onChange={props.handleChange}/>
      <Form.Check inline label={props.options[2]} type={"checkbox"} id={"inline-checkbox-3"} onChange={props.handleChange}/>
      <Form.Check inline label={props.options[3]} type={"checkbox"} id={"inline-checkbox-4"} onChange={props.handleChange}/>
      <Form.Control type="text" onChange={props.handleChange}/>
  </Form.Group>
);

const TFcheckbox3 = props => (
  <Form.Group as={Col} controlId={props.id}>
      <Form.Label>{props.name}</Form.Label>
      &nbsp; &nbsp; &nbsp;
      <Form.Check inline label={props.options[0]} type={"checkbox"} id={"inline-checkbox-1"} onChange={props.handleChange}/>
      <Form.Check inline label={props.options[1]} type={"checkbox"} id={"inline-checkbox-2"} onChange={props.handleChange}/>
      <Form.Control type="text" onChange={props.handleChange}/>
  </Form.Group>
);

const TaskList = (props) => (
  <Form.Group as={Col} controlId={props.id}>
    <Form.Label>{props.nation}</Form.Label>
    <Form.Control
      type="text"
      name="nation"
      onChange={props.handleChange}
    />
    <Form.Label>{props.start_time}</Form.Label>
    <Form.Control
      type="date"
      name="start_time"
      onChange={props.handleChange}
    />
    <Form.Label>{props.end_time}</Form.Label>
    <Form.Control
      type="date"
      name="end_time"
      onChange={props.handleChange}
    />
    <Form.Label>{props.type}</Form.Label>
    <Form.Control
      type="text"
      name="type"
      onChange={props.handleChange}
    />
    <Form.Label>{props.companion_num}</Form.Label>
    <Form.Control
      type="text"
      name="companion_num"
      onChange={props.handleChange}
    />
    <Form.Label>{props.companion_symptoms}</Form.Label>
    <Form.Control
      type="text"
      name="companion_symptoms"
      onChange={props.handleChange}
    />
    <Form.Label>{props.transport_and_flight_code}</Form.Label>
    <Form.Control
      type="text"
      name="transport_and_flight_code"
      onChange={props.handleChange}
    />
  </Form.Group>
);

// const TaskList = (props) => {
//   return (
//     props.taskList.map((val, idx) => {
//       let projectName = `projectName-${idx}`, task = `task-${idx}`, taskNotes = `taskNotes-${idx}`, taskStatus = `taskStatus-${idx}`
//       return (
//         <tr key={val.index}>
//           <td>
//             <input type="text"  name="projectName" data-id={idx} id={projectName} className="form-control " />
//           </td>
//           <td>
//             <input type="text"  name="task" id={task} data-id={idx} className="form-control " />
//           </td>
//           <td>
//             <textarea  name="taskNotes" id={taskNotes} data-id={idx} className="form-control"></textarea>
//           </td>
//           <td>
//             {
//             idx===0?<button onClick={()=>props.add()} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
//             : <button className="btn btn-danger" onClick={(() => props.delete(val))} ><i className="fa fa-minus" aria-hidden="true"></i></button>
//             }
//           </td>
//         </tr >
//       )
//     })
//   )
// }

export { StringColumn, DateColumn, SelectColumn, TFcheckbox1, TFcheckbox2, TFcheckbox3, TaskList};
