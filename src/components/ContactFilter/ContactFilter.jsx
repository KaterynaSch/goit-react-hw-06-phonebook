import { useDispatch, useSelector } from "react-redux"
import { FilterInput, FilterLabel } from "./ContactFilter.styled"
import { setFilter } from "redux/filterSlice";


export const ContactFilter = () => {
    //посилання на функцію відправки екшенів
  const dispatch = useDispatch();
    //значення фільтра із стану Redux
  const filter = useSelector((state) => state.filter);
    
  const changeFilter = evt => {    
    dispatch(setFilter(evt.target.value))
  };
    return (
        <FilterLabel>
            Find contacts by name
            <FilterInput type="text" name="filter" value={filter}
            onChange={changeFilter}/>
        </FilterLabel>        
    );
};