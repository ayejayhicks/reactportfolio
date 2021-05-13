import React from "react";

import hhh from "../assets/images/hhh.png";
import homegrown from "../assets/images/homegrown.png";
import workouttracker from "../assets/images/workouttracker.png";
import budgettracker from "../assets/images/budgettracker.png";
import { timeStamp } from "node:console";

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
            {
                id: 0,
                title: "Hungry Hangry Hippo",
                subTitle: "What are you craving?",
                imgSrc: hhh,
                github: "https://github.com/spicyJackrabbits/theFoodApp",
                link: "https://spicyjackrabbits.github.io/theFoodApp/",
                selected: false
            },
            {
                id: 1,
                title: "HomeGrown",
                subTitle: "Looking for new Plant Moms and Dads",
                imgSrc: homegrown,
                github: "https://github.com/caitie-gorham/project-2",
                link: "https://homegrown-app-grizzlies.herokuapp.com/",
                selected: false
            },
            {
                id: 2,
                title: "Workout Tracker",
                subTitle: "Let's get fit",
                imgSrc: workouttracker,
                github: "https://github.com/ayejayhicks/workouttracker",
                link: "https://limitless-garden-35270.herokuapp.com/",
                selected: false
            },
            {
                id: 3,
                title: "Budget Tracker",
                subTitle: "Track your finances on and offline",
                imgSrc: budgettracker,
                github: "https://github.com/ayejayhicks/budgettracker",
                link: "https://stormy-peak-42811.herokuapp.com/",
                selected: false
            },
            ]

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        item.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <p>Carousel Works!</p>
        );
    }
}

export default Carousel;
