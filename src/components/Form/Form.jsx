import { Formik } from 'formik';
import * as Yup from 'yup';
import { StyledForm, StyledLabel, StyledField, AddContact, StyledErrMessage  } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { saveContact } from 'redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';

const formSchema = Yup.object().shape({
    name: Yup.string() 
    .matches(/^[a-zA-Zа-яА-Я]+(([ ' -][a-zA-Zа-яА-Я ])?[a-zA-ЯА-Я]*)*$/, 'The name format is incorrect!')    
    .required('Required'),
    number: Yup.string()
    .matches(/\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,'The phone number format is incorrect!') 
    .required('Required'),
})

export const ContactForm = () => {
    //посилання на функцію відправки екшенів
  const dispatch = useDispatch();
    //значення контактів із стану Redux
  const contacts = useSelector(state => state.contacts.list)
    
  const addContact = ({name, number}) => {
  
    const isExist = contacts.some(contact => contact.name === name);
     
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = { id: nanoid(), name, number };
    dispatch(saveContact(newContact));    
  }; 

    return ( 
        <Formik
        initialValues={{
          name: '',
          number: '',          
        }}
        validationSchema={formSchema}        
        onSubmit={(values, actions) => { 
          addContact(values);       
         actions.resetForm();
        }}       
      >
        <StyledForm>
          <StyledLabel>
            Name
            <StyledField  name="name" type="text"/>
            <StyledErrMessage name="name" component="span"/>
          </StyledLabel>
          <StyledLabel>
            Number
          <StyledField  name="number" type='tel' />
          <StyledErrMessage name="number" component="span"/>
            </StyledLabel>          
          <AddContact type="submit">Add contact</AddContact>
        </StyledForm>
      </Formik>       
    )
};
