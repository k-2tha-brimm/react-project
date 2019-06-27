# JetFuel Take Home Exercise - Kevin Brimmerman

## Project Overview

This is my attempt at recreating the Plug app for mobile. This was done on the afternoon of June 26, 2019, using the iPhone X layout in Chrome developer tools.

What I tried to do was break the application up into two main components. It felt natural to begin by creating a component for Campaigns. Then I began considering the layout of the application. Using a flex display and segmenting the component into two distince parts made sense, so I created a container for the Campaign's information (the logo, name, and CPI) that would sit on top of the media carousel.

From there I mapped over each media object to determine whether or not it was a video (they all were, it appears), and conditionally rendered a play button in the event that the media_type was "video".

Please see a short gif of the functioning app below.

![Alt Text](app/src/demo_jetfuel.gif)

I hope that you enjoy the result! I had a lot of fun doing this, and I would certainly welcome the challenge of getting the inline video/pull to refresh going, if that is something that you would like to see.

Cheers,
Kevin!

Update #1 - June 27th: Added a loading bar to the main application and an error message for when the API call returns no data to the app. Pulled a quote of the day from an external API to help fill some of the blank space.