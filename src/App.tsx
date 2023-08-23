import { Loading } from "./components/Loading";
import { Error } from "./components/Error";
import { Data } from "./components/Data";

const url = "http://localhost:7070/";

export default function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="container_column">
          <Loading url={url} />
          <Error url={url} />
          <Data url={url} />
        </div>
      </div>
    </div>
  );
}
