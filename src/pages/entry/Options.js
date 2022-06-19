import axios from "axios";
import React from "react";
import Row from "react-bootstrap/Row";
import AlertBanner from "../common/AlertBanner";
import ScoopOptions from "./ScoopOptions";

export default function Options({ optionType }) {
  const [items, setItems] = React.useState([]);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    // optionType is 'scoops' or 'toppings'
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => setItems(res.data))
      .catch((err) => setError(err));
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }

  // replace `null` with ToppingOption when available
  const ItemComponent = optionType === "scoops" ? ScoopOptions : null;
  const optionItems = items.map((item) => (
    <ItemComponent
      name={item.name}
      imagePath={item.imagePath}
      key={item.name}
    />
  ));

  return <Row>{optionItems}</Row>;
}
