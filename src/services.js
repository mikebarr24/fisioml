export const services = () => {
  return [
    {
      service: "fisioterapia",
      photo: require("./media/images/home-service-photos/fisio.jpg"),
      slug: "/fisio",
    },
    {
      service: "pilates terapéutico suelo",
      photo: require("./media/images/home-service-photos/pilates.jpg"),
      slug: "/pilates-suelo",
    },
    {
      service: "pilates terapéutico máquina",
      photo: require("./media/images/home-service-photos/pilates-maqina.jpg"),
      slug: "/pilates-maquina",
    },
    {
      service: "marcha nórdica",
      photo: require("./media/images/home-service-photos/nordic-walking.jpg"),
      slug: "/marcha-nordica",
    },
    {
      service: "standing pilates",
      photo: require("./media/images/home-service-photos/standing.jpg"),
      slug: "/standing-pilates",
    },
  ];
};
