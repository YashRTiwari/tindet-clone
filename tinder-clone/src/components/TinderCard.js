import React,{useState, useEffect} from 'react'
import "./TinderCard.css"
import RTinderCard from 'react-tinder-card'
import axios from '../axios.js'

function TinderCard() {

    const swiped = (direction, nameToDelete) => {
        console.log("removing" + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name+" left the screen");
    }

    const [people, setPeople] =  useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get("/tinder/cards")
            setPeople(request.data)
        }
        fetchData();
    }, []) // [] only runs once



    return (
        <div className="tinder-cards">
            <div className="tinder-cards-container">
            {
                people.map((person, index) => (
                    <RTinderCard 
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={ () => outOfFrame(person.name)}>
                        
                        <div
                            style={{backgroundImage: "url("+person.url+")"}}
                            className="card">
                            <h3>{person.name}</h3>
                        </div>

                    </RTinderCard>
                )) 
            }
            </div>
        </div>
    )
}

export default TinderCard
