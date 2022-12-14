import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const ForeCast = ({data}) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays =WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInAWeek)
    );
    console.log(forecastDays);

    return (
        <>
    <span className="title">Daily</span>
    <Accordion allowZeroExpanded>
        {data.list?.slice(0, 7).map((item, idx) => (
        <AccordionItem key={idx}>
            <AccordionItemHeading>
            <AccordionItemButton>
                <div className="daily-item">
                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                   <label className="day ">{forecastDays[idx]}</label>
                </div>
            </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
        </AccordionItem>
        ))}

    </Accordion>
    </>
 
    );
};

 export default ForeCast;