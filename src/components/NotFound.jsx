import React from "react";
import {useNavigate} from "react-router-dom";


function NotFound() {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                No records found according to your search!</h1>
            <div>
                <button
                    onClick={() => navigate("/")}
                    className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                >
                    Back to main menu
                </button>
            </div>
        </div>
    )
}

export default NotFound;
