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
    secondary: {
      color: Colors.bgViolet,
    },
    itemHeader: {
      fontSize: 18,
      color: Colors.primary,
      fontWeight: "bold",
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
    secondary: {
      // padding: 5,
      paddingHorizontal: 0,
      backgroundColor: Colors.white,
      // height: 50,
      width: 80,
      // height: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
      borderWidth: 1,
      borderColor: Colors.faintGrey
    },
  },
};
