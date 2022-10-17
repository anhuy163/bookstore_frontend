import { Breadcrumb } from "antd";
import { BREADCRUMB_NAME_MAPPING, HOME_PATH } from "../../constants";

export default function MyBreadcrumb({ path }) {
  console.log(path);

  return (
    <Breadcrumb style={{ padding: "10px 0" }}>
      <Breadcrumb.Item href={HOME_PATH}>
        {BREADCRUMB_NAME_MAPPING[HOME_PATH]}
      </Breadcrumb.Item>
      {!!path && (
        <Breadcrumb.Item href={path}>
          {BREADCRUMB_NAME_MAPPING[path]}
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}
