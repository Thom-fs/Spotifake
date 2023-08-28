import DashboardHeader from "../../Components/Private/DashboardHeader";
import {Outlet} from "react-router-dom";

export default function Dashboard() {

  return (
    <div className="h-[100vh] max-w-[100vw]">
      <DashboardHeader
        children={
        <Outlet/>
        }
      />
    </div>
  );
}
