export class PayloadRequest {
  url: string;
  method: string;
  pathParams?: object;
  queryParams?: object;
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

export type GetMacrosListParams = {
  pageSize: number;
  cursor?: string;
};
