import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#eeeeee"
        }}>
            <Router>
                <Appbar />
                <Routes>
                    <Route path={"/addcourse"} element={<AddCourse />} />
                    <Route path={"/signin"} element={<Signin />} />
                    <Route path={"/signup"} element={<Signup />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;