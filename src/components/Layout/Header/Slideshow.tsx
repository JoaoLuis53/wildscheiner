import { useEffect, useState } from 'react';
import './Slideshow.css';
import imageSlide from '../Header/data';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";


export const Slideshow = () => {
    const [currentState, setCurrentState] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentState === 2) {
                setCurrentState(0);
            } else {
                setCurrentState(currentState + 1);
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentState]);

    const bgImageStyle = {
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        margin: '0 10px',
        transition: 'all ease 0.8s'
    }

    const goToNext = (currentState: any) => {
        if (currentState === 2) {
            setCurrentState(0);
        } else {
            setCurrentState(currentState + 1);
        }
    }
    const goToPrevious = (currentState: any) => {
        if (currentState === 0) {
            setCurrentState(2);
        } else {
            setCurrentState(currentState - 1);
        }
    }

    return (
        <div className='sliders'>
            <div className='slider'>
                <div className='slider-control'>
                    <div className='control' onClick={() => goToPrevious(currentState)}>
                        <span><FaAngleDoubleLeft /></span>
                    </div>
                    <div className='control' onClick={() => goToNext(currentState)}>
                        <span><FaAngleDoubleRight /></span>
                    </div>
                </div>
                <div style={bgImageStyle}></div>
                <div className='shadow'></div>
            </div>
        </div>
    );
}