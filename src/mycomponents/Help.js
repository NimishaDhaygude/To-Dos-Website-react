import React, { useState} from 'react'

const Help = () => {
    const [email, setEmail] = useState("");
const [problem, setProblem] = useState("");

const handleEmailChange = (e) => {
    setEmail(e.target.value);
};

const handleProblemChange = (e) => {
    setProblem(e.target.value);
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !problem) {
        alert("Email or description cannot be blank !!!");
    } else {
        alert('Thanks for your response. Will get in touch with you soon...');
        setEmail("");
        setProblem("");
    }
};

    return (
        <div className="container-other container my-5">
            <h2>Having a problem ?</h2>
            <div class=" mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" value={email} placeholder="name@example.com" onChange={handleEmailChange } />
            </div>
            <div class="mb-3">
                <label for="problem" class="form-label">Explain Us your problem</label>
                <textarea class="form-control" id="problem" rows="3" value={problem} onChange={handleProblemChange }></textarea>
                <button type="submit" className="btn btn-primary btn-sm my-3" onClick={handleSubmit}>Submit</button>
            </div>
            <div className="troubleshooting"><h3>Some common ways for Troubleshooting : </h3>
                <ul><li>Check if the Site Is Down Only for You.</li>
                <li>Check the Network Connection.
                Use Another Device.</li>
                <li>
                Use Another Device.</li>
                <li>Look For Error Messages in the Browser.</li>
                <li>Try a Different Browser.</li>
                </ul></div>
        </div>
    )
}

export default Help
