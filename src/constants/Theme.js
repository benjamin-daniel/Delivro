import Colors from "./Colors";

export default {
  variants: {
    superHeader: {
      fontSize: 34,
      textAlign: "center",
    },
    button: {
      color: Colors.errorText,
    },
    header: {
      fontSize: 30,
    },
    small: {
      fontSize: 12,
    },
    chip: {
      fontSize: 14,
      color: Colors.bgViolet,
    },
    chipSelected: {
      color: Colors.violet,
      fontSize: 14,
    },
  },
  buttonVariants: {
    primary: {
      backgroundColor: Colors.primaryButton,
      textColor: Colors.white,
      borderRadius: 5,
      paddingVertical: 16,
      justifyContent: "center",
      alignItems: "center",
    },
  },
};
