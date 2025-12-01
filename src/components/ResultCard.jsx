import ScoreCircle from "./ScoreCircle";

const ResultCard = () => {
    return (
        <div className="bg-linear-to-b from-light-slate-blue-bg to-light-royal-blue-bg p-6 md:p-10 rounded-b-3xl md:rounded-3xl flex justify-center">
            <div className="flex flex-col justify-center items-center gap-5 text-center md:justify-between">
                <h1 className="text-result-title text-light-lavender font-bold">Your Result</h1>
                <ScoreCircle />
                <div className="max-w-[250px] flex flex-col gap-2">
                    <p className="text-result-grade text-white font-bold">Great</p>
                    <p className="text-base text-light-lavender">
                        You scored higher than 65% of the people who have taken these tests.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ResultCard;
