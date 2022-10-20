import React from 'react';


const Day1 = () => {
    React.useEffect(() => {
        const slides = document.querySelectorAll('.slide')

        for (let slide of slides) {
            slide.addEventListener('click', handlerClick)
        }

        function handlerClick(e) {
            clearActiveClasses()
            e.target.classList.add('active')
        }

        function clearActiveClasses() {
            slides.forEach(slide => slide.classList.remove('active'))
        }

        return () => {
            slides.forEach(slide => slide.removeEventListener('click', handlerClick))
        }
    }, []);

    return (
        <div className="day1-wrapper">
            <div className="container">
                <h1>Day 1 | Cards</h1>
                <div className="cards">
                    <div
                        className="slide active"
                        style={{backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80')"}}
                    >
                        <h3>Alone in the unspoilt wilderness</h3>
                    </div>
                    <div
                        className="slide"
                        style={{backgroundImage: "url('https://images.unsplash.com/photo-1665457652244-c989a9f908ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80')"}}
                    >
                        <h3>Mountains</h3>
                    </div>
                    <div
                        className="slide"
                        style={{backgroundImage: "url('https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"}}
                    >
                        <h3>Sunrise</h3>
                    </div>
                    <div
                        className="slide"
                        style={{backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80')"}}
                    >
                        <h3>Beautiful woodland</h3>
                    </div>
                    <div
                        className="slide"
                        style={{backgroundImage: "url('https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"}}
                    >
                        <h3>Emerald Bay</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Day1;
