import './CaseStudy2.css';
import mockup from './imgs/mockup.png';
import interface1 from './imgs/interface1.png';
import interface2 from './imgs/interface2.png';
import maps from './imgs/maps.mov';

export default function CaseStudy2({title, tags, thumbnail}) {
  return (
    <div id="case-study2">
      <div class="case-title">Maps Bucket List</div>
      <div class="blurb">
        <h2>Developing a hypertext web application for users to plan 'bucket list'
          places they want to visit.</h2>
      </div>

      <br></br>


      <div id="tags">Skills: MongoDB, Express, React, Node, TypeScript, Figma</div>

      <div id="role">Role: Backend/Frontend Developer</div>

      <br></br>

      <div id="context"> 
        <div class="section-header">Context</div>
        Maps Bucket List is a web app that streamlines and simplifies the planning process for trips.
        The application is able to switch between a list view and a map view of locations. 
        Additionally, Maps Bucket List allows users to directly edit the map 
        by adding pins for destinations and adding routes that visually connect the destinations. 

        Lastly, the application hosts a variety of features for interacting with the map, 
        such as creating and deleting destinations and being able to click on a 
        destination and go to a node where the user could take notes for that 
        specific destination.
        <br></br>
        <br></br>
        <p>
          I worked on the entirety of the backend for this project and 
          helped with elements of the frontend development (such as filtering), as well. This project 
          was completed with a team of 2 other frontend developers. 
        </p>
      </div>

      <br></br>

      <div id="research">

        <div class="section-header">Research</div>

        <p>
          To start, we began by listing example use cases/problems our web application would solve:
        </p>
        <p>
          <ul class="bullets">
            <li>
            The general use case for this application would be any person who wants to organize a bucket list of destinations and plan trips to these destinations. 
            For example, a Brown student could make a bucket list of destinations 
            and  
            organize their nodes into a spring break 
            travel plan by linking the nodes to form routes.
            </li>
            
            <li>
            Another use case would be a group of friends who want to create a 
            collaborative bucket list. 
            In this case, each member of the group could add destinations, 
            modify notes about the destinations, check off visited destinations, 
            and create/modify/delete trails.
            </li>
          </ul>
        </p>
        <br></br>
        <p>After defining possible use cases, we delineated the specific features 
          we wanted to implement:
        </p>
        <ul class="bullets">
            <li>
              User can pin their geographic node (destination) to a 
              central map and link an editable note to a specific destination that is pinned. 
            </li>
            <li>
              User can mark the geographic node as visited or unvisited. 
            </li>
            <li>
              Priority indicator for each node with 3 levels (high, medium, 
              and low priority), and each pinned destination would have an 
              attached priority level to it. 
            </li>
            <li>
              Web app creates a trail (route) between pinned destinations for the user to plan out their trip.
            </li>
            <li>
              User can delete geographic nodes, which should update the route, as they modify their trip.
            </li>
            <li>
              Nodes remain unchanged when the user deletes the route.
            </li>
            <li>
              User can filter pinned destinations by visited status and priority.
            </li>
          </ul>
        <br></br>
        <p>Next, while planning on implementing the front-end map, 
          we looked into React-Leaflet 
          and decided to incorporate the React-Leaflet 
          component to display a Google Maps-style interactive map that has 
          built-in zooming and panning capabilities. In order to add this in, 
          we planned to include the map as its own component and use the 
          library's events feature to show markers at detected locations.
        </p>

      </div>

      <br></br>

      <div id="process">
        <div class="section-header">Process</div>
        <div class="subsection-header">Mockup</div>
        <p>
          To visualize the front-end of our web application, we created a mockup in Figma:
        </p>
        <br></br>
        <img class="img" alt="image of maps web app mockup" src={mockup}></img>

        <div class="subsection-header">Backend Design</div>
        <p>
          To create an extendible backend, I defined the following interfaces in 
          Typescript:
        </p>
        <img class="img" alt="image of backend interface class for routes" src={interface1}></img>
        <img class="img" alt="image of backend interface class for destinations" src={interface2}></img>
        <p>
          After defining the data structures and classes, I created CRUD functions 
          to interact with the MongoDB backend. I created a thorough test suite for all functions, including 
          unit tests and end-to-end tests. 
        </p>
        <br></br>
        <p>
          Lastly, after I finished the backend, I moved on to assist with building out the frontend filtering feature, 
          which utilized much of the backend functions I wrote to retrieve data from the database. 
        </p>
      </div>

      <br></br>

      <div id="solution">
        <div class="section-header">Solution</div>
        <p>
          Ultimately, after utilizing MongoDB, Node, Express, React, TypeScript, and Figma, my team and I 
          created Maps Bucket List:
        </p>
        <video class="img" alt="video of functional Maps Bucket List where user adds a new destination and creates a new route" 
        src={maps} controls></video> 
      </div>

      <br></br>

      <div id="learnings">
        <div class="section-header">Learnings</div>
        <p>
          Through this project, I learned new technical skills, such as the MERN stack and TypeScript, which I had never utilized before.
          Furthermore, I strengthened my knowledge of various features of a fullstack hypertext system, including 
          nodes, anchors, links, and editable nodes. 
        </p>
        <p>
          In other skills, I developed with a team, collaborated on ideas, and 
          was able to work on both backend and frontend of a project. 
          Additionally, I followed an Agile software development cycle and was able to 
          gain more experience growing familiar with the methodology. 
        </p>
        <br></br>
      </div>



    </div>
  );
}
