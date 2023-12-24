import Home from "./components/Home";
import "./index.css";

const App = () => {
    return (
        <div className="h-screen w-screen">
            <div className="h-full flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold">
                Hello React with Webpack and TypeScript
                </h1>
                <div className="">
                    <Home />
                </div>
            </div>
        </div>
    )
};

export default App;