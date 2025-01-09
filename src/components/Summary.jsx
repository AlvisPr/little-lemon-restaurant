import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormDataContext } from './FormDataProvider';
import "./Summary.css";

function Summary() {
  const { formData, tableData } = useContext(FormDataContext);
  const totalGuests = Number(formData.adults) + Number(formData.babies) + Number(formData.toddlers);
  const navigate = useNavigate();

  console.log(formData); 
  console.log(tableData);
  
  const handleBack = (e) => {
    e.preventDefault();
    navigate('/select_table', { state: { formData } });
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/reservation_completed')
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="content__wrapper">
      <div className="summary__container">
        <div className="summary__content">
          <h2 className="summary__title">Reservation Summary</h2>
          
          <div className="data__field">
            <span className="field__label">First Name</span>
            <span className="field__value">{formData.firstName}</span>
          </div>
          
          <div className="data__field">
            <span className="field__label">Last Name</span>
            <span className="field__value">{formData.lastName}</span>
          </div>
          
          <div className="data__field">
            <span className="field__label">Email</span>
            <span className="field__value">{formData.email}</span>
          </div>
          
          <div className="data__field">
            <span className="field__label">Date</span>
            <span className="field__value">{formData.date}</span>
          </div>
          
          <div className="data__field">
            <span className="field__label">Time</span>
            <span className="field__value">{formData.time}</span>
          </div>
          
          <div className="data__field">
            <span className="field__label">Occasion</span>
            <span className="field__value">{formData.occasion}</span>
          </div>
          
          <div className="data__field">
            <span className="field__label">Number of Guests</span>
            <span className="field__value">{totalGuests}</span>
          </div>
          
          <div className="data__field">
            <span className="field__label">Table Number</span>
            <span className="field__value">{tableData + 1}</span>
          </div>

          <div className="button__container">
            <button className="back__button" onClick={handleBack}>
              Back to Table Selection
            </button>
            <button className="next__button" onClick={handleNext}>
              Confirm Reservation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;