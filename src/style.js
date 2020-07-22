const style =  (theme) => ({
  nav: {
    position: "fixed",
    height: 50,
    top: 0,
    zIndex: 99,
    width: '100%',
    backgroundColor: "#75C0E0",
    '& ul': {
      display: 'flex',
      listStyleType: 'none',
      paddingLeft: 0,
      '& li': {
        marginRight: theme.spacing(2),
        '& a': {
          textDecoration: 'none'
        }
      }
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