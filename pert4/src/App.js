import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ControlledForm from "./components/ControlledForm";
import Projects from "./components/Projects/Projects";
import UncontrolledForm from "./components/UncontrolledForm";
import About from "./components/About";
import Details from "components/Projects/Details";
// import Details from "./components/Projects/Details";

function App() {
  
    // dia bakal ngerender apapun yang didalamnya selama dia melakukan refresh atau pageload
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //   setLoading(false)
    // }, [])

    // const Home = () => <>Test</>
    // const Abouts = () => <>Test</>

    return (
        <div className="App">
            {/* {loading ? <div>loading...</div> : (
            <Home />
            <Abouts />
          )} */}

            {/* Versi lamanya */}
            {/* <Router>
                <Switch>
                    <Route path="/about" component={<About />} />
                    <Route path="/projects" component={<Projects />} />
                </Switch>
            </Router> */}

            {/* Versi terbarunya */}
            <Router>
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:projectsId" element={<Details />} />
                </Routes>
            </Router>

            {/* <UncontrolledForm /> */}
            <ControlledForm />
        </div>
    );

    // Path -> Relative dan Absolute (Alias)

    // Relative Path
    // Absolute Path (alias Path)
}

export default App;
