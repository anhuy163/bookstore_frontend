import ProfileContainer from "../../src/containers/Profile";
import LayoutContainer from "../../src/containers/Layout";
import MyBreadcrumb from "../../src/components/MyBreadcrumb";
import { BREADCRUMB_NAME_MAPPING, PROFILE_PATH } from "../../src/constants";

export default function ProfilePage() {
  return (
    <LayoutContainer title='Hồ sơ cá nhân'>
      {/* <MyBreadcrumb /> */}
      <ProfileContainer />
    </LayoutContainer>
  );
}
