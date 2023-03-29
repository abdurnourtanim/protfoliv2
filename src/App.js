import AnimatedRoutes from "./components/AnimatedRoutes";
import Header from "./components/Header";

function App() {
  const personalDetails = {
    name: "Abdur Nour Tanim",
    location: "Chattogram, Bangladesh",
    tagline: "I'm a Developer",
    email: "abdurnourtanim@gmail.com",
    availability: "Open for work",
    brand:
      "My key skills include HTML, CSS, JavaScript, PHP, MySQL and Node.js etc. I am also familiar with various frameworks such as AngularJS, ReactJS and Laravel. I have also developed custom APIs and RESTful services for various applications.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
