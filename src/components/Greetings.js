import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessage } from '../store/features/greeting/greetingSlice';
import Loading from './Loading';

function Greetings() {
  const { message, loading } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);

  return (
    <div className="tv-container">
      <h1 id="greeting">{loading ? <Loading /> : message.greeting}</h1>
    </div>
  );
}

export default Greetings;
