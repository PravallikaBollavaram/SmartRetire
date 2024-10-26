import { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Typography,
  Box,
} from "@mui/material";

const TRSForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    ssn: "",
    employerName: "",
    positionTitle: "",
    startDate: "",
    salary: "",
    contributionRate: "",
    yearsOfService: "",
    accumulatedServiceCredits: "",
    retirementEligibilityDate: "",
    paymentPlan: "",
    beneficiary: "",
    healthCoverage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Here you could send the form data to an API endpoint
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 600, margin: "0 auto", padding: 2 }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Texas TRS Information Form
      </Typography>

      <TextField
        fullWidth
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Date of Birth"
        type="date"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Social Security Number (SSN)"
        name="ssn"
        value={formData.ssn}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Employer Name"
        name="employerName"
        value={formData.employerName}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Position Title"
        name="positionTitle"
        value={formData.positionTitle}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Start Date of Employment"
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Annual Salary"
        type="number"
        name="salary"
        value={formData.salary}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Contribution Rate (%)"
        type="number"
        name="contributionRate"
        value={formData.contributionRate}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Years of Service"
        type="number"
        name="yearsOfService"
        value={formData.yearsOfService}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Accumulated Service Credits"
        type="number"
        name="accumulatedServiceCredits"
        value={formData.accumulatedServiceCredits}
        onChange={handleChange}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Retirement Eligibility Date"
        type="date"
        name="retirementEligibilityDate"
        value={formData.retirementEligibilityDate}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
        margin="normal"
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Retirement Payment Plan</InputLabel>
        <Select
          name="paymentPlan"
          value={formData.paymentPlan}
          onChange={handleChange}
        >
          <MenuItem value="standard">Standard Lifetime</MenuItem>
          <MenuItem value="joint-survivor">Joint-and-Survivor</MenuItem>
          <MenuItem value="period-certain">Period-Certain</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        label="Beneficiary Name"
        name="beneficiary"
        value={formData.beneficiary}
        onChange={handleChange}
        margin="normal"
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Health Coverage</InputLabel>
        <Select
          name="healthCoverage"
          value={formData.healthCoverage}
          onChange={handleChange}
        >
          <MenuItem value="basic">TRS-Care Basic</MenuItem>
          <MenuItem value="enhanced">TRS-Care Enhanced</MenuItem>
        </Select>
      </FormControl>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default TRSForm;
