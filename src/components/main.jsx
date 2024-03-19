import Card from "./card";
import { useState } from "react";

function Main() {
    const [pet, setPet] = useState({
        img: "https://images.dog.ceo/breeds/buhund-norwegian/hakon3.jpg",
        name: "Simba",
        gender: "masculine",
        age: "6",
        city: "Alcoletge"                   
    });

    function nextPet() {
        fetch(
            "https://petinder-production.up.railway.app/pets"
        )
            .then((result) => result.json())
            .then((data) => {
                setPet(data);
                console.log(pet);
            });
    }

    return (
        <main>
            <Card />
            <button onClick={nextPet}>❌</button>
            <button onClick={nextPet}>💚</button>
        </main>
    );
}

export default Main;
