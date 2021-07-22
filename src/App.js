import React, { useState } from 'react';
import './App.css';
import './index.css';
import About from './components/About';
// import Nav from './components/Nav';
import Header from './components/Header';
import Project from './components/Project';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {

  const [categories] = useState([
    {
      name: 'about', description: 'Short bio about me'
    },
    {
      name: 'project', description: 'Projects I worked or am working on'
    },
    {
      name: 'resume', description: 'Linking to LinkedIn where my resume is accessible'
    },
    {
      name: 'contact-form', description: 'Contact form'
    }
  ]);


  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>

      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}

      >
      </Header>
      <main>

        <>
          <About currentCategory={currentCategory}></About>
          <Project></Project>
          <Resume></Resume>
        </>
        <ContactForm></ContactForm>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;