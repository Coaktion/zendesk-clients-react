export class PayloadRequest {
  url: string;
  method: string;
  pathParams?: object;
  params?: object;
  data?: object;
  options?: object = {};
  headers?: object = {
    'Content-Type': 'application/json'
  };
}

export type ModalProps = {
  modalName: string;
  modalUrl: string;
  size: {
    width: string;
    height: string;
  };
};
