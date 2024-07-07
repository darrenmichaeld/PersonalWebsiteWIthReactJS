import { useState } from 'react';
import TabButton from '../props/tabButton';
import { EXAMPLES } from '../data';
import Section from '../props/Section';
import Tabs from '../props/Tabs';

export default function Examples(){

    // Using useState for reload Website UI based on changes
    const [chosenTab, setChosenTab] = useState();

    // To output content based on changes
    let tabContent = <p>Select a Topic</p>;
  
  if(chosenTab){
    tabContent = (
      <div id="tab-content">
        <h3>
          {EXAMPLES[chosenTab].title}
        </h3>
        <p>
          {EXAMPLES[chosenTab].description}
        </p>
        <pre>
          <code>
          {EXAMPLES[chosenTab].code}
          </code>
        </pre>
        </div>
    );
  }
  
    // To handle different input and thus yield different output based on the input
    function handleClickEvent(eventName){
      setChosenTab(eventName);
    }

    return (
    <Section title="Programming Projects (C++)" id="examples">
        <Tabs ButtonContainer="menu"
          button=
        {<>
          <TabButton isSelected={chosenTab==="courseGraderCommentSystem"} onClick={()=>handleClickEvent("courseGraderCommentSystem")}>Course Grader Comment System</TabButton>
          <TabButton isSelected={chosenTab==="autoOrderedSystem"} onClick={()=>handleClickEvent("autoOrderedSystem")}>Auto Ordered System</TabButton>
          <TabButton isSelected={chosenTab==="chessGame"} onClick={()=>handleClickEvent("chessGame")}>Chess Game</TabButton>
          <TabButton isSelected={chosenTab==="animalAdoptionCenter"} onClick={()=>handleClickEvent("animalAdoptionCenter")}>Animal Adoption Center</TabButton>
        </>
        }>
          {tabContent}
        </Tabs>
        
    </Section>
    );
}