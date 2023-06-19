import React, { useRef, useEffect } from "react";

export function CarDetails({ initialData }) {
  const formRef = useRef(null);

  useEffect(() => {
    formRef.current.reset();
  }, [initialData]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const model = formRef.current.model.value;
    const year = formRef.current.year.value;
    const color = formRef.current.color.value;

    console.log("Submitted car details:", { model, year, color });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label>
        Model:
        <input type="text" name="model" defaultValue={initialData.model} />
      </label>
      <br />
      <label>
        Year:
        <input type="number" name="year" defaultValue={initialData.year} />
      </label>
      <br />
      <label>
        Color:
        <input type="text" name="color" defaultValue={initialData.color} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
