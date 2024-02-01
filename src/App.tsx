import BasicComponents from "./basic-components";
import PersonIdentity from "./person-identity";
import Counter from "./counter";
import Event from "./event";
import ConditionalRender from "./conditional-render";
import Context from "./context";

function App() {
  const exercise1 = ['Interface', 'Type', 'Functions', 'Classes']

  return (
    <>
      <BasicComponents basic={exercise1}/>
      <PersonIdentity name="Sergio" age="27" hobbies={['futbol', 'billar', 'comer']}/>
      <Counter />
      <Event />
      <ConditionalRender name="Sergio" age="?" car="BMW" />
      <Context />
    </>
  );
}

export default App;
