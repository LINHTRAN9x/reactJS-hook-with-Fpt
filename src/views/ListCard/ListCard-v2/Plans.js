import React from "react";

const planContents = [
  {
    header: "Basic",
    price: 0,
    features: ["Feature 1", "Feature 2", "Feature 3"],
    size: "Individual",
    buttonLabel: "Select",
    outline: true,
    use: "Feature 3",
  },
  {
    header: "Standard",
    price: 15,
    features: ["Feature A", "Feature B", "Feature C"],
    size:"Small Business",
    buttonLabel: "Select",
    outline: true,
    use: "Feature C",
  },
  {
    header: "Premium",
    price: 29,
    features: ["Feature X", "Feature Y", "Feature Z"],
    size: "Large Companies",
    buttonLabel: "Select",
    outline: true,
    use: "Feature Y",
  }
];

const Plan = (props) => {
  return (
    <div className="card mb-4 hover shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{props.header}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          {`$${props.price}`}
          <small className="text-muted">/ mo</small>
        </h1>
        {props.features.map((feature, i) => (
          <div key={i} className="mt-3 text-start p-2 mb-4 border">
            <div  style={{ opacity: props.features[i] === props.use ? 0.5 : 1 }} >
            {props.features[i] === props.use ? '✖' : '✔'}  
            {feature}</div>
          </div>
        ))}
        <div className="pb-4">{props.size}</div>
        <div className="pb-4">Some cases you may need to change the base class "prefix" of one or more components. You can control how a component</div>
        <button
          className={`btn btn-lg btn-block ${
            props.outline ? "btn-outline-primary" : "btn-primary"
          }`}
          type="button"
        >
          {props.buttonLabel}
        </button>
      </div>
    </div>
  );
};

const Plans = () => {
  const plans = planContents.map((obj, i) => {
    return (
      <Plan
        key={obj.header}
        header={obj.header}
        price={obj.price}
        features={obj.features}
        buttonLabel={obj.buttonLabel}
        outline={obj.outline}
        size = {obj.size}
        use = {obj.use}
      />
    );
  });

  return <div className="card-deck mb-3 text-center">{plans}</div>;
};

export default Plans;
