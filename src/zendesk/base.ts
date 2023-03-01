import { pathParamsUrl, queryParamsUrl } from '../utils';
import { PayloadRequest } from './types';

export class ZendeskClientBase {
  private _client: any;
  private _appLocation: string;
  private _appSettings: object;
  private _ticketId: string;

  constructor(client: any) {
    this._client = client;
  }

  get appLocation() {
    return this._appLocation;
  }

  get appSettings() {
    return this._appSettings;
  }

  get ticketId() {
    return this._ticketId;
  }

  get client() {
    return this._client;
  }

  appOnRegister(callback: any) {
    return this.client.on('app.registered', async (data) => {
      this._appLocation = data.context.location;
      this._appSettings = data.metadata.settings;
      this._ticketId = data.context.ticketId;
      return callback(data);
    });
  }

  appOnActivate(callback: any) {
    return this.client.on('app.activated', async () => {
      return callback();
    });
  }

  onRequesterChange(callback: any) {
    return this.client.on('ticket.requester.changed', async (data) => {
      return callback('requesterId', data);
    });
  }

  onBrandChange(callback: any) {
    return this.client.on('ticket.brand.changed', async (data) => {
      return callback('brandId', data);
    });
  }

  onTicketSave(callback: any) {
    return this.client.on('ticket.save', async (data) => {
      return callback(data ? data.ticket : {});
    });
  }

  onStatusChange(callback: any) {
    return this.client.on('ticket.status.changed', async (data) => {
      return callback(data);
    });
  }

  /**
   * Notify user that something happened
   * Usually after taking some action
   * @param {string} message
   * @param {string} type
   * @param {number} durationInMs
   */
  notifyUser(message, type = 'error', durationInMs = 5000) {
    this.client.invoke('notify', message, type, durationInMs);
  }

  /**
   * It sets the frame height using on the passed value.
   * If no value has been passed, 80 will be set as default heigth.
   * @param {Int} newHeight
   */
  resizeFrame(appHeight = 80) {
    appHeight = appHeight + 120;
    this.client.invoke('resize', { width: '100%', height: `${appHeight}px` });
  }

  /**
   * Calls ZAF Client.request()
   * @returns {Promise}
   */
  async makeRequest(payload: PayloadRequest) {
    if (payload.pathParams)
      payload.url = pathParamsUrl(payload.url, payload.pathParams);

    if (payload.params)
      payload.url = queryParamsUrl(payload.url, payload.params);

    return await this.client.request({
      payload,
      secure: this._appLocation['IS_PRODUCTION'],
      contentType: 'application/x-www-form-urlencoded'
    });
  }

  async invoke(param1, param2, param3) {
    return await this.client.invoke(param1, param2, param3);
  }

  /**
   * Calls ZAF Client.get()
   * @param {String} getter
   */
  async get(getter) {
    return (await this.client.get(getter))[getter];
  }

  /**
   * Performs ZAFClient.set()
   * @param {String} param
   * @param {data} data
   */
  async set(param, data) {
    return await this.client.set(param, data);
  }

  /**
   * Performs ZAFClient.trigger()
   * @param {String} param
   * @param {data} data
   */
  async trigger(param, data) {
    return await this.client.trigger(param, data);
  }

  /**
   *
   * @param {String} param
   * @param {data} data
   * @returns {Promise<*>}
   */
  async on(param, data) {
    return await this.client.on(param, data);
  }
}
