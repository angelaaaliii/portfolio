import './Fun.css';
import FunCrochet from './FunCrochet';
import FunReading from './FunBooks';


export default function Fun() {
  return (
    <div id="fun">
      <h1 id ="fun-title">Fun</h1>

      <div id = "case-studies">
        <FunCrochet></FunCrochet>

        <FunReading></FunReading>

      </div>

    </div>
  );
}
