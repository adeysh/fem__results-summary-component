import SummaryItem from "./SummaryItem";
import summaryData from "/src/data.json";
import styleMap from "../utils/styleMap";

const SummaryCard = () => {
    return (
        <section className="flex flex-col gap-6">
            {/* Title */}
            <h2 className="text-summary-title text-dark-grey-blue font-bold">Summary</h2>

            {/* Items */}
            <ul className="flex flex-col gap-4">
                {summaryData.map((item) => {
                    const style = styleMap[item.category];

                    return (
                        <SummaryItem
                            key={item.category}
                            {...item}
                            {...style}
                        />
                    );
                })}
            </ul>
        </section>
    );
};

export default SummaryCard;
