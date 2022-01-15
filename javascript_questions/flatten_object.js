const flattenObject = (obj,name) => {
    //write you code
    let newObj = {};
    for (const item in obj) {
      if (typeof obj[item] === "object") {
        const returnObj = flattenObject(obj[item],getKeyName(name,item));
        newObj = {...newObj,...returnObj };
      } else {
        newObj[getKeyName(name,item)] = obj[item];
      }
    }
    return newObj;
  };
  
  const getKeyName=(name,item)=>
  {
    if(name)
    {
      return name + "."+item;
    }
  return item;
  }
  const inputObj = {
    user: {
      name: "Vaibhav",
      adrress: {
        state: "Delhi",
        zone: "South West",
        badrress: {
          state: "Delhi",
          zone: "South West",
        },
      },
    },
  };
  console.log(flattenObject(inputObj,""));
  