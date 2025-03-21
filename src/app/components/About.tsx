import React from "react";
import AboutCompo from "./AboutCompo";

export default function About() {
  return (
    <section id="about" className="py-4">
      <h1 className="text-2xl md:text-3xl font-bold text-[hsl(var(--foreground))]">
        About me
      </h1>

      <p className="text-lg md:text-xl my-4 text-[hsl(var(--muted-foreground))]">
        Hello readers, I am Faiz Mohamed and I am a final year Btech computer
        branch student from Daman.
      </p>

      <p className="text-lg md:text-xl my-4 text-[hsl(var(--muted-foreground))]">
        In these section I will tell you about myself.
      </p>

      <AboutCompo>
        <AboutCompo.Heading>Education till 10th</AboutCompo.Heading>
        <AboutCompo.Paragraph>
          So I completed my 10th std from Holy Trinity Secondary and Higher
          Secondary School, Daman (67.81%).
        </AboutCompo.Paragraph>
      </AboutCompo>

      <AboutCompo>
        <AboutCompo.Heading>Opted for science stream</AboutCompo.Heading>
        <AboutCompo.Paragraph>
          Back during those days I was very much fond of cars, so I decided that
          I would become an Automobile Engineer.
        </AboutCompo.Paragraph>
      </AboutCompo>

      <AboutCompo>
        <AboutCompo.Heading>Completed my 12th std</AboutCompo.Heading>
        <AboutCompo.Paragraph>
          I got 69% in my 12th boards thanks to covid-19 (mass promotion).
        </AboutCompo.Paragraph>
      </AboutCompo>

      <AboutCompo>
        <AboutCompo.Heading>Fell in love with coding</AboutCompo.Heading>
        <AboutCompo.Paragraph>
          Developed a bit of affection towards coding, learned HTML in school
          during 12th std.
        </AboutCompo.Paragraph>
      </AboutCompo>

      <AboutCompo>
        <AboutCompo.Heading>
          Choose Btech Computer Engineering
        </AboutCompo.Heading>
        <AboutCompo.Paragraph>
          During lockdown I noticed the rise and advancement in technology so I
          decided to become a Computer Engineer (may be Automobile Engineer in
          another universe).
        </AboutCompo.Paragraph>
      </AboutCompo>

      <AboutCompo>
        <AboutCompo.Heading>First year of college</AboutCompo.Heading>
        <AboutCompo.Paragraph>
          Learned basics of C programming, and other subjects like Basic
          Mechaninal Engineering and Engineering Graphics and Design.
        </AboutCompo.Paragraph>
      </AboutCompo>

      <AboutCompo>
        <AboutCompo.Heading>Second year of college</AboutCompo.Heading>
        <AboutCompo.Paragraph>
          Got to know about Java language and to be honest it is my second most
          favourite programming language (first one is obviously Javascript).
        </AboutCompo.Paragraph>
      </AboutCompo>

      <AboutCompo>
        <AboutCompo.Heading>Third year of college</AboutCompo.Heading>
        <AboutCompo.Paragraph>
          Realized that only studying college books will not lend me a job so
          started working on my skills.
        </AboutCompo.Paragraph>
      </AboutCompo>

      <AboutCompo>
        <AboutCompo.Heading>
          Journey to become a Web Developer
        </AboutCompo.Heading>
        <AboutCompo.Paragraph>
          Learned HTML, CSS and Javascript from youtube, thanks to Apna college
          and Code with Harry ❤️.
        </AboutCompo.Paragraph>
      </AboutCompo>

      <AboutCompo>
        <AboutCompo.Heading>First internship</AboutCompo.Heading>
        <AboutCompo.Paragraph>
          Did my first internship as a web developer intern at Codsoft which is
          an IT service and consultancy company specialized in creating
          innovative solutions for business.
        </AboutCompo.Paragraph>
      </AboutCompo>

      <AboutCompo>
        <AboutCompo.Heading>Started learning ReactJS</AboutCompo.Heading>
        <AboutCompo.Paragraph>
          Learning ReactJS was like a paradise, I never enjoyed coding like
          these ever before.
        </AboutCompo.Paragraph>
      </AboutCompo>

      <AboutCompo>
        <AboutCompo.Heading>Backend learning</AboutCompo.Heading>
        <AboutCompo.Paragraph>
          To be honest I really struggled learning backend development, may be
          that's not of my type, like I knew the syntax but I didn't knew how
          can I use them in a real world application. So I sticked with Frontend
          development.
        </AboutCompo.Paragraph>
      </AboutCompo>

      <AboutCompo>
        <AboutCompo.Heading>Data Structures and Algorithm</AboutCompo.Heading>
        <AboutCompo.Paragraph>
          Started learning DSA in java and did some leetcode questions which
          really helped me in logic building and ability to think outside of the
          box.
        </AboutCompo.Paragraph>
      </AboutCompo>

      <AboutCompo>
        <AboutCompo.Heading>Second internship</AboutCompo.Heading>
        <AboutCompo.Paragraph>
          Did my second internship for 3 months as a frontend developer at
          Novanectar Services Pvt. Ltd. which is a startup company providing IT
          solutions in web development, app development, graphic designing and
          much more.
        </AboutCompo.Paragraph>
      </AboutCompo>
    </section>
  );
}
