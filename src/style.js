const style =  (theme) => ({
  nav: {
    position: "fixed",
    height: 50,
    top: 0,
    zIndex: 99,
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    shadow: theme.shadows[3],
    '& ul': {
      display: 'flex',
      listStyleType: 'none',
      paddingLeft: 0,
      '& li': {
        marginRight: theme.spacing(2),
        '& a': {
          textDecoration: 'none',
          color: 'white',
          fontWeight: 'bold'
        }
      }
    }
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    '& button': {
      color: 'white',
    fontWeight: 'bold'
    }
  }
});
  // sectionSearch: {
  //   paddingTop: 16,
  //   backgroundColor: "#82CAAF",
  //   paddingBottom: 40,
  //   "& h1": {
  //     margin: 0,
  //   },
  // },
  // paper: {
  //   border: "1px solid black",
  //   display: "flex",
  //   "& input": {
  //     marginLeft: 8,
  //   },
  // },

export default style;