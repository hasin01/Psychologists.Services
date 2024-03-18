import Select from 'react-select'

const Selects = () => {

  
  const handleChange = (e)=>{


    console.log(e.value)
  } 


  const options = [
    { value: "A to Z", label: "A to Z" },
    { value: '"Z to A"', label: 'Z to A' },
    { value: "Less than 10$", label: "Less than 10$" },
    { value: "Greater than 10$", label: "Greater than 10$" },
    { value: "Popular", label: "Popular" },
    { value: "Not popular", label: "Not popular" },
    { value: "Show all", label: "Show all" },



  ]
 

  const MyComponent = () => (
   


   <Select defaultValue={options[0]}  options={options} onChange={handleChange}
  styles={{

    control: (baseStyles, state) => ({
      ...baseStyles,
 
      borderRadius: "14px",
      width:"226px",
      height:"48px",
      background:"var( --main-batton-color )",
      color:"white",
      borderColor:"var( --main-batton-color )",
      

    }),
    placeholder: (baseStyles, state) => ({
      ...baseStyles,
      background:"var( --main-batton-color )",
      color:"white",
      

    }),
    menu: (baseStyles, state) => ({
      ...baseStyles,
      width:"226px",
      borderRadius: "22px",
      fontSize: "16px",
      color: "rgb(25,26,21,0.3)",
      
    }),

    menuList: (baseStyles, state) => ({
      ...baseStyles,
      color: "rgb(25,26,21,0.3)",
     padding:"14px",


    }),
    singleValue: (baseStyles, state) => ({
      ...baseStyles,
      color: "var( --main-text-batton-color)",
    

    }),
    indicatorSeparator: (baseStyles, state) => ({
      ...baseStyles,
    display:"none"

    }),
    valueContainer: (baseStyles, state) => ({
      ...baseStyles,
      color: "white",

    }),
    option: (baseStyles, state) => ({
    ...baseStyles,
        paddingTop:"8px",
     color:"var(--main-rgb-black)",
     borderRadius: "14px",
    background: "white",

     "&:hover": {
      color:"var(--main-text-color)",
      

    },
    "&:focus": {
      color:"var(--main-text-color)",
},
  }),
  menuPortal: (baseStyles, state) => ({
    ...baseStyles,
    color:"red",
     "&:hover": {
      color:"red",

    },
    "&:focus": {
      color:"red",

},
  }),

  }}
/>
    
  )


  return (

    <>


   
<MyComponent />

    </>
  );
};

export default Selects;


