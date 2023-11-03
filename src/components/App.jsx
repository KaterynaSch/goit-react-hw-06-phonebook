import { ContactForm } from "./Form/Form";
import { ContactList } from "./Contacts/ContactList";
import { ContactFilter } from "./ContactFilter/ContactFilter";
import { MainContainer } from "./MainContainer.styled";

export const App = () =>{        
  return (
    <MainContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter />
      <ContactList />      
    </MainContainer>
  );
};