//** function to validate item of object data */



export const validationAddLeads = (data) => {
  const obj = {}
  if (!data.fullName.trim()) {
    obj.fullName = "fullName is required";
  }
  if (!data.phoneNumber.trim() && data.phoneNumber.length < 11) {
    obj.phoneNumber = "phoneNumber is required";
  }
  if (!data.leadsSource.trim()) {
    obj.leadsSource = "leadsSource is required";
  }
  if (!data.assignTo.trim()) {
    obj.assignTo = "assignTo is required";
  }
  if (!data.propertyId.trim()) {
    obj.propertyId = "propertyId is required";
  }
  if (!data.propertyType.trim()) {
    obj.propertyType = "propertyType is required";
  }
  if (!data.propertyValue.trim()) {
    obj.propertyValue = "propertyValue is required";
  }
  if (!data.preferPrice.trim()) {
    obj.preferPrice = "preferPrice is required";
  }
  if (!data.financeOption.trim()) {
    obj.financeOption = "financeOption is required";
  }

  return obj;
};

/*fullName: "",
    phoneNumber: "",
    email: "",
    leadsSource: "",
    assignTo: "",
    propertyId: "",
    propertyType: "",
    propertyValue: "",
    preferPrice: "",
    financeOption: "",

    */

/* import React, { useState } from 'react';

const ValidationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Form submission logic goes here
      console.log('Form submitted!', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.username.trim()) {
      errors.username = 'Username is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }

    if (!data.password.trim()) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ValidationForm;
   */
