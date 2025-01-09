import './Reserve.css';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import { FormDataContext } from './FormDataProvider';
import { useLocation } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Reserve() {
  const { setFormData } = useContext(FormDataContext);
  const location = useLocation();
  const selectedTable = location.state ? location.state.selectedTable : null;
  const navigate = useNavigate();
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  const [availableTimes, setAvailableTimes] = useState([]);
  const validate = values => {
    const errors = {};
    if (!values.date) {
      errors.date = 'Required';
    }
    if (!values.time) {
      errors.time = 'Required';
    }
    if (values.adults === undefined || values.adults === null) {
      errors.adults = 'Required';
    }
    if (values.babies === undefined || values.babies === null) {
      errors.babies = 'Required';
    }
    if (values.toddlers === undefined || values.toddlers === null) {
      errors.toddlers = 'Required';
    }
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (!/^[A-Za-z]+$/i.test(values.firstName)) {
      errors.firstName = 'Invalid name. Only letters are allowed.';
    }
    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (!/^[A-Za-z]+$/i.test(values.lastName)) {
      errors.lastName = 'Invalid name. Only letters are allowed.';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if (!errors.date && !availableTimes.includes(values.time)) {
      errors.time = 'The selected time is not available.';
    }
    if (!values.occasion) {
      errors.occasion = 'Required';
    } else if (!['birthday', 'anniversary', 'business_meeting', 'casual_dining', 'other'].includes(values.occasion)) {
      errors.occasion = 'Invalid occasion selected.';
    }
    if (!values.tableLocation) {
      errors.tableLocation = 'Required';
    }
    if (!values.tableType) {
      errors.tableType = 'Required';
    }
    if (!values.tableSize) {
      errors.tableSize = 'Required';
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      occasion: '',
      adults: '',
      toddlers: '',
      babies: '',
      firstName: '',
      lastName: '',
      email: '',
      note: '',
      tableLocation: '',
      tableType: '',
      tableSize: '',
    },
    validate,
    onSubmit: async values => {
      const submitAPI = async (formData) => {
        console.log('Form data submitted:', formData);
        let selectedTimes = JSON.parse(window.localStorage.getItem('selectedTimes')) || [];
        selectedTimes.push(formData.time);
        window.localStorage.setItem('selectedTimes', JSON.stringify(selectedTimes));
        return true;
      };
      const formDataWithTable = { ...values, selectedTable };
      const success = await submitAPI(formDataWithTable);
      if (success) {
        setFormData(formDataWithTable);
        console.log(formDataWithTable);
        navigate('/select_table', { state: { formData: formDataWithTable } });
      } else {
        alert('Failed to submit the form. Please try again.');
      }
    },
  });
  const handleChange = (e) => {
    formik.handleChange(e);
    formik.setFieldTouched(e.target.name, true, false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const fetchAPI = async (date) => {
      let availableTimes = [
        '12:00', '12:15', '12:30', '12:45',
        '13:00', '13:15', '13:30', '13:45',
        '14:00', '14:15', '14:30', '14:45',
        '15:00', '15:15', '15:30', '15:45',
        '16:00', '16:15', '16:30', '16:45',
        '17:00', '17:15', '17:30', '17:45',
        '18:00', '18:15', '18:30', '18:45',
        '19:00', '19:15', '19:30', '19:45',
        '20:00', '20:15', '20:30', '20:45',
        '21:00', '21:15', '21:30', '21:45',
        '22:00', '22:15', '22:30', '22:45'
      ];
      const selectedTimes = JSON.parse(window.localStorage.getItem('selectedTimes')) || [];
      availableTimes = availableTimes.filter(time => !selectedTimes.includes(time));
      return availableTimes;
    };
    const fetchTimes = async () => {
      const times = await fetchAPI(formik.values.date);
      setAvailableTimes(times);
    };
    fetchTimes();
  }, [formik.values.date]);
  return (
    <div className="reserve__table__wrapper">
      <div className="reserve__content">
        <div className="reserve__form">
          <h3>Reserve a Table</h3>
          <form onSubmit={formik.handleSubmit}>
            <div className="input">
              <label htmlFor="occasion">Occasion</label>
              <div className="inputWrapper">
                <select
                  name="occasion"
                  id="occasion"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                  style={
                    formik.touched.occasion && formik.errors.occasion
                      ? { border: '2px solid red' }
                      : formik.values.occasion
                        ? { border: '2px solid green' }
                        : null
                  }
                >
                  <option value=""></option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="business_meeting">Business Meeting</option>
                  <option value="casual_dining">Casual Dining</option>
                  <option value="other">Other</option>
                </select>
                {formik.touched.occasion && formik.errors.occasion ? (
                  <div className="error-message">{formik.errors.occasion}</div>
                ) : null}
              </div>
            </div>
            <div className="input">
              <label htmlFor="date">Date</label>
              <div className="inputWrapper">
                <input
                  aria-label='Select Date'
                  type="date"
                  name="date"
                  id="date"
                  min={formattedDate}
                  max={formattedDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                  style={
                    formik.touched.date && formik.errors.date
                      ? { border: '2px solid red' }
                      : formik.values.date
                        ? { border: '2px solid green' }
                        : null
                  }
                />
                {formik.touched.date && formik.errors.date ? (
                  <div className="error-message">{formik.errors.date}</div>
                ) : null}
              </div>
            </div>
            <div className="input">
              <label htmlFor="time">Time</label>
              <div className="inputWrapper">
                <input
                  type="time"
                  name="time"
                  id="time"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  min="12:00"
                  max="23:00"
                  required
                  style={
                    formik.touched.time && formik.errors.time
                      ? { border: '2px solid red' }
                      : formik.values.time
                        ? { border: '2px solid green' }
                        : null
                  }
                />
                {formik.touched.time && formik.errors.time ? (
                  <div className="error-message">{formik.errors.time}</div>
                ) : null}
              </div>
            </div>
            <hr />
            <h3>Select Table</h3>
            <div className="input">
              <label htmlFor="tableLocation">Table Location:</label>
              <div className="inputWrapper">
                <select
                  id="tableLocation"
                  name="tableLocation"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                  style={
                    formik.touched.tableLocation && formik.errors.tableLocation
                      ? { border: '2px solid red' }
                      : formik.values.tableLocation
                        ? { border: '2px solid green' }
                        : null
                  }
                >
                  <option value="">Select Location</option>
                  <option value="inside">Inside</option>
                  <option value="outside">Outside</option>
                </select>
                {formik.touched.tableLocation && formik.errors.tableLocation ? (
                  <div className="error-message">{formik.errors.tableLocation}</div>
                ) : null}
              </div>
            </div>
            <div className="input">
              <label htmlFor="tableType">Table Type:</label>
              <div className="inputWrapper">
                <select
                  id="tableType"
                  name="tableType"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                  style={
                    formik.touched.tableType && formik.errors.tableType
                      ? { border: '2px solid red' }
                      : formik.values.tableType
                        ? { border: '2px solid green' }
                        : null
                  }
                >
                  <option value="">Select Type</option>
                  <option value="booth">Booth</option>
                  <option value="standard">Standard</option>
                  <option value="bar">Bar</option>
                </select>
                {formik.touched.tableType && formik.errors.tableType ? (
                  <div className="error-message">{formik.errors.tableType}</div>
                ) : null}
              </div>
            </div>
            <div className="input">
              <label htmlFor="tableSize">Table Size:</label>
              <div className="inputWrapper">
                <select
                  id="tableSize"
                  name="tableSize"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                  style={
                    formik.touched.tableSize && formik.errors.tableSize
                      ? { border: '2px solid red' }
                      : formik.values.tableSize
                        ? { border: '2px solid green' }
                        : null
                  }
                >
                  <option value="">Select Size</option>
                  <option value="2">2 Persons</option>
                  <option value="4">4 Persons</option>
                  <option value="6">6 Persons</option>
                  <option value="8">8 Persons</option>
                </select>
                {formik.touched.tableSize && formik.errors.tableSize ? (
                  <div className="error-message">{formik.errors.tableSize}</div>
                ) : null}
              </div>
            </div>
            <hr />
            <h3>Number Of Dinners</h3>
            <div className="input">
              <label htmlFor="adults">Adults</label>
              <div className="inputWrapper">
                <input
                  type="number"
                  name="adults"
                  id="adults"
                  min="0"
                  onChange={handleChange}
                  required
                  style={
                    formik.touched.adults && formik.errors.adults
                      ? { border: '2px solid red' }
                      : (formik.values.adults !== '' && (formik.values.adults === '0' || parseInt(formik.values.adults) >= 0))
                        ? { border: '2px solid green' }
                        : null
                  }
                />
                {formik.touched.adults && formik.errors.adults ? (
                  <div className="error-message">{formik.errors.adults}</div>
                ) : null}
              </div>
            </div>
            <div className="input">
              <label htmlFor="toddlers">Toddlers</label>
              <div className="inputWrapper">
                <input
                  type="number"
                  name="toddlers"
                  id="toddlers"
                  onChange={handleChange}
                  min="0"
                  required
                  style={
                    formik.touched.toddlers && formik.errors.toddlers
                      ? { border: '2px solid red' }
                      : (formik.values.toddlers !== '' && (formik.values.toddlers === '0' || parseInt(formik.values.toddlers) >= 0))
                        ? { border: '2px solid green' }
                        : null
                  }
                />
                {formik.touched.toddlers && formik.errors.toddlers ? (
                  <div className="error-message">{formik.errors.toddlers}</div>
                ) : null}
              </div>
            </div>
            <div className="input">
              <label htmlFor="babies">Babies</label>
              <div className="inputWrapper">
                <input
                  type="number"
                  name="babies"
                  id="babies"
                  min="0"
                  onChange={handleChange}
                  required
                  style={
                    formik.touched.babies && formik.errors.babies
                      ? { border: '2px solid red' }
                      : (formik.values.babies !== '' && (formik.values.babies === '0' || parseInt(formik.values.babies) >= 0))
                        ? { border: '2px solid green' }
                        : null
                  }
                />
                {formik.touched.babies && formik.errors.babies ? (
                  <div className="error-message">{formik.errors.babies}</div>
                ) : null}
              </div>
            </div>
            <hr />
            <div className="input">  
              <label htmlFor="firstName">Name:</label>
              <div className="inputWrapper">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={handleChange}
                  required
                  style={
                    formik.touched.firstName && formik.errors.firstName
                      ? { border: '2px solid red' }
                      : formik.values.firstName
                        ? { border: '2px solid green' }
                        : null
                  }
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="error-message">{formik.errors.firstName}</div>
                ) : null}
              </div>
            </div>
            <div className="input">
              <label htmlFor="lastName">Last Name:</label>
              <div className="inputWrapper">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={handleChange}
                  required
                  style={
                    formik.touched.lastName && formik.errors.lastName
                      ? { border: '2px solid red' }
                      : formik.values.lastName
                        ? { border: '2px solid green' }
                        : null
                  }
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="error-message">{formik.errors.lastName}</div>
                ) : null}
              </div>
            </div>
            <div className="input">
              <label htmlFor="email">Email Address</label>
              <div className="inputWrapper">
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  required
                  style={
                    formik.touched.email && formik.errors.email
                      ? { border: '2px solid red' }
                      : formik.values.email
                        ? { border: '2px solid green' }
                        : null
                  }
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error-message">{formik.errors.email}</div>
                ) : null}
              </div>
            </div>
            <hr />
            <h3>Note</h3>
            <div className="input special-requests">
              <label htmlFor="message">Special Requests:</label>
              <div className="inputWrapper">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Let us know if you have any special requirements or preferences..."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
              </div>
            </div>
            <div className="button-container">
              <button 
                className="circle-button" 
                type="submit" 
                onClick={() => document.querySelector('form').requestSubmit()}
                aria-label="Go to the next page"
              >
                <ArrowForwardIcon />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Reserve;