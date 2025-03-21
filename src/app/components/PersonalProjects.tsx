import React from "react";
import Card from "./Card";

export default function PersonalProjects() {
  return (
    <>
      <h2 className="text-lg md:text-xl font-medium mt-10">
        ⭐ Personal projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-4">
        <Card>
          <Card.Image
            src="/brandPage.png"
            alt="Website image"
            width={200}
            height={100}
          />
          <Card.Content>
            <Card.Title>Nike Brand Page</Card.Title>
            <Card.Description>
              My first ReactJS project in which I tried to develop a landing
              page for the Nike Brand.
            </Card.Description>
            <Card.Badges>
              <Card.Badge>ReactJS</Card.Badge>
              <Card.Badge>TailwindCSS</Card.Badge>
              <Card.Badge>Responsive</Card.Badge>
            </Card.Badges>
            <Card.Buttons>
              <Card.LiveButton live="https://nike-faizjs.netlify.app/">
                Live demo
              </Card.LiveButton>
              <Card.URLButton github="https://github.com/Faiz-js/Nike-brand-page">
                Source code
              </Card.URLButton>
            </Card.Buttons>
          </Card.Content>
        </Card>

        <Card>
          <Card.Image
            src="/contactApp.png"
            alt="Website image"
            width={200}
            height={100}
          />
          <Card.Content>
            <Card.Title>Contact App</Card.Title>
            <Card.Description>
              A website in which a user can store the name and email of other
              users using Firebase.
            </Card.Description>
            <Card.Badges>
              <Card.Badge>ReactJS</Card.Badge>
              <Card.Badge>TailwindCSS</Card.Badge>
              <Card.Badge>Responsive</Card.Badge>
              <Card.Badge>FirebaseDB</Card.Badge>
            </Card.Badges>
            <Card.Buttons>
              <Card.LiveButton live="https://logitech-faizjs.netlify.app/">
                Live demo
              </Card.LiveButton>
              <Card.URLButton github="https://github.com/Faiz-js/NovaNectar-JobPortal">
                Source code
              </Card.URLButton>
            </Card.Buttons>
          </Card.Content>
        </Card>

        <Card>
          <Card.Image
            src="/ecommerce.png"
            alt="Website image"
            width={200}
            height={100}
          />
          <Card.Content>
            <Card.Title>Ecommerce website using React-redux</Card.Title>
            <Card.Description>
              To be honest these project is a regular Ecommerce website but I
              have used React-redux as a state management library.
            </Card.Description>
            <Card.Badges>
              <Card.Badge>ReactJS</Card.Badge>
              <Card.Badge>TailwindCSS</Card.Badge>
              <Card.Badge>React-redux</Card.Badge>
              <Card.Badge>React-redux-toolkit</Card.Badge>
              <Card.Badge>Responsive</Card.Badge>
            </Card.Badges>
            <Card.Buttons>
              <Card.LiveButton live="https://ecommerce-faizjs.netlify.app/">
                Live demo
              </Card.LiveButton>
              <Card.URLButton github="https://github.com/Faiz-js/Ecommerce-with-redux-toolkit">
                Source code
              </Card.URLButton>
            </Card.Buttons>
          </Card.Content>
        </Card>

        <Card>
          <Card.Image
            src="/foodMeal.png"
            alt="Website image"
            width={200}
            height={100}
          />
          <Card.Content>
            <Card.Title>Recipe finder website</Card.Title>
            <Card.Description>
              These is a website in which I have used a third party API to fetch
              the data of the recipe of the food and display it on the frontend.
            </Card.Description>
            <Card.Badges>
              <Card.Badge>ReactJS</Card.Badge>
              <Card.Badge>TailwindCSS</Card.Badge>
              <Card.Badge>Responsive</Card.Badge>
              <Card.Badge>API</Card.Badge>
            </Card.Badges>
            <Card.Buttons>
              <Card.LiveButton live="https://foodmeal-faizjs.netlify.app/">
                Live demo
              </Card.LiveButton>
              <Card.URLButton github="https://github.com/Faiz-js/FoodMeal">
                Source code
              </Card.URLButton>
            </Card.Buttons>
          </Card.Content>
        </Card>
      </div>
    </>
  );
}
