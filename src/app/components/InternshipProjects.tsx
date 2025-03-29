import React from "react";
import Card from "./Card";

export default function InternshipProjects() {
  return (
    <>
      <h2 className="text-lg md:text-xl font-medium mt-6">
        ⭐ Internship projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-4">
        <Card>
          <Card.Image
            src="/logitech.png"
            alt="Website image"
            width={200}
            height={100}
          />
          <Card.Content>
            <Card.Title>Landing page of LogitechG</Card.Title>
            <Card.Description>
              Developed a responsive, user-friendly, SEO optimized landing page
              for LogitechG with a call to action button included.
            </Card.Description>
            <Card.Badges>
              <Card.Badge>ReactJS</Card.Badge>
              <Card.Badge>TailwindCSS</Card.Badge>
              <Card.Badge>Framer Motion</Card.Badge>
              <Card.Badge>Responsive</Card.Badge>
              <Card.Badge>Shadcn</Card.Badge>
            </Card.Badges>
            <Card.Buttons>
              <Card.LiveButton live="https://logitech-faizjs.netlify.app/">
                Live demo
              </Card.LiveButton>
              <Card.URLButton github="https://github.com/Faiz-js/NovaNectar-landing-page">
                Source code
              </Card.URLButton>
            </Card.Buttons>
          </Card.Content>
        </Card>

        <Card>
          <Card.Image
            src="/jobPortal.png"
            alt="Website image"
            width={200}
            height={100}
          />
          <Card.Content>
            <Card.Title>Job Portal website</Card.Title>
            <Card.Description>
              Worked with Figma design for the first time to develop a UI for
              the Job Portal website.
            </Card.Description>
            <Card.Badges>
              <Card.Badge>ReactJS</Card.Badge>
              <Card.Badge>TailwindCSS</Card.Badge>
              <Card.Badge>Framer Motion</Card.Badge>
              <Card.Badge>Responsive</Card.Badge>
              <Card.Badge>Figma</Card.Badge>
            </Card.Badges>
            <Card.Buttons>
              <Card.LiveButton live="https://job-portal-faizjs.netlify.app/">
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
            src="/sidhbali.png"
            alt="Website image"
            width={200}
            height={100}
          />
          <Card.Content>
            <Card.Title>Sidhbali Childcare Hospital website</Card.Title>
            <Card.Description>
              Developed a Childcare hospital of Sidhbali where users can know
              about the hospital, get an appoinment, get to know about doctors
              of the hospital and contact the hospital for emergency cases.
            </Card.Description>
            <Card.Badges>
              <Card.Badge>ReactJS</Card.Badge>
              <Card.Badge>TailwindCSS</Card.Badge>
              <Card.Badge>Frontend</Card.Badge>
              <Card.Badge>Responsive</Card.Badge>
            </Card.Badges>
            <Card.Buttons>
              <Card.LiveButton live="https://sidhbali-faizjs.netlify.app/">
                Live demo
              </Card.LiveButton>
              <Card.URLButton github="https://github.com/Faiz-js/NovaNectar-Sidhbali">
                Source code
              </Card.URLButton>
            </Card.Buttons>
          </Card.Content>
        </Card>

        <Card>
          <Card.Image
            src="/fitness.png"
            alt="Website image"
            width={200}
            height={100}
          />
          <Card.Content>
            <Card.Title>Fitness Freak website</Card.Title>
            <Card.Description>
              In these project, I have developed a fitness website using an API
              named ExerciseDB from RapidAPI. The users can search for any
              exercise or search for any muscle group and get the exercises
              related to that muscle group.
            </Card.Description>
            <Card.Badges>
              <Card.Badge>ReactJS</Card.Badge>
              <Card.Badge>MaterialUI</Card.Badge>
              <Card.Badge>API</Card.Badge>
              <Card.Badge>ExerciseDB</Card.Badge>
              <Card.Badge>RapidAPI</Card.Badge>
            </Card.Badges>
            <Card.Buttons>
              <Card.LiveButton live="https://fitness-faizjs.netlify.app/">
                Live demo
              </Card.LiveButton>
              <Card.URLButton github="https://github.com/Faiz-js/Novanectar-fitness">
                Source code
              </Card.URLButton>
            </Card.Buttons>
          </Card.Content>
        </Card>
      </div>
    </>
  );
}
