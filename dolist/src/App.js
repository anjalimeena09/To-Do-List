import { useState } from 'react';
import './App.css';
import MyFirstComponent from "./components/ReactClass";
import DateComponent from "./components/itemDate";
import GetFormDetails from "./components/getFormDetails";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editName, setEditName] = useState('');
  const [editDate, setEditDate] = useState('');
  const [data, setData] = useState([]);

  const handleEdit = (index) => {
    if (data.length > index && index >= 0) {
      setEditingIndex(index);
      setEditName(data[index].name);
      setEditDate(`${data[index].date}-${data[index].month}-${data[index].year}`);
      showToast('Task edited successfully!');
    }
  };

  const handleSave = () => {
    if (editingIndex !== null && data.length > editingIndex && editingIndex >= 0) {
      const newData = [...data];
      newData[editingIndex] = {
        ...newData[editingIndex],
        name: editName,
        date: editDate.split('-')[0],
        month: editDate.split('-')[1],
        year: editDate.split('-')[2],
      };

      setData(newData);
      setEditingIndex(null);
      setEditName('');
      setEditDate('');
    }
  };

  const handleDelete = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
    showToast('Task deleted successfully!');
  };

  const showToast = (message) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleSubmitForm = (formData) => {
    setData([...data, formData]);
    showToast('Task added successfully!');
  };

  return (
    <div>
      <div className="page-container">
        <div className="container">
          <div className='head'>
            <h1 className='hhh1'>To-Do List</h1>
          </div>
          <div className="outer">
            {data.map((item, index) => (
              <div className={`mynewclass ${editingIndex === index ? 'editing' : ''}`} key={index}>
                {editingIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      placeholder="Edit Name"
                    />
                    <input
                      type="date"
                      value={editDate}
                      onChange={(e) => setEditDate(e.target.value)}
                      placeholder="Edit Date (DD-MMM-YYYY)"
                    />
                    <div className="button-container">
                      <button className='btn save-btn' onClick={handleSave}>
                        Save
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <MyFirstComponent name={item.name} />
                    <div className="date-container">
                      <DateComponent date={item.date} month={item.month} year={item.year} hello={item.name} />
                      <div className="button-container">
                        <button className='btn edit-btn' onClick={() => handleEdit(index)}>
                          <FontAwesomeIcon icon={faEdit} /> Edit
                        </button>
                        <button className='btn trash-btn' onClick={() => handleDelete(index)}>
                          <FontAwesomeIcon icon={faTrash} /> Delete
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <GetFormDetails task={handleSubmitForm} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;




// import { useState } from 'react';
// import './App.css';
// import MyFirstComponent from "./components/ReactClass";
// import DateComponent from "./components/itemDate";
// import GetFormDetails from "./components/getFormDetails"; // Corrected import statement

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'; // Added faTrash icon

// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function App() {
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editName, setEditName] = useState('');
//   const [editDate, setEditDate] = useState('');
//   const [data, setData] = useState([]);

//   const handleEdit = (index) => {
//     if (data.length > index && index >= 0) {
//       setEditingIndex(index);
//       setEditName(data[index].name);
//       setEditDate(`${data[index].date}-${data[index].month}-${data[index].year}`);
//       showToast('Task edited successfully!');
//     }
//   };

//   const handleSave = () => {
//     if (editingIndex !== null && data.length > editingIndex && editingIndex >= 0) {
//       const newData = [...data];
//       newData[editingIndex] = {
//         ...newData[editingIndex],
//         name: editName,
//         date: editDate.split('-')[0],
//         month: editDate.split('-')[1],
//         year: editDate.split('-')[2],
//       };

//       setData(newData);
//       setEditingIndex(null);
//       setEditName('');
//       setEditDate('');
//     }
//   };

//   const handleDelete = (index) => {
//     const newData = data.filter((_, i) => i !== index);
//     setData(newData);
//     showToast('Task deleted successfully!');
//   };

//   const showToast = (message) => {
//     toast.success(message, {
//       position: 'top-right',
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });
//   };

//   const handleSubmitForm = (formData) => {
//     setData([...data, formData]);
//     showToast('Task added successfully!');
//   };

//   return (
//     <div>
//       <div className="page-container">
//         <div className="container">
//           <div className='head'>
//           <h1 className='hhh1' style={{ color: 'white', textAlign: "center" }}>To-do List</h1>
//           </div>
          
//           <div className="outer">
//             {data.map((item, index) => (
//               <div className={`mynewclass ${editingIndex === index ? 'editing' : ''}`} key={index}>
//                 {editingIndex === index ? (
//                   <>
//                     <input
//                       type="text"
//                       value={editName}
//                       onChange={(e) => setEditName(e.target.value)}
//                       placeholder="Edit Name"
//                     />
//                     <input
//                       type="date"
//                       value={editDate}
//                       onChange={(e) => setEditDate(e.target.value)}
//                       placeholder="Edit Date (DD-MMM-YYYY)"
//                     />
//                     <div className="button-container">
//                       <button className='btn save-btn' onClick={handleSave}>
//                         Save
//                       </button>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <MyFirstComponent name={item.name} />
//                     <div className="date-container">
//                       <DateComponent date={item.date} month={item.month} year={item.year} hello={item.name} />
//                       <div className="button-container">
//                         <button className='btn edit-btn' onClick={() => handleEdit(index)}>
//                           <FontAwesomeIcon icon={faEdit} /> Edit
//                         </button>
//                         <button className='btn trash-btn' onClick={() => handleDelete(index)}>
//                           <FontAwesomeIcon icon={faTrash} /> {/* Added delete icon */}
//                         </button>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>
//           <GetFormDetails task={handleSubmitForm} />
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }

// export default App;









// import { useState } from 'react';
// import './App.css';
// import MyFirstComponent from "./components/ReactClass";
// import DateComponent from "./components/itemDate";
// import GetFormDetails from "./components/getFormDetails"; // Corrected import statement

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function App() {
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editName, setEditName] = useState('');
//   const [editDate, setEditDate] = useState('');
//   const data1 = [
//     {
//       name: 'Do leet code question',
//       date: '01',
//       month: 'Jan',
//       year: '2020'
//     },
//     {
//       name: 'do gfg question',
//       date: '02',
//       month: 'Feb',
//       year: '2021' 
//     },
//     {
//       name: 'do college work',
//       date: '03',
//       month: 'Mar',
//       year: '2022'
//     }
//   ]
//   const [data, setData] = useState(data1);

//   const buttonClicked = (index) => {
//     const newData = data.filter((item, i) => i !== index);
//     showToast('Task removed successfully!');
//     setData(newData);
//   }

//   const submitButtonClick = (event) => {
//     setData(prevData => [...prevData, event]);
//     showToast('Task added successfully!');
//   }

//   const handleEdit = (index) => {
//     setEditingIndex(index);
//     setEditName(data[index].name);
//     setEditDate(`${data[index].date}-${data[index].month}-${data[index].year}`);
//     showToast('Task edited successfully!');
//   };

//   const handleSave = () => {
//     if (editingIndex !== null) {
//       const newData = [...data];
//       newData[editingIndex] = {
//         ...newData[editingIndex],
//         name: editName,
//         date: editDate.split('-')[0],
//         month: editDate.split('-')[1],
//         year: editDate.split('-')[2],
//       };

//       setData(newData);
//       setEditingIndex(null);
//       setEditName('');
//       setEditDate('');
//     }
//   };

//   const showToast = (message) => {
//     toast.success(message, {
//       position: 'top-right',
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });
//   };

//   return (
//     <div>
//       <div className="page-container">
//         <div className="container">
//           <h1 className='hhh1' style={{ color: '#ff4500', textAlign: "center" }}>To-do List</h1>
//           <div className="outer">
//             {data.map((item, index) => (
//               <div className={`mynewclass ${editingIndex === index ? 'editing' : ''}`} key={index}>
//                 {editingIndex === index ? (
//                   <>
//                     <input
//                       type="text"
//                       value={editName}
//                       onChange={(e) => setEditName(e.target.value)}
//                       placeholder="Edit Name"
//                     />
//                     <input
//                       type="date"
//                       value={editDate}
//                       onChange={(e) => setEditDate(e.target.value)}
//                       placeholder="Edit Date (DD-MMM-YYYY)"
//                     />
//                     <div className="button-container">
//                       <button className='btn save-btn' onClick={handleSave}>
//                         Save
//                       </button>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <MyFirstComponent name={item.name} />
//                     <div className="date-container">
//                       <DateComponent date={item.date} month={item.month} year={item.year} hello={item.name} />
//                       <div className="button-container">
//                         <button className='btn edit-btn' onClick={() => handleEdit(index)}>
//                           <FontAwesomeIcon icon={faEdit} /> Edit
//                         </button>
//                         <button className='btn trash-btn' onClick={() => buttonClicked(index)}>
//                           <FontAwesomeIcon icon={faTrash} /> 
//                         </button>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>
//           <GetFormDetails task={submitButtonClick}  />
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }

// export default App;