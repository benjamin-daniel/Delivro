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
    itemTabHeader: {
      fontSize: 18,
      color: Colors.primary,
      fontWeight: "bold",
    },
    itemHeader: {
      fontSize: 30,
      fontWeight: "bold",
    },
    mainInfo: {
      color: Colors.primary,
      fontSize: 30,
      fontWeight: "bold",
      lineHeight: 42,
    },
    secondaryInfo: {
      fontSize: 24,
      color: Colors.primary50,
      fontWeight: "normal",
      lineHeight: 42,
    },
    itemInfo: {
      marginVertical: 10,
      fontSize: 16,
      color: Colors.sGreen,
      // fontWeight: 'bold'
    },
    secondaryButton: {
      color: Colors.white,
      marginLeft: 15,
    },
    optionHeader: {
      fontSize: 22,
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    optionChange: {
      color: Colors.selectedViolet,
      fontWeight: "bold",
      textTransform: "uppercase",
      fontSize: 15,
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
      minWidth: 70,
      // height: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
      borderWidth: 1,
      borderColor: Colors.faintGrey,
      textColor: Colors.white,
    },
  },
};
