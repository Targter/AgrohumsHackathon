export const soilNutrients = {
  Haryana: {
    Alluvial: {
      Nitrogen: "0.05-0.10%",
      Phosphorus: "15-30 mg/kg",
      Potassium: "100-200 mg/kg",
    },
    Desert: {
      Nitrogen: "0.03-0.06%",
      Phosphorus: "10-20 mg/kg",
      Potassium: "50-100 mg/kg",
    },
    Red: {
      Nitrogen: "0.04-0.08%",
      Phosphorus: "12-25 mg/kg",
      Potassium: "70-150 mg/kg",
    },
  },
  Punjab: {
    Alluvial: {
      Nitrogen: "0.06-0.12%",
      Phosphorus: "20-35 mg/kg",
      Potassium: "150-250 mg/kg",
    },
    Bhag: {
      Nitrogen: "0.07-0.13%",
      Phosphorus: "18-30 mg/kg",
      Potassium: "100-200 mg/kg",
    },
  },
  Chandigarh: {
    Alluvial: {
      Nitrogen: "0.05-0.10%",
      Phosphorus: "15-30 mg/kg",
      Potassium: "100-200 mg/kg",
    },
  },
};

// Function to get soil nutrients based on state and soil type
const getSoilNutrients = (state, soilType) => {
  const stateSoil = soilNutrients[state];
  if (stateSoil) {
    const nutrients = stateSoil[soilType];
    if (nutrients) {
      return nutrients;
    } else {
      return `Soil type "${soilType}" not found for state "${state}".`;
    }
  } else {
    return `State "${state}" not found.`;
  }
};

// Example usage:
console.log(getSoilNutrients("Haryana", "Alluvial"));
// Output: { Nitrogen: '0.05-0.10%', Phosphorus: '15-30 mg/kg', Potassium: '100-200 mg/kg' }
console.log(getSoilNutrients("Punjab", "Bhag"));
// Output: { Nitrogen: '0.07-0.13%', Phosphorus: '18-30 mg/kg', Potassium: '100-200 mg/kg' }
console.log(getSoilNutrients("Chandigarh", "Desert"));
// Output: State "Chandigarh" does not have soil type "Desert".
