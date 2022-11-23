import ProfileContainer from "../../src/containers/Profile";
import LayoutContainer from "../../src/containers/Layout";
import MyBreadcrumb from "../../src/components/MyBreadcrumb";
import {
  BREADCRUMB_NAME_MAPPING,
  HOME_PATH,
  PROFILE_PATH,
} from "../../src/constants";
import { useEffect } from "react";
import Error from "next/error";

export default function ProfilePage() {
  return !!(
    typeof window !== "undefined" && localStorage.getItem("currentUser")
  ) ? (
    <LayoutContainer title='Hồ sơ cá nhân'>
      {/* <MyBreadcrumb /> */}
      <ProfileContainer />
    </LayoutContainer>
  ) : (
    <Error statusCode={404} />
  );
}
