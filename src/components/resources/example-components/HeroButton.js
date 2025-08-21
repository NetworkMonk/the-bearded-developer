import PropTypes from "prop-types";

export default function Button({ href, children }) {
  return (
    <a href={href}>
      <button className="animated-button animated-button-fill min-w-48 hover:text-brand-black uppercase font-semibold transition-all duration-500 transform lg:scale-125">
        {children}
      </button>
    </a>
  );
}

Button.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
