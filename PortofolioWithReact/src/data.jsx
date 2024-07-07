import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const MY_HOBBIES = [
  {
    image: componentsImg,
    title: 'Basketball',
    description:
      'I have a true passion for the sport of basketball, finding great joy and fulfillment in the competitive spirit and physical challenge of the game.',
  },
  {
    image: jsxImg,
    title: 'Coding',
    description:
      'As a tech enthusiast, I absolutely relish my hobby of coding, where I am able to tap into my creative side and bring innovative ideas to life through the power of programming.',
  },
  {
    image: propsImg,
    title: 'Piano',
    description:
      'One of my most cherished hobbies is playing the piano, as it serves as a wonderful creative outlet that allows me to express myself through the graceful, emotive tones I am able to coax from the ivories.',
  },
  {
    image: stateImg,
    title: 'Photography',
    description:
      'I am an avid photographer, and I find great delight in using my artistic eye and keen sense of observation to capture the beauty of the world around me through the lens of my camera.',
  },
];

export const EXAMPLES = {
  courseGraderCommentSystem: {
    title: 'CourseGrader & CommentSystem',
    description:
      'Creating a grading component that allows students to evaluate and provide feedback on the course using struck, pointer, and linked list. Implement methods to add and delete students, allowing them to edit their course comments. Arrange student list in ascending order based on students’ id using linked list.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  autoOrderedSystem: {
    title: 'Auto Ordered System',
    description:
      'Developing a leaderboard using classes, objects, and encapsulation. Arrange players’ positions in increasing order based on their point with double-linked list. Implement an update method to track and reflect players’ increased points.',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  chessGame: {
    title: 'Chess Game',
    description:
      'For this programming project, I developed a fully-functional chess game in C++. This involved modeling the chess pieces and their unique movements, implementing legal move validation, and creating a turn-based gameplay experience. Translating the complex rules of chess into efficient, well-structured code was a valuable challenge that allowed me to apply my problem-solving skills and deepen my understanding of game design principles.',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  animalAdoptionCenter: {
    title: 'Animal Adoption Center (Binary Search Tree)',
    description:
      'I developed an Animal Adoption Center application in C++ using a Binary Search Tree (BST) to efficiently store and retrieve information about available animals. The AnimalNode class represents an animal organized in the BST by species, enabling quick lookup and retrieval, as well as operations like adding new animals and facilitating adoptions. By leveraging a BST-based structure, I created a scalable and performant application that can handle a growing number of animals, deepening my understanding of tree-based data structures and their practical applications.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};