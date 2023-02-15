import React from "react";
import { useSelector } from "react-redux";
import PageNotFound from "../components/common/pageNotFound";
import AdminBlock from "../components/ui/adminBlock";
import { getCurrentUserData } from "../store/users";
import Loader from "../components/common/loader";

const Admin = () => {
  const currentUser = useSelector(getCurrentUserData());
  return (currentUser ? (
    currentUser.admin ? <AdminBlock /> : <PageNotFound />
  ) : <Loader/>
);
};
export default Admin;
