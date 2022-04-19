import { Component } from '@angular/core';
import { faTimes, faStar } from '@fortawesome/free-solid-svg-icons';

interface Feedback {
  title: string;
  stars: Array<number>;
  text: string;
  from: string;
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent {
  faTimes = faTimes;
  faStar = faStar;
  constructor() {}
  currentYear = new Date().getFullYear();
  public feedbacks: Array<Feedback> = [
    {
      title: 'HTML add location 👏',
      stars: Array(5),
      text: `HTML add location selection to 3rd party widget. Same as last
      time. Super helpful. Got the work done in super fast time. Very
      proactive!`,
      from: 'Upwork Client'
    },
    {
      title: 'Completed Successfully! 👏',
      stars: Array(5),
      text: `DevA2Z was very innovative and did the work I had exceptionally
      well. He was also good at communicating and his made managing
      the project easy. I would highly.`,
      from: 'Upwork Client'
    },
    {
      title: 'Flutter Task 👏',
      stars: Array(5),
      text: `Well experienced with flutter technology nice to work with
      you.Thanks`,
      from: 'Upwork Client'
    },
    {
      title: 'IOS Task! 👏',
      stars: Array(5),
      text: `DevA2Z is the best in IOS field. He kept his commitment about
      the deadline and helped me solve my problem taking authority. I
      highly recommend him. Thank you.`,
      from: 'Upwork Client'
    },
    {
      title: 'HTML Bug Fix 👏',
      stars: Array(5),
      text: `streamlined. very efficient. no delay. very fast.`,
      from: 'Upwork Client'
    },
    {
      title: 'Flutter Code 👏',
      stars: Array(5),
      text: `DevA2Z has done a great job, he has strong knowledge of mobile
      app development. We will work with him again.`,
      from: 'Upwork Client'
    },
    {
      title: 'Completed Successfully! 👏',
      stars: Array(5),
      text: `I had a good time working with DevA2Z and will be back in the
      future to work with him again. Very talented developer.`,
      from: 'Upwork Client'
    },
    {
      title: 'Flutter Code! 👏',
      stars: Array(5),
      text: `DevA2Z is a great Flutter Developer !!! super serious. super
      devoted. DevA2Z up all night to finish the job dute to a hard
      deadline, completed the job successfully...`,
      from: 'Upwork Client'
    },
    {
      title: 'Completed Successfully! 👏',
      stars: Array(5),
      text: `one of the best and dynamic guys to work with them. Understands
      your requirements and goes extra mile...`,
      from: 'Upwork Client'
    },
    {
      title: 'Python Task ! 👏',
      stars: Array(5),
      text: `Prefect Python Developer. They solved a lot of the complications
      and did the work as expected exactly...`,
      from: 'Upwork Client'
    },
    {
      title: 'DigitalOcean`s Droplet 👏',
      stars: Array(5),
      text: `Trainig on how to use DigitalOcean\`s Droplet running Strapi!
      Completed job on time and was a pleasure to work with.`,
      from: 'Upwork Client'
    },
  ]
}
