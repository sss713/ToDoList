import "./index.sass";
import { withProviders } from "./providers";
import { Routing } from "../pages";
import { useDispatch } from "react-redux";
import { auth } from "entities/User/model/user";
import { useEffect } from "react";

const App = () => {
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(auth());
  }, []);
  return <Routing />;
};

export default withProviders(App);
