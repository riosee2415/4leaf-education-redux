import React from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { FontAwesome } from "@expo/vector-icons";

const Button = ({ iconNAme, action }) => {
  return (
    <TouchableOpacity onPress={action}>
      <FontAwesome name={iconNAme} size={60} />
    </TouchableOpacity>
  );
};

Button.propTypes = {
  iconNAme: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default Button;
