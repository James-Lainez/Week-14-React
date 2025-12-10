/*Task 1: Make some test data

First, decide what you want your CRUD app to be. 

Here are some ideas:
  - A recipe manager that lets you add/remove/update recipes
  - A music app that doesn't play any music, it just allows you to add/remove/update songs 
      in one playlist
  - A shopping app that allows you to add/remove/update items in your cart
  - A to-do app that lets you add/remove/update tasks in a list
  - A scheduling app that lets you request (add) appointments, update appointment requests,
      and cancel (remove) your requests

Then make some test data. This will make it easier to plan out and build your app,
because you’ll have pre-filled data to work with.
You can put your test data in its own file and import it, or put it in one of your component files.
It doesn’t matter too much where you put it right now, you can always move it later.*/

/*Task 2: Make a very simple mock-up

What will the UI of your app look like? Will there be a sidebar? A top bar?
Will the data be shown in a table, a list, rows of cards, etc?
Don’t spend too much time on this step, this isn’t the important develop-y bit.
And on the job as a junior developer, you probably won’t be making these choices.
But we need some kind of plan, so make a quick plan. */

/*Task 3: Break it into components

Take a look at your mockup and decide how you want to break the UI up into React components.
You have to use at least three components, so you can practice using components and props.

Example components could be:
- App
- Sidebar
- ItemList
- ItemCard */

/*Task 4: Write the components
Create the file for each component and write the component function so it returns the JSX
for that part of the app. Make sure you’re displaying lists of data according to best practices
- using the map array method and the key prop.*/

/*Task 5: Use props to pass data down and customize components

If you haven’t put in any props yet, then each of your items are probably showing the same data.
You’ll need to use props to have each component show the correct data.

You must use at least one prop somewhere in your app.
I recommend finding ways to use a few props - play around with them a bit! */

/*Task 6: Test
Make sure your app is working correctly by making changes to your test data. Add items,
remove items, change properties on items, and make sure that the app is displaying exactly
what the test data says it should.

If you try to use Bootstrap functionality that needs Javascript to work,
like the navbar collapsing or some kind of drop down, that’s not going to work this week.
We’ll learn how to get that working next week.

At this point, your project must meets these requirements:
- It has at least 3 React components
• A component is a function that returns JSX and components are used like they’re an HTML element
• main.tsx does not count as a component, it doesn’t have a function that returns JSX
- It’s displaying the test data
•You can put your array of data in whatever file you want, or even in its own file
- It’s using at least 1 prop on your own components
•A prop is set like it’s an HTML attribute, and received as a destructured parameter property
•key does not count for this, you need to come up with your own prop and practice setting it and receiving it
- No red errors/warnings in the console in the browser
- No type errors in VS Code */


import MainPocket from "./MainPocket";
import Sidebar from "./Sidebar";


export default function BackpackApp() {
  return (
    <div className="d-flex vh-100 flex-column" style={{background: "rgb(55, 226, 163)"}}>
      <h1 className="title">My Backpack</h1>
        <div className="d-flex flex-grow-1 m-3 p-1">
          <Sidebar/>
          <MainPocket/>
        </div>
    </div>
  )
}