import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Property1Group2.module.css";

type Property1Group2Type = {
  /** Style props */
  property1Group2Position?: Property.Position;
  property1Group2Top?: Property.Top;
  property1Group2Left?: Property.Left;
};

const Property1Group2: FunctionComponent<Property1Group2Type> = ({
  property1Group2Position,
  property1Group2Top,
  property1Group2Left,
}) => {
  const property1Group2Style: CSS.Properties = useMemo(() => {
    return {
      position: property1Group2Position,
      top: property1Group2Top,
      left: property1Group2Left,
    };
  }, [property1Group2Position, property1Group2Top, property1Group2Left]);

  return (
    <img
      className={styles.property1group2}
      alt=""
      src="/property-1group-2.svg"
      style={property1Group2Style}
    />
  );
};

export default Property1Group2;
