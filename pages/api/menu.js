import menu from "../../data/menu";

export default (req, res) => {
  res.status(200).json(menu);
};
