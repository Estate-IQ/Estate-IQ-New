import Chart from "../../components/chart/Chart";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { userData } from "../../assets/json/Dummydata";
import countries from "../../assets/json/Dummydata";

export default function Home() {
  return (
    <div className="home">
      <Chart
        data={userData}
        title="User Analytics"
        grid
        FreePlan="Free Plan"
        EssentialPlan="Essential"
        Standard="Standard"
        Premium="Premium"
      />

      <Autocomplete
        id=""
        freeSolo
        options={countries.map((option) => option.label)}
        renderInput={(params) => <TextField {...params} placeholder="Search" />}
      />
    </div>
  );
}
