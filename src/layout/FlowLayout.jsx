import PropTypes from "prop-types";
import Header from "../components/header";
import { GlobalProvider } from "../contexts/global";

// Layout file
export default function FlowLayout({ children }) {
  return (
    <GlobalProvider>
      <Header />
      {children}
    </GlobalProvider>
  );
}

FlowLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
