const POTENTIAL_COLORS = [
    'rgb(50, 168, 68)',
    'rgb(50, 100, 168)',
    'rgb(235, 52, 204)',
    'rgb(235, 165, 45)',
    'rgb(172, 45, 235)',
    // Add more colors if you have a large potential number of labels.
  ];
  
  export const generateColors = (length) => {
    let colors = [];
    for(let i = 0; i < length; i++) {
      colors.push(POTENTIAL_COLORS[i % POTENTIAL_COLORS.length]);
    }
    return colors;
  }