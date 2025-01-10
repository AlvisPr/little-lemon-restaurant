import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Main from './Main';
import Reserve from './Reserve';
import Summary from './Summary';
import Completed from './Completed';
import SelectTable from './SelectTable';


function RoutesWithTransitions() {
  let location = useLocation();

  return (
 
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={1000}
      >
        <Routes location={location}>
          <Route path="/select_table" element={<SelectTable />} />
          <Route path="/reservation_completed" element={<Completed />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
    
  );
}

export default RoutesWithTransitions;
