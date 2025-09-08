import Card from "./Card";
import PreviewPanel from "./PreviewPanel";

export default function HeroButton() {
  const exampleMarkup = `<a href="">
  <button className="animated-button animated-button-fill min-w-48 dark:text-white hover:text-brand-black uppercase font-semibold transition-all duration-500 transform lg:scale-125">
    CLICK ME
  </button>
</a>`;
  const exampleStyle = `@keyframes pulseAnimation {
  0% {
    -webkit-box-shadow: 0px 2.5px 70px 3px rgba(125, 226, 209, 0.3);
    -moz-box-shadow: 0px 2.5px 70px 3px rgba(125, 226, 209, 0.3);
    box-shadow: 0px 2.5px 70px 3px rgba(125, 226, 209, 0.3);
    }
  25% {
    -webkit-box-shadow: 0px 2.5px 30px 3px rgba(125, 226, 209, 0.2);
    -moz-box-shadow: 0px 2.5px 30px 3px rgba(125, 226, 209, 0.2);
    box-shadow: 0px 2.5px 30px 3px rgba(125, 226, 209, 0.2);
    }
  50% {
    -webkit-box-shadow: 0px 2.5px 60px 3px rgba(125, 226, 209, 0.3);
    -moz-box-shadow: 0px 2.5px 60px 3px rgba(125, 226, 209, 0.3);
    box-shadow: 0px 2.5px 60px 3px rgba(125, 226, 209, 0.3);
    }
  75% {
    -webkit-box-shadow: 0px 2.5px 25px 3px rgba(125, 226, 209, 0.2);
    -moz-box-shadow: 0px 2.5px 25px 3px rgba(125, 226, 209, 0.2);
    box-shadow: 0px 2.5px 25px 3px rgba(125, 226, 209, 0.2);
    }
  100% {
    -webkit-box-shadow: 0px 2.5px 70px 3px rgba(125, 226, 209, 0.3);
    -moz-box-shadow: 0px 2.5px 70px 3px rgba(125, 226, 209, 0.3);
    box-shadow: 0px 2.5px 70px 3px rgba(125, 226, 209, 0.3);
    }
}

.animated-button {
  cursor: pointer;
  position: relative;
  display: inline-block;
  width: 120px;
  height: $icon-size;
  margin-left: $icon-size/5;
  margin-right: $icon-size/5;
  border-radius: $icon-size * $border-radius;
  overflow: hidden;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: all 0.25s ease;
    border-radius: $icon-size * $border-radius;
  }
  i {
    position: relative;
    color: $white;
    font-size: $icon-size/2;
    margin-top: $icon-size/4;
    transition: all 0.25s ease;
  }

  -webkit-box-shadow: 0px 2.5px 50px 3px rgba(125, 226, 209, 0.25);
  -moz-box-shadow: 0px 2.5px 50px 3px rgba(125, 226, 209, 0.25);
  box-shadow: 0px 2.5px 50px 3px rgba(125, 226, 209, 0.25);

  animation: pulseAnimation 4s ease-in-out;
  animation-iteration-count: infinite;
  animation-play-state: running;
}

.animated-button-fill {
  &::before {
    transition-duration: 0.5s;
    box-shadow: inset 0 0 0 3px $green;
    z-index: -1;
  }
  &:hover::before {
    box-shadow: inset 0 0 0 $icon-size $green;
    z-index: -1;
  }
}`;

  return (
    <Card>
      <h3 className="text-2xl font-semibold">Hero Button</h3>
      <p className="mt-2">
        A hero button component for your application, includes a animated
        pulsing background effect, this works well on dark backgrounds.
      </p>
      <div className="my-4">
        <PreviewPanel markup={exampleMarkup} style={exampleStyle}>
          <div className="flex justify-center my-10">
            <a>
              <button className="animated-button animated-button-fill min-w-48 dark:text-white hover:text-brand-black uppercase font-semibold transition-all duration-500 transform lg:scale-125">
                Click Me
              </button>
            </a>
          </div>
        </PreviewPanel>
      </div>
    </Card>
  );
}
