import { notification } from "antd";

const CODE_MESSAGE = {
  200: "Thực hiện thành công!",
  400: "Đã có lỗi xảy ra vui lòng thử lại.",
  500: "Server đang bị lỗi. ",
};

export function handleStatus(status) {
  const notiText = CODE_MESSAGE[status];
  if (status === 200) {
    notification.success({
      description: notiText,
    });
  } else {
    notification.error({
      description: notiText,
    });
  }
}
