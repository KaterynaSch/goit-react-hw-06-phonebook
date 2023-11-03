import { useDispatch, useSelector } from "react-redux";
import { DeleteBtn, ListItem } from "./ContactListItem.styled"
import { deleteContact } from "redux/contactsSlice";

export const ContactListItem = () => {
    // посилання на функцію відправки екшенів
      const dispatch = useDispatch();
    // значення контактів  та фільтрів із стану redux   
    const contacts = useSelector(state => state.contacts.list);
    const filter = useSelector(state => state.filter);
   
    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );  

    return(
      <>
        {filteredContacts.map(contact =>
          <ListItem key={contact.id}>
              <span>{contact.name}: {contact.number}</span>             
              <DeleteBtn type="button" onClick={() => dispatch(deleteContact(contact.id))}>
                  Delete
              </DeleteBtn>
          </ListItem>
        ) }  
      </>
      
    );
};