import { FormProvider } from "../context/FormContext";
import ProgressBar from "./ProgressBar";
import { Outlet } from "react-router-dom";

function MatriculaLayout() {
  return (
    <FormProvider>
      <div className="container mt-5">
        <div className="row">
          <div>
            <ProgressBar />
            <Outlet />
          </div>
        </div>
      </div>
    </FormProvider>
  );
}

export default MatriculaLayout;
