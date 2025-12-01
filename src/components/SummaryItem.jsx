const SummaryItem = ({ category, score, icon, bgColor, textColor }) => {
    return (
        <div className={`${bgColor} flex p-4 justify-between items-center rounded-xl md:gap-24`}>
            {/* LEFT Content */}
            <div className="flex items-center gap-4">
                <img
                    src={icon}
                    alt={category}
                    className="w-5 h-5 object-contain"
                />
                <p className={`text-summary-label ${textColor} font-bold`}>{category}</p>
            </div>
            {/* RIGHT Content */}
            <p className="text-dark-gray-blue/40 font-bold">
                <span className="text-dark-gray-blue text-body font-bold">{score}</span> / 100
            </p>
        </div>
    );
};

export default SummaryItem;
