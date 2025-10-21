// data/vehicles.js
export const vehicles = [
  
  {
    id: 1,
    name: "Porshce 911",
    modelPath: "/models/free_porsche_911_carrera_4s/scene.gltf",  // Make sure this file exists!
    description: "Its a porsche c'mon", 
    scale: 1.0,
    position: [0, 0.5, 0]
  },
  {
    id: 2,
    name: "BMW M5",
    modelPath: "/models/bmw_m_5_f_10.gltf",  // Remove "public/" and add . before gltf
    description: "BMW M5 Sports Sedan",
    scale: 1.28,
    position: [0.272, -0.18, 0.75]
  },
  // Add more vehicles as needed
  {
    id: 3,
    name: "formula one",
    modelPath: "/models/free__formula_one_lp-830_sdc/scene.gltf",
    description: "DUDUDUDU MAX VERSTAPPEN",
    scale: 0.8,
    position: [0, 0, 0],
    rotation: [0, 0, 0]
  },
  {
    id: 4,
    name: "ford gt",
    modelPath: "/models/ford_gt_2006/scene.gltf",
    description: "ford_gt",
    scale: 1.1,
    position: [0, 0, 0],
    rotation: [0, 0, 0] // -30° rotation
  },
  {
    id: 5,
    name: "raunak this is for you",
    modelPath: "/models/2013_suzuki_wagonr/scene.gltf",
    description: "wagonr",
    scale: 0.9,
    position: [0, 0, 0],
    rotation: [0, Math.PI/2, 0] // 60° rotation
  },
  {
    id: 6,
    name: "punch",
    modelPath: "/models/tata_punch_tropical_mist/scene.gltf",
    description: "tata punch",
    scale: 1.0,
    position: [0, 0, 0],
    rotation: [0, 0, 0]
  },
  {
    id: 7,
    name: "car",
    modelPath: "/models/oiiaioooooiai_cat/scene.gltf",
    description: "cat",
    scale: 4,
    position: [0, 0, 0],
    rotation: [0, 0, 0] // 90° rotation
  }
]

// Test the export
console.log('Vehicles exported:', vehicles.length, 'vehicles')