import { useEffect, useState } from "react";
import { images } from "../assets/images";


const Slider = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Step 4: Function to handle moving to the previous image.
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
    return (
        <div>
            <div className="img-container" style={{ background: `url(${images[currentIndex]})` }}>
                <div className="img-box">
                    <img
                        src={images[currentIndex]}
                    />
                </div>
                <div className="arrow">
                    <button onClick={handlePrev}>Previous</button>
                    <button onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Slider
