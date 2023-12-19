import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './index.css';

const useCustomSwipe = () => {
  const [stopScroll, setStopScroll] = useState(false);

  const handlers = useSwipeable({
    onSwipeStart: () => {
      console.log('Swipe started');
      setStopScroll(true);
    },
    onSwiped: () => {
      console.log('Swiped');
      setStopScroll(false);
    },
    onTap:()=>{
      console.log('Tapped');
    }
  });

  const mouseHandlers = {
    onMouseDown: () => {
      console.log('Mouse down');
      setStopScroll(true);
    },
    onMouseUp: () => {
      console.log('Mouse up');
      setStopScroll(false);
     
    },
  };

  return {
    stopScroll,
    handlers: { ...handlers, ...mouseHandlers },
  };
};

const CustomSwipe = () => {
  const { stopScroll, handlers } = useCustomSwipe();

  return (
    <div className="swpie_container">
      <button
        {...handlers}
        style={{
          touchAction: stopScroll ? 'none' : 'auto',
          transition: 'transform 0.3s ease',
          transform: stopScroll ? 'translateX(100%)' : 'translateX(0)',
          minWidth: '100px',
          padding: '5px',
          margin: '5px',
        }}
        className="swipebutton"
      >
        {stopScroll ? 'Swiped' : 'Swipe'}
      </button>
    </div>
  );
};

export default CustomSwipe;
