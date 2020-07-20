const style = {
  nav: {
    position: "fixed",
    zIndex: 99,
    backgroundColor: "#75C0E0",
    width: "100%",
    padding: "20px 0px",
    "& ul": {
      display: "flex",
      listStyleType: "none",
      paddingLeft: 0,
      margin: 0,
      "& li": {
        marginRight: 16,
        "& a": {
          textDecoration: "none",
          color: "white",
          fontWeight: "bold",
        },
      },
    },
  },
  sectionSearch: {
    paddingTop: 16,
    backgroundColor: "#82CAAF",
    paddingBottom: 40,
    "& h1": {
      margin: 0,
    },
  },
  paper: {
    border: "1px solid black",
    display: "flex",
    "& input": {
      marginLeft: 8,
    },
  },
  category: {
    display: 'flex',
    
    '& .MuiFormGroup-root': {
      marginLeft: '20',
      display: 'flex',
      flexDirection : 'row'
    }
  }

};
export default style;