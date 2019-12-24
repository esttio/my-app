import React from "react";
import ReactDOM from "react-dom";
import ScrollMagic from "scrollmagic";

import { TweenLite, Linear, TimelineMax } from 'gsap/all';
import "./index.css";

//all the css animations need gsap as dependency
// import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js";
// import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js";
// require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js');
// require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js');



class App extends React.Component {
  componentDidMount() {
    TweenLite.defaultEase = Linear.easeNone;
    let controller = new ScrollMagic.Controller();
    let tl = new TimelineMax();
    tl.staggerFrom(".box", 1.5, {
      scale: 0,
      cycle: {
        y: [-50, 50]
      },
      stagger: {
        from: "center",
        amount: 0.75
      }
    });

    let scene = new ScrollMagic.Scene({
      triggerElement: "#stage",
      duration: "50%",
      triggerHook: 0.25
    })
      .addIndicators({
        name: "Box Timeline",
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white"
      })
      .setTween(tl)
      .addTo(controller);
  }

  render() {
    return (
      <>
        <div>
          <div className="spacer">
            <h1>This section is just a spacer</h1>
          </div>
          <div id="stage">
            <div className="box box1">1</div>
            <div className="box box2">2</div>
            <div className="box box3">3</div>
            <div className="box box4">4</div>
            <div className="box box5">5</div>
            <div className="box box6">6</div>
          </div>
          <div className="spacer">
            <h1>This section is just a spacer</h1>
          </div>
        </div>
      </>
    );
  }
}

export default App;