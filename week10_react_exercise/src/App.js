import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        address: '',
        address2: '',
        city: '',
        province: '',
        postalCode: '',
    })
    const [submittedData, setSubmittedData] = useState(null)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmittedData({...formData})
    }

    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Welcome to React Form Examples</h1>

            <form className="data-entry-form" onSubmit={handleSubmit}>
                <h2>Data Entry Form</h2>

                <div className="row">
                    <div>
                        <label htmlFor="email">Email:</label><br />
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="fullName">Full Name:</label><br />
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Full Name"
                            required
                        />
                    </div>
                </div>

                <div className="column">
                    <label htmlFor="address">Address:</label><br />
                    <input
                        id="address"
                        name="address"
                        type="text"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="1234 Main St"
                        required
                    />
                </div>

                <div className="column">
                    <label htmlFor="address2">Address 2:</label><br />
                    <input
                        id="address2"
                        name="address2"
                        type="text"
                        value={formData.address2 || ''}
                        onChange={handleChange}
                        placeholder="Apartment, studio, or floor"
                    />
                </div>

                <div className="row">
                    <div>
                        <label htmlFor="city">City:</label><br />
                        <input
                            id="city"
                            name="city"
                            type="text"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="province">Province:</label><br />
                        <select
                            id="province"
                            name="province"
                            value={formData.province}
                            onChange={handleChange}
                            required
                        >
                            <option value="">-- Select Province --</option>
                            <option>Alberta</option>
                            <option>British Columbia</option>
                            <option>Manitoba</option>
                            <option>New Brunswick</option>
                            <option>Newfoundland and Labrador</option>
                            <option>Nova Scotia</option>
                            <option>Ontario</option>
                            <option>Prince Edward Island</option>
                            <option>Quebec</option>
                            <option>Saskatchewan</option>
                            <option>Northwest Territories</option>
                            <option>Nunavut</option>
                            <option>Yukon</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="postalCode">Postal Code:</label><br />
                        <input
                            id="postalCode"
                            name="postalCode"
                            type="text"
                            value={formData.postalCode}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <button type="submit">Submit</button>
            </form>

            {submittedData && (
                <div className="output-box">
                    <p><span className="label">Email:</span> {submittedData.email}</p>
                    <p><span className="label">Full Name:</span> {submittedData.fullName}</p>
                    <p><span className="label">Address:</span> {submittedData.address}</p>
                    {submittedData.address2 && (
                        <p><span className="label">Address 2:</span> {submittedData.address2}</p>
                    )}
                    <p><span className="label">City:</span> {submittedData.city}</p>
                    <p><span className="label">Province:</span> {submittedData.province}</p>
                    <p><span className="label">Postal Code:</span> {submittedData.postalCode}</p>
                </div>
            )}
        </div>
    );
}

export default App;