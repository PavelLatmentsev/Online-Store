import React from "react";
import { useSelector } from "react-redux";
import PageNotFound from "../components/common/pageNotFound";
import AdminBlock from "../components/ui/adminBlock";
import { getCurrentUserData } from "../store/users";

const Admin = () => {
  const currentUser = useSelector(getCurrentUserData());
  return (
  <>
  {currentUser.admin ? <AdminBlock /> : <PageNotFound />}
  </>);
};
export default Admin;
