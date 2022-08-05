import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "../App.css/";

const leadingActions = () => (
  <LeadingActions>
    <SwipeAction onClick={() => console.info("swipe action triggered")}>
      Action name
    </SwipeAction>
  </LeadingActions>
);

const trailingActions = () => (
  <TrailingActions>
    <SwipeAction
      destructive={true}
      onClick={() => console.info("swipe action triggered")}
    >
      Delete
    </SwipeAction>
  </TrailingActions>
);

export const Gastos = ({ gasto }) => {
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="Gasto">
          <div className="miGasto">
            <div className="categoria">
              <p>{gasto.nombreGasto}</p>
              <p>{gasto.cantidadGasto}</p>
              <p>{gasto.categoria}</p>
            </div>
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gastos;
