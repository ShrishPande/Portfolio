import React from "react";
import Typed from 'typed.js'


class Typing extends React.Component {
  componentDidMount() {
      const {words}=this.props
      const options = {
        strings: words,
        typeSpeed: 60,
        backSpeed: 30,
        loop: true,
        cursorChar: "|",
      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
    }
  componentWillUnmount() {
      this.typed.destroy();
    }
    
    render() {
      return (
        <>
          <span
            style={{ whiteSpace: "pre" }}
            ref={(el) => {
              this.el = el;
            }}
          />
        </>
      );
    }
}
export default Typing;