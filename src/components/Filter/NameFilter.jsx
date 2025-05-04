import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const NameFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return <h2></h2>;
};

export default NameFilter;
