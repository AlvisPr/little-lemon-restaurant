import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FormDataContext } from './FormDataProvider';
import './SelectTable.css';

const SelectTable = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData, setTableData } = useContext(FormDataContext);
  const reservationData = location.state?.formData || formData;

  useEffect(() => {
    if (!reservationData || !Object.keys(reservationData).length) {
      navigate('/reserve');
    }
  }, [reservationData, navigate]);

  // Define restaurant sections
  const sections = {
    window: { name: 'Window Area', tables: Array(8).fill(null) },
    main: { name: 'Main Dining', tables: Array(12).fill(null) },
    bar: { name: 'Bar Area', tables: Array(6).fill(null) },
    outdoor: { name: 'Outdoor Patio', tables: Array(4).fill(null) }
  };

  const [tables, setTables] = useState(() => {
    try {
      const storedTables = localStorage.getItem('tables');
      return storedTables ? JSON.parse(storedTables) : Array(30).fill({ reserved: false });
    } catch (e) {
      console.error('Error loading tables:', e);
      return Array(30).fill({ reserved: false });
    }
  });

  const [selectedTable, setSelectedTable] = useState(null);

  const selectTable = (sectionIndex, tableIndex) => {
    const globalIndex = getGlobalIndex(sectionIndex, tableIndex);
    if (!tables[globalIndex].reserved) {
      setSelectedTable(globalIndex);
      setTableData(globalIndex);
    }
  };

  const getGlobalIndex = (sectionIndex, tableIndex) => {
    let index = 0;
    const sectionNames = Object.keys(sections);
    for (let i = 0; i < sectionIndex; i++) {
      index += sections[sectionNames[i]].tables.length;
    }
    return index + tableIndex;
  };

  const getTableClassName = (sectionIndex, tableIndex) => {
    const globalIndex = getGlobalIndex(sectionIndex, tableIndex);
    let className = 'table__item';
    if (tables[globalIndex].reserved) {
      className += ' reserved';
    } else if (selectedTable === globalIndex) {
      className += ' selected';
    } else {
      className += ' available';
    }
    return className;
  };

  const goToNextComponent = () => {
    if (selectedTable === null) {
      alert('Please select a table first.');
      return;
    }

    // Update the tables array with the new reservation
    const updatedTables = [...tables];
    updatedTables[selectedTable] = {
      reserved: true,
      reservationData: {
        ...reservationData,
        tableNumber: selectedTable + 1
      }
    };

    // Save to localStorage
    try {
      localStorage.setItem('tables', JSON.stringify(updatedTables));
      setTables(updatedTables);
      navigate('/summary');
    } catch (e) {
      console.error('Error saving reservation:', e);
      alert('There was an error saving your reservation. Please try again.');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="content__wrapper">
      <div className="table__container__wrapper">
        <div className="table__container">
          <h2>Select Your Table</h2>
          
          {Object.entries(sections).map(([sectionKey, section], sectionIndex) => (
            <div key={sectionKey}>
              <div className="section__title">{section.name}</div>
              <div className="section__container">
                {section.tables.map((_, tableIndex) => {
                  const globalIndex = getGlobalIndex(sectionIndex, tableIndex);
                  return (
                    <div
                      key={tableIndex}
                      className={getTableClassName(sectionIndex, tableIndex)}
                      onClick={() => selectTable(sectionIndex, tableIndex)}
                    >
                      <span>
                        {tables[globalIndex].reserved ? 'Reserved' : `Table ${globalIndex + 1}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          
          <button 
            className="select__table__next__button"
            onClick={goToNextComponent}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectTable;
