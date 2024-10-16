const services = [
  {
    idService: "101",
    serviceType: "plomeria",
    serviceName: "Instalación y mantenimiento de sanitario",
    serviceDetail: " instalación y mantenimiento de sanitario.",
    serviceList: ["a", "b"],
    serviceImage: "s_plomeria_1",
  },
  {
    idService: "102",
    serviceType: "plomeria",
    serviceName: "Instalación y mantenimiento de lavamanos",
    serviceDetail: " instalación y mantenimiento de lavamanos.",
    serviceList: ["a", "b"],
    serviceImage: "s_plomeria_2",
  },
  {
    idService: "103",
    serviceType: "plomeria",
    serviceName: "Instalación de duchas",
    serviceDetail: "instalación de duchas.",
    serviceList: ["a", "b"],
    serviceImage: "s_plomeria_3",
  },
  {
    idService: "104",
    serviceType: "plomeria",
    serviceName: "Instalación de mezclador de ducha",
    serviceDetail: "Instalación de mezclador de ducha.",
    serviceList: ["a", "b"],
    serviceImage: "s_plomeria_7",
  },
  {
    idService: "105",
    serviceType: "plomeria",
    serviceName:
      "Instalación de llaves de lavadero, registro, abasto y llave de paso",
    serviceDetail:
      "Instalación de llaves de lavadero, registro, abasto y llave de paso.",
    serviceList: ["a", "b"],
    serviceImage: "s_plomeria_4",
  },
  {
    idService: "106",
    serviceType: "plomeria",
    serviceName: "Desmonte e instalación de sanitarios",
    serviceDetail: " desmonte e instalación de sanitarios.",
    serviceList: ["a", "b"],
    serviceImage: "s_plomeria_10",
  },
  {
    idService: "107",
    serviceType: "plomeria",
    serviceName: "Instalación y mantenimiento de lavaplatos",
    serviceDetail: "Instalación y mantenimiento de lavaplatos.",
    serviceList: ["a", "b"],
    serviceImage: "s_plomeria_6",
  },
  {
    idService: "108",
    serviceType: "plomeria",
    serviceName: "Mantenimiento de todo tipo de grifería",
    serviceDetail: "Mantenimiento de todo tipo de grifería.",
    serviceList: ["a", "b"],
    serviceImage: "s_plomeria_7",
  },
  {
    idService: "109",
    serviceType: "plomeria",
    serviceName: "Reparación de fugas de agua en PVC, cobre, polipropileno",
    serviceDetail: "Reparación de fugas de agua en PVC, cobre, polipropileno.",
    serviceList: ["a", "b"],
    serviceImage: "s_plomeria_8",
  },
  {
    idService: "110",
    serviceType: "plomeria",
    serviceName: "Instalación de tuberías hidrosanitarias",
    serviceDetail: "Instalación de tuberías hidrosanitarias.",
    serviceList: ["a", "b"],
    serviceImage: "s_plomeria_9",
  },
  {
    idService: "110",
    serviceType: "plomeria",
    serviceName: "Instalación de tuberías hidrosanitarias",
    serviceDetail: "Instalación de tuberías hidrosanitarias.",
    serviceList: ["a", "b"],
    serviceImage: "s_plomeria_9",
  },
  {
    idService: "201",
    serviceType: "electricidad",
    serviceName:
      "Instalaciones electricas, residencial, comercial e industrial",
    serviceDetail:
      "Instalaciones electricas, residencial, comercial e industrial.",
    serviceList: ["a", "b"],
    serviceImage: "s_electri_1",
  },
  {
    idService: "202",
    serviceType: "electricidad",
    serviceName: "Instalación de swiches, tomas",
    serviceDetail: "Instalación de swiches,tomas.",
    serviceList: ["a", "b"],
    serviceImage: "s_electri_2",
  },
  {
    idService: "203",
    serviceType: "electricidad",
    serviceName: "Instalación de ojo de Buey, lámparas y reflectores",
    serviceDetail: "Instalación de ojo de Buey,lámparas y reflectores.",
    serviceList: ["a", "b"],
    serviceImage: "s_electri_3",
  },
  {
    idService: "204",
    serviceType: "electricidad",
    serviceName: "Instalación de duchas electricas",
    serviceDetail: "Instalación de duchas electricas.",
    serviceList: ["a", "b"],
    serviceImage: "s_electri_4",
  },
  {
    idService: "205",
    serviceType: "electricidad",
    serviceName: "Instalación y reparación de hornos y campanas extractoras",
    serviceDetail:
      "Instalación y reparación de hornos y campanas extractoras.",
    serviceList: ["a", "b"],
    serviceImage: "s_electri_5",
  },
  {
    idService: "301",
    serviceType: "obras",
    serviceName: "Obras y reformas",
    serviceDetail: "Obras y reformas",
    serviceList: ["a", "b"],
    serviceImage: "s_obras_1",
  },
  {
    idService: "302",
    serviceType: "obras",
    serviceName: "Construcción de Obra Civil",
    serviceDetail: "Construcción de obra civil.",
    serviceList: ["a", "b"],
    serviceImage: "s_obras_2",
  },
  {
    idService: "303",
    serviceType: "obras",
    serviceName: "Reforma de espacios",
    serviceDetail: "Reforma de espacios.",
    serviceList: ["a", "b"],
    serviceImage: "s_obras_3",
  },
  {
    idService: "304",
    serviceType: "obras",
    serviceName: "Remodelación de interiores",
    serviceDetail: "Remodelación de interiores.",
    serviceList: ["a", "b"],
    serviceImage: "s_obras_4",
  },
  {
    idService: "305",
    serviceType: "obras",
    serviceName: "Diseño de espacios",
    serviceDetail: "Diseño de espacios.",
    serviceList: ["a", "b"],
    serviceImage: "s_obras_5",
  },
  {
    idService: "306",
    serviceType: "obras",
    serviceName: "Construcciónes prefabricadas",
    serviceDetail: "Construcciónes prefabricadas.",
    serviceList: ["a", "b"],
    serviceImage: "s_obras_6",
  },
  {
    idService: "307",
    serviceType: "obras",
    serviceName: "Construcción de estructura en mampostería",
    serviceDetail: "Construcción de estructura en mampostería.",
    serviceList: ["a", "b"],
    serviceImage: "s_obras_7",
  },
  {
    idService: "308",
    serviceType: "obras",
    serviceName: "Construcción en seco",
    serviceDetail: "Construcción en seco.",
    serviceList: ["a", "b"],
    serviceImage: "s_obras_8",
  },
  {
    idService: "401",
    serviceType: "gases",
    serviceName: "Construcción de redes de gas",
    serviceDetail: "Construcción de redes de gas.",
    serviceList: ["a", "b"],
    serviceImage: "s_gas_1",
  },
  {
    idService: "402",
    serviceType: "gases",
    serviceName: "Mantenimiento correctivo y preventivo de redes de gas",
    serviceDetail: "Mantenimiento correctivo y preventivo de redes de gas.",
    serviceList: ["a", "b"],
    serviceImage: "s_gas_2",
  },
  {
    idService: "403",
    serviceType: "gases",
    serviceName: "Instalación de gas doméstico",
    serviceDetail: "Instalación de gas doméstico.",
    serviceList: ["a", "b"],
    serviceImage: "s_gas_3",
  },
  {
    idService: "404",
    serviceType: "gases",
    serviceName: "Instalación de calentadores",
    serviceDetail: "Instalación de calentadores.",
    serviceList: ["a", "b"],
    serviceImage: "s_gas_4",
  },
  {
    idService: "405",
    serviceType: "gases",
    serviceName: "Mantenimiento de equipos industriales a gas",
    serviceDetail: "Mantenimiento de equipos industriales a gas.",
    serviceList: ["a", "b"],
    serviceImage: "s_gas_5",
  },
  {
    idService: "501",
    serviceType: "pintura",
    serviceName: "Aplicacion de estuco",
    serviceDetail: "Aplicacion de estuco.",
    serviceList: ["a", "b"],
    serviceImage: "s_pintura_1",
  },
  {
    idService: "502",
    serviceType: "pintura",
    serviceName: "Aplicación de pintura",
    serviceDetail: "Aplicacion de pintura.",
    serviceList: ["a", "b"],
    serviceImage: "s_pintura_2",
  },
  {
    idService: "503",
    serviceType: "pintura",
    serviceName: "Instalación de Drywall",
    serviceDetail: "Instalación de Drywall.",
    serviceList: ["a", "b"],
    serviceImage: "s_pintura_3",
    // agregar s_pintura_3a
  },
  {
    idService: "504",
    serviceType: "pintura",
    serviceName: "Fabricacion de estructura de Drwall",
    serviceDetail: "Fabricacion de estructura de Drwall.",
    serviceList: ["a", "b"],
    serviceImage: "s_pintura_4",
    // agregar s_pintura_4a
  },
  {
    idService: "505",
    serviceType: "pintura",
    serviceName: "Instalación de enchape",
    serviceDetail: "Instalación de enchape.",
    serviceList: ["a", "b"],
    serviceImage: "s_pintura_5",
  },
  {
    idService: "601",
    serviceType: "soldadura",
    serviceName: "Fabricacion de estructuras metálicas",
    serviceDetail: "Fabricacion de estructuras metálicas.",
    serviceList: ["a", "b"],
    serviceImage: "s_sold_1",
  },
  {
    idService: "602",
    serviceType: "soldadura",
    serviceName: "Fabricación de pasamanos",
    serviceDetail: "Fabricación de pasamanos.",
    serviceList: ["a", "b"],
    serviceImage: "s_sold_2",
  },
  {
    idService: "603",
    serviceType: "soldadura",
    serviceName: "Fabricación de escaleras",
    serviceDetail: "Fabricación de escaleras.",
    serviceList: ["a", "b"],
    serviceImage: "s_sold_3",
  },
  {
    idService: "604",
    serviceType: "soldadura",
    serviceName: "Fabricación de domos",
    serviceDetail: "Fabricación de domos.",
    serviceList: ["a", "b"],
    serviceImage: "s_sold_4",
  },
  {
    idService: "605",
    serviceType: "soldadura",
    serviceName: "Fabricación de techos corredizos",
    serviceDetail: "Fabricación de techos corredizos.",
    serviceList: ["a", "b"],
    serviceImage: "s_sold_5",
  },
  {
    idService: "606",
    serviceType: "soldadura",
    serviceName: "Fabricación de techos fijos",
    serviceDetail: "Fabricación de techos fijos.",
    serviceList: ["a", "b"],
    serviceImage: "s_sold_6",
  },
  {
    idService: "607",
    serviceType: "soldadura",
    serviceName: "Fabricación de puertas para fincas",
    serviceDetail: "Fabricación de puertas para fincas.",
    serviceList: ["a", "b"],
    serviceImage: "s_sold_7",
  },
  {
    idService: "608",
    serviceType: "soldadura",
    serviceName: "Fabricación de Encerramientos",
    serviceDetail: "Fabricación de encerramientos.",
    serviceList: ["a", "b"],
    serviceImage: "s_sold_8",
  },
];

export default services;
