
export const StringFormatter = function(){
  return {
    capitalizeFirst: (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    },
    toSkewerCase: (str) => {
      return str.replace(" ", "-");
    }
  };
};
