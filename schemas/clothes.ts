
// Esquema para "Price"
const PriceSchema = {
  name: "Price",
  properties: {
    currency: "string",
    value: "Value", // Relación con el sub-objeto "Value"
  },
};

// Esquema para "Value"
const ValueSchema = {
  name: "Value",
  properties: {
    current: "double", // Usamos `double` para los números con decimales
    original: { type: "double", optional: true }, // Opcional
  },
};

// Esquema principal para "ClothesInfo"
const ClothesInfoSchema = {
  name: "ClothesInfo",
  properties: {
    id: "string", // El id es un string
    name: "string",
    price: "Price", // Relación con el esquema "Price"
    link: "string",
    brand: "string",
  },
  primaryKey: "id", // Usamos "id" como clave primaria
};
