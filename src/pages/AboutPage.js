import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Welcome to my portfolio! My name is Alaina J. Hicks, AJ for short. I am a SAHM raising 2 awesome kiddos. My life's
        work is to raise awareness about Autism. I do this by allowing my journey with my son, Cannon to be on full
        display. I also build relationships with those that may have concerns about their own child, a family member or
        are just interested in learning more about Autism. I am from Chicago, IL affectionately known as the "Windy
        City". Home to the Monsters of the Midway, the Chicago White Sox and the 2016 World Series champion team,
        Chicago Cubs.</p>
        
        <p>In my spare time I enjoy family, fitness, dining and finding the best plant based restaurants as
        well as traveling. My past work with the military has granted me opportunities to travel to Alaska, Hawaii,
        Japan and throughout Europe (Italy, Germany, the Netherlands and Switzerland). My goal is to travel all 50
        states as well as visit a number of countries and islands.</p>

      <p>I enjoy Customer Service, being of assistance to someone as well as interaction which is how I found my love
        for Hospitality Management with the Marriott brand. I have worked in Non-Profit and Education, teaching
        Pre-Kindergarten for 4 years as well as Middle School SPED with a focus on students with Autism. I decided to
        take a pivot in the workfoce after being introduced to Full Stack Web Development by a friend. Although it's
        very challenging and puts me way outside of my comfort zone I am along for the ride. Buckle up!</p>
            </Content>
        </div>
    );

}

export default AboutPage;