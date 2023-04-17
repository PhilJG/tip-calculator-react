export default function Result({ tip, bill, people, handleReset }) {
    let billNum = parseFloat(bill);
    let peopleNum = parseInt(people);
    let tipNum = parseFloat(tip);

    const tipResult = function () {
        let tipr = (billNum * tipNum) / peopleNum;
        if (isNaN(tipr) || tipr === Infinity) {
            tipr = 0;
        }
        return tipr.toFixed(2);
    };

    const totalResult = function () {
        let totlr = (billNum + (billNum * tipNum)) / peopleNum;

        if (isNaN(totlr) || totlr === Infinity) {
            totlr = 0;
        }

        return totlr.toFixed(2);
    }


    return (
        <section className="result">
            <div className="result__total">
                <div className="result__total--units">
                    <h4>Tip Amount</h4>
                    <h5>/ person</h5>
                </div>
                <h1 className="result__total--tip">{`$${tipResult()}`}</h1>
            </div>
            <div className="result__total">
                <div className="result__total--units">
                    <h4>Total</h4>
                    <h5>/ person</h5>
                </div>
                <h1 className="result__total--bill">{`$${totalResult()}`}</h1>
            </div>

            <button id="reset" onClick={handleReset}>Reset</button>
        </section>
    );
}