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
