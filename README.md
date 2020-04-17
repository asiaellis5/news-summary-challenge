# News Summary challenge

Weekend challenge completed at Makers Academy. It pulls in the Guardian API for the top 10 headlines at the time and allows the user to see the Headline and a picture and click on them to read the full Guardian article. Front end JavaScript application with serverless architecture and a test suite that I wrote myself.

## How to Run

Clone this repo, from the command line navigate to the root directory and in the command line check to see if you ahave node.js installed on yout machine by typing:

```
node -v
```

If not, install it by typing in the following command:

```
brew install node
```

Now we want to initialize Node with the Http-Server library. From the root directory, in the command line type:

```
npm install http-server --save
```

You can now run the local server from command line by typing:

```
node node_modules/http-server/bin/http-server
```

Then visit: localhost://8080


### Testing
This App uses a test library I made myself, using the assert function to test for truthyness. To check the test suite, open the SpecRunner.html file in your browser and open the console in the developer tools and it will say if the test is passing or will assert that it isnt.


## Challenge

## User Stories

Some of these stories will need decomposing if they seem too large.

```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```

```
As a busy politician
I can click a link to see the original news article
So that I can get an in depth understanding of a very important story
```

```
As a busy politician
I can see a summary of a news article
So I can get a few more details about an important story
```

```
As a busy politician
I can see a picture to illustrate each news article when I browse headlines
So that I have something nice to look at
```

```
As a busy politician
I can read the site comfortably on my phone
Just in case my laptop breaks
```

```
As a busy politician
I can see whizzy animations in the app
To make my news reading more fun
```

