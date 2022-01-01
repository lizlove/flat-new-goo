import React, { useState } from "react";
import { Button } from "carbon-components-react";

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
        <Button>Button</Button>
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