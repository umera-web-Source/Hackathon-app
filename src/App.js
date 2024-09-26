import React, { createContext, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';  
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "./assets/cardimage/Group 1000002466.png"
import img2 from "./assets/cardimage/Group 1000002766.png"
import img3 from "./assets/cardimage/Group 1000002767.png"
import img4 from "./assets/cardimage/Group 1000002771.png"
import img5 from "./assets/cardimage/Group 1000002772.png"
import img6 from "./assets/cardimage/Group 1000002773.png"
import Header from './Components/Header';
import Home from './Components/Home';
import CardsSection from './Components/CardsSection';
import CardsFilter from './Components/CardsFilter';
import CreateForm from './Components/CreateForm';
import PracticeNow from './Components/PracticeNow';

export const EventContext = createContext()
function App() {
  const [events , setEvents]  = useState( [
    { imageUrl: img1,  title: 'Data Science Bootcamp - Graded Datathon', status: 'Upcoming', date: 'Starts in: 00 Days : 15 Hours : 22 Minutes', buttonText: 'Participate Now', level:"easy", des:"Flowers have intricate features that help them survive in various environments. This sprint is about classifying different species based on visual patterns and colors.Your task is to develop a deep learning model that identifies flower species with high accuracy."},
    { imageUrl: img2,  title: 'Data Sprint 72 - Butterfly Identification',status: 'Upcoming', date: 'Starts in: 00 Days : 12 Hours : 34 Minutes', buttonText: 'Participate Now', level:"easy" ,des:"Flowers have intricate features that help them survive in various environments. This sprint is about classifying different species based on visual patterns and colors.Your task is to develop a deep learning model that identifies flower species with high accuracy."},
    { imageUrl: img3,  title: 'Data Sprint 71 - Weather Recognition',status: 'Active', date: 'Ends in: 01 Days : 17 Hours : 10 Minutes', buttonText: 'Participate Now', level:"easy" ,des:"Flowers have intricate features that help them survive in various environments. This sprint is about classifying different species based on visual patterns and colors.Your task is to develop a deep learning model that identifies flower species with high accuracy."},
    { imageUrl: img4,  title: 'Data Sprint 70 - Airline Passenger Satisfaction',status: 'Active', date: 'Ends in: 00 Days : 11 Hours : 27 Minutes', buttonText: 'Participate Now', level:"easy",des:"Flowers have intricate features that help them survive in various environments. This sprint is about classifying different species based on visual patterns and colors.Your task is to develop a deep learning model that identifies flower species with high accuracy." },
    { imageUrl: img5,  title: 'Engineering Graduates Employment Outcomes', status: 'Past',date: 'Ended on 16th May 22 09:00 PM', buttonText: 'View Results',level:"easy" ,des:"Flowers have intricate features that help them survive in various environments. This sprint is about classifying different species based on visual patterns and colors.Your task is to develop a deep learning model that identifies flower species with high accuracy."},
    { imageUrl: img6,  title: 'Travel Insurance Claim Prediction', status: 'Past', date: 'Ended on 16th May 22 09:00 PM', buttonText: 'View Results',level:"easy",des:"Flowers have intricate features that help them survive in various environments. This sprint is about classifying different species based on visual patterns and colors.Your task is to develop a deep learning model that identifies flower species with high accuracy." }
  ])
  return (
    <EventContext.Provider value={{events ,setEvents}}>
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-challenge" element={<CreateForm />} />
          <Route path="/preview" element={<PracticeNow />} />
        </Routes>
      </Router>
    </EventContext.Provider>
  );
}

export default App;
