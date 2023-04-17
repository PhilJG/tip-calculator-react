import { ReactComponent as Dollar } from "../images/icon-dollar.svg";
import { ReactComponent as Person } from "../images/icon-person.svg";


export default function Calculator({
    bill,
    people,
    tip,
    handleBill,
    handlePeople,
    handleTip,
    tipPercentage,
    entryRef, peopleRef, customClick
}) {


    const tipButtons = tipPercentage.map((percentage, index) => (
        <button
            key={index}
            className={percentage === tip ? "percentSelect:focus " : "percentSelect"}
            value={percentage}
            onClick={handleTip}
        >
            {`${percentage * 100}%`}
        </button>
    ));

    return (
        <section className="container calculator">
            <div className="input__span">
                <h3>Bill</h3>
                <span id="input__message--bill" className="hidden">Must be a number</span>
            </div>
            <div className="input__wrapper">

                <input
                    id="entry"
                    className="input__main"
                    placeholder="0.00"
                    type="number" ref={entryRef}
                    onChange={handleBill}
                />
                <Dollar className="input__icon" />
            </div>

            <h3>Select Tip %</h3>

            <div id="tipSelect">
                {tipButtons}
                <button className="customPercent" onClick={customClick} >Custom</button>
                <input
                    id="customInput"
                    className="percentSelect hidden"
                    type="number"
                />
            </div>

            <div className="input__span">
                <h3>Number of People</h3>
                <span id="input__message--people" className="hidden">Can't be zero</span>
            </div>
            <div className="input__wrapper">

                <input type="number" className="input__main" placeholder="0" id="people" onChange={handlePeople} />

                <Person className="input__icon" />

            </div>
        </section >

    )
}