import ContinueButton from "./components/ContinueButton";
import ResultCard from "./components/ResultCard";
import SummaryCard from "./components/SummaryCard";

function App() {
    return (
        <div className="flex flex-col md:flex-row justify-center bg-white md:rounded-3xl">
            <ResultCard />
            <div className="p-10 flex flex-col gap-6">
                <SummaryCard />
                <ContinueButton />
            </div>
        </div>
    );
}

export default App;
