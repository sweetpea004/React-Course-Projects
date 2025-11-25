export default function Input({input, handleInputChange}) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input 
                        type="number" 
                        required 
                        value={input.initialInvestment}
                        onChange={(event) => handleInputChange('initialInvestment', event.target.value)}
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input 
                        type="number" 
                        required 
                        value={input.annualInvestment}
                        onChange={(event) => handleInputChange('annualInvestment', event.target.value)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input 
                        type="number" 
                        required 
                        value={input.expectedReturn}
                        onChange={(event) => handleInputChange('expectedReturn', event.target.value)}
                    />
                </p>
                <p>
                    <label>Investment Duration</label>
                    <input 
                        type="number" 
                        required 
                        value={input.duration}
                        onChange={(event) => handleInputChange('duration', event.target.value)}
                    />
                </p>
            </div>
        </section>
    );
}