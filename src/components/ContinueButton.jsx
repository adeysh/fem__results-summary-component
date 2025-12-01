const ContinueButton = () => {
    return (
        <button
            className="
                w-full rounded-full font-bold text-white text-body bg-dark-gray-blue p-4 border-0 cursor-pointer transition-colors duration-300 ease-in-out 
                
                hover:bg-linear-to-b hover:from-light-slate-blue-bg hover:to-light-royal-blue-bg 
                
                active:scale-[0.98] active:opacity-90 focus:outline-none focus-visible:ring-4 focus-visible:ring-light-slate-blue-bg/40
            "
        >
            Continue
        </button>
    );
};

export default ContinueButton;
