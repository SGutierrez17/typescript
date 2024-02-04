import BasicComponents from "./basic-components";
import PersonIdentity from "./person-identity";
import Counter from "./counter";
import Event from "./event";
import ConditionalRender from "./conditional-render";
import Context from "./context";
import ReadOnly from "./readonly";
import AliasesUnion from "./aliases-union";
import Tuple from "./tuple-type";
import List from "./t-list";

function App() {
  const exercise1 = ['Interface', 'Type', 'Functions', 'Classes']
  const stringArray = ['One', 'Two', 'Three'];

  return (
    <>
      <BasicComponents basic={exercise1}/>
      <PersonIdentity name="Sergio" age="27" hobbies={['futbol', 'billar', 'comer']}/>
      <Counter />
      <Event />
      <ConditionalRender name="Sergio" age="?" car="BMW" />
      <Context />
      <List items={stringArray} renderItem={(item) => <span>{item}</span>}/>
      <ReadOnly name={['Sergio' , ' Gutierrez']}/>
      <AliasesUnion ubication={'Bucaramanga'}/>
      <Tuple />
    </>
  );
}

export default App;
