// frontend/src/pages/Listings.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Listings() {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        const fetchListings = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/listings`);
            setListings(res.data);
        }
        fetchListings();
    }, []);

    return (
        <div>
            <h2>Room Listings</h2>
            <ul>
                {listings.map(l => (
                    <li key={l.id}>{l.title} - ₹{l.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default Listings;
