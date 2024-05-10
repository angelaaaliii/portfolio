import './CaseStudy1.css';
import sketch1 from './imgs/sketch1.png';
import sketch2 from './imgs/sketch2.png';
import it1_community from './imgs/it1-community.png';
import it1_publish from './imgs/it1-publish.png';
import it1_profile from './imgs/it1-profile.png';
import it2_community from './imgs/it2-community.png';
import community_flow from './imgs/community-flow.mov';
import publish_flow from './imgs/publish-flow.mov';
import profile_flow from './imgs/profile-flow.mov';

export default function CaseStudy1({title, tags, thumbnail}) {
  return (
    <div id="case-study1">
      <div class="case-title">Warp Community Design</div>
      <div class="blurb">
        <h2>Designing an interactive prototype following the full iterative design process.</h2>
      </div>

      <br></br>


      <div id="tags"><p>Skills: Figma</p></div>

      <div id="role"><p>Role: Frontend Designer</p></div>

      <br></br>

      <div id="context"> 
        <div class="section-header">Context</div>
        <p>
        This project was for a startup, Warp, a terminal emulator reimagined with AI and collaborative tools for better productivity.
        Working on a team with 3 other designers and under the guidance of a Senior Product Designer, 
        my team addressed adding a place in the product to connect with other users, 
        and share tools, as those features were not yet implemented.
        Additionally, since Warp is a desktop/web application, we designed for a computer screen 
        for all of our prototyping. 
        </p>
      </div>

      <br></br>

      <div id="research">

        <div class="section-header">Research</div>

        <p>
          To start, we began by analyzing the current platform and other existing platforms with 
          the desired features we wanted to add.
          From this, we focused on analyzing the following sites:
        </p>
        <p>
          <ul class="bullets">
            <li>
              GitHub - Liked the repositories displayed on user's profile to connect users to their tools built
            </li>
            <li>
              Figma Community - Liked the search functionality for templates in community to encourage sharing of tools within the application
            </li>
            <li>
              Instagram - Liked the profile view of followers and following to increase connections among users
            </li>
          </ul>
        </p>
        <br></br>
        <p>Also, from analyzing the audience, who are mostly software engineers, we 
          wanted to focus on maximizing all space as software engineers tend to  prefer to optimize the 
          amount of information contained in a space.  
        </p>
        <br></br>
        <p>
          At the end of researching, we decided to focus our prototype on 3 main components
          to address our client's problems:
          <ul class="bullets">
            <li>
              Community - promote sharing tools
            </li>
            <li>
              Profile - promote user to user connections
            </li>
            <li>
              Tool Publish - promote users creating tools and workflows in Warp
            </li>
          </ul>
        </p>

      </div>

      <br></br>

      <div id="process">
        <div class="section-header">Process</div>
        <div class="subsection-header">Sketches</div>
        <p>
          To brainstorm possible designs that include a community page, profile view, and tool publishing component, 
          I created 2 different sketches:
        </p>
        <br></br>
        <img class="img" alt="picture of the first sketch created for warp redesign"
        src={sketch1}></img>
        <p>
          and
        </p>
        <br></br>
        <img class="img" alt="picture of the second sketch created for warp redesign"
        src={sketch2}></img>
        <br></br>
        <p>After each member of the team created 2 sketches, we discussed what design elements 
          we found most effective from each sketch and created a low-fidelity wireframe based on our discussion.
        </p>
        <br></br>

        <div class="subsection-header">Low-Fidelity Wireframes (Iteration 1)</div>
        <img class="img" alt="image of the first low-fi wireframe for the warp community redesign"
        src={it1_community}></img>
        <img class="img" alt="image of the first low-fi wireframe for the warp publish redesign"
        src={it1_publish}></img>
        <img class="img" alt="image of the first low-fi wireframe for the warp profile redesign"
        src={it1_profile}></img>
        <ul class="bullets">
            <li>
              Wanted to create a horizontal community tab to utilize the whitespace at the top and so users can have 
              both Warp AI and the community tab open.
            </li>
            <li>
              Wanted to create a seamless flow from tool creation to publication by adding a publish button 
              directly to the workflow in Warp Drive.
            </li>
            <li>
              Wanted users to see published tools in their profile (incentivize publishing their tools to community) and 
              also see statistics for how many likes and downloads their tools receive.
            </li>
          </ul>
          <br></br>

        <div class="subsection-header">Low-Fidelity Wireframes (Iteration 2)</div>
        <img class="img" alt="image of the second iteration of low-fi wireframe for the warp community redesign"
        src={it2_community}></img>
        <ul class="bullets">
            <li>
              After receiving feedback from our client, the only change we made in 
              our second-iteration was changing the community view to be vertical rather than horizontal
            </li>
            <li>
              This is because we wanted to stay consistent with the existing layout of Warp terminal
            </li>
          </ul>

      </div>

      <br></br>

      <div id="solution">
        <div class="section-header">Solution</div>
        <p>
          Lastly, we utilized Figma to create the final high-fidelity, interactive prototype
          with 3 flows (community, publish, and profile):
        </p>
        <video class="img" alt="video of interactive prototype for warp community flow redesign" 
        src={community_flow} controls></video> 
        <video class="img" alt="video of interactive prototype for warp publish flow redesign" 
        src={publish_flow} controls></video> 
        <video class="img" alt="video of interactive prototype for warp profile flow redesign" 
        src={profile_flow} controls></video> 
        

      </div>

      <br></br>

      <div id="learnings">
        <div class="section-header">Learnings</div>
        <p>
          Overall, by working on this project I gained a stronger understanding
          of the full iterative design process while building collaborative designs with a team. 
          Moreover, my team and I were able to practice providing and receiving 
          design critiques where we learned that the first or even the second design 
          is never the final or best design. 
          Additionally, we were able to solve an existing problem with feedback 
          from startups and interact with a senior designer who was our client.
        </p>
        <br></br>
      </div>



    </div>
  );
}
