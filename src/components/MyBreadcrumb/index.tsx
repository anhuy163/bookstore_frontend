import { Breadcrumb } from "antd";
import { BREADCRUMB_NAME_MAPPING, HOME_PATH } from "../../constants";
import { useRouter } from "next/router";

export default function MyBreadcrumb({ paths = [] }) {
  const router = useRouter();
  const pathNames = router.asPath.split("/");
  console.log(pathNames);

  return (
    <Breadcrumb style={{ padding: "10px 0" }}>
      {pathNames?.map((path, index) => {
        return (
          <Breadcrumb.Item key={index}>
            {BREADCRUMB_NAME_MAPPING["/" + path]
              ? BREADCRUMB_NAME_MAPPING["/" + path]
              : path}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
}
