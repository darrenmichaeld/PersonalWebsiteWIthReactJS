import { MY_HOBBIES } from "../data";
import MyHobbies from "../props/myHobbies";

export default function TheHobbies(){
    return(
    <section id="core-concepts">
          <h2>My Hobbies</h2>
         <ul>
           <MyHobbies {...MY_HOBBIES[0]}/>
           <MyHobbies {...MY_HOBBIES[1]}/>
           <MyHobbies {...MY_HOBBIES[2]}/>
           <MyHobbies {...MY_HOBBIES[3]}/>
         </ul>
        </section>
    );
}