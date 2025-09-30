//used to move group of object properties
//copy objects
//merge object properties

const IT_dept={
    ITempCount:20,
    ITbudget:200000,
    admin:"Pranav", // If properties have the same name, the last (right-most) object's property will overwrite the previous ones.
};

const HR_dept={
    HRempCount:10,
    HRbudget:100000,
    admin:"Arishmita",
};

const company={
    name:"TechStars",
    location:"Silicon Valley",
    ...IT_dept,//spread operator
    ...HR_dept, // THIS IS LAST SO IT WILL OVERWRITE admin property
};
console.log(company);

//shallow copy
const company2={...company};
console.log(company2);

/**
 * Textio allows you to generate messages based on templates. You can pick from the given default templates or create your own.

Complete the mergeTemplates function. It takes an object defaultTemplates and an object customTemplates and returns a merged object with the custom templates overwriting the default templates.
 */
function mergeTemplates(defaultTemplates, customTemplates) {
  // ?
  const mergedTemplates={...defaultTemplates,...customTemplates};
  return mergedTemplates;
}