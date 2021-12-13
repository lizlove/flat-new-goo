import React, { useState } from "react";

const RenderForm: React.FC<{}> = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handleNameChange = (event: any): void => {
    setName(event.currentTarget.value);
    setShowDetails(false);
  };

  const handleEmailChange = (event: any): void => {
    setEmail(event.currentTarget.value);
    setShowDetails(false);
  };

  const handleSubmit = (event: any) => {
    event?.preventDefault();
    if (name && email) {
      setShowDetails(true);
    }
  };

  // const inputStyles: CSSProperties = {
  //   marginLeft: "0.5rem",
  //   marginTop: "1rem",
  //   marginBottom: "1rem",
  //   height: "24px",
  //   width: "300px",
  //   position: "relative",
  //   bottom: "0.1rem",
  //   fontSize: "18px",
  // };

  // const formStyles: CSSProperties = {
  //   backgroundColor: "lightblue",
  //   display: "block",
  //   margin: "1rem",
  //   paddingLeft: "1rem",
  // };

  // const containerStyles: CSSProperties = {
  //   margin: "1rem",
  //   textAlign: "center",
  //   fontSize: "24px",
  // };

  // const submitButtonStyle: CSSProperties = {
  //   fontSize: "20px",
  //   marginBottom: "1rem",
  // };

  return (
    <div>
      <label>Input Form:</label>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            required
            placeholder="Name..."
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            required
            placeholder="Email..."
            onChange={handleEmailChange}
          />
        </div>
        <input onClick={handleSubmit} type="submit" />
      </form>
      {showDetails ? (
        <div>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default RenderForm;